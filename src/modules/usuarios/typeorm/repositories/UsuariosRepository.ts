import { EntityRepository, Repository } from "typeorm";
import Usuario from "../entities/Usuario";

@EntityRepository(Usuario)
class UsuariosRepostiroy extends Repository<Usuario> {
  public async findByEmail(email: string): Promise<Usuario | undefined> {
    const usuario = await this.findOne({
      where: { email },
    });
    return usuario;
  }

  public async findById(id: string): Promise<Usuario | undefined> {
    const usuario = await this.findOne({
      where: { id },
    });
    return usuario;
  }
}

export default UsuariosRepostiroy;
