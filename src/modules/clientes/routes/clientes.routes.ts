import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import ClientesController from "../controller/ClientesController";

const clientesRouter = Router();
const clientesController = new ClientesController();

clientesRouter.get("/", clientesController.index);

clientesRouter.get(
  "/:cpf",
  celebrate({
    [Segments.PARAMS]: {
      cpf: Joi.string().required(),
    },
  }),
  clientesController.show
);

clientesRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      cpf: Joi.string().required(),
      nome: Joi.string().required(),
      telefone: Joi.string().required(),
      cep: Joi.string().required(),
      rua: Joi.string().required(),
      cidade: Joi.string().required(),
      bairro: Joi.string().required(),
      uf: Joi.string().required(),
      numero: Joi.string().required(),
      complemento: Joi.string(),
    },
  }),
  clientesController.create
);

clientesRouter.put(
  "/:cpf",
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string(),
      telefone: Joi.string(),
      cep: Joi.string(),
      rua: Joi.string(),
      cidade: Joi.string(),
      bairro: Joi.string(),
      uf: Joi.string(),
      numero: Joi.string(),
      complemento: Joi.string(),
    },
    [Segments.PARAMS]: {
      cpf: Joi.string().required(),
    },
  }),
  clientesController.update
);

clientesRouter.delete(
  "/:cpf",
  celebrate({
    [Segments.PARAMS]: {
      cpf: Joi.string().required(),
    },
  }),
  clientesController.delete
);

export default clientesRouter;
