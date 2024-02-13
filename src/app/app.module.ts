import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';
import { AgendamentosComponent } from './components/areas/agendamentos/agendamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterNavComponent,
    AgendamentosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
