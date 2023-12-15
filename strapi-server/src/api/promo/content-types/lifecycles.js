let orderLinesWithPrices = [];

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = {
    async beforeCreate(event) {
        const { result, params } = event;
        const percentOff = params.data.percentOff || 0;
        const promoCode = await stripe.coupons.create({
            percent_off: percentOff,
        });
        params.data.promoId = promoCode.id
    },
};
