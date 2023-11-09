import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import TiposguiaController from "../controller/TiposguiasController";

const tiposguiaRouter = Router();
const tiposguiaController = new TiposguiaController();

tiposguiaRouter.get("/", tiposguiaController.index);

tiposguiaRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  tiposguiaController.show
);

tiposguiaRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      descricao: Joi.string(),
    },
  }),
  tiposguiaController.create
);

tiposguiaRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  tiposguiaController.delete
);

tiposguiaRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      descricao: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  tiposguiaController.update
);
export default tiposguiaRouter;
