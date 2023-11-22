import CreateEmpresaService from "../modules/empresas/services/CreateEmpresaService";
import { getCustomRepository } from "typeorm";

// Simulando a função getCustomRepository
jest.mock("typeorm", () => ({
  ...jest.requireActual("typeorm"),
  getCustomRepository: jest.fn(),
}));

describe("CreateEmpresaService", () => {
  it("deve criar uma nova empresa", async () => {
    // Simulando a função findByCNPJ do repositório
    const mockFindByCNPJ = jest.fn().mockReturnValue({
      id: "algum-id",
      tipo_cliente: "Pessoa Jurídica",
      cnpj: "12345678901234",
      ativa: "s",
      bairro: "Bairro",
      cep: "1234567",
      cidade: "cidade",
      cpf: "1234567889",
      nome: "nome",
      uf: "uf",
      rua: "rua",
      rg: "rg",
      numero: "123",
      ie: "123456789000",
      id_colaborador: "1",
      complemento: "12455",
    });

    // Simulando a função create do repositório
    const mockCreate = jest.fn().mockReturnValue({
      id: "novo-id",
      tipo_cliente: "Pessoa Jurídica",
      cnpj: "12345678901234",
      ativa: "s",
      bairro: "Bairro",
      cep: "1234567",
      cidade: "cidade",
      cpf: "1234567889",
      nome: "nome",
      uf: "uf",
      rua: "rua",
      rg: "rg",
      numero: "123",
      ie: "123456789000",
      id_colaborador: "1",
      complemento: "12455",
    });

    // Simulando a função getCustomRepository para retornar o repositório com as funções simuladas
    (getCustomRepository as jest.Mock).mockReturnValue({
      findByCNPJ: mockFindByCNPJ,
      create: mockCreate,
      save: jest.fn(),
    });

    const createEmpresaService = new CreateEmpresaService();

    // Verificando se as funções findByCNPJ e create foram chamadas corretamente
    expect(mockFindByCNPJ).toHaveBeenCalledWith("12345678901234");
    expect(mockCreate).not.toHaveBeenCalled();

    // Verificando se o serviço cria uma nova empresa corretamente
    const novaEmpresa = await createEmpresaService.execute({
      tipo_cliente: "Pessoa Jurídica",
      cnpj: "12345678901234",
      ativa: "s",
      bairro: "Bairro",
      cep: "1234567",
      cidade: "cidade",
      cpf: "1234567889",
      nome: "nome",
      uf: "uf",
      rua: "rua",
      rg: "rg",
      numero: "123",
      ie: "123456789000",
      id_colaborador: "1",
      complemento: "12455",
    });

    // Verificando se as funções findByCNPJ e create foram chamadas corretamente
    expect(mockFindByCNPJ).toHaveBeenCalledWith("12345678901234");
    expect(mockCreate).toHaveBeenCalledWith({
      id: "novo-id",
      tipo_cliente: "Pessoa Jurídica",
      cnpj: "12345678901234",
      ativa: "s",
      bairro: "Bairro",
      cep: "1234567",
      cidade: "cidade",
      cpf: "1234567889",
      nome: "nome",
      uf: "uf",
      rua: "rua",
      rg: "rg",
      numero: "123",
      ie: "123456789000",
      id_colaborador: "1",
      complemento: "12455",
    });

    // Verificando se o valor retornado é o esperado
    expect(novaEmpresa).toEqual({
      id: "novo-id",
      tipo_cliente: "Pessoa Jurídica",
      cnpj: "12345678901234",
      ativa: "s",
      bairro: "Bairro",
      cep: "1234567",
      cidade: "cidade",
      cpf: "1234567889",
      nome: "nome",
      uf: "uf",
      rua: "rua",
      rg: "rg",
      numero: "123",
      ie: "123456789000",
      id_colaborador: "1",
      complemento: "12455",
    });
  });
});
