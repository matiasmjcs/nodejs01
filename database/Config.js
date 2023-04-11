const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("base de datos conectada");
  } catch (error) {
    console.log(error);
    throw new Error("error database");
  }
};

module.exports = { dbConection };
