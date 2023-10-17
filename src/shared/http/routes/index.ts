import clientesRouter from "@modules/clientes/routes/clientes.routes";
import cobrancasRouter from "@modules/cobrancas/routes/cobrancas.routes";
import colaboradorRouter from "@modules/colaborador/routes/colaborador.routes";
import dashboardRouter from "@modules/dashboard/routes/dashboard.routes";
import empresaRouter from "@modules/empresas/routes/empresas.routes";
import reciboRouter from "@modules/recibos/routes/recibos.routes";
import regimeRouter from "@modules/regime/routes/regime.routes";
import uploadsRouter from "@modules/usuarios/routes/file.routes";
import sessionsRouter from "@modules/usuarios/routes/sessions.routes";
import usuariosRouter from "@modules/usuarios/routes/usuarios.routes";

import { Router } from "express";

const routes = Router();

routes.use("/clientes", clientesRouter);
routes.use("/usuarios", usuariosRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/regimes", regimeRouter);
routes.use("/empresas", empresaRouter);
routes.use("/colaborador", colaboradorRouter);
routes.use("/recibos", reciboRouter);
routes.use("/cobrancas", cobrancasRouter);
routes.use("/dashboard", dashboardRouter);
routes.use("/uploads", uploadsRouter);
routes.get("/", (request, response) => {
  return response.json({ message: "Hello Dev!" });
});

export default routes;
