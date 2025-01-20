import { Component, inject } from '@angular/core';
import { Recipe } from '../../recipe';
import { CardComponent } from '../../shared/components/card/card.component';
import { RecipesbookService } from '../../recipesbook.service';

@Component({
  selector: 'app-glutenfree',
  imports: [CardComponent],
  templateUrl: './glutenfree.component.html',
  styleUrl: './glutenfree.component.css'
})
export class GlutenfreeComponent {
  recipesBook:RecipesbookService=inject(RecipesbookService);
  glutenFreeRecipes:Recipe[]=this.recipesBook.getGFRecipes();
}
