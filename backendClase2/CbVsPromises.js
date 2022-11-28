//función recuperar dinero declarada con callback

function recuperarDinero(dinero, callback) {
  if (typeof dinero !== "number") {
    callback(null, new Error("Dinero debe ser un número!"));
  } else {
    callback(dinero);
  }
}

function cb(dinero, error) {
  if (dinero !== null) {
    console.log(`Se recuperaron ${dinero} pesos!`);
  } else {
    console.log(error.message);
  }
}

recuperarDinero(2000, cb);

// función recuperar dinero utilizando promesa (Promise)

function recuperarDineroPromise(dinero) {
  return new Promise((resuelve, rechaza) => {
    if (typeof dinero !== "number") {
      rechaza(new Error("Dinero debe ser un número!"));
    } else {
      resuelve(dinero);
    }
  });
}

recuperarDineroPromise("2000")
  .then((dinero) => {
    console.log(`Se recuperaron ${dinero} pesos!`);
  })
  .catch((error) => console.log(error.message));

// -------------------------------------------------
// función cuadradoCallback: ejemplo de callback hell

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(2, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(3, (value, result) => {
              console.log(`Callback: ${value}, ${result}`);
              cuadradoCallback(4, (value, result) => {
                  console.log(`Callback: ${value}, ${result}`);
                  cuadradoCallback(5, (value, result) => {
                      console.log(`Callback: ${value}, ${result}`);
                      console.log("Fin Callback");
                      console.log("Callback Hell !!!!!😈🤘");
                      console.log("http://callbackhell.com/");
                  });
              });
          });
      });
  });
});

//función cuadrado resuelta con promesas (cuadradoPromise)

