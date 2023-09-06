import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import ColaboradorController from "../controller/ColaboradorController";

const colaboradorRouter = Router();
const colaboradorController = new ColaboradorController();

colaboradorRouter.get("/", colaboradorController.index);

// colaboradorRouter.get(
//   "/:id",
//   celebrate({
//     [Segments.PARAMS]: {
//       id: Joi.string().required(),
//     },
//   }),
//   colaboradorController.show
// );

colaboradorRouter.get(
  "/:nome",
  celebrate({
    [Segments.PARAMS]: {
      nome: Joi.string().required(),
    },
  }),
  colaboradorController.show
);

colaboradorRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string(),
      telefone: Joi.string(),
    },
  }),
  colaboradorController.create
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

colaboradorRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  colaboradorController.delete
);

export default colaboradorRouter;
