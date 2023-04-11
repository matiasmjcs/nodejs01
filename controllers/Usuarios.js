const { response, request } = require("express");
const User = require("../models/usuario");
const bcryptjs = require("bcryptjs");

const usuariosGet = async (req, res = response) => {
  const users = await User.find();
  res.json(users);
};

const usuariosGetId = async (req = request, res = response) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json(user);
};

const usuariosPost = async (req = request, res = response) => {
  const { nombre, correo, password, rol } = req.body;

  const user = new User({ nombre, correo, password, rol });

  const salt = await bcryptjs.genSalt();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();

  res.json(user);
};

const usuariosPut = (req, res = response) =>
  res.json({ msg: "Put api - controlador" });

const usuariosPatch = (req, res = response) =>
  res.json({ msg: "Patch api - controlador" });

const usuariosDelete = async (req, res = response) => {
  await User.deleteMany();
  const users = await User.find();

  res.json(users);
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
  usuariosGetId,
};
