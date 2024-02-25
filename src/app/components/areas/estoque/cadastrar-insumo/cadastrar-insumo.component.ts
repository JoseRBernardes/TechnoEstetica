import { Component, ElementRef, Input } from '@angular/core';
import { IInsumo } from '../../Interfaces/IInsumo';

@Component({
  selector: 'app-cadastrar-insumo',
  templateUrl: './cadastrar-insumo.component.html',
  styleUrl: './cadastrar-insumo.component.css'
})



export class CadastrarInsumoComponent {
  @Input() Data :IInsumo[] = [];
 
}
