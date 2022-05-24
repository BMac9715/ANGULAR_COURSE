/*
    ===== Código de TypeScript =====
*/

interface PersonajeLOR {
    nombre: string;
    pv: number;
    //Agregar funciones a interfaces
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Bryan',
    pv: 50,
    mostrarHp() {
        console.log(this.pv);
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();