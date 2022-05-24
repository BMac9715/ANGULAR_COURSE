/*
    ===== Código de TypeScript =====
*/

let habilidades: (string | number | boolean)[] = ['Bash', 'Counter', 'Healing', 100];
let palabras: string[] = ['Hola', 'Mundo', 'Angular'];

habilidades.push(true);

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;    //Esta variable es opcional

}

const personaje: Personaje = {
    nombre: 'Bryan',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo paleta'

console.table(personaje);
