import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from "../../services/pais.service";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  
  termino: string = '';
  hasError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string): void {
    this.hasError = false;
    this.termino = termino;
    
    this.paisService.buscarPaís( termino.trim() )
    .subscribe( (paises) => {
      this.paises = paises;
    },
    (err) => {
      this.hasError = true;
      this.paises = [];
    }
    );
  }

  sugerencias(termino: string) : void {
    this.hasError = false;
    
  }

}
