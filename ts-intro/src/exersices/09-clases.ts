/*
    ===== Código de TypeScript =====
*/

class PersonaNomral {
    
    constructor(public nombre: string, 
                public direccion: string) {

    }
}

class Heroe extends PersonaNomral {
    //public alterEgo: string;
    //public edad: number;
    //public nombreReal: string;

    constructor(public alterEgo: string, public nombreReal:string, edad?: number) {
        super(nombreReal, 'New York, USA');
    }

    imprimirNombre(): string {
        return this.alterEgo + ' ' + this.nombreReal + ' - ' + this.direccion;
    }
}

/*interface Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: string;

}*/

const ironMan = new Heroe('Ironman', 'Tony Stark');

console.log(ironMan.imprimirNombre());