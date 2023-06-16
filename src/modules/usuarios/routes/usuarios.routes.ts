import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import multer from "multer";
import uploadConfig from "@config/upload";
import UsuariosController from "../controller/UsuariosController";
import UsuariosAvatarController from "../controller/UsuariosAvatarController";
//import isAuthenticated from "../middleware/isAuthenticated";

const usuariosRouter = Router();
const usuariosController = new UsuariosController();
const usuariosAvatarController = new UsuariosAvatarController();

const upload = multer(uploadConfig);

usuariosRouter.get("/", usuariosController.index);

usuariosRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  usuariosController.show
);

usuariosRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      email: Joi.string().required(),
      senha: Joi.string().required(),
      avatar: Joi.string(),
    },
  }),
  usuariosController.create
);

usuariosRouter.patch(
  "/avatar",
  upload.single("avatar"),
  usuariosAvatarController.update
);

// clientesRouter.put(
//   "/:id",
//   celebrate({
//     [Segments.BODY]: {
//       tipo_cliente: Joi.string(),
//       regime: Joi.string(),
//       cnpj: Joi.string(),
//       ie: Joi.string(),
//       cpf: Joi.string(),
//       rg: Joi.string(),
//       nome: Joi.string(),
//       cep: Joi.string(),
//       rua: Joi.string(),
//       cidade: Joi.string(),
//       uf: Joi.string(),
//       bairro: Joi.string(),
//       numero: Joi.string(),
//       complemento: Joi.string(),
//     },
//     [Segments.PARAMS]: {
//       id: Joi.string().required(),
//     },
//   }),
//   clientesController.update
// );

// clientesRouter.delete(
//   "/:id",
//   celebrate({
//     [Segments.PARAMS]: {
//       id: Joi.string().required(),
//     },
//   }),
//   clientesController.delete
// );

export default usuariosRouter;
