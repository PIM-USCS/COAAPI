import clientesRouter from "@modules/clientes/routes/clientes.routes";

import { Router } from "express";

const routes = Router();

routes.use("/clientes", clientesRouter);

routes.get("/", (request, response) => {
  return response.json({ message: "Hello Dev!" });
});

export default routes;
