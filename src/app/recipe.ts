export interface Recipe {
    id: number;
    vegan: boolean;
    glutenfree: boolean;
    vegetarian: boolean;
    dairyFree: boolean;
    name: string;
    image: string;
    summary: string;
    healthScore: number;
    diets: string[];
}
