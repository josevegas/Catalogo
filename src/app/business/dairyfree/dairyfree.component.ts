import { Component, inject } from '@angular/core';
import { Recipe } from '../../recipe';
import { CardComponent } from '../../shared/components/card/card.component';
import { RecipesbookService } from '../../recipesbook.service';

@Component({
  selector: 'app-dairyfree',
  imports: [CardComponent],
  templateUrl: './dairyfree.component.html',
  styleUrl: './dairyfree.component.css'
})
export class DairyfreeComponent {
  recipeBook:RecipesbookService=inject(RecipesbookService);
  dairyFreeRecipes:Recipe[]=this.recipeBook.getDFRecipes();
}
