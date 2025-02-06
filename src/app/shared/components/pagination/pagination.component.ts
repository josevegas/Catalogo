import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../../../recipe';
import { RecipesbookService } from '../../../recipesbook.service';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-pagination',
  imports: [CardComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnChanges{
  @Input() consulta:string='';
  recipesBook:RecipesbookService=inject(RecipesbookService);
  datosTotales:Recipe[]=[];
  datosPagina:Recipe[]=[];
  totalItems=0;
  itemsXPag=6;
  pagActual=1;
  pagFinal=0;
  rangoItems=[6,9,12];
  pagSig(){
    if(this.pagActual<this.pagFinal){
      this.pagActual+=1;
      this.datosXPagina();
    }
  }
  pagPrev(){
    if(this.pagActual>1){
      this.pagActual-=1;
      this.datosXPagina();
    }
  }
  private cargarDatos():void{
    switch(this.consulta){
      case 'vegetarian': this.datosTotales=this.recipesBook.getVegetarianRecipes();
      break;
      case 'vegan': this.datosTotales=this.recipesBook.getVeganRecipes();
      break;
      case 'gluten': this.datosTotales=this.recipesBook.getGFRecipes();
      break;
      case 'dairy': this.datosTotales=this.recipesBook.getDFRecipes();
      break;
      default: this.datosTotales=this.recipesBook.getAllRecipes();
    }
    this.totalItems=this.datosTotales.length;
    this.pagFinal=Math.ceil(this.totalItems/this.itemsXPag)
    this.datosXPagina();
    
  }
  datosXPagina():void{
    var inicio=(this.pagActual-1)*this.itemsXPag;
    var fin=this.pagActual*this.itemsXPag;
    this.datosPagina=this.datosTotales.slice(inicio,fin)
  }
  
  ngOnChanges(changes: SimpleChanges):void{
    if(changes['consulta']){
      this.cargarDatos()
    }
  }
}
