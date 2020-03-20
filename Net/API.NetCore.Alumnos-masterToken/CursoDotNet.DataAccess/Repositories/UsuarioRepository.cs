using CursoDotNet.DataAccess.Contracts.Dtos;
using CursoDotNet.DataAccess.Contracts.Repositories;
using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace CursoDotNet.DataAccess.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public UsuarioRepository(ApplicationDbContext context)
        {
            _dbContext = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<UsuarioDto> Login(string email, string password)
        {
            return await (from u in _dbContext.Usuarios
                          where u.email == email && u.password == password
                          select new UsuarioDto
                          {
                              Id = u.id,
                              Nombre = u.nombre,
                              Email = u.email,
                              Rol = u.rol.nombre,
                              CreateUserId = u.createUserId,
                              CreateDateTime = u.createDateTime,
                              UpdateUserId = u.updateUserId,
                              UpdateDateTime = u.updateDateTime
                          }).FirstOrDefaultAsync();
        }
    }
}
