import clientesRouter from "@modules/clientes/routes/clientes.routes";
import usuariosRouter from "@modules/usuarios/routes/usuarios.routes";

import { Router } from "express";

const routes = Router();

routes.use("/clientes", clientesRouter);
routes.use("/usuarios", usuariosRouter);

routes.get("/", (request, response) => {
  return response.json({ message: "Hello Dev!" });
});

export default routes;
