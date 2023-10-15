import Recipe from "../../models/recipe";
import RecipeCategory from "../../models/recipe-category";

export const RECIPE_CATEGORIES = [
  new RecipeCategory(
    "rc1",
    "Vegetarian"
  ),
  new RecipeCategory(
    "rc2",
    "Vegan"
  ),
  new RecipeCategory(
    "rc3",
    "Dessert"
  ),
  new RecipeCategory(
    "rc4",
    "Quick and Easy"
  ),
  new RecipeCategory(
    "rc5",
    "Dinner"
  ),
  new RecipeCategory(
    "rc6",
    "Light and Fresh"
  ),
  new RecipeCategory(
    "rc7",
    "Summer"
  ),
  new RecipeCategory(
    "rc8",
    "Comfort"
  ),
  new RecipeCategory(
    "rc9",
    "Fancy"
  ),
  new RecipeCategory(
    "rc10",
    "Main Dish"
  ),
  new RecipeCategory(
    "rc11",
    "Special Occasion"
  ),
]


export const RECIPES = [
  new Recipe(
    "r1",
    "Key Lime Pie",
    "",
    "/src/assets/images/recipeImages/key-lime-pie.png",
    ["rc1", "rc3"],
    60,
    [
      "1 1/2 cups graham cracker crumbs",
      "1/4 cup packed light brown sugar",
      "Kosher salt",
      "6 tbsp. unsalted butter, melted",
      "8 large egg yolks",
      "2 (14-oz.) cans sweetened condensed milk",
      "1 1/4 cups fresh key lime juice (or fresh lime juice)",
      "Unsweeted whipped cream",
      "Key lime or lime slices, for garnish",
    ],
    [
      "Preheat the oven to 350°. In a medium bowl whisk the graham cracker crumbs with the brown sugar and a pinch of salt. Add the melted butter and mix until the crumbs are evenly moistened. To form the crust, press the crumbs evenly over the bottom and up the side of a 10-inch metal pie plate. Bake for about 10 minutes, until just set. Let cool completely.",
      "In a bowl whisk the egg yolks with the condensed milk, lime juice and a pinch of salt until smooth. Pour the filling into the cooled crust and transfer to the oven. Immediately lower the oven to 325°, and bake for 20 to 25 minutes, until set around the edges and slightly jiggly in the center. Let cool to room temperature, then refrigerate until firm, at least 6 hours or overnight.",
      "Mound the whipped cream on the pie, and garnish with key lime slices.",
    ],
    [
      { component: "Energy", value: "425 kcal" },
      { component: "Total Fat", value: "15g" },
      { component: "Saturated Fat", value: "0g" },
      { component: "Dietary Fiber", value: "5g" },
      { component: "Carbohydrates", value: "65g" },
      { component: "Sugars", value: "12g" },
      { component: "Protein", value: "3g" },
    ]
  ),

  new Recipe(
    "r2",
    "Spaghetti Aglio e Olio",
    "Spaghetti aglio e olio description placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
    "/src/assets/images/recipeImages/pasta.png",
    ["rc1", "rc5"],
    25,
    [
      "1 pound uncooked spaghetti",
      "1/2 cup olive oil",
      "6 cloves garlic, thinly sliced",
      "1/4 teaspoon red pepper flakes, or to taste",
      "salt and freshly ground black pepper to taste",
      "1/4 cup chopped fresh Italian parsley",
      "1 cup finely grated Parmigiano-Reggiano cheese",
    ],
    [
      "Bring a large pot of lightly salted water to a boil. Cook spaghetti in the boiling water, stirring occasionally until cooked through but firm to the bite, about 10 to 20 minutes. Drain and transfer to a pasta bowl.",
      "While the pasta is cooking, combine olive oil and garlic in a cold skillet. Cook over medium heat to slowly toast garlic, about 10 minutes. Reduce heat to medium-low when olive oil begins to bubble. Cook and stir until garlic is golden brown, about another 5 minutes. Remove from heat.",
      "Stir red pepper flakes, salt, and black pepper into paste. Pour in hot olive oil and garlic, and sprinkle on Italian parsley and half of the Parmigiano-Reggiano cheese; toss until combined.",
      "Serve pasta topped with the remaining Parmigiano-Reggiano cheese.",
    ],
    [
      { component: "Energy", value: "755 kcal" },
      { component: "Total Fat", value: "35g" },
      { component: "Saturated Fat", value: "8" },
      { component: "Dietary Fiber", value: "4g" },
      { component: "Carbohydrates", value: "87g" },
      { component: "Sugars", value: "3g" },
      { component: "Protein", value: "23g" },
    ]
  ),

  new Recipe(
    "r3",
    "Old-Fashioned Pancakes",
    "old fashioned pancakes description placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
    "/src/assets/images/recipeImages/pancakes.png",
    ["rc1", "rc4"],
    20,
    [
      "1 1/2 cups all-purpose flour",
      "3 1/2 teaspoons baking powder",
      "1 tablespoon white sugar",
      "1/4 teaspoon salt, or more to taste",
      "1 1/4 cups milk",
      "3 tablespoons butter, melted",
      "1 egg",
    ],
    [
      "Sift flour, baking powder, sugar, and salt together in a large bowl. Make a well in the center and add milk, melted butter, and egg; mix until smooth.",
      "Heat a lightly oiled griddle or pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake; cook until bubbles form and the edges are dry, about 2 to 3 minutes. Flip and cook until browned on the other side. Repeat with remaining batter.",
    ],
    [
      { component: "Energy", value: "158 kcal" },
      { component: "Total Fat", value: "6g" },
      { component: "Saturated Fat", value: "3g" },
      { component: "Dietary Fiber", value: "1g" },
      { component: "Carbohydrates", value: "22g" },
      { component: "Sugars", value: "4g" },
      { component: "Protein", value: "5g" },
    ]
  ),

  new Recipe(
    "r4",
    "Greek Salad",
    "greek salad description placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
    "/src/assets/images/recipeImages/greek-salad.png",

    ["rc1", "rc6"],
    50,
    [
      "1 hothouse cucumber, unpeeled, seeded, and sliced 1/4-inch thick",
      "1 red bell pepper, large-diced",
      "1 yellow bell pepper, large-diced",
      "1 pint cherry or grape tomatoes, halved",
      "1/2 red onion, sliced in half-rounds",
      "1/2 pound feta cheese, 1/2-inch diced (not crumbled)",
      "1/2 cup calamata olives, pitted",
      "2 cloves garlic, minced",
      "1 teaspoon dried oregano",
      "1/2 teaspoon Dijon mustard",
      "1/4 cup white vinegar",
      "1 teaspoon kosher salt",
      "1/2 teaspoon freshly ground black pepper",
      "1/2 cup good olive oil",
    ],
    [
      "Place the cucumber, peppers, tomatoes and red onion in a large bowl.",
      "For the vinaigrette, whisk together the garlic, oregano, mustard, vinegar, salt and pepper in a small bowl. Still whisking, slowly add the olive oil to make an emulsion. Pour the vinaigrette over the vegetables. Add the feta and olives and toss lightly. Set aside for 30 minutes to allow the flavors to blend. Serve at room temperature.",
    ],
    [
      { component: "Energy", value: "313 kcal" },
      { component: "Total Fat", value: "28g" },
      { component: "Saturated Fat", value: "8g" },
      { component: "Dietary Fiber", value: "2g" },
      { component: "Carbohydrates", value: "11g" },
      { component: "Sugars", value: "4g" },
      { component: "Protein", value: "7g" },
    ]
  ),

  new Recipe(
    "r5",
    "Key Lime Pie",
    "Key Lime Pie description placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
    "/src/assets/images/recipeImages/key-lime-pie.png",
    
    ["rc1", "rc3"],
    60,
    [
      "1 1/2 cups graham cracker crumbs",
      "1/4 cup packed light brown sugar",
      "Kosher salt",
      "6 tbsp. unsalted butter, melted",
      "8 large egg yolks",
      "2 (14-oz.) cans sweetened condensed milk",
      "1 1/4 cups fresh key lime juice (or fresh lime juice)",
      "Unsweeted whipped cream",
      "Key lime or lime slices, for garnish",
    ],
    [
      "Preheat the oven to 350°. In a medium bowl whisk the graham cracker crumbs with the brown sugar and a pinch of salt. Add the melted butter and mix until the crumbs are evenly moistened. To form the crust, press the crumbs evenly over the bottom and up the side of a 10-inch metal pie plate. Bake for about 10 minutes, until just set. Let cool completely.",
      "In a bowl whisk the egg yolks with the condensed milk, lime juice and a pinch of salt until smooth. Pour the filling into the cooled crust and transfer to the oven. Immediately lower the oven to 325°, and bake for 20 to 25 minutes, until set around the edges and slightly jiggly in the center. Let cool to room temperature, then refrigerate until firm, at least 6 hours or overnight.",
      "Mound the whipped cream on the pie, and garnish with key lime slices.",
    ],
    [
      { component: "Energy", value: "425 kcal" },
      { component: "Total Fat", value: "15g" },
      { component: "Saturated Fat", value: "0g" },
      { component: "Dietary Fiber", value: "5g" },
      { component: "Carbohydrates", value: "65g" },
      { component: "Sugars", value: "12g" },
      { component: "Protein", value: "3g" },
    ]
  ),

  new Recipe(
    "r6",
    "Spaghetti Aglio e Olio",
    "Spaghetti aglio e olio description placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
    "/src/assets/images/recipeImages/pasta.png",
    
    ["rc1", "rc5"],
    25,
    [
      "1 pound uncooked spaghetti",
      "1/2 cup olive oil",
      "6 cloves garlic, thinly sliced",
      "1/4 teaspoon red pepper flakes, or to taste",
      "salt and freshly ground black pepper to taste",
      "1/4 cup chopped fresh Italian parsley",
      "1 cup finely grated Parmigiano-Reggiano cheese",
    ],
    [
      "Bring a large pot of lightly salted water to a boil. Cook spaghetti in the boiling water, stirring occasionally until cooked through but firm to the bite, about 10 to 20 minutes. Drain and transfer to a pasta bowl.",
      "While the pasta is cooking, combine olive oil and garlic in a cold skillet. Cook over medium heat to slowly toast garlic, about 10 minutes. Reduce heat to medium-low when olive oil begins to bubble. Cook and stir until garlic is golden brown, about another 5 minutes. Remove from heat.",
      "Stir red pepper flakes, salt, and black pepper into paste. Pour in hot olive oil and garlic, and sprinkle on Italian parsley and half of the Parmigiano-Reggiano cheese; toss until combined.",
      "Serve pasta topped with the remaining Parmigiano-Reggiano cheese.",
    ],
    [
      { component: "Energy", value: "755 kcal" },
      { component: "Total Fat", value: "35g" },
      { component: "Saturated Fat", value: "8" },
      { component: "Dietary Fiber", value: "4g" },
      { component: "Carbohydrates", value: "87g" },
      { component: "Sugars", value: "3g" },
      { component: "Protein", value: "23g" },
    ]
  ),

  new Recipe(
    "r7",
    "Old-Fashioned Pancakes",
    "old fashioned pancakes description placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
    "/src/assets/images/recipeImages/pancakes.png",
    ["rc1", "rc4"],
    20,
    [
      "1 1/2 cups all-purpose flour",
      "3 1/2 teaspoons baking powder",
      "1 tablespoon white sugar",
      "1/4 teaspoon salt, or more to taste",
      "1 1/4 cups milk",
      "3 tablespoons butter, melted",
      "1 egg",
    ],
    [
      "Sift flour, baking powder, sugar, and salt together in a large bowl. Make a well in the center and add milk, melted butter, and egg; mix until smooth.",
      "Heat a lightly oiled griddle or pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake; cook until bubbles form and the edges are dry, about 2 to 3 minutes. Flip and cook until browned on the other side. Repeat with remaining batter.",
    ],
    [
      { component: "Energy", value: "158 kcal" },
      { component: "Total Fat", value: "6g" },
      { component: "Saturated Fat", value: "3g" },
      { component: "Dietary Fiber", value: "1g" },
      { component: "Carbohydrates", value: "22g" },
      { component: "Sugars", value: "4g" },
      { component: "Protein", value: "5g" },
    ]
  ),

  new Recipe(
    "r8",
    "Greek Salad",
    "greek salad description placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
    "/src/assets/images/recipeImages/greek-salad.png",

    ["rc1", "rc6"],
    50,
    [
      "1 hothouse cucumber, unpeeled, seeded, and sliced 1/4-inch thick",
      "1 red bell pepper, large-diced",
      "1 yellow bell pepper, large-diced",
      "1 pint cherry or grape tomatoes, halved",
      "1/2 red onion, sliced in half-rounds",
      "1/2 pound feta cheese, 1/2-inch diced (not crumbled)",
      "1/2 cup calamata olives, pitted",
      "2 cloves garlic, minced",
      "1 teaspoon dried oregano",
      "1/2 teaspoon Dijon mustard",
      "1/4 cup white vinegar",
      "1 teaspoon kosher salt",
      "1/2 teaspoon freshly ground black pepper",
      "1/2 cup good olive oil",
    ],
    [
      "Place the cucumber, peppers, tomatoes and red onion in a large bowl.",
      "For the vinaigrette, whisk together the garlic, oregano, mustard, vinegar, salt and pepper in a small bowl. Still whisking, slowly add the olive oil to make an emulsion. Pour the vinaigrette over the vegetables. Add the feta and olives and toss lightly. Set aside for 30 minutes to allow the flavors to blend. Serve at room temperature.",
    ],
    [
      { component: "Energy", value: "313 kcal" },
      { component: "Total Fat", value: "28g" },
      { component: "Saturated Fat", value: "8g" },
      { component: "Dietary Fiber", value: "2g" },
      { component: "Carbohydrates", value: "11g" },
      { component: "Sugars", value: "4g" },
      { component: "Protein", value: "7g" },
    ]
  ),
  new Recipe(
    "r9",
    "Key Lime Pie",
    "Key Lime Pie description placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
   "/src/assets/images/recipeImages/key-lime-pie.png",
  
    ["rc1", "rc3"],
    60,
    [
      "1 1/2 cups graham cracker crumbs",
      "1/4 cup packed light brown sugar",
      "Kosher salt",
      "6 tbsp. unsalted butter, melted",
      "8 large egg yolks",
      "2 (14-oz.) cans sweetened condensed milk",
      "1 1/4 cups fresh key lime juice (or fresh lime juice)",
      "Unsweeted whipped cream",
      "Key lime or lime slices, for garnish",
    ],
    [
      "Preheat the oven to 350°. In a medium bowl whisk the graham cracker crumbs with the brown sugar and a pinch of salt. Add the melted butter and mix until the crumbs are evenly moistened. To form the crust, press the crumbs evenly over the bottom and up the side of a 10-inch metal pie plate. Bake for about 10 minutes, until just set. Let cool completely.",
      "In a bowl whisk the egg yolks with the condensed milk, lime juice and a pinch of salt until smooth. Pour the filling into the cooled crust and transfer to the oven. Immediately lower the oven to 325°, and bake for 20 to 25 minutes, until set around the edges and slightly jiggly in the center. Let cool to room temperature, then refrigerate until firm, at least 6 hours or overnight.",
      "Mound the whipped cream on the pie, and garnish with key lime slices.",
    ],
    [
      { component: "Energy", value: "425 kcal" },
      { component: "Total Fat", value: "15g" },
      { component: "Saturated Fat", value: "0g" },
      { component: "Dietary Fiber", value: "5g" },
      { component: "Carbohydrates", value: "65g" },
      { component: "Sugars", value: "12g" },
      { component: "Protein", value: "3g" },
    ]
  ),

  new Recipe(
    "r10",
    "Spaghetti Aglio e Olio",
    "Spaghetti aglio e olio description placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
    "/src/assets/images/recipeImages/pasta.png",
    
    ["rc1", "rc5"],
    25,
    [
      "1 pound uncooked spaghetti",
      "1/2 cup olive oil",
      "6 cloves garlic, thinly sliced",
      "1/4 teaspoon red pepper flakes, or to taste",
      "salt and freshly ground black pepper to taste",
      "1/4 cup chopped fresh Italian parsley",
      "1 cup finely grated Parmigiano-Reggiano cheese",
    ],
    [
      "Bring a large pot of lightly salted water to a boil. Cook spaghetti in the boiling water, stirring occasionally until cooked through but firm to the bite, about 10 to 20 minutes. Drain and transfer to a pasta bowl.",
      "While the pasta is cooking, combine olive oil and garlic in a cold skillet. Cook over medium heat to slowly toast garlic, about 10 minutes. Reduce heat to medium-low when olive oil begins to bubble. Cook and stir until garlic is golden brown, about another 5 minutes. Remove from heat.",
      "Stir red pepper flakes, salt, and black pepper into paste. Pour in hot olive oil and garlic, and sprinkle on Italian parsley and half of the Parmigiano-Reggiano cheese; toss until combined.",
      "Serve pasta topped with the remaining Parmigiano-Reggiano cheese.",
    ],
    [
      { component: "Energy", value: "755 kcal" },
      { component: "Total Fat", value: "35g" },
      { component: "Saturated Fat", value: "8" },
      { component: "Dietary Fiber", value: "4g" },
      { component: "Carbohydrates", value: "87g" },
      { component: "Sugars", value: "3g" },
      { component: "Protein", value: "23g" },
    ]
  ),

  new Recipe(
    "r11",
    "Old-Fashioned Pancakes",
    "old fashioned pancakes description placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
    "/src/assets/images/recipeImages/pancakes.png",
    ["rc1", "rc4"],
    20,
    [
      "1 1/2 cups all-purpose flour",
      "3 1/2 teaspoons baking powder",
      "1 tablespoon white sugar",
      "1/4 teaspoon salt, or more to taste",
      "1 1/4 cups milk",
      "3 tablespoons butter, melted",
      "1 egg",
    ],
    [
      "Sift flour, baking powder, sugar, and salt together in a large bowl. Make a well in the center and add milk, melted butter, and egg; mix until smooth.",
      "Heat a lightly oiled griddle or pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake; cook until bubbles form and the edges are dry, about 2 to 3 minutes. Flip and cook until browned on the other side. Repeat with remaining batter.",
    ],
    [
      { component: "Energy", value: "158 kcal" },
      { component: "Total Fat", value: "6g" },
      { component: "Saturated Fat", value: "3g" },
      { component: "Dietary Fiber", value: "1g" },
      { component: "Carbohydrates", value: "22g" },
      { component: "Sugars", value: "4g" },
      { component: "Protein", value: "5g" },
    ]
  ),

  new Recipe(
    "r12",
    "Greek Salad",
    "greek salad description placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder",
    "/src/assets/images/recipeImages/greek-salad.png",
    
    ["rc1", "rc6"],
    50,
    [
      "1 hothouse cucumber, unpeeled, seeded, and sliced 1/4-inch thick",
      "1 red bell pepper, large-diced",
      "1 yellow bell pepper, large-diced",
      "1 pint cherry or grape tomatoes, halved",
      "1/2 red onion, sliced in half-rounds",
      "1/2 pound feta cheese, 1/2-inch diced (not crumbled)",
      "1/2 cup calamata olives, pitted",
      "2 cloves garlic, minced",
      "1 teaspoon dried oregano",
      "1/2 teaspoon Dijon mustard",
      "1/4 cup white vinegar",
      "1 teaspoon kosher salt",
      "1/2 teaspoon freshly ground black pepper",
      "1/2 cup good olive oil",
    ],
    [
      "Place the cucumber, peppers, tomatoes and red onion in a large bowl.",
      "For the vinaigrette, whisk together the garlic, oregano, mustard, vinegar, salt and pepper in a small bowl. Still whisking, slowly add the olive oil to make an emulsion. Pour the vinaigrette over the vegetables. Add the feta and olives and toss lightly. Set aside for 30 minutes to allow the flavors to blend. Serve at room temperature.",
    ],
    [
      { component: "Energy", value: "313 kcal" },
      { component: "Total Fat", value: "28g" },
      { component: "Saturated Fat", value: "8g" },
      { component: "Dietary Fiber", value: "2g" },
      { component: "Carbohydrates", value: "11g" },
      { component: "Sugars", value: "4g" },
      { component: "Protein", value: "7g" },
    ]
  ),

];
