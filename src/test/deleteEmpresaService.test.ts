
import DeleteEmpresaService from '../modules/empresas/services/DeleteEmpresaService';
import { getCustomRepository } from 'typeorm';

jest.mock('typeorm', () => ({
  ...jest.requireActual('typeorm'),
  getCustomRepository: jest.fn(),
}));

describe('DeleteEmpresaService', () => {
  it('deve deletar uma empresa existente', async () => {
    const mockFindOne = jest.fn().mockReturnValue({
      id: 'empresa-id',

    });

    const mockRemove = jest.fn();

    (getCustomRepository as jest.Mock).mockReturnValue({
      findOne: mockFindOne,
      remove: mockRemove,
    });

    const deleteEmpresaService = new DeleteEmpresaService();

    expect(mockFindOne).not.toHaveBeenCalled();

    await deleteEmpresaService.execute({
      id: 'empresa-id',
    });

    expect(mockFindOne).toHaveBeenCalledWith('empresa-id');
    expect(mockRemove).toHaveBeenCalledWith({
      id: 'empresa-id',

    });
  });

  it('deve lançar um erro ao tentar deletar uma empresa inexistente', async () => {
    const mockFindOne = jest.fn().mockReturnValue(null);

    (getCustomRepository as jest.Mock).mockReturnValue({
      findOne: mockFindOne,
    });

    const deleteEmpresaService = new DeleteEmpresaService();

    await expect(
      deleteEmpresaService.execute({
        id: 'empresa-inexistente-id',
      })
    )

    expect(mockFindOne).toHaveBeenCalledWith('empresa-inexistente-id');
  });
});
