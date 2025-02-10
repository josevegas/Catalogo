import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleMenu= new EventEmitter<boolean>()
  @Input() isOpen:boolean=false;
  pagina:string='';
  constructor(private router:Router){
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        var url=event.url;
        if(url.includes('home')){this.pagina='Inicio';}
        if(url.includes('vegan')){this.pagina='Platos Veganos';}
        if(url.includes('vegetarian')){this.pagina='Platos Vegetarianos';}
        if(url.includes('glutenfree')){this.pagina='Platos Libres de Gluten';}
        if(url.includes('dairyfree')){this.pagina='Platos Libres de Lácteos';}
        if(url.includes('detail')){this.pagina='Detalles';}
      }
    })
  }
  onClick(){
    console.log(this.isOpen)
    this.toggleMenu.emit(!this.isOpen)
  }
}
