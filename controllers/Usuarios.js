const { response } = require("express");

const usuariosGet = (req, res = response) =>
  res.json({ msg: "get api - controlador" });

const usuariosPost = (req, res = response) =>
  res.json({ msg: "Post api - controlador" });

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
};
