import AppError from "@shared/errors/AppError";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from "@config/auth";
import { getCustomRepository } from "typeorm";
import Usuario from "../typeorm/entities/Usuario";
import UsuariosRepostiroy from "../typeorm/repositories/UsuariosRepository";

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  user: Usuario;
  token: string;
}

class CreateSessionsService {
  public async execute({ email, senha }: IRequest): Promise<IResponse> {
    const usuariosRepository = getCustomRepository(UsuariosRepostiroy);
    const user = await usuariosRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Usuário/senha esta incorreto!");
    }

    const senhaConfirmed = await compare(senha, user.senha);

    if (!senhaConfirmed) {
      throw new AppError("Senha esta incorreta!");
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: String(user.id),
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}

export default CreateSessionsService;
