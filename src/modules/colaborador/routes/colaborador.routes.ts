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

colaboradorRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  colaboradorController.showByID
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

colaboradorRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string(),
      telefone: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  colaboradorController.update
);

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
