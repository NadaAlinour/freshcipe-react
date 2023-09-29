class Product {
    constructor (id, title, imageUrl, description, price, quantity, productCategory) {
        // also reviews at some point
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.productCategory = productCategory;
    }
}
export default Product;
