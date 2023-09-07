import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../component/card/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private _http: HttpClient) { }

  getCards(): Observable<Root>{
    return this._http.get<Root>('https://fakestoreapi.com/products')
  }

}
