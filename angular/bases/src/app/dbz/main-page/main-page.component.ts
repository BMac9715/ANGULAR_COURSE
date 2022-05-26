import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: []
})
export class MainPageComponent implements OnInit {
  
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1500
  }

  /*get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }*/

  constructor(private dbzService: DbzService) { 
  }

  ngOnInit(): void {
  }

  /*agregar(event: any): void {
    event.preventDefault();
    console.log('hey...')
  }*/

  /*agregarNuevoPersonaje(personaje: Personaje): void {
    console.log(personaje);
    this.personajes.push(personaje);
  }*/

}
