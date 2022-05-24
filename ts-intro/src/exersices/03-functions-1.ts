/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): string {
    return (a + b).toString();
}

//Primero van todas las variables obligatorias y por último las opcionales
//Valores por defecto se pueden asignar en los parametros
function multiplicar(a: number, b?: number, c: number = 2) {
    return a * c;
}

const sumarFlecha = (a: number, b: number): number => { return a + b; }

const resultado = sumarFlecha(10, 20);
const resultado2 = multiplicar(10, 0, 5);

console.log(resultado);
console.log(resultado2);