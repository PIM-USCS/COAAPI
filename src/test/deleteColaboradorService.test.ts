
import DeleteColaboradorService from '../modules/colaborador/services/DeleteColaboradorService';
import { getCustomRepository } from 'typeorm';

jest.mock('typeorm', () => ({
  ...jest.requireActual('typeorm'),
  getCustomRepository: jest.fn(),
}));

describe('DeleteColaboradorService', () => {
  it('deve deletar um colaborador existente', async () => {
    const mockFindOne = jest.fn().mockReturnValue({
      id: '1',
     
    });

    const mockRemove = jest.fn();

    (getCustomRepository as jest.Mock).mockReturnValue({
      findOne: mockFindOne,
      remove: mockRemove,
    });

    const deleteColaboradorService = new DeleteColaboradorService();

    expect(mockFindOne).not.toHaveBeenCalled();

    await deleteColaboradorService.execute({
      id: '1',
    });

    expect(mockFindOne).toHaveBeenCalledWith('1');
    expect(mockRemove).toHaveBeenCalledWith({
      id: '1',
     
    });
  });

  it('deve lançar um erro ao tentar deletar um colaborador inexistente', async () => {
    const mockFindOne = jest.fn().mockReturnValue(null);

    (getCustomRepository as jest.Mock).mockReturnValue({
      findOne: mockFindOne,
    });

    const deleteColaboradorService = new DeleteColaboradorService();

    await expect(
      deleteColaboradorService.execute({
        id: 'colaborador-inexistente-id',
      })
    )

    expect(mockFindOne).toHaveBeenCalledWith('colaborador-inexistente-id');
  });
});
