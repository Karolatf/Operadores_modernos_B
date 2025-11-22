function actualizarNotas(estudiante, ...nuevasNotas) {
    // combino notas sin tocar original
    const nuevas = [...estudiante.notas, ...nuevasNotas];

    // creo objeto nuevo
    const copia = {
        nombre: estudiante.nombre,
        notas: nuevas
    };

    // mostrar para verificar
    console.log("orig:", estudiante);
    console.log("nuevo:", copia);

    return copia;
}

// imprimo
const estudiante = { nombre: "Laura", notas: [4.0, 3.8] };
actualizarNotas(estudiante, 4.2, 3.9);
