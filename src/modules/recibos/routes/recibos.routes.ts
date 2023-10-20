import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import RecibosController from "../controller/RecibosController";
import multer from "multer";
import uploadConfig from "@config/upload";
import ReciboImageController from "../controller/ReciboImageController";
const reciboRouter = Router();
const reciboController = new RecibosController();
const reciboImagemController = new ReciboImageController();
const upload = multer(uploadConfig);

reciboRouter.get("/", reciboController.index);

reciboRouter.get(
  "/:cobranca_id",
  celebrate({
    [Segments.PARAMS]: {
      cobranca_id: Joi.string().required(),
    },
  }),
  reciboController.showByIDCobranca
);

reciboRouter.post(
  "/:cobranca_id",
  celebrate({
    [Segments.BODY]: {
      data_recibo: Joi.string().required(),
    },
  }),

  reciboController.create
);

reciboRouter.patch(
  "/anexo/:id",
  upload.single("anexo"),
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string(),
    },
  }),
  reciboImagemController.update
);

reciboRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  reciboController.delete
);

export default reciboRouter;
