import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CARDS } from '../mockcards';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  cards: Card[] = CARDS;

  flag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
