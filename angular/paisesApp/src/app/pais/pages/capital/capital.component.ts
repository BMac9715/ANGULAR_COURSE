import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent implements OnInit {

  termino: string = '';
  hasError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string): void {
    this.hasError = false;
    this.termino = termino;
    
    this.paisService.buscarPaisPorCapital( termino.trim() )
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
