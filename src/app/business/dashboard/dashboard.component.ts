import { Component, inject } from '@angular/core';
import { RecipesbookService } from '../../recipesbook.service';
import { Recipe } from '../../recipe';
import { CardComponent } from "../../shared/components/card/card.component";

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  recipeBook:RecipesbookService=inject(RecipesbookService);
  allRecipes:Recipe[]=[];
  constructor(){
    this.allRecipes=this.recipeBook.getAllRecipes();
  }
}
