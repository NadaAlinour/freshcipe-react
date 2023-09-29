import ProductCategory from "../../models/product-category";
import Product from "../../models/product";

export const PRODUCT_CATEGORIES = [
  new ProductCategory(
    "pc1",
    "https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?w=2000&t=st=1695860071~exp=1695860671~hmac=8da0833cf5dfae46618f8adad2737360b3edb3678a0465d5c425aaf4a7688303",
    "Fruits and vegetables"
  ),
  new ProductCategory(
    "pc2",
    "https://img.freepik.com/premium-photo/different-types-turkey-meat-chicken-steaks-carcass-poultry-cooking-top-view-wooden-board-isolated-flat-lay-cooking-concept_95685-5.jpg?size=626&ext=jpg",
    "Meat, chicken and fish"
  ),
  new ProductCategory(
    "pc3",
    "https://img.freepik.com/free-photo/sweet-pastry-assortment-top-view_23-2148516578.jpg?w=2000&t=st=1695860199~exp=1695860799~hmac=0fff02a5194bbe5fab96f48feae4b79e5c934f2eb10064b9a0eacfbb7ba709f2",
    "Baked goods and pastries"
  ),
  new ProductCategory(
    "pc4",
    "https://img.freepik.com/free-photo/front-close-view-organic-fresh-juices-bottles-served-with-tubes-fruits-wooden-cutting-board-brown-table_140725-94487.jpg?w=2000&t=st=1695860228~exp=1695860828~hmac=766dc5a29e46a686a13c16d9eee9a54d3639a2f6cdf8c5c2497fc0fad1a0a9e7",
    "Drinks, coffee and tea"
  ),
  new ProductCategory(
    "pc5",
    "https://img.freepik.com/free-photo/assortment-unhealthy-snacks_114579-14272.jpg?w=2000&t=st=1695860317~exp=1695860917~hmac=45c9ff1d56f1ca69a3bbf8e25b839926da9433b4b373f024752ec3c0f2979784",
    "Snacks"
  ),
  new ProductCategory(
    "pc6",
    "https://img.freepik.com/free-photo/top-view-organic-eggs-fresh-milk-with-copy-space_23-2148610582.jpg?w=2000&t=st=1695860028~exp=1695860628~hmac=3ecebbcdbd5d1875ae7983a3fe26fde2a8320bf1b0ceaa41090d575e7510ead3",
    "Dairy"
  ),
  new ProductCategory(
    "pc7",
    "https://img.freepik.com/free-photo/high-angle-asian-food-ingredients-with-copy-space_23-2148377383.jpg?w=2000&t=st=1695860388~exp=1695860988~hmac=3bcb8913092ca6e712017c2d597707a0bcadf26867e23aa30242a3bed6b3a00e",
    "Spices, oil and sauces"
  ),

  new ProductCategory(
    "pc8",
    "https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?w=2000&t=st=1695860071~exp=1695860671~hmac=8da0833cf5dfae46618f8adad2737360b3edb3678a0465d5c425aaf4a7688303",
    "Fruits and vegetables"
  ),
  new ProductCategory(
    "pc9",
    "https://img.freepik.com/premium-photo/different-types-turkey-meat-chicken-steaks-carcass-poultry-cooking-top-view-wooden-board-isolated-flat-lay-cooking-concept_95685-5.jpg?size=626&ext=jpg",
    "Meat, chicken and fish"
  ),
  new ProductCategory(
    "pc10",
    "https://img.freepik.com/free-photo/sweet-pastry-assortment-top-view_23-2148516578.jpg?w=2000&t=st=1695860199~exp=1695860799~hmac=0fff02a5194bbe5fab96f48feae4b79e5c934f2eb10064b9a0eacfbb7ba709f2",
    "Baked goods and pastries"
  ),
  new ProductCategory(
    "pc11",
    "https://img.freepik.com/free-photo/front-close-view-organic-fresh-juices-bottles-served-with-tubes-fruits-wooden-cutting-board-brown-table_140725-94487.jpg?w=2000&t=st=1695860228~exp=1695860828~hmac=766dc5a29e46a686a13c16d9eee9a54d3639a2f6cdf8c5c2497fc0fad1a0a9e7",
    "Drinks, coffee and tea"
  ),
  new ProductCategory(
    "pc12",
    "https://img.freepik.com/free-photo/assortment-unhealthy-snacks_114579-14272.jpg?w=2000&t=st=1695860317~exp=1695860917~hmac=45c9ff1d56f1ca69a3bbf8e25b839926da9433b4b373f024752ec3c0f2979784",
    "Snacks"
  ),
];

