import { Component } from '@angular/core';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-dairyfree',
  imports: [PaginationComponent],
  templateUrl: './dairyfree.component.html',
  styleUrl: './dairyfree.component.css'
})
export class DairyfreeComponent {
  consulta='dairy';
}
