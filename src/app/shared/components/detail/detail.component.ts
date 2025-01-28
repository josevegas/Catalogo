import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RecipesbookService } from '../../../recipesbook.service';
import { Recipe } from '../../../recipe';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  route: ActivatedRoute= inject(ActivatedRoute);
  recipeId=-1;
  recipeService=inject(RecipesbookService);
  recipe:Recipe|undefined;
  location=inject(Location)
  goBack():void{
    this.location.back()
  }
  constructor(){
    this.recipeId=Number(this.route.snapshot.params['id']);
    this.recipe=this.recipeService.getRecipeDetails(this.recipeId);
  }
}
