import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import CobrancasController from "../controller/CobrancasController";

const cobrancasRouter = Router();
const cobrancasController = new CobrancasController();

cobrancasRouter.get("/", cobrancasController.index);

cobrancasRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  cobrancasController.show
);

cobrancasRouter.post(
  "/:id_empresa",
  celebrate({
    [Segments.BODY]: {
      vencimento_cobranca: Joi.string(),
      emissao_cobranca: Joi.string(),
      arquivo: Joi.string(),
      valor: Joi.string(),
      status: Joi.string(),
    },
  }),
  cobrancasController.create
);

cobrancasRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  cobrancasController.delete
);

export default cobrancasRouter;
