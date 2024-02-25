import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendaryComponent } from './components/areas/Agendamento/calendary/calendary.component';
import { CadastrarInsumoComponent } from './components/areas/estoque/cadastrar-insumo/cadastrar-insumo.component';
import { PainelInsumosComponent } from './components/areas/estoque/painel-insumos/painel-insumos.component';

const routes: Routes = [
  {path:'', component: CalendaryComponent}
  ,{path:'insumos', component: PainelInsumosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
