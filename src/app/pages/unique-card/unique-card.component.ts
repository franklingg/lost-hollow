import { Component } from '@angular/core';
import allCards from '../../../assets/texts/cards.json';
import { ActivatedRoute, Router } from '@angular/router';
import Card from 'src/models/card';
@Component({
  selector: 'app-unique-card',
  templateUrl: './unique-card.component.html',
  styleUrls: ['./unique-card.component.scss'],
})
export class UniqueCardComponent {
  public card: Card;

  constructor(private route: ActivatedRoute, private router: Router) {
    const cardNumbering = this.route.snapshot.paramMap.get('num');
    this.card = allCards.find((c) => c.numbering.toString() == cardNumbering)!;
  }

  navigatePrev() {
    if (this.card.numbering != 0) {
      this.router
        .navigate(['/carta/' + (this.card.numbering - 1)])
        .then((_) => {
          const cardNumbering = this.card.numbering - 1;
          this.card = allCards.find((c) => c.numbering == cardNumbering)!;
        });
    }
  }

  navigateNext() {
    if (this.card.numbering != 80) {
      this.router
        .navigate(['/carta/' + (this.card.numbering + 1)])
        .then((_) => {
          const cardNumbering = this.card.numbering + 1;
          this.card = allCards.find((c) => c.numbering == cardNumbering)!;
        });
    }
  }
}
