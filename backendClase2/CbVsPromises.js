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