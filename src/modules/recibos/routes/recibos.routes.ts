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
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  reciboController.show
);

reciboRouter.post(
  "/:cobranca_id",
  celebrate({
    [Segments.BODY]: {
      data_recibo: Joi.string().required(),
      arquivo: Joi.string(),
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

// reciboRouter.put(
//   "/:id",
//   celebrate({
//     [Segments.BODY]: {
//       tipo_cliente: Joi.string(),
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
//       cliente: Joi.string(),
//     },
//     [Segments.PARAMS]: {
//       id: Joi.string().required(),
//     },
//   }),
//   reciboController.update
// );

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
