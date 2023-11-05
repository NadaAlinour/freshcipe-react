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

// get user info
export async function fetchUserInfo(user, token) {
  const response = await axios.get(
    "http://localhost:1337/api/users/me?populate[0]=cart",
    user,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
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

// send password reset link
export async function sendPasswordResetLink(formData) {
  const data = {
    email: formData,
  };
  const response = await axios.post(
    "http://localhost:1337/api/auth/forgot-password",
    data
  );
  return response.data;
}

// reset password
/*{
    "code": "", // code contained in the reset link of step 3.
    "password": "NEW PASS",
    "passwordConfirmation": "NEW PASS"
}*/
export async function resetPassword(formData) {
  const response = await axios.post(
    "http://localhost:1337/api/auth/reset-password",
    formData
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
export async function fetchVendorCatsProducts(categoryId, page, pageSize) {
  const response = await axios.get(
    `http://localhost:1337/api/products?populate[0]=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[tags][id][$eq]=` +
      categoryId
  );
  return response.data;
}

// get all products
export async function fetchAllProducts(page, pageSize) {
  const response = await axios.get(
    `http://localhost:1337/api/products?populate[0]=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );
  return response.data;
}

// get product in productDetails page
export async function fetchProduct(productId) {
  const response = await axios.get(
    "http://localhost:1337/api/products?populate[0]=image&filters[id][$eq]=" +
      productId
  );
  return response.data;
}

// get recipe tags
export async function fetchRecipeTags() {
  const response = await axios.get("http://localhost:1337/api/recipe-tags");
  return response.data;
}

// get recipes
export async function fetchRecipes(page, pageSize) {
  const response = await axios.get(
    `http://localhost:1337/api/recipes?populate[0]=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );
  return response.data;
}

// get recipes by recipe tag
export async function fetchRecipesByTag(tagId) {
  const response = await axios.get(
    "http://localhost:1337/api/recipes?populate[0]=image&filters[recipe_tags][id][$eq]=" +
      tagId
  );
  return response.data;
}

// get recipe by id
export async function fetchRecipe(recipeId) {
  const response = await axios.get(
    "http://localhost:1337/api/recipes?populate[0]=image&filters[id][$eq]=" +
      recipeId
  );
  return response.data;
}

// get favourites by id
export async function fetchFavourites(favouritesId) {
  const response = await axios.get(
    "http://localhost:1337/api/favourites?populate[0]=recipes&filters[id][$eq]=" +
      favouritesId
  );
  return response.data;
}

// update favourite
export async function updateFavourites(data) {
  /* {
    "data": {
      "recipes": 16
      }
   
  }*/
  const response = await axios.put(
    "http://localhost:1337/api/favourites" + favouriteId,
    data
  );
  return response.data;
}

// delete from favourite

// Create Cart
export async function createCart(userId, token) {
  const data = {
    data: { user: userId },
  };
  const response = await axios.post(`${BASE_URL}/carts`, data, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

// Get Cart with Items
export async function getCartWithItems(userId, token) {
  const response = await axios.get(
    `${BASE_URL}/carts?populate[0]=cart_items&populate[1]=cart_items.product&filters[user][id][$eq]=${userId}`,
    { method: "GET", headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
}

// Delete Cart Item
export async function deleteCartItem(cartItemId, token) {
  const response = await axios.delete(`${BASE_URL}/cart-items/${cartItemId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

// Add Items to Cart
export async function addItemsToCart(cartItemData, token) {
  const response = await axios.post(`${BASE_URL}/cart-items`, cartItemData, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
