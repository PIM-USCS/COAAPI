import { Request, Response } from "express";
import ShowCobrancaByStatusService from "../services/GetValorGuiasService";

class CobrancaController {
  public async findByStatus(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { id_empresa } = request.params;

      const showCobrancaService = new ShowCobrancaByStatusService();
      const cobrancas = await showCobrancaService.execute({ id_empresa });

      return response.json(cobrancas);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

export default CobrancaController;
