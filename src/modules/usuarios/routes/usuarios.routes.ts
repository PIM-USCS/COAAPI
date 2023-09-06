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
      email: Joi.string().required(),
      senha: Joi.string().required(),
      tipo_usuario: Joi.string().required(),
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

usuariosRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  usuariosController.update
);

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
