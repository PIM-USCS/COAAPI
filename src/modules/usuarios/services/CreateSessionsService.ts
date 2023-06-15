import AppError from '@shared/errors/AppError'
import { compare, hash } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import Usuario from '../typeorm/entities/Usuario'
import UsuariosRepostiroy from '../typeorm/repositories/UsuariosRepository'

interface IRequest {
  email: string
  senha: string
}


class CreateSessionsService {
  public async execute({ email, senha }: IRequest): Promise<Usuario> {
    const usuariosRepository = getCustomRepository(UsuariosRepostiroy)
    const user = await usuariosRepository.findByNome(email)

    if (!user) {
      throw new AppError('Usuário/senha esta incorreto!')
    }

    const senhaConfirmed = await compare(senha, user.senha)

    if (!senhaConfirmed) {
      throw new AppError('Senha esta incorreta!')
    }

    return user
  }
}

export default CreateSessionsService
