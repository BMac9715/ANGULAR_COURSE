/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1', 
    precio: 300
}

const tablet: Producto = {
    desc: 'iPad Air',
    precio: 500
}


/*
//SIN DESESTRUCTURACIÓN
function calculaISV(productos: Producto[]) {
    let total = 0;

    productos.forEach((p, i) => {
        total += p.precio;
    });

    return total * 0.15;
}*/

export function calculaISV(productos: Producto[]): [number, number] {
    let total = 0;

    productos.forEach(({ precio }) => {
        total += precio;
    });

    return [total, total * 0.15];
}


//const articulos = [ telefono, tablet];

//const [total, isv] = calculaISV(articulos);

//console.log('Total:', total);
//console.log('ISV:', isv);