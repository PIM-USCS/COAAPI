import Usuario from '@modules/usuarios/typeorm/entities/Usuario'

declare global {
  namespace Express {
    interface Request {
      usuario?: Usuario
    }
  }
}
export default global
