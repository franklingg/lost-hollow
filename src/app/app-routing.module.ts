import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './pages/cards/cards.component';
import { BookComponent } from './pages/book/book.component';
import { UniqueCardComponent } from './pages/unique-card/unique-card.component';
import { ReadingComponent } from './pages/reading/reading.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'cartas',
    component: CardsComponent,
  },
  {
    path: 'carta/:num',
    component: UniqueCardComponent,
  },
  {
    path: 'livro',
    component: BookComponent,
  },
  {
    path: 'leitura',
    component: ReadingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
