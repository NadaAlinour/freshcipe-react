import axios from "axios";

const BASE_URL = "http://localhost:1337/api";

// signup
export async function signup(userData) {
  console.log(userData);
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
  console.log(user);
  console.log(token);
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
export async function fetchVendor() {
  const response = await axios.get(
    "http://localhost:1337/api/users?populate[0]=role&populate[1]=image&populate[2]=tags&populate[3]=tags.image&populate[4]=tags.products&filters[role][name][$containsi]=vendor"
  );
  return response.data;
}

// get cats subcats
export async function fetchSubCats(catId) {
  const response = await axios.get(
    "http://localhost:1337/api/sub-tags?filters[tag][id][$eq]=" + catId
  );
  return response.data;
}

// get categories by vendor
/*export async function fetchVendorCats(vendorId) {
  const response = await axios.get(
    "http://localhost:1337/api/tags?populate[0]=image&filters[vendor][id][$eq]=" +
      vendorId
  );
  return response.data;
}*/

// get products by category by vendor
export async function fetchVendorCatsProducts(categoryId, page, pageSize) {
  const response = await axios.get(
    `http://localhost:1337/api/products?sort=title:asc&populate[0]=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[tags][id][$eq]=` +
      categoryId
  );
  console.log("page from http req: ", page);
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
    `http://localhost:1337/api/recipes?sort=title:asc&populate[0]=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );
  return response.data;
}

// get recipes by recipe tag
export async function fetchRecipesByTag(tagId, page, pageSize) {
  console.log('PAGE FROM HTTP.JS: ', page);
  const response = await axios.get(
    `http://localhost:1337/api/recipes?sort=title:asc&populate[0]=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[recipe_tags][id][$eq]=${tagId}`
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
/*export async function fetchFavourites(favouritesId) {
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
   
  }
  const response = await axios.put(
    "http://localhost:1337/api/favourites" + favouriteId,
    data
  );
  return response.data;
}
*/
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
    `${BASE_URL}/carts?populate[0]=cart_items&populate[1]=cart_items.product&populate[2]=cart_items.product.image&filters[user][id][$eq]=${userId}`,
    { method: "GET", headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
}

// Delete Cart Item
/*export async function deleteCartItem(cartItemId, token) {
  const response = await axios.delete(`${BASE_URL}/cart-items/${cartItemId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}*/

// Add Items to Cart
/*{
    "data": {
        "product": 12,
        "quantity": 2,
        "cart": 1
    }
}*/
export async function addItemToCart(cartItemData, token) {
  const response = await axios.post(
    `${BASE_URL}/cart-items?populate[0]=product&populate[1]=product.image`,
    cartItemData,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
}

// delete item from cart
export async function deleteCartItem(cartId, itemId, token) {
  const response = await axios.delete(
    `${BASE_URL}/cart-items/${itemId}?cart=${cartId}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
}

/*export async function deleteAllCartItems(cartId, token) {
  const response = await axios.delete(
    `${BASE_URL}/cart-items/${cartId}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
}*/

// create favourite
export async function createFavourites(userId, token) {
  const data = {
    data: {
      user: userId,
    },
  };
  const response = await axios.post(`${BASE_URL}/favourites`, data, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

// get user's favourite items
export async function fetchFavourites(userId, token) {
  const response = await axios.get(
    `${BASE_URL}/favourites?populate[0]=recipes&populate[1]=recipes.image&filters[user][id][$eq]=${userId}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
}

// update user's favourite items
// update includes deleting something from the favourites array
// items is an array of favourite items stored in global state
export async function updateFavourites(favouritesId, token, items) {
  console.log("items: ", items);
  const data = {
    data: {
      recipes: items,
    },
  };
  console.log("data: ", data);
  const response = await axios.put(
    `${BASE_URL}/favourites/${favouritesId}`,
    data,
    {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
}

// get user info
export async function fetchUser(token, userId) {
  const response = await axios.get(
    `${BASE_URL}/users?populate[0]=image&filters[id]=${userId}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
}

// search
export async function searchProducts(searchText, page, pageSize) {
  const response = await axios.get(
    `${BASE_URL}/products?populate[0]=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[title][$containsi]=${searchText}`
  );
  return response.data;
}

// get products by subtag (concatenate later)
export async function filterProducts(searchText) {
  const response = await axios.get(
    `${BASE_URL}/sub-tags?populate[0]=products&populate[1]=products.image&filters[title][$containsi]=${searchText}`
  );
  return response.data;
}
