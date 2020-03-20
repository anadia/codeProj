using CursoDotNet.DataAccess.Contracts.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CursoDotNet.DataAccess.Contracts.Repositories
{
    public interface ICancionRepository
    {
        Task<List<CancionDto>> GetAll();

        Task<CancionDto> Insert(CancionDto cancion);


        Task<List<CancionDto>> GetFilteredPaginated(string nombreUsuario, int numPagina, int numElementos);
        Task<CancionDto> Update(CancionDto cancion);
        Task<bool> Delete(int id);
    }
}
