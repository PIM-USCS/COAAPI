import DeleteClienteService from "../modules/clientes/services/DeleteClienteService";
import { getCustomRepository } from "typeorm";


jest.mock('typeorm', () => ({
  ...jest.requireActual('typeorm'),
  getCustomRepository: jest.fn(),
}));

describe('DeleteClienteService', () => {
  it('deve deletar um cliente existente', async () => {
      const mockFindOne = jest.fn().mockReturnValue({
      id: '1',
    
    });

   
    const mockRemove = jest.fn();


    (getCustomRepository as jest.Mock).mockReturnValue({
      findOne: mockFindOne,
      remove: mockRemove,
    });

    const deleteClienteService = new DeleteClienteService();


    expect(mockFindOne).not.toHaveBeenCalled();


    await deleteClienteService.execute({
      id: '1',
    });


    expect(mockFindOne).toHaveBeenCalledWith('1');


    expect(mockRemove).toHaveBeenCalledWith({
      id: '1',
    
    });
  });

  it('deve lançar um erro ao tentar deletar um cliente inexistente', async () => {

    const mockFindOne = jest.fn().mockReturnValue(null);

 
    (getCustomRepository as jest.Mock).mockReturnValue({
      findOne: mockFindOne,
    });

    const deleteClienteService = new DeleteClienteService();

    
    await expect(
      deleteClienteService.execute({
        id: 'cliente-inexistente-id',
      })
    )

    expect(mockFindOne).toHaveBeenCalledWith('cliente-inexistente-id');
  });
});