export interface Recipe{

    id: number;
    imageRecipe: string;
    title: string;
    shortDescription?: string;
    fullDescription?: string;
    ingredients: string[];
    price: number;
};
