using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CursoDotNet.DataAccess.Contracts.Dtos;
using CursoDotNet.DataAccess.Contracts.Repositories;
using Microsoft.EntityFrameworkCore;

namespace CursoDotNet.DataAccess.Repositories
{
    public class CancionRepository : ICancionRepository
    {

        private readonly ApplicationDbContext _dbContext;

        public CancionRepository(ApplicationDbContext context)
        {
            //nos indica el tipo de error si se da en la inyeccion de dependencias
            _dbContext = context ?? throw new ArgumentNullException(nameof(context));
        }
        public async Task<List<CancionDto>> GetAll()
        {
            return await (from c in _dbContext.Canciones
                   select new CancionDto
                   {
                       Id = c.id,
                       Titulo = c.titulo,
                       Duracion = c.duracion,
                       CreateUserId = c.createUserId,
                       CreateDateTime = c.createDateTime,
                       UpdateUserId = c.updateUserId,
                       UpdateDateTime = c.updateDateTime
                   }).ToListAsync();
        }

        public async Task<List<CancionDto>> GetFilteredPaginated(string nombreUsuario, int numPagina, int numElementos)
        {
            var canciones = await (from u in _dbContext.Usuarios
                where u.nombre.Contains(nombreUsuario)
                select u.canciones).Include("canciones").FirstOrDefaultAsync();

            List<CancionDto> result = new List<CancionDto>();

            if (canciones != null)
            {

                foreach (var cancion in canciones)
                {
                    result.Add(new CancionDto
                    {
                        Id = cancion.id,
                        Titulo = cancion.titulo,
                        Duracion = cancion.duracion,
                        CreateUserId = cancion.createUserId,
                        CreateDateTime = cancion.createDateTime,
                        UpdateUserId = cancion.updateUserId,
                        UpdateDateTime = cancion.updateDateTime
                    });
                }

               
            }
            return result.Skip(numElementos * (numPagina - 1)).Take(numElementos).ToList();
        }
    }


}