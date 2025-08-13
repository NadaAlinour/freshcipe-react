import prisma from "../prisma.js";

async function getCategories() {
  try {
    return await prisma.category.findMany({
      orderBy: { title: "asc" },
    });
  } catch (err) {
    console.error("Error in fetching categories service: ", err);
    throw new Error("Failed to fetch categories");
  }
}

export { getCategories };
