// function hacerArroz() {
//   console.log("Paso 1: poner agua en una olla");
//   setTimeout(() => console.log("Paso 2: esperar a que hierva el agua"), 2000);
//   console.log("Paso 3: agregar el arroz al agua");
//   setTimeout(
//     () => console.log("Paso 4: esperar 15 minutos a que se cocine"),
//     3000
//   );
//   console.log("Paso 5: sacar el arroz y colarlo");
//   setTimeout(() => console.log("Paso 6: esperar a que repose"), 1000);
//   console.log("Paso 7: servir");
//   console.log("Fin de receta");
// }

// console.log("Inicio de receta");
// hacerArroz();

// function hacerArrozCb() {
//   console.log("Paso 1: poner agua en una olla");
//   console.log("Paso 2: esperar a que hierva el agua");
//   //primer setTimeout--> se empiezan a ejecutar las callbacks anidadas
//   setTimeout(() => {
//     //
//     console.log("Paso 3:  agregar el arroz al agua");
//     console.log("Paso 4: esperar 15 minutos a que se cocine");
//     setTimeout(() => {
//       console.log("Paso 5: sacar el arroz y colarlo");
//       setTimeout(() => {
//         console.log("Paso 6: esperar a que repose");
//         console.log("Paso 7: servir");
//         console.log("Fin de receta");
//       }, 1000);
//     }, 3000),
//       2000;
//   }, 2000);
// }

// console.log("Inicio de receta");
// hacerArrozCb();

// function recuperarDinero(dinero, callback) {
//   if (typeof dinero !== "number") {
//     callback(null, new Error("Dinero debe ser un número!"));
//   } else {
//     callback(dinero);
//   }
// }

// function cb(dinero, error) {
//   if (dinero !== null) {
//     console.log(`Se recuperaron ${dinero} pesos...`);
//   } else {
//     console.log(error.message);
//   }
// }

// recuperarDinero("2000", cb)

// function recuperarDineroPromise(dinero) {
//   return new Promise((resuelve, rechaza) => {
//     if (typeof dinero !== "number") {
//       rechaza(new Error("Dinero debe ser un número!"));
//     } else {
//       resuelve(dinero);
//     }
//   });
// }

// recuperarDineroPromise("2000")
//   .then((dinero) => console.log(`Se recuperaron ${dinero} pesos`))
//   .catch((error) => console.log(error.message))
//   .finally(() => console.log("Fin de la operación"));

const db = [
  { id: 1, nombre: "Dante" },
  { id: 2, nombre: "Antonela" },
  { id: 3, nombre: "Florencia" },
  { id: 4, nombre: "Francisco" },
  { id: 5, nombre: "Marcos" },
];

const buscarId = (id) => {
  const resultado = db.find((alumno) => alumno.id === id);

  return new Promise((resolve, reject) => {
    if (resultado) {
      resolve(resultado);
    } else {
      reject(new Error(`No se pudo encontrar a la persona con el id ${id}...`));
    }
  });
};

const app = async () => {
  console.log("---INICIO DE LA APLICACIÓN");

  try {
    const alumno1 = await buscarId(1);
    console.log(alumno1);
    const alumno2 = await buscarId(10);
    console.log(alumno2);
  } catch (error) {
    console.log("---", error.message);
  } finally {
    console.log("---FIN DE LA APLICACIÓN");
  }
  console.log("FIN")
};

app();