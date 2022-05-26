import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman', 'Ironman', 'Thor', 'Hulk', 'Capitan America']
  heroeBorrado: string = '';

  constructor() { }

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
