import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import RegimeController from "../controller/RegimeController";

const regimeRouter = Router();
const regimeController = new RegimeController();

regimeRouter.get("/", regimeController.index);

regimeRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  regimeController.show
);

regimeRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      descricao: Joi.string().required(),
    },
  }),
  regimeController.create
);

regimeRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      descricao: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  regimeController.update
);

regimeRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  regimeController.delete
);

export default regimeRouter;
