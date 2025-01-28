import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPE_DATA } from '../assets/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesbookService {
  protected recipeData:Recipe[]=RECIPE_DATA.map(re=>{
    return {
      id: re.id,
      vegan: re.vegan,
      vegetarian: re.vegetarian,
      dairyFree: re.dairyFree,
      glutenfree: re.glutenFree,
      name: re.title,
      image: re.image,
      summary: re.summary,
      healthScore: re.healthScore,
      diets: re.diets,
      source: re.sourceUrl,
    }
});
  constructor() { }
  getAllRecipes():Recipe[]{
    return this.recipeData;
  };
  getRecipeDetails(id:number):Recipe|undefined{
    return this.recipeData.find(it=>it.id===id);
  }
  getVeganRecipes():Recipe[]{
    return this.recipeData.filter(it=>it.vegan==true);
  }
  getVegetarianRecipes():Recipe[]{
    return this.recipeData.filter(it=>it.vegetarian==true);
  }
  getDFRecipes():Recipe[]{
    return this.recipeData.filter(it=>it.dairyFree==true);
  }
  getGFRecipes():Recipe[]{
    return this.recipeData.filter(it=>it.glutenfree==true);
  }
  getFilterRecipes(veganState:boolean,vegetarianState:boolean,dairyFreeState:boolean,glutenFreeState:boolean):Recipe[]{
    return this.recipeData
  }
}
