"use strict";
let perro = "samson";
let gato = "gatito";
let anios = 10;
let esVerdadero = true;
let perros = ["juancito", perro];
let edades = [10, 12, 8, 2, anios];
let verdaderos = [true, false, false, esVerdadero];
let deTodo = [perro, gato, anios, esVerdadero];
let persona1 = {
    nombre: "juancito",
    apellido: "perez",
    edad: 25,
};
let persona2 = {
    nombre: "martita",
    apellido: "gonzalez",
    edad: 25,
};
// let gatito={
//     nombre: 'sopita',
//     edad: 4
// }
let personas = [persona1, persona2];
const suma = (a, b) => a + b;
const saludar = (nombre) => `Hola, ${nombre}`;
const saludo = function () {
    const hola = "hola";
    console.log(hola);
};
const dividirPromise = (divisor, dividendo) => {
    return new Promise((res, rej) => {
        if (divisor === 0) {
            rej("no se puede dividir por cero");
        }
        else {
            res(dividendo / divisor);
        }
    });
};
class Usuario {
    constructor(usuario, pass, email) {
        this.usuario = usuario;
        this.pass = pass;
        this.email = email;
    }
    datosUsuario() {
        return `Nombre de usuario: ${this.usuario}; Email: ${this.email}`;
    }
}
