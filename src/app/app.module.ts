import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';
import { CalendaryComponent } from './components/areas/Agendamento/calendary/calendary.component';
import { CadastrarInsumoComponent } from './components/areas/estoque/cadastrar-insumo/cadastrar-insumo.component';
import { PainelInsumosComponent } from './components/areas/estoque/painel-insumos/painel-insumos.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterNavComponent,
    CalendaryComponent,
    CadastrarInsumoComponent,
    PainelInsumosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
