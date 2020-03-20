using CursoDotNet.Application.BusinessModels.Models;
using CursoDotNet.Application.Contracts.Services;
using CursoDotNet.DataAccess.Contracts.Repositories;
using System;
using System.Threading.Tasks;

namespace CursoDotNet.Application.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;
        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository ?? throw new ArgumentNullException(nameof(usuarioRepository));
        }

        public async Task<UsuarioModel> Login(string email, string password)
        {
            var usuario = await _usuarioRepository.Login(email, password);

            UsuarioModel result = new UsuarioModel();
            if (usuario != null)
            {
                result.Id = usuario.Id;
                result.Nombre = usuario.Nombre;
                result.Email = usuario.Email;
                result.Rol = usuario.Rol;
                result.CreateUserId = usuario.CreateUserId;
                result.CreateDateTime = usuario.CreateDateTime;
                result.UpdateUserId = usuario.UpdateUserId;
                result.UpdateDateTime = usuario.UpdateDateTime;
            }

            return result;
        }
    }
}
