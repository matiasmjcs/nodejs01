const express = require("express");
const cors = require("cors");
const { dbConection } = require("../database/Config");

class Server {
  constructor() {
    this.port = process.env.PORT;
    this.app = express();
    this.dataBase();
    this.middlewares();
    this.router();
  }

  async dataBase() {
    await dbConection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  router() {
    this.app.use("/usuarios", require("../routes/Usuarios"));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`servidor corriendo en el puerto ${this.port}`)
    );
  }
}

module.exports = Server;
