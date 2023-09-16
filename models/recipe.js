class Recipe {
  constructor(
    id,
    title,
    description,
    imageUrl,
    dietCategories,
    duration,
    ingredients,
    steps,
    nutritionalInfo
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.dietCategories = dietCategories;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.nutritionalInfo = nutritionalInfo;
  }
}
export default Recipe;
