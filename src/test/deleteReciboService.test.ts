import DeleteReciboService from "../modules/recibos/services/DeleteReciboService";
import { getCustomRepository } from "typeorm";

jest.mock('typeorm', () => ({
  ...jest.requireActual('typeorm'),
  getCustomRepository: jest.fn(),
}));

describe('DeleteReciboService', () => {
  it('deve deletar um recibo existente', async () => {
    const mockFindOne = jest.fn().mockReturnValue({
      id: 'recibo-id',

    });

    const mockRemove = jest.fn();

    (getCustomRepository as jest.Mock).mockReturnValue({
      findOne: mockFindOne,
      remove: mockRemove,
    });

    const deleteReciboService = new DeleteReciboService();

    expect(mockFindOne).not.toHaveBeenCalled();

    await deleteReciboService.execute({
      id: 'recibo-id',
    });

    expect(mockFindOne).toHaveBeenCalledWith('recibo-id');
    expect(mockRemove).toHaveBeenCalledWith({
      id: 'recibo-id',
     
    });
  });

  it('deve lançar um erro ao tentar deletar um recibo inexistente', async () => {
    const mockFindOne = jest.fn().mockReturnValue(null);

    (getCustomRepository as jest.Mock).mockReturnValue({
      findOne: mockFindOne,
    });

    const deleteReciboService = new DeleteReciboService();

    await expect(
      deleteReciboService.execute({
        id: 'recibo-inexistente-id',
      })
    )

    expect(mockFindOne).toHaveBeenCalledWith('recibo-inexistente-id');
  });
});
