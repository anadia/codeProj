using System.Collections.Generic;
using System.Threading.Tasks;
using CursoDotNet.DataAccess.Contracts.Dtos;

namespace CursoDotNet.DataAccess.Contracts.Repositories
{
    public interface ICancionRepository
    {
        Task <List<CancionDto>> GetAll();
    }
}