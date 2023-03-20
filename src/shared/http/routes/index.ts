import clientesRouter from "@modules/clientes/routes/clientes.routes";
import itensRouter from "@modules/itens/routes/itens.routes";
import pedidosRouter from "@modules/pedidos/routes/pedidos.routes";

import { Router } from "express";

const routes = Router();

routes.use("/pedidos", pedidosRouter);
routes.use("/clientes", clientesRouter);
routes.use("/itens", itensRouter);

routes.get("/", (request, response) => {
  return response.json({ message: "Hello Dev!" });
});

export default routes;
