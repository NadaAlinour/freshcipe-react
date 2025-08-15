import * as productService from "../services/productService.js";

export async function getProducts(req, res) {
  try {
    let products;
    const { categoryId } = req.query;
    if (categoryId) {
      // fetch products by category id
      products = await productService.getProductsByCategory(parseInt(categoryId));
    } else {
      products = await productService.getProducts();
    }
    res.status(200).json({ products });
  } catch (err) {
    console.error("Error in fetching products controller: ", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
