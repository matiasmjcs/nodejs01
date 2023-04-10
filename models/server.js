const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.router();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  router() {
    this.app.use("/usuarios", require("../routes/Usuarios"));
  }

  listen() {
    this.app.listen(3000, () => console.log(`servidor corriendo`));
  }
}

module.exports = Server;
