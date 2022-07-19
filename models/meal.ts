class Meal {
  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: number,
    ingredients: string[],
    steps: string[],
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
