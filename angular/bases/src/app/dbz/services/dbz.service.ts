import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        { nombre: 'Goku', poder: 60000 },
        { nombre: 'Vegeta', poder: 9500 }
    ];

    constructor() {
        console.log('Servicio iniciado')
    }

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    agregarPersonaje(personaje: Personaje): void {
        this._personajes.push(personaje);
    }
}