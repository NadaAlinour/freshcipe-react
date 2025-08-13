import prisma from "../prisma.js";

async function getRecipes() {
  try {
    return await prisma.recipe.findMany({
      orderBy: { title: "asc" },
    });
  } catch (err) {
    console.error("Error in fetching recipes service: ", err);
    throw new Error("Failed to fetch recipes");
  }
}

export { getRecipes };
