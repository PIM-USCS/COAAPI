import { Request, Response } from "express";
import CreateUsuarioService from "../services/CreateUsuarioService";
import ListUsuarioService from "../services/ListUsuarioService";
import ShowUsuarioService from "../services/ShowUsuarioService";
import UpdateUsuarioService from "../services/UpdateUsuarioService";
import jwt from "jsonwebtoken";
import { RecuperarSenhaService } from "../services/RecuperarSenhaService";
import { generateToken } from "../services/generateToken";
import UsuarioRepository from "../typeorm/repositories/UsuariosRepository";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
export default class UsuariosController {
  public async RecuperarSenhaController(req: Request, res: Response) {
    try {
      const { email } = req.body;

      const userRepository = getCustomRepository(UsuarioRepository);
      const user = await userRepository.findByEmail(email);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      const resetToken = generateToken(user.id);

      await RecuperarSenhaService(user.email, resetToken);

      return res.json({
        message:
          "Um e-mail com as instruções foi enviado para o seu endereço de e-mail.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json();
    }
  }
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listUsuarios = new ListUsuarioService();

      const usuarios = await listUsuarios.execute();

      return response.json(usuarios);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      {
        const { id } = request.params;
        const showUsuario = new ShowUsuarioService();

        const usuario = await showUsuario.execute({ id });
        return response.json(usuario);
      }
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { email, senha, avatar, tipo_usuario, id_empresa, id_colaborador } =
        request.body;
      const createUsuario = new CreateUsuarioService();

      const usuarios = await createUsuario.execute({
        email,
        senha,
        avatar,
        tipo_usuario,
        id_empresa,
        id_colaborador,
      });
      return response.json(usuarios);
    } catch (error) {
      console.log(error);
      return response.status(500).json();
    }
  }
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { email, senha } = request.body;
      const { id } = request.params;

      const updateUsuario = new UpdateUsuarioService();
      const usuario = await updateUsuario.execute({
        id,
        email,
        senha,
      });

      return response.json(usuario);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async resetPassword(req: Request, res: Response) {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
      const secret = process.env.JWT_SECRET || "suaChaveSecreta";

      const decodedToken = jwt.verify(token, secret) as { sub: string };

      const userRepository = getCustomRepository(UsuarioRepository);
      const user = await userRepository.findById(decodedToken.sub);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      const newPasswordHash = await hash(newPassword, 8);
      user.senha = newPasswordHash;

      await userRepository.save(user);

      return res.json({ message: "Senha redefinida com sucesso" });
    } catch (error) {
      return res.status(401).json({ error: "Token inválido ou expirado" });
    }
  }
}
