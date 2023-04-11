const { response, request } = require("express");
const User = require("../models/usuario");

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
  const body = req.body;

  const user = new User(body);

  await user.save();

  res.json({ body });
};

const usuariosPut = (req, res = response) =>
  res.json({ msg: "Put api - controlador" });

const usuariosPatch = (req, res = response) =>
  res.json({ msg: "Patch api - controlador" });

const usuariosDelete = (req, res = response) =>
  res.json({ msg: "Delete api - controlador" });

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
  usuariosGetId,
};
