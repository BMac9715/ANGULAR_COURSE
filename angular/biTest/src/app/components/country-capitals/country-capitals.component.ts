import { Component, Input, OnInit } from '@angular/core';

type Data = {
  [key: string] : string;
}

@Component({
  selector: 'app-country-capitals',
  templateUrl: './country-capitals.component.html',
  styleUrls: ['./country-capitals.component.css']
})
export class CountryCapitalsComponent implements OnInit {

  @Input() data : Data;
  items: string[] = [];

  firstSelect: string = '';
  secondSelect: string = '';

  correct: string = '';

  isFirst: boolean = false;
  isCorrect: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this._getAndShuffleItems();
  }

  onClickButton(item: string): void {
    this.isFirst = !this.isFirst;

    if(this.isFirst) {
      //First Attemp
      this.firstSelect = item;

      //1: Search on values
      this.correct = this.data[item] || '';

      if(this.correct === '') {
        //2. Search on keys
        this.correct = Object.keys(this.data).find(key => this.data[key] === item) || '';
      }
    }
    else{
      //Second Attemp
      this.secondSelect = item;

      this.isCorrect = this.correct === item;

      //Remove items
      if(this.isCorrect){
        this.items.splice(this.items.findIndex(x => x===item), 1);
        this.items.splice(this.items.findIndex(x => x===this.firstSelect), 1)
      }
    }
  }

  private _getAndShuffleItems(): void {
    this.items = this.items.concat(Object.keys(this.data));
    this.items = this.items.concat(Object.values(this.data));

    this.items.sort(() => Math.random() - 0.5);
  }

}
