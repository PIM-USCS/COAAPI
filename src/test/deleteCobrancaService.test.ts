import DeleteCobrancasService from '../modules/cobrancas/services/DeleteCobrancaService';
import { getCustomRepository } from "typeorm";


jest.mock('typeorm', () => ({
  ...jest.requireActual('typeorm'),
  getCustomRepository: jest.fn(),
}));

describe('DeleteCobrancasService', () => {
  it('deve deletar uma cobrança existente', async () => {
    const mockFindOne = jest.fn().mockReturnValue({
      id: 'cobranca-id',
    });

    const mockRemove = jest.fn();

    (getCustomRepository as jest.Mock).mockReturnValue({
      findOne: mockFindOne,
      remove: mockRemove,
    });

    const deleteCobrancasService = new DeleteCobrancasService();

    expect(mockFindOne).not.toHaveBeenCalled();

    await deleteCobrancasService.execute({
      id: 'cobranca-id',
    });

    expect(mockFindOne).toHaveBeenCalledWith('cobranca-id');
    expect(mockRemove).toHaveBeenCalledWith({
      id: 'cobranca-id',
    });
  });

  it('deve lançar um erro ao tentar deletar uma cobrança inexistente', async () => {
    const mockFindOne = jest.fn().mockReturnValue(null);

    (getCustomRepository as jest.Mock).mockReturnValue({
      findOne: mockFindOne,
    });

    const deleteCobrancasService = new DeleteCobrancasService();

    await expect(
      deleteCobrancasService.execute({
        id: 'cobranca-inexistente-id',
      })
    )
    expect(mockFindOne).toHaveBeenCalledWith('cobranca-inexistente-id');
  });
});
