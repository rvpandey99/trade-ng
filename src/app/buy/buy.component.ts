import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  buyForm:FormGroup;
  loading = false;
  errorMessage:String;
  successMessage: String;
  master = [];

  isValid(controlName){
    return this.buyForm.get(controlName).invalid && this.buyForm.get(controlName).touched;
  }
  constructor(private _order:OrderService) { }

  ngOnInit() {
    this.loading = true;

    this.buyForm = new FormGroup({
    ticker: new FormControl('', [ Validators.required ]),
    bprice: new FormControl('', [ Validators.required]),
    qty: new FormControl('', [ Validators.required]),
    limit: new FormControl('', [ Validators.required]),
    });

    this._order.getStocks().subscribe(
      data => {
        this.master = Object.keys(data).map(i => data[i]);
        this.loading = false;
      },
      error => {
        // this.errorMessage = error.error || 'Something went wrong.';
        this.loading = false;
        console.log(error.error);
      }
    );
  }

  onSubmit() {
    this.loading = true;
    const body = {
      ticker: this.buyForm.value.ticker.ticker,
      bprice: this.buyForm.value.bprice,
      qty: this.buyForm.value.qty,
      limit: this.buyForm.value.limit
    }

    if(this.buyForm.valid){
      this._order.buy(body).subscribe(
        data => {
          this.successMessage = 'Your order is placed successfully. Order ID is ' + data.orderId;
          this.loading = false;
        },
        error => {
          this.errorMessage = error.error || 'Something went wrong.';
          this.loading = false;
        // console.log(error.error);
        }
      );
    }
  }
}
