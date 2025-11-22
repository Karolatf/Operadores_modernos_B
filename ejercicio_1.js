const usuarioPrincipal = []
let nombre = "karol";
let edad = 18;

function registrarUsuarios (nombre, edad, ...usuario){
console.log (nombre,edad, usuario)
return {
    nombre, edad, usuario
}
}

let respuesta = registrarUsuarios (nombre, edad, "juan", "santi", "sara", "olga")

const {nombre:a,edad:b, usuario} = respuesta

console.log(respuesta);
console.log(a,b, usuario.length);