//declaración de la función que va a devolver la promesa
function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor " ${value} " ingresado no es un número`
    );
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //éxito
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 2000));
  });
}

//llamado y ejecución de la función que devuelve la promesa,
// utilizando then para los éxitos y catch para el error
cuadradoPromise(0)
  .then((obj) => {
    //console.log(obj);
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin Promise");
  })
  .catch((err) => console.error(err));

  function recuperarDineroCb(montoDeDinero, callback) {
    if (typeof montoDeDinero !== "number") {
      callback(null, new Error("El monto debe ser un número!"));
    } else {
      callback(montoDeDinero);
    }
  }
  
  function cb(monto, error) {
    if (error || !monto) {
      console.error("Error: ", error.message);
    } else {
      console.log(`El monto recuperado es de ${monto}`);
    }
  }
  
  //recuperarDineroCb(2000, cb);
  
  // function recuperarDineroPromise(montoDeDinero) {
  //   return new Promise((resolucion, rechazo) => {
  //     if (typeof montoDeDinero !== "number") {
  //       rechazo(new Error("El monto debe ser un número!"));
  //     } else {
  //       resolucion(montoDeDinero);
  //     }
  //   });
  // }
  
  // recuperarDineroPromise("1200")
  //   .then((monto) => console.log(`El monto de ${monto} se ha recuperado!`))
  //   .catch((error) => console.log(`Error: ${error.message}`));
  
  const db = [
    {
      id: 1,
      nombre: "Julieta",
    },
    {
      id: 2,
      nombre: "Fernando",
    },
    {
      id: 3,
      nombre: "Juan Cruz",
    },
    {
      id: 4,
      nombre: "Melina",
    },
    {
      id: 5,
      nombre: "Santiago",
    },
    {
      id: 6,
      nombre: "Nicolás",
    },
  ];
  
  const buscarId = (id) => {
    const respuesta = db.find((ele) => ele.id == id);
  
    return new Promise((resuelve, rechaza) => {
      setTimeout(() => {
        if (respuesta) {
          resuelve(respuesta);
        } else {
          rechaza(new Error(`No se pudo encontrar a la persona con el id ${id}`));
        }
      }, 2000);
    });
  };
  
  const app = async () => {
    console.log("--INICIO DE LA OPERACIÓN--");
    try {
      const finalizado = Promise.all([await buscarId(4), await buscarId(5)]);
      const resultado = await finalizado;
      console.log(resultado);
  
      const persona1 = await buscarId("amdksam");
      console.log(persona1);
  
      const persona2 = await buscarId(3);
      console.log(persona2);
    } catch (error) {
      console.log("-----ERROR: ", error.message);
    }
  
    console.log("--FIN DE LA FUNCIÓN ASYNC--");
  };
  
  app();
  console.log("Hola");
  
  function hacerArrozCb() {
    console.log("Paso 1: Poner agua en una olla");
    console.log("Paso 2: Esperar a que hierva");
    setTimeout(() => {
      console.log("Paso 3: Añadir el arroz");
      console.log("Paso 4: Esperar a que se cocine 15 minutos");
      setTimeout(() => {
          console.log("Paso 5: Servir");
          setTimeout(() => {
              console.log("Paso 6: Esperar para que repose");
              console.log("Fin de Receta");
            }, 2000);
        }, 2000);
    },2000);
  }
  
  function hacerArroz() {
    console.log("Paso 1: Poner agua en una olla");
    setTimeout(() => console.log("Paso 2: Esperar a que hierva"), 1000);
    console.log("Paso 3: Añadir el arroz");
    setTimeout(
      () => console.log("Paso 4: Esperar a que se cocine 15 minutos"),
      2000
    );
    console.log("Paso 5: Servir");
    setTimeout(() => console.log("Paso 6: Esperar para que repose"), 1000);
    console.log("Fin de Receta");
  }
  
  // console.log("Inicio Receta de Arroz");
  // hacerArrozCb();
  
  // function recuperarDinero(dinero, callback) {
  //   if (typeof dinero != "number") {
  //     callback(
  //       null,
  //       new Error("El argumento dinero debe ser de tipo número (number)")
  //     );
  //   } else {
  //     callback(dinero);
  //   }
  // }
  
  // function cb(dinero, error) {
  //   if (dinero != null) {
  //     console.log(`Se recuperaron ${dinero} pesos`);
  //   } else {
  //     console.log(error.message);
  //   }
  // }
  
  // recuperarDinero(1000, cb);
  //recuperarDinero('1000', cb);
  
  // function recuperarDineroPromise(dinero) {
  //   return new Promise((resuelve, rechaza) => {
  //     if (typeof dinero != "number") {
  //       rechaza(new Error("El dinero debe ser un número!!"));
  //     } else {
  //       resuelve(dinero);
  //     }
  //   });
  // }
  
  // recuperarDineroPromise(1500)
  //   .then((dinero) => {
  //     console.log(`Se recuperaron ${dinero} pesos`);
  //   })
  //   .catch((error) => console.log('Error: ', error.message))
  //   .finally(()=>console.log('Promesa terminada'))
  
  // const db = [
  //   {
  //     id: 1,
  //     nombre: "Julieta",
  //   },
  //   {
  //     id: 2,
  //     nombre: "Fernando",
  //   },
  //   {
  //     id: 3,
  //     nombre: "Juan Cruz",
  //   },
  //   {
  //     id: 4,
  //     nombre: "Melina",
  //   },
  // ];
  
  // const buscarId = (id) => {
  //   const res = db.find((elemento) => (elemento.id === id));
  
  //   return new Promise(function (resuelve, rechaza) {
  //     setTimeout(() => {
  //       if (res) {
  //         resuelve(res);
  //       } else {
  //         rechaza(new Error(`No se pudo encontrar a la persona con id ${id}...`));
  //       }
  //     }, 1500);
  //   });
  // };
  
  // const app = async function () {
  //   console.log("Inicio");
  
  //   try {
  //     const persona1 = await buscarId(4);
  //     console.log(persona1);
  //     const persona2 = await buscarId(7);
  //     console.log(persona2);
  //   } catch (error) {
  //     console.log('error: ', error.message);
  //   }
  //   console.log('Finalización promesas...')
  // };
  
  // app();
  // console.log('Fin')