// usuario principal como objeto
let usuarioPrincipal = {
    nombre: "karol",
    edad: 18
};

function registrarUsuarios(usuarioPrincipal, ...usuarios) {
    // saco nombre y edad
    const { nombre, edad } = usuarioPrincipal;

    // muestro datos para revisar
    console.log(nombre, edad, usuarios);

    // retorno el objeto final
    return {
        nombre,
        edad,
        usuarios
    };
}

// llamo la función con extras
let respuesta = registrarUsuarios(usuarioPrincipal, "juan", "sara", "luz");

// saco valores del retorno
const { nombre:a, edad:b, usuarios } = respuesta;

console.log(respuesta);
console.log(a, b, usuarios.length); // cantidad de extras
