import * as productService from "../services/productService.js";

export async function getProducts(req, res) {
  try {
    const products = await productService.getProducts();
    res.status(200).json({ products });
  } catch (err) {
    console.error("Error in fetching products controller: ", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
