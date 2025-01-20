import { Component, inject } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipesbookService } from '../../recipesbook.service';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-profile',
  imports: [CardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  recipeBook:RecipesbookService=inject(RecipesbookService);
  veganRecipes:Recipe[]=this.recipeBook.getVeganRecipes();
}
