const db = [
  { id: 1, nombre: "Paula" },
  { id: 2, nombre: "Andrés" },
  { id: 3, nombre: "Agustina" },
  { id: 4, nombre: "Estefanía" },
  { id: 5, nombre: "Martina" },
];

// console.log(db.length);

const buscarId = (id) => {
  const res = db.find((el) => el.id === id);

  const promesa = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (res) {
        resolve(res);
      } else {
        reject(`No se encontró la persona con el id: ${id}.`);
      }
    }, 1500);
  });

  return promesa;
};

//palabra reservada async: vamos a declarar una función
// que pueda tratar la asincronía
//trata esa asincronía con la palabra reservada await

const app = async () => {
  console.log("----INICIO DE LA APP");

  try {
    const persona1 = await buscarId(3);
    console.log(persona1);
    const persona2 = await buscarId(6);
    console.log(persona2);
  } catch (error) {
    console.log("----", error);
  }
  console.log("----Fin de la función async");
};

app();
console.log("----FIN");