import CreateTiposguiaService from "../modules/tiposguia/service/CreateTiposguiaService";
import { getCustomRepository } from "typeorm";

jest.mock('typeorm', () => ({
  ...jest.requireActual('typeorm'),
  getCustomRepository: jest.fn(),
}));

describe('CreateTiposguiaService', () => {
  it('deve criar um novo tipo de guia', async () => {

    const mockCreate = jest.fn().mockReturnValue({
      id: '1',
      descricao: 'Tipo de Guia Teste',
    });

    (getCustomRepository as jest.Mock).mockReturnValue({
      create: mockCreate,
      save: jest.fn(),
    });

    const createTiposguiaService = new CreateTiposguiaService();

    expect(mockCreate).not.toHaveBeenCalled();


    const novoTipoGuia = await createTiposguiaService.execute({
      descricao: 'Tipo de Guia Teste',
    });

   
    expect(mockCreate).toHaveBeenCalledWith({
      descricao: 'Tipo de Guia Teste',
    });


    expect(novoTipoGuia).toEqual({
      id: '1',
      descricao: 'Tipo de Guia Teste',

    });
  });
});
