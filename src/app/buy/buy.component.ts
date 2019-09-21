import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  buyForm:FormGroup;
  warn = false;

  master = [
    {
      ticker: "INFY",
      company: "Infosys",
      marketPrice: 1000
    },
    {
      ticker: "TCS",
      company: "Tata Consultancy Services",
      marketPrice: 1100
    },
    {
      ticker: "WIPRO",
      company: "Wipro Limited",
      marketPrice: 370
    },
    {
      ticker: "ARTL",
      company: "Bharti Airtel",
      marketPrice: 410
    },
    {
      ticker: "LT",
      company: "Larsen and Toubro",
      marketPrice: 1400
    }
  ];

  isValid(controlName){
    return this.buyForm.get(controlName).invalid && this.buyForm.get(controlName).touched;
  }
  constructor() { }

  ngOnInit() {
    this.buyForm = new FormGroup({
    ticker: new FormControl('', [ Validators.required ]),
    bprice: new FormControl('', [ Validators.required]),
    qty: new FormControl('', [ Validators.required]),
    limit: new FormControl('', [ Validators.required]),
    });
  }

  onSubmit() {
    this.warn = true;
  }

}