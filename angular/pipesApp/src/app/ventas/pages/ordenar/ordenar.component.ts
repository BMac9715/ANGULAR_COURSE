import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces'; 

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  isUpperCase: boolean = true;

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    }
  ]

  orden: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  cambiarOrden( value: string ): void {
    this.orden = value;
  }


}
