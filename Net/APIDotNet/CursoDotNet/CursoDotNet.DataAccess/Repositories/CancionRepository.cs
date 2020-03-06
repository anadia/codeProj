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
    }
}