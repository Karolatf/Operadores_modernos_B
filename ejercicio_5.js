function agregarItems(lista, ...items) {
    // creo nueva lista
    const nueva = [...lista, ...items];
    return nueva;
}

function obtenerInfo(item) {
    try {
        // saco datos
        const { id, nombre, precio } = item;

        // valido
        if (!id || !nombre || !precio) {
            throw new Error("El ítem no contiene todos los datos requeridos");
        }

        // imrimo
        console.log(id, nombre, precio);

    } catch (error) {
        console.error(error.message);
    }
}

// prueba final
const lista = [
    { id: 1, nombre: "Laptop", precio: 2000 }
];

const nuevaLista = agregarItems(
    lista,
    { id: 2, nombre: "Teclado", precio: 100 },
    { id: 3, nombre: "Mouse", precio: 50 }
);

console.log(nuevaLista);
obtenerInfo(nuevaLista[1]);
