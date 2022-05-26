import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
//import { catchError } from "rxjs/operators";

import { Country } from "../interfaces/pais.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPaís(nombre: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${nombre}`;

    return this.http.get<Country[]>(url);

    /*return this.http.get(url)
    .pipe(
      catchError(err => of([]))
    );*/
  }

  buscarPaisPorCapital(capítal: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capítal}`;

    return this.http.get<Country[]>(url);
  }

  buscarPaisPorCodigo(code: number): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url);
  }

  buscarPaisesPorRegion(region: string): Observable<Country[]> {
    const url = `https://restcountries.com/v2/regionalbloc/${region}`;

    return this.http.get<Country[]>(url);
  }
}
