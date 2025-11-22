function mostrarDireccion(info) {
    try {
        // saco los datos
        const { ciudad, pais } = info;

        // valido datos
        if (!ciudad || !pais) {
            throw new Error("La información de la dirección no es válida");
        }

        // muestro datos
        console.log(ciudad, pais);

    } catch (error) {
        console.error(error.message);
    }
}

// imprimo
mostrarDireccion({ ciudad: "Bogotá", pais: "Colombia" });