export const PRODUCTS = [
  new Product(
    "p1",
    "apple",
    "https://img.freepik.com/free-photo/red-apple-with-green-leaf-white-background_1232-3290.jpg?2&w=2000&t=st=1695864963~exp=1695865563~hmac=bc3dcf4882ad5e8a9fc0e7116cc05ef8c6451ceb7ecc911dbca386bdf93fff77",
    "apple product description temp for now",
    "3.55",
    "200",
    "pc1"
  ),

  new Product(
    "p5",
    "banana",
    "https://img.freepik.com/free-photo/single-banana-isolated-white-background_839833-17794.jpg?w=2000&t=st=1695927637~exp=1695928237~hmac=7842355a2d062382efcd2c35101f80650572a7e15ca0d7dae9be2613096199b1",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p6",
    "cucumber",
    "https://img.freepik.com/free-photo/green-cucumber_144627-21625.jpg?w=2000&t=st=1695927673~exp=1695928273~hmac=113b5255409c2570934d4de88a10753e117ccf4a61e8557b22172efdb37b4e0e",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p7",
    "tomato",
    "https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?w=1480&t=st=1695928186~exp=1695928786~hmac=e1b727cde5bfe082a7f1f2cebed7ab863b7cd6b2bcb87f6902918a53734c8afb",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p8",
    "bell peppers",
    "https://img.freepik.com/free-photo/bell-pepper_1339-1594.jpg?w=2000&t=st=1695927825~exp=1695928425~hmac=2ba78653f1ad589d23a381803516f66fc188553782b9e78bcbcaa60940a103e5",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p9",
    "grapes",
    "https://img.freepik.com/free-photo/close-up-bunch-grapes_1149-761.jpg?w=1480&t=st=1695927945~exp=1695928545~hmac=8853a7a2b7df1c474dd2ef73623f369ccb693f14cdab9ae2406437a40e88752a",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p10",
    "apple",
    "https://img.freepik.com/free-photo/red-apple-with-green-leaf-white-background_1232-3290.jpg?2&w=2000&t=st=1695864963~exp=1695865563~hmac=bc3dcf4882ad5e8a9fc0e7116cc05ef8c6451ceb7ecc911dbca386bdf93fff77",
    "apple product description temp for now",
    "3.55",
    "200",
    "pc1"
  ),

  new Product(
    "p11",
    "banana",
    "https://img.freepik.com/free-photo/single-banana-isolated-white-background_839833-17794.jpg?w=2000&t=st=1695927637~exp=1695928237~hmac=7842355a2d062382efcd2c35101f80650572a7e15ca0d7dae9be2613096199b1",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p12",
    "cucumber",
    "https://img.freepik.com/free-photo/green-cucumber_144627-21625.jpg?w=2000&t=st=1695927673~exp=1695928273~hmac=113b5255409c2570934d4de88a10753e117ccf4a61e8557b22172efdb37b4e0e",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p13",
    "tomato",
    "https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?w=1480&t=st=1695928186~exp=1695928786~hmac=e1b727cde5bfe082a7f1f2cebed7ab863b7cd6b2bcb87f6902918a53734c8afb",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p14",
    "bell peppers",
    "https://img.freepik.com/free-photo/bell-pepper_1339-1594.jpg?w=2000&t=st=1695927825~exp=1695928425~hmac=2ba78653f1ad589d23a381803516f66fc188553782b9e78bcbcaa60940a103e5",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p15",
    "grapes",
    "https://img.freepik.com/free-photo/close-up-bunch-grapes_1149-761.jpg?w=1480&t=st=1695927945~exp=1695928545~hmac=8853a7a2b7df1c474dd2ef73623f369ccb693f14cdab9ae2406437a40e88752a",
    "apple number deux",
    "3.55",
    "200",

    "pc1"
  ),

  new Product(
    "p2",
    "salmon",
    "https://img.freepik.com/free-photo/raw-salmon_144627-33848.jpg?w=2000&t=st=1695865095~exp=1695865695~hmac=f2ff4a7472bb3cccc83997c784b1bc0cd6f63ca8bdd0d2ae78d11b96fe11fdd8",
    "salmon product description temp for now",
    "20.99",
    "200",

    "pc2"
  ),

  new Product(
    "p3",
    "croissant",
    "https://img.freepik.com/premium-psd/croissant-alpha-layer_253984-8523.jpg?w=2000",
    "croissant product description temp for now",
    "5.99",
    "200",

    "pc3"
  ),

  new Product(
    "p4",
    "orange juice",
    "https://img.freepik.com/premium-photo/glass-orange-juice-oranges_159938-2735.jpg?w=996",
    "orange juice description sklfjalkfjs",
    "4.55",
    "200",

    "pc4"
  ),

  new Product(
    "p5",
    "chips",
    "https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/u/n/unnamed_2_.png",
    "chips description sklfjalkfjs",
    "2.99",
    "200",

    "pc5"
  ),
];
