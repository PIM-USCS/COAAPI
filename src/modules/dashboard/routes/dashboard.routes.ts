import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import ShowCobrancaByStatusService from "../services/GetValorGuiasService";
import CobrancaController from "../controller/GetValorGuiasController";

const dashboardRouter = Router();
const cobrancaController = new CobrancaController();

dashboardRouter.get(
  "/guias-status/:id_empresa",
  celebrate({
    [Segments.PARAMS]: {
      id_empresa: Joi.string().required(),
    },
  }),
  cobrancaController.findByStatus
);

export default dashboardRouter;
