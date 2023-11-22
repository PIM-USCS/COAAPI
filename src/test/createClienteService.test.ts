import CreateClienteService from "../../src/modules/clientes/services/CreateClienteService";
import { getCustomRepository } from "typeorm";

jest.mock("typeorm", () => ({
  ...jest.requireActual("typeorm"),
  getCustomRepository: jest.fn(),
}));

interface MockRepository {
  create: jest.Mock;
  save: jest.Mock;
}

describe("CreateClienteService", () => {
  it("deve criar um novo cliente", async () => {
    const mockRepository: MockRepository = {
      create: jest.fn().mockReturnValue({
        cpf: "123456789",
        rg: "987654321",
        nome: "João",
        telefone: "1234567890",
        email: "joao@email.com.br",
        id_empresa: "1",
      }),
      save: jest.fn(),
    };

    (getCustomRepository as jest.Mock).mockReturnValue(mockRepository);

    const createClienteService = new CreateClienteService();

    const cliente = await createClienteService.execute({
      cpf: "123456789",
      rg: "987654321",
      nome: "João",
      telefone: "1234567890",
      email: "joao@email.com.br",
      id_empresa: "1",
    });

    expect(mockRepository.create).toHaveBeenCalledWith({
      cpf: "123456789",
      rg: "987654321",
      nome: "João",
      telefone: "1234567890",
      email: "joao@email.com.br",
      id_empresa: "1",
    });

    expect(mockRepository.save).toHaveBeenCalledWith({
      cpf: "123456789",
      rg: "987654321",
      nome: "João",
      telefone: "1234567890",
      email: "joao@email.com.br",
      id_empresa: "1",
    });

    expect(cliente).toEqual({
      cpf: "123456789",
      rg: "987654321",
      nome: "João",
      telefone: "1234567890",
      email: "joao@email.com.br",
      id_empresa: "1",
    });
  });
});
