import { Component, inject } from '@angular/core';
import { Recipe } from '../../recipe';
import { CardComponent } from '../../shared/components/card/card.component';
import { RecipesbookService } from '../../recipesbook.service';

@Component({
  selector: 'app-tables',
  imports: [CardComponent],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {
  recipesBook:RecipesbookService=inject(RecipesbookService)
  vegetarianRecipes:Recipe[]=this.recipesBook.getVegetarianRecipes()
}
