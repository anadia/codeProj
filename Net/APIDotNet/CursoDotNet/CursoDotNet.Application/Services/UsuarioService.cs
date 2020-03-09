using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using CursoDotNet.Application.BusinessModels.Models;
using CursoDotNet.Application.Contracts.Services;
using CursoDotNet.DataAccess.Contracts.Dtos;
using CursoDotNet.DataAccess.Contracts.Repositories;


namespace CursoDotNet.Application.Services
{
    public class UsuarioService 
    {
       
            private readonly IUsuarioRepository _usuarioRepository;
            public UsuarioService(IUsuarioRepository usuarioRepository)
            {
                _usuarioRepository = usuarioRepository ?? throw new ArgumentNullException(nameof(usuarioRepository));
            }

            public async Task<UsuarioDto> Login(string email, string password)
            {
                return await (from u in _dbContext.Usuarios
                        where u.email == email && u.password == password
                        select new UsuarioDto()
                        {
                            Id = u.id,
                            Nombre = u.Nombre,
                            Email = u.Email,
                            Rol = u.Rol
                        }
                    );
            }

        public async Task<UsuarioModel> Login(string email, string password)
        {
            var usuario = await _usuarioRepository.Login(email, password);

            UsuarioModel result = new UsuarioModel();
            if (usuario !=null)
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