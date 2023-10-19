import ProductCategory from "../../models/product-category";
import Product from "../../models/product";

export const PRODUCT_CATEGORIES = [
  new ProductCategory(
    "pc1",
    "/src/assets/images/categories/fruits-vegetables.jpg",
    "Fruits and vegetables"
  ),
  new ProductCategory(
    "pc2",
    "/src/assets/images/categories/meat.jpg",
    "Meat, chicken and fish"
  ),
  new ProductCategory(
    "pc3",
    "/src/assets/images/categories/baked-goods.jpg",
   
    "Baked goods and pastries"
  ),
  new ProductCategory(
    "pc4",
    "/src/assets/images/categories/drinks.jpg",

    "Drinks, coffee and tea"
  ),
  new ProductCategory(
    "pc5",
    "/src/assets/images/categories/snacks.jpg",

    "Snacks"
  ),
  new ProductCategory(
    "pc6",
    "/src/assets/images/categories/dairy.jpg",

    "Dairy"
  ),
  new ProductCategory(
    "pc7",
    "/src/assets/images/categories/oil.jpg",
    "Spices, oil and sauces"
  ),

  
];

export const PRODUCTS = [
  new Product(
    "p1",
    "Red delicious",
    "/src/assets/images/products/red-apple-product.png",
    "apple product description temp for now",
    "3.19",
    "500g",
    "pc1"
  ),

  new Product(
    "p5",
    "Banana pack",
    "/src/assets/images/products/bananas-product.png",
    "apple number deux",
    "5.99",
    "1 kg",
    "pc1"
  ),

  new Product(
    "p6",
    "cucumber",
    "/src/assets/images/products/cucumber.png",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p7",
    "tomato",
    "/src/assets/images/products/tomato-product.png",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p8",
    "Red bell peppers",
    "/src/assets/images/products/bell-pepper-red.png",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p9",
    "grapes",
    "/src/assets/images/products/grapes.png",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p10",
    "Golden crips apples",
    "/src/assets/images/products/apple-golden.png",
    "apple product description temp for now",
    "3.55",
    "200",
    "pc1"
  ),


  new Product(
    "p14",
    "Yellow bell peppers",
    "/src/assets/images/products/bell-pepper-yellow.png",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),


  new Product(
    "p2",
    "salmon",
    "/src/assets/images/products/salmon.png",
    "salmon product description temp for now",
    "20.99",
    "200",

    "pc2"
  ),

  new Product(
    "p3",
    "croissant",
    "/src/assets/images/products/croissant.png",
    "croissant product description temp for now",
    "5.99",
    "200",

    "pc3"
  ),

  new Product(
    "p4",
    "orange juice",
    "/src/assets/images/products/suntop-juice.png",
    "orange juice description sklfjalkfjs",
    "4.55",
    "200",

    "pc4"
  ),

  new Product(
    "p5",
    "Chips",
    "/src/assets/images/products/chips.png",
    "chips description sklfjalkfjs",
    "2.99",
    "200",

    "pc5"
  ),

  new Product(
    'p16',
    'Egg carton',
    '/src/assets/images/products/egg-carton.png',
    'egg descripsh',
    '12.99',
    '6 per carton',
    'pc6'
  )
];
