import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import multer from "multer";
import uploadConfig from "@config/upload";
import UsuariosController from "../controller/UsuariosController";
import UsuariosAvatarController from "../controller/UsuariosAvatarController";

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
      id_empresa: Joi.string(),
      id_colaborador: Joi.string(),
    },
  }),
  usuariosController.create
);

usuariosRouter.patch(
  "/avatar/:id",
  upload.single("avatar"),
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string(),
    },
  }),
  usuariosAvatarController.update
);

usuariosRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string(),
      senha: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  usuariosController.update
);

usuariosRouter.put(
  "/recuperar-senha/:token",
  celebrate({
    [Segments.BODY]: {
      newPassword: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      token: Joi.string().required(),
    },
  }),
  usuariosController.resetPassword
);

usuariosRouter.post(
  "/forgot-password",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  usuariosController.RecuperarSenhaController
);

export default usuariosRouter;
