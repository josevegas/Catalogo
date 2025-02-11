import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() isOpen:boolean=false;
  @Output() toggleSidebar=new EventEmitter<boolean>();
  isToggleSidebar(){
    this.toggleSidebar.emit(!this.isOpen);
  }
}
