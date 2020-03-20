using CursoDotNet.Application.BusinessModels.Helpers;
using CursoDotNet.Application.BusinessModels.Models;
using CursoDotNet.Application.Contracts.Services;
using CursoDotNet.DataAccess.Contracts.Repositories;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace CursoDotNet.Application.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;
        private readonly AppSettings _appSettings;
        public UsuarioService(IUsuarioRepository usuarioRepository, IOptions<AppSettings> appSettings)
        {
            _usuarioRepository = usuarioRepository ?? throw new ArgumentNullException(nameof(usuarioRepository));
            _appSettings = appSettings.Value ?? throw new ArgumentNullException(nameof(appSettings));
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
                // authentication successful so generate jwt token
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Name, usuario.Id.ToString()),
                        new Claim(ClaimTypes.Role, usuario.Rol),
                        new Claim(ClaimTypes.Email, usuario.Email)
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                result.Token = tokenHandler.WriteToken(token);
            }
            return result;
        }
    }
}
