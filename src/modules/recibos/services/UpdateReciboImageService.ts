import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";

import path from "path";
import fs from "fs";
import uploadConfig from "@config/upload";
import { Recibos } from "../typeorm/entities/Recibos";
import { ReciboRepository } from "../typeorm/repositories/ReciboRepository";

interface IRequest {
  id: string;
  reciboFilename: string;
}

class UpdateReciboImageService {
  public async execute({ id, reciboFilename }: IRequest): Promise<Recibos> {
    const recibosRepository = getCustomRepository(ReciboRepository);

    const recibo = await recibosRepository.findById(id);

    if (!recibo) {
      throw new AppError("Recibo não encontrado");
    }

    if (recibo.arquivo) {
      const reciboImageFilePath = path.join(
        uploadConfig.directory,
        recibo.arquivo
      );
      const reciboFileExists = await fs.promises.stat(reciboImageFilePath);

      if (reciboFileExists) {
        await fs.promises.unlink(reciboImageFilePath);
      }
    }

    recibo.arquivo = reciboFilename;

    await recibosRepository.save(recibo);

    return recibo;
  }
}

export default UpdateReciboImageService;
