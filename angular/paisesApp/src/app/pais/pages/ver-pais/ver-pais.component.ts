import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap((param) => this.paisService.buscarPaisPorCodigo(param.id)),
      tap(console.log)
    )
    .subscribe(
      resp => {
        this.pais = resp[0];
      }
    );

    /*this.activatedRoute.params
    .subscribe(
      ({ id }) => {      
        this.paisService.buscarPaisPorCodigo(id)
        .subscribe( (pais) => {
          console.log(pais[0])
        })
      }
    );*/
  }

}
