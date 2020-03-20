using System.Threading.Tasks;

namespace CursoDotNet.Application.Contracts.Services
{
    public interface IUsuarioService
    {
        Task<object> Login(string email, string password);
    }
}