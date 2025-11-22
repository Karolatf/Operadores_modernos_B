// lista inicial
const productos = ["teclado", "mouse", "pantalla"];

function agregarProducto(lista, nuevoProducto) {
    // creo nueva lista sin tocar la original
    const nueva = [...lista, nuevoProducto];

    // muestro las 2 listas
    console.log("original:", lista);
    console.log("nueva:", nueva);

    return nueva;
}

// imprimo
agregarProducto(productos, "impresora");


