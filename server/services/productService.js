import prisma from "../prisma.js";

async function getProducts() {
  try {
    return await prisma.product.findMany({
      orderBy: { title: "asc" },
    });
  } catch (err) {
    console.error("Error in fetching products service: ", err);
    throw new Error("Failed to fetch products");
  }
}

async function getProductsByCategory(categoryId) {
  try {
    return await prisma.product.findMany({
      where: { categoryId: categoryId },
      orderBy: { title: "asc" },
    });
  } catch (err) {
    console.error("Error in fetching products by category service: ", err);
    throw new Error("Failed to fetch products by category");
  }
}

export { getProducts, getProductsByCategory };
