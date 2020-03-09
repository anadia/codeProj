using CursoDotNet.DataAccess.Contracts.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CursoDotNet.DataAccess.Contracts.Repositories
{
    public interface ICancionRepository
    {
        Task<List<CancionDto>> GetAll();

        Task<List<CancionDto>> GetFilteredPaginated(string nombreUsuario, int numPagina, int numElementos);
    }
}
