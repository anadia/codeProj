using CursoDotNet.Application.BusinessModels.Models;
using System.Threading.Tasks;

namespace CursoDotNet.Application.Contracts.Services
{
    public interface IUsuarioService
    {
        Task<UsuarioModel> Login(string email, string password);
    }
}
