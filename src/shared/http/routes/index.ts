import clientesRouter from "@modules/clientes/routes/clientes.routes";
import sessionsRouter from "@modules/usuarios/routes/sessions.routes";
import usuariosRouter from "@modules/usuarios/routes/usuarios.routes";

import { Router } from "express";

const routes = Router();

routes.use("/clientes", clientesRouter);
routes.use("/usuarios", usuariosRouter);
routes.use("/sessions", sessionsRouter);

routes.get("/", (request, response) => {
  return response.json({ message: "Hello Dev!" });
});

export default routes;
