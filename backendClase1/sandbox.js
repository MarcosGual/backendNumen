//DECLARACIONES CON LET Y VAR
// VAR NO ESTÁ RESTRINGIDA POR BLOQUE, LET Y CONST SÍ LO ESTÁN
// VAR TIENE LA CARACTERÍSTICA DEL HOSTING (IZAMIENTO)
// EL HOISTING O IZAMIENTO ME LLEVA LA VARIABLE AL TOPE DE MI SCRIPT

// console.log(testeo);

// let testeo;
// console.log(testeo)
// let veces = 4;

// if (veces > 3) {
//   let hola = "hola";
//   console.log(hola);
//   if(veces===4){
//     console.log(hola);
//   }
// }

// console.log(hola);

//FUNCIONES

//función declarada: declaración function + nombre de la función
// la función expresada también tiene la característica del izamiento
// javascript la lleva al tope del código

function saludo(nombre) {
  console.log(`Hola, ${nombre}!`);
}

// saludo('Tomás');

//función expresadas:
// son guardadas adentro de variables

// despedida('Marcos');

const despedida = function (nombre) {
  console.log(`Adiós, ${nombre}`);
};

// funciones arrow o flecha
//  es una forma simplificada para devolver un dato
//  en una sola línea

// si fuera una función declarada,
// el área del cículo sería así:
const areaCirculo = function (radio) {
  return Math.PI * radio ** 2;
};

// console.log(areaCirculo(5));

// si es una función flecha o arrow
// es de la siguiente manera:

const areaCirculo1 = (radio) => Math.PI * radio ** 2;

// console.log(areaCirculo1(5));

// OBJETOS Y CLASES

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre || "Nombre no definido";
    this.apellido = apellido || "Apellido no definido";
    this.edad = edad || "Edad no definida";
  }

  //método: una función que está adentro de un objeto
  quienSoy() {
    return `Hola, soy ${this.nombre} ${this.apellido}`;
  }

  static saludoCorto = "Hola";

  static saludoEstatico() {
    console.log("saludo estático: " + Persona.saludoCorto);
  }

  static crearAnonimo(genero, edad) {
    let nombre = genero == "masculino" ? "Natalio" : "Natalia";
    let apellido = genero == "masculino" ? "Natalio" : "Natalia";

    return new Persona(nombre, apellido, edad);
  }
}

let humano = new Persona();
console.log(humano);

let humano1 = Persona.crearAnonimo("masculino", 30);
// humano1.quienSoy();

// console.log(humano);
//DOT NOTATION, NOTACIÓN DEL PUNTO
// console.log(humano.apellido);
//BRACKET NOTATION, NOTACIÓN DE LLAVES
// console.log(humano['nombre']);

// humano.quienSoy();
// Persona.saludoEstatico();

//CLASE DERIVADA DE LA CLASE PERSONA: ALUMNO
// HEREDA MÉTODOS Y ATRIBUTOS DE LA CLASE PERSONA

class Alumno extends Persona {
  constructor(nombre, apellido, edad, legajo) {
    super(nombre, apellido, edad);
    this.legajo = legajo || "00000";
  }

  describirse() {
    return (
      this.quienSoy() + " y soy alumno de la academia con legajo " + this.legajo
    );
  }
}

let alumno=new Alumno('Marcos', 'Gual', 35, 119923);

console.log(alumno.describirse());