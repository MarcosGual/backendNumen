// function test() {
//   var testeo = "hola";
//   console.log(testeo);
//   if (2 < 3) {
//     console.log(`${testeo}, buenos días!`);
//   }
// }

// test();

//console.log(testeo);

// const saludador = "decir hola";
// const veces = 4;

// if (veces > 3) {
//   const saludador = "buenos días";
//   console.log(saludador);
// }

// console.log(saludador);

// function saludar() {
//   console.log("Buenasss");
// }

// function saludarAlumno(nombreAlumno, clase) {
//   console.log(`Hola, alumno ${nombreAlumno} de la clase ${clase}`);
// }

// const suma = (num1, num2) => num1 + num2;

// const areaCirculo = (radio) => Math.PI * radio ** 2;

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  quienSoy() {
    return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
  }

  static saludoCorto = "Hola";

  static saludoEstatico() {
    Persona.saludoCorto;
  }

  static crearAnonimo(genero, edad) {
    let nombre = genero == "masculino" ? "Natalio" : "Natalia";
    let apellido = genero == "masculino" ? "Natalio" : "Natalia";

    return new Persona(nombre, apellido, edad);
  }
}

// let persona1 = new Persona("Antonela", "Bonaglia", 15);

// console.log(persona1.quienSoy())

class Cliente extends Persona {
  constructor(nombre, apellido, edad, nroCliente) {
    super(nombre, apellido, edad);
    this.nroCliente = nroCliente || 11111;
  }

  describirCliente() {
    return `Hola, soy el cliente nro ${this.nroCliente} y me llamo ${this.nombre}`;
  }
}

const cliente1 = new Cliente("Antonela", "Bonaglia", 15);

console.log(cliente1.describirCliente());
console.log(cliente1.quienSoy())