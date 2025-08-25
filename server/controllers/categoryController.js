import * as categoryService from "../services/categoryService.js";

export async function getCategories(req, res) {
  try {
    const categories = await categoryService.getCategories();
    res.status(200).json({ categories });
  } catch (err) {
    next(err);
  }
}
