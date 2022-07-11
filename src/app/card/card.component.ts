import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CARDS } from '../mockcards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards: Card[] = CARDS;

  flag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
