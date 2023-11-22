import CreateColaboradorService from "../modules/colaborador/services/CreateColaboradorService";
import { getCustomRepository } from "typeorm";

jest.mock("typeorm", () => ({
  ...jest.requireActual("typeorm"),
  getCustomRepository: jest.fn(),
}));

describe("CreateColaboradorService", () => {
  it("deve criar um novo colaborador", async () => {
    const mockFindById = jest.fn().mockReturnValue({
      id: "2",
      nome: "NomeExistente",
      telefone: "123456789",
    });

    const mockCreate = jest.fn().mockReturnValue({
      id: "1",
      nome: "NovoColaborador1",
      telefone: "987654321",
    });

    (getCustomRepository as jest.Mock).mockReturnValue({
      findById: mockFindById,
      create: mockCreate,
      save: jest.fn(),
    });

    const createColaboradorService = new CreateColaboradorService();

   
    const novoColaborador = await createColaboradorService.execute({
      nome: "NovoColaborador1",
      telefone: "987654321",
    });

    expect(novoColaborador).toEqual({
      id: "1",
      nome: "NovoColaborador1",
      telefone: "987654321",
    });
  });
});
