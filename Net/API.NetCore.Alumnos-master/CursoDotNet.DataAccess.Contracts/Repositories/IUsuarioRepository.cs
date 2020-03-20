using CursoDotNet.DataAccess.Contracts.Dtos;
using System.Threading.Tasks;

namespace CursoDotNet.DataAccess.Contracts.Repositories
{
    public interface IUsuarioRepository
    {
        Task<UsuarioDto> Login(string email, string password);
    }
}
