import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './pages/cards/cards.component';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';
import { FormsModule } from '@angular/forms';
import { UniqueCardComponent } from './pages/unique-card/unique-card.component';
import { ReadingComponent } from './pages/reading/reading.component';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    BookComponent,
    UniqueCardComponent,
    ReadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
