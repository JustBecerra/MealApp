class Meal {
  constructor(
    id: string,
    categoryIds: string,
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: string,
    ingredients: string,
    steps: number,
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean,
  ) {
    id;
    categoryIds;
    title;
    imageUrl;
    ingredients;
    steps;
    duration;
    complexity;
    affordability;
    isGlutenFree;
    isVegan;
    isVegetarian;
    isLactoseFree;
  }
}

export default Meal;
