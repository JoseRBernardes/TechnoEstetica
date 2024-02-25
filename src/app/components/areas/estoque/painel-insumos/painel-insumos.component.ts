import { Component } from '@angular/core';
import { CadastrarInsumoComponent } from '../cadastrar-insumo/cadastrar-insumo.component';
import { IInsumo } from '../../Interfaces/IInsumo';

@Component({
  selector: 'app-painel-insumos',
  templateUrl: './painel-insumos.component.html',
  styleUrl: './painel-insumos.component.css'
})
export class PainelInsumosComponent {
  Data: IInsumo[] = [
    {DsInsumo: "Lidocáina", QtdInsumo: 6},
    {DsInsumo: "Xilocaína", QtdInsumo:1},
    { DsInsumo: "Paracetamol", QtdInsumo: 15 },
    { DsInsumo: "Ibuprofeno", QtdInsumo: 10 },
    { DsInsumo: "Amoxicilina", QtdInsumo: 8 },
    { DsInsumo: "Dipirona", QtdInsumo: 12 },
    { DsInsumo: "Vitamina C", QtdInsumo: 20 },
    { DsInsumo: "Soro fisiológico", QtdInsumo: 25 },
    { DsInsumo: "Álcool gel", QtdInsumo: 30 },
    { DsInsumo: "Gaze estéril", QtdInsumo: 40 },
    { DsInsumo: "Luvas descartáveis", QtdInsumo: 50 }
  ]
}
