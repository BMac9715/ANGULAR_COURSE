/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T): string {
    return argumento.toString();
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5]);

let soyExplicito = queTipoSoy<number>(100);
