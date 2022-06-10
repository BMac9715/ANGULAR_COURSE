import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Bryan';
  genero: string = 'masculino';

  invitacionMap = { 'masculino': 'invitarlo', 'femenino': 'invitarla'};

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan' , 'Eduardo', 'Fernando' , 'Sheila', 'Cindy'];
  clientesMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando' 
  }

  //Keyvalue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  //Json Pipe
  heroes = [ 
    { nombre: 'Superman', vuela: true }, 
    { nombre: 'Batman', vuela: false }, 
    { nombre: 'Robin', vuela: false }, 
    { nombre: 'Green Lantern', vuela: true }
  ];

  //Async Pipe
  miObservable = interval(1500);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500)
  });

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarCliente(): void {
    if(this.nombre == 'Bryan') {
      this.nombre = "Cindy";
      this.genero = "femenino";
    }
    else{
      this.nombre = "Bryan";
      this.genero = "masculino";
    }
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

}
