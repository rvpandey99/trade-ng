import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private _http: HttpClient) { }
  token = localStorage.getItem('token');

  buy(body:any) {
    return this._http.post('https://trade-ravi.herokuapp.com/buy',body,{headers:{"authToken":this.token}});
  }

  sell(body:any) {
    return this._http.post('https://trade-ravi.herokuapp.com/sell',body,{headers:{"authToken":this.token}});
  }

  getStocks() {
    return this._http.get('https://trade-ravi.herokuapp.com/stocks',{headers:{"authToken":this.token}});
  }
}
