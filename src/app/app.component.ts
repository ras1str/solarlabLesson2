import { Component, OnInit } from '@angular/core';
import { CardsService } from './service/cards.service';
import { Daum } from './component/card/card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularLessson2';

  cards : Daum[] = []

constructor(private _cardService: CardsService){}

ngOnInit(): void {
  this._cardService.getCards().subscribe(res => {
    this.cards = res
    console.log(this.cards)

  })
}

}
