import { Component, Input } from '@angular/core';
import { Recipe } from '../../../recipe';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() recipeInfo!:Recipe;
}
