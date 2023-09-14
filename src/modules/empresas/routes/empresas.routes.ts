import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import EmpresaController from "../controller/EmpresaController";

const empresaRouter = Router();
const empresaController = new EmpresaController();

empresaRouter.get("/", empresaController.index);

empresaRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  empresaController.show
);

empresaRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      id_cliente: Joi.string(),
      tipo_cliente: Joi.string(),
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
      id_colaborador: Joi.string(),
    },
  }),

  empresaController.create
);

empresaRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      tipo_cliente: Joi.string(),
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
      cliente: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  empresaController.update
);

empresaRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  empresaController.delete
);

export default empresaRouter;
