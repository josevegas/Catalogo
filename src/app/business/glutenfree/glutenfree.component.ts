import { Component } from '@angular/core';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-glutenfree',
  imports: [PaginationComponent],
  templateUrl: './glutenfree.component.html',
  styleUrl: './glutenfree.component.css'
})
export class GlutenfreeComponent {
  consulta='gluten'
}
