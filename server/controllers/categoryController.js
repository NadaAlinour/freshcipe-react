import * as categoryService from "../services/categoryService.js";

export async function getCategories(req, res) {
  try {
    const categories = await categoryService.getCategories();
    res.status(200).json({ categories });
  } catch (err) {
    console.error("Error in fetching categories controller: ", err);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
}
