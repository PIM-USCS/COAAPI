import CreateCobrancaService from "../modules/cobrancas/services/CreateCobrancaService";
import { getCustomRepository } from "typeorm";

jest.mock("typeorm", () => ({
  ...jest.requireActual("typeorm"),
  getCustomRepository: jest.fn(),
}));

describe("CreateCobrancaService", () => {
  it("deve criar uma nova cobrança", async () => {
    const mockCreate = jest.fn().mockReturnValue({
      vencimento_cobranca: "2023-12-01",
      emissao_cobranca: "2023-11-01",
      valor: "R$ 100,00",
      status: "Em Aberto",
      arquivo: "cobranca.pdf",
      id_empresa: "algum-id",
      tipoguia: "Boleto",
    });

    const mockSave = jest.fn();

    (getCustomRepository as jest.Mock).mockReturnValue({
      create: mockCreate,
      save: mockSave,
    });

    const createCobrancaService = new CreateCobrancaService();

    const cobranca = await createCobrancaService.execute({
      vencimento_cobranca: "2023-12-01",
      emissao_cobranca: "2023-11-01",
      valor: "R$ 100,00",
      status: "Em Aberto",
      arquivo: "cobranca.pdf",
      id_empresa: "algum-id",
      tipoguia: "Boleto",
    });

    expect(mockCreate).toHaveBeenCalledWith({
      vencimento_cobranca: "2023-12-01",
      emissao_cobranca: "2023-11-01",
      valor: "R$ 100,00",
      status: "Em Aberto",
      arquivo: "cobranca.pdf",
      id_empresa: "algum-id",
      tipoguia: "Boleto",
    });

    expect(mockSave).toHaveBeenCalledWith({
      vencimento_cobranca: "2023-12-01",
      emissao_cobranca: "2023-11-01",
      valor: "R$ 100,00",
      status: "Em Aberto",
      arquivo: "cobranca.pdf",
      id_empresa: "algum-id",
      tipoguia: "Boleto",
    });

    
    expect(cobranca).toEqual({
      vencimento_cobranca: "2023-12-01",
      emissao_cobranca: "2023-11-01",
      valor: "R$ 100,00",
      status: "Em Aberto",
      arquivo: "cobranca.pdf",
      id_empresa: "algum-id",
      tipoguia: "Boleto",
    });
  });
});
