let perro: string = "samson";
let gato: string = "gatito";
let anios: number = 10;
let esVerdadero: boolean = true;

let perros: string[] = ["juancito", perro];
let edades: number[] = [10, 12, 8, 2, anios];
let verdaderos: boolean[] = [true, false, false, esVerdadero];
let deTodo: any[] = [perro, gato, anios, esVerdadero];

let persona1: Persona = {
  nombre: "juancito",
  apellido: "perez",
  edad: 25,
};

let persona2: Persona = {
  nombre: "martita",
  apellido: "gonzalez",
  edad: 25,
};

// let gatito={
//     nombre: 'sopita',
//     edad: 4
// }

let personas: Persona[] = [persona1, persona2];

const suma = (a: number, b: number): number => a + b;

const saludar = (nombre: string): string => `Hola, ${nombre}`;

const saludo = function (): void {
  const hola = "hola";
  console.log(hola);
};

interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
}

const dividirPromise = (divisor: number, dividendo: number): Promise<any> => {
  return new Promise((res, rej) => {
    if (divisor === 0) {
      rej("no se puede dividir por cero");
    } else {
      res(dividendo / divisor);
    }
  });
};

class Usuario {
  private usuario: string;
  private pass: string;
  private email: string;

  constructor(usuario: string, pass: string, email: string) {
    this.usuario = usuario;
    this.pass = pass;
    this.email = email;
  }

  datosUsuario(): string {
    return `Nombre de usuario: ${this.usuario}; Email: ${this.email}`;
  }
}
