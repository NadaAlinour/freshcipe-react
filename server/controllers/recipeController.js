import * as recipeService from "../services/recipeService.js";

export async function getRecipes(req, res) {
  try {
    const recipes = await recipeService.getRecipes();
    res.status(200).json({ recipes });
  } catch (err) {
    console.error("Error in fetching recipes controller: ", err);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
}
