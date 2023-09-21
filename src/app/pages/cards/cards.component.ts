import { Component } from '@angular/core';
import { Router } from '@angular/router';
import allCards from '../../../assets/texts/cards.json';
import Card from 'src/models/card';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  public shownCards: Card[] = allCards;

  public searchControl: FormControl<string> = new FormControl();
  constructor(private router: Router) {}

  getCards(cls: string): Card[] {
    return this.shownCards.filter((c) => c.class == cls);
  }

  onSearch(value: string) {
    this.searchControl.setValue(value);
    if (value) {
      this.shownCards = allCards.filter((c) => {
        const search = value.toLowerCase();
        return (
          c.name.toLowerCase().includes(search) ||
          c.numbering.toString().includes(search) ||
          c.alias.toLowerCase().includes(search)
        );
      });
    } else this.shownCards = allCards;
  }
}
