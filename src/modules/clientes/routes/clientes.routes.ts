import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import ClientesController from "../controller/ClientesController";

const clientesRouter = Router();
const clientesController = new ClientesController();

clientesRouter.get("/", clientesController.index);

clientesRouter.get(
  "/:id_empresa",
  celebrate({
    [Segments.PARAMS]: {
      id_empresa: Joi.string().required(),
    },
  }),
  clientesController.show
);

clientesRouter.get(
  "/getCPF/:cpf",
  celebrate({
    [Segments.PARAMS]: {
      cpf: Joi.string().required(),
    },
  }),
  clientesController.showByCPF
);

clientesRouter.post(
  "/:id_empresa",
  celebrate({
    [Segments.BODY]: {
      cpf: Joi.string(),
      rg: Joi.string(),
      nome: Joi.string(),
      telefone: Joi.string(),
      email: Joi.string(),
      usuario: Joi.string(),
    },
    [Segments.PARAMS]: {
      id_empresa: Joi.string(),
    },
  }),
  clientesController.create
);

clientesRouter.put(
  "/:id_empresa",
  celebrate({
    [Segments.BODY]: {
      cpf: Joi.string(),
      rg: Joi.string(),
      nome: Joi.string(),
      telefone: Joi.string(),
      email: Joi.string(),
      usuario: Joi.string(),
    },
    [Segments.PARAMS]: {
      id_empresa: Joi.string().required(),
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
