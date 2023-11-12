let orderLinesWithPrices = [];

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = {
  async beforeCreate(event) {
    const { result, params } = event;
    let total = 0;
    const orderLines = params.data.items || [];

    const products = await strapi.db.query('api::product.product').findMany({ id_in: orderLines.map((item) => item.product) })

    orderLinesWithPrices = orderLines.map((item) => {
      const product = products.find((p) => p.id === item.product);
      total += product.price * item.quantity;
      return {
        ...item,
        title: product.title,
        price: product.price,
      }
    })
    params.data.grandTotal = total;
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      allow_promotion_codes: true,
      success_url: 'http://localhost:3000/success',
      line_items: orderLinesWithPrices.map((item) => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        }
      })
    })
    params.data.checkoutLink = session.url
  },
  async afterCreate(event) {
    const { result, params } = event;

    orderLinesWithPrices.forEach(async (line) => {
      await strapi.db.query('api::order-item.order-item').create({
        data: {
          order: result.id,
          product: line.product,
          quantity: line.quantity,
          price: line.price * line.quantity,
        }
      })
    });

    console.log('orderLinesWithPrices', orderLinesWithPrices);
  },
};
