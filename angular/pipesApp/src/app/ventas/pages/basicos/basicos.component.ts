import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'bryan';
  nombreUpper: string = 'BRYAN';
  nombreCompleto: string = 'bRYaN EsTUaRDo MaCARIo COroNaDo';

  fecha: Date = new Date(); //Tiene el valor al día de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
