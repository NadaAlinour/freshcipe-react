import axios from "axios";

const BASE_URL = "http://localhost:1337/api";

// signup
export async function signup(userData) {
  const response = await axios.post(
    "http://localhost:1337/api/auth/local/register",
    userData
  );
  return response.data;
}

// login
export async function login(userData) {
  const response = await axios.post(
    "http://localhost:1337/api/auth/local",
    userData
  );
  return response.data;
}

// contact
export async function contact(formData) {
  const data = {
    data: {
      ...formData,
    },
  };
  console.log(data);
  const response = await axios.post(
    "http://localhost:1337/api/contact-forms",
    data
  );
  return response.data;
}

// get vendors
export async function fetchVendors() {
  const response = await axios.get(
    "http://localhost:1337/api/users?populate[0]=role&populate[1]=image&filters[role][name][$containsi]=vendor"
  );
  return response.data;
}

// get categories by vendor
export async function fetchVendorCats(vendorId) {
  const response = await axios.get(
    "http://localhost:1337/api/tags?populate[0]=image&filters[vendor][id][$eq]=" +
      vendorId
  );
  return response.data;
}

// get products by category by vendor
export async function fetchVendorCatsProducts(categoryId) {
  const response = await axios.get(
    "http://localhost:1337/api/products?populate[0]=image&filters[tags][id][$eq]=" +
      categoryId
  );
  return response.data;
}

// get all products
export async function fetchAllProducts() {
  const response = await axios.get(
    "http://localhost:1337/api/products?populate[0]=image"
  ); //check
  return response.data;
}

// get recipe tags
export async function fetchRecipeTags() {
  const response = await axios.get("http://localhost:1337/api/recipe-tags");
  return response.data;
}

// get recipes
export async function fetchRecipes() {
  const response = await axios.get(
    "http://localhost:1337/api/recipes?populate[0]=image"
  );
  return response.data;
}

// get recipes by recipe tag
export async function fetchRecipesByTag(tagId) {
  const response = await axios.get(
    "http://localhost:1337/api/recipes?filters[recipe_tags][id][$eq]=" + tagId
  );
  return response.data;
}

// get recipe by id
export async function fetchRecipe(recipeId) {
  const response = await axios.get(
    "http://localhost:1337/api/recipes?populate[0]=image&filters[id][$eq]=" + recipeId
  );
  return response.data;
}

// Create Cart
export async function createCart() {
  const response = await axios.post(
    "http://localhost:1337/api/carts" +carts
    );
  return response.data;
}

// Get Cart with Items
export async function getCartWithItems(userId) {
  const response = await axios.get(
   "http://localhost:1337/api/carts?populate[0]=cart_items&populate[1]=cart_items.product&filters[user][id][$eq]=22" + userId
  );
  return response.data;
}

// Delete Cart Item
export async function deleteCartItem(cartItemId) {
  const response = await axios.delete(
    "http://localhost:1337/api/cart-items/2" +cartItemId
    );
  return response.data;
}

// Add Items to Cart
export async function addItemsToCart(cartItemData) {
  const response = await axios.post(
    "http://localhost:1337/api/cart-items" +cartItemData
    );
  return response.data;
}