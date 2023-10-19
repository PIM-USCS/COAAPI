import { Request, Response } from "express";
import UpdateReciboImageService from "../services/UpdateReciboImageService";

export default class ReciboImageController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const updateRecibo = new UpdateReciboImageService();

      const recibo = await updateRecibo.execute({
        id,
        reciboFilename: request.file?.filename as string,
      });

      return response.json(recibo);
    } catch (error) {
      console.log(error);
      return response.status(500).json();
    }
  }
}
