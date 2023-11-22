import CreateColaboradorService from "../modules/colaborador/services/CreateColaboradorService";
import { getCustomRepository } from "typeorm";

jest.mock("typeorm", () => ({
  ...jest.requireActual("typeorm"),
  getCustomRepository: jest.fn(),
}));

describe("CreateColaboradorService", () => {
  it("deve criar um novo colaborador", async () => {
    const mockFindById = jest.fn().mockReturnValue({
      id: "algum-id",
      nome: "NomeExistente",
      telefone: "123456789",
    });

    const mockCreate = jest.fn().mockReturnValue({
      id: "novo-id",
      nome: "NovoColaborador1",
      telefone: "987654321",
    });

    (getCustomRepository as jest.Mock).mockReturnValue({
      findById: mockFindById,
      create: mockCreate,
      save: jest.fn(),
    });

    const createColaboradorService = new CreateColaboradorService();

    // Modifique para utilizar a função expect().rejects.toThrowError
    await expect(
      createColaboradorService.execute({
        nome: "NomeExistente",
        telefone: "987654321",
      })
    ).rejects.toThrowError("Já existe um colaborador com este nome");

    // Verificando se o valor retornado é o esperado
    const novoColaborador = await createColaboradorService.execute({
      nome: "NovoColaborador1",
      telefone: "987654321",
    });

    // Verificando se o valor retornado é o esperado
    expect(novoColaborador).toEqual({
      id: "novo-id",
      nome: "NovoColaborador1",
      telefone: "987654321",
    });
  });
});
