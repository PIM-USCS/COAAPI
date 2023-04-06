// import { Request, Response } from "express";
// import CreateUsuarioService from "../services/CreateUsuarioService";
// import ListUsuarioService from "../services/ListUsuarioService";
// import ShowUsuarioService from "../services/ShowUsuarioService";
// import ListColaboradorService from "../services/ListColaboradorService";
// import ShowColaboradorService from "../services/ShowColaboradorService";

// export default class ColaboradorController {
//   public async index(request: Request, response: Response): Promise<Response> {
//     try {
//       const listColaborador = new ListColaboradorService();

//       const colaborador = await listColaborador.execute();

//       return response.json(colaborador);
//     } catch (error) {
//       console.error(error);
//       return response.status(500).json();
//     }
//   }
//   public async show(request: Request, response: Response): Promise<Response> {
//     try {
//       {
//         const { id } = request.params;
//         const showColaborador = new ShowColaboradorService();

//         const colaborador = await showColaborador.execute({ id });
//         return response.json(colaborador);
//       }
//     } catch (error) {
//       console.error(error);
//       return response.status(500).json();
//     }
//   }
//   public async create(request: Request, response: Response): Promise<Response> {
//     try {
//       const { nome, senha, avatar } = request.body;
//       const createUsuario = new CreateUsuarioService();

//       const usuarios = await createUsuario.execute({
//         nome,
//         senha,
//         avatar,
//       });
//       return response.json(usuarios);
//     } catch (error) {
//       console.error(error);
//       return response.status(500).json();
//     }
//   }
//   //   public async update(request: Request, response: Response): Promise<Response> {
//   //   }
//   //   public async delete(request: Request, response: Response): Promise<Response> {
// }
