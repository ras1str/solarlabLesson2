import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/service/cards.service';
import { Daum } from '../card/card.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cards : Daum[] = []

constructor(private _cardService: CardsService){}

ngOnInit(): void {
  this._cardService.getCards().subscribe(res => {
    this.cards = res
    console.log(this.cards)

  })
}
}
