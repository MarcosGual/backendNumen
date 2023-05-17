// Node.js program to demonstrate the
// response.write() Method

// Importing http module
var http = require("http");

// Setting up PORT
const PORT = process.env.PORT || 3000;

// Creating http Server
var httpServer = http.createServer(function (request, response) {
    console.log(request.url, request.params)
  if (request.url === "/") {
    // Writing string data
    response.write("Heyy geeksforgeeks ", () => {
      console.log("Writing string Data...");
    });
    response.end("ok");
  }

  if (request.url === "/:nombre/:apellido") {
    const { nombre, apellido } = request.params;
    response.send(`Hola, ${nombre} ${apellido}`);
    response.end();
  }
});

// Listening to http Server
httpServer.listen(PORT, () => {
  console.log("Server is running at port 3000...");
});
