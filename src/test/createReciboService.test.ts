
import CreateReciboService from "../modules/recibos/services/CreateReciboService";
import { getCustomRepository } from "typeorm";




jest.mock('typeorm', () => ({
  ...jest.requireActual('typeorm'),
  getCustomRepository: jest.fn(),
}));

describe('CreateReciboService', () => {
  it('deve criar um novo recibo', async () => {

    const mockCreate = jest.fn().mockReturnValue({
      id: 'novo-id',
      cobranca_id: 'cobranca-id',
      data_recibo: '2023-11-22',
      arquivo: 'arquivo-base64',
  
    });


    (getCustomRepository as jest.Mock).mockReturnValue({
      create: mockCreate,
      save: jest.fn(),
    });

    const createReciboService = new CreateReciboService();


    expect(mockCreate).not.toHaveBeenCalled();

    const novoRecibo = await createReciboService.execute({
      cobranca_id: 'cobranca-id',
      data_recibo: '2023-11-22',
      arquivo: 'arquivo-base64',
    });


    expect(mockCreate).toHaveBeenCalledWith({
      cobranca_id: 'cobranca-id',
      data_recibo: '2023-11-22',
      arquivo: 'arquivo-base64',
    });


    expect(novoRecibo).toEqual({
      id: 'novo-id',
      cobranca_id: 'cobranca-id',
      data_recibo: '2023-11-22',
      arquivo: 'arquivo-base64',

    });
  });
});
