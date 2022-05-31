export interface Recipe{

    id: string;
    imageRecipe: string;
    title: string;
    shortDescription?: string;
    fullDescription?: string;
    ingredients: string[];
    price: number;
};
