import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import SessionsController from "../controller/SessionsController";
const sessionsRouter = Router();
const sessionsController = new SessionsController();

// sessionsRouter.get("/", sessionsController.index);

// sessionsRouter.get(
//   "/:id",
//   celebrate({
//     [Segments.PARAMS]: {
//       id: Joi.string().required(),
//     },
//   }),
//   sessionsController.show
// );

sessionsRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      senha: Joi.string().required(),
    },
  }),
  sessionsController.create
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

export default sessionsRouter;
