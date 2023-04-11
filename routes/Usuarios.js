const { Router } = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
  usuariosGetId,
} = require("../controllers/Usuarios");
const { check } = require("express-validator");
const validarCampos = require("../middlewares/validar-campos");

const router = Router();

router.get("/", usuariosGet);

router.get("/:id", usuariosGetId);

router.post(
  "/",
  check("nombre", "profavor, ingrese un nombre").not().isEmpty(),
  check("password", "el password debe tener minimo 6 caracteres").isLength({
    min: 6,
  }),
  check("correo", "profavor, ingrese un correo valido").isEmail(),
  check("rol", "no es un rol valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
  validarCampos,
  usuariosPost
);

router.put("/", usuariosPut);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);

module.exports = router;
