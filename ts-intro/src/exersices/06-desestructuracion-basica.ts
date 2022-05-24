/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 50,
    segundo: 10,
    cancion: "Dembow",
    detalles: {
        autor: "Danny Ocean",
        anio: 2019
    }
}

//Desestructuraciónh - Forma 1

//const { volumen, segundo, cancion, detalles } = reproductor;
//const { autor } = detalles;


//Desestructuraciónh - Forma 2

const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;

//console.log('El volumen actual es de: ', volumen);
//console.log('El segundo actual es: ', segundo);
//console.log('La canción actual es: ', cancion);
//console.log('El autor es: ', autorDetalle);


//DESESTRUCTURACIÓN DE ARREGLOS

const dbz: string[] = ['Goku', 'Vegeta', 'Gohan'];
//const [ p1, p2, p3 ] = dbz;
const [ , , p3] = dbz;

//console.log('Personaje 1: ', p1)
//console.log('Personaje 2: ', p2)
console.log('Personaje 3: ', p3)
