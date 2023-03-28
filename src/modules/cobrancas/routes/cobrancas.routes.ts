import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import CobrancasController from "../controller/CobrancasController";

const cobrancasRouter = Router();
const cobrancasController = new CobrancasController();

const arraySchema = Joi.array().items(
  Joi.object({
    data_recibo: Joi.date().required(),
    mimeType: Joi.string().required(),
    data: Joi.string().required(),
  })
);

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

// cobrancasRouter.post(
//   "/",
//   celebrate({
//     [Segments.BODY]: {
//         vencimento_cobranca: Joi.date().required,
//         emissao_cobranca: Joi.date().required,
//         recibo: arraySchema,
//         mimeType: ;
//         data: Buffer.from(fileContent),
//         valor: Joi.string(),
//         status: Joi.string(),
//     },
//   }),
//   cobrancasController.create
// );

// cobrancasRouter.put(
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
//   cobrancasController.update
// );

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
