const productos = ["teclado", "mouse", "pantalla"]

let copia = agregarProducto (productos, "cable")

function agregarProducto(productos, nuevoProducto) {
    const copiaLista = [...Productos]
    copiaLista.push (nuevoProducto)
    return copiaLista
}

console.log(productos);
console.log(copia);


