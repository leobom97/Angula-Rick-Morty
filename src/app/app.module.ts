import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { CardsComponent } from './features/cards/cards.component';

import { PersonagemService } from './services/personagem.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
