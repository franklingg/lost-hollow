import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss'],
})
export class ReadingComponent {
  constructor(private router: Router) {}

  uniqueRead() {
    const minCard = 0;
    const maxCard = 80;

    const selected =
      Math.floor(Math.random() * (maxCard - minCard + 1)) + minCard;
    this.router.navigateByUrl('/carta/' + selected);
  }
}
