const { Router } = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
  usuariosGetId,
} = require("../controllers/Usuarios");

const router = Router();

router.get("/", usuariosGet);

router.get("/:id", usuariosGetId);

router.post("/", usuariosPost);

router.put("/", usuariosPut);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);

module.exports = router;
