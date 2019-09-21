import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  sellForm:FormGroup;
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
    return this.sellForm.get(controlName).invalid && this.sellForm.get(controlName).touched;
  }
  constructor() { }

  ngOnInit() {
    this.sellForm = new FormGroup({
    ticker: new FormControl('', [ Validators.required ]),
    aprice: new FormControl('', [ Validators.required]),
    qty: new FormControl('', [ Validators.required]),
    limit: new FormControl('', [ Validators.required]),
    });
  }

  onSubmit() {
    this.warn = true;
  }

}