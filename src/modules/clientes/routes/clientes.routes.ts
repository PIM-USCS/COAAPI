import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import ClientesController from "../controller/ClientesController";

const clientesRouter = Router();
const clientesController = new ClientesController();

clientesRouter.get("/", clientesController.index);

clientesRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  clientesController.show
);

clientesRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      tipo_cliente: Joi.string().required(),
      regime: Joi.string(),
      cnpj: Joi.string(),
      ie: Joi.string(),
      cpf: Joi.string(),
      rg: Joi.string(),
      nome: Joi.string().required(),
      cep: Joi.string().required(),
      rua: Joi.string().required(),
      cidade: Joi.string().required(),
      uf: Joi.string().required(),
      bairro: Joi.string().required(),
      numero: Joi.string().required(),
      complemento: Joi.string(),
    },
  }),
  clientesController.create
);

clientesRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      tipo_cliente: Joi.string(),
      regime: Joi.string(),
      cnpj: Joi.string(),
      ie: Joi.string(),
      cpf: Joi.string(),
      rg: Joi.string(),
      nome: Joi.string(),
      cep: Joi.string(),
      rua: Joi.string(),
      cidade: Joi.string(),
      uf: Joi.string(),
      bairro: Joi.string(),
      numero: Joi.string(),
      complemento: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  clientesController.update
);

clientesRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  clientesController.delete
);

export default clientesRouter;
