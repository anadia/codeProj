using CursoDotNet.Application.BusinessModels.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CursoDotNet.Application.Contracts.Services
{
    public interface ICancionService
    {
        Task<List<CancionModel>> GetAll();

        Task<List<CancionModel>> GetFilteredPaginated(string nombreUsuario, int numPagina, int numElementos);

        Task<CancionModel> Insert(CancionModel cancion);
        Task<CancionModel> Update(CancionModel cancion);
        Task<bool> Delete(int id);


   
        Task<List<CancionModel>> GetAllGeneric();
        Task<CancionModel> GetByIdGeneric(int id);
        Task<CancionModel> AddGeneric(CancionModel cancion);
        Task<CancionModel> UpdateGeneric(CancionModel cancion);
        Task<bool> DeleteGeneric(int id);
    }
}
