using CursoDotNet.DataAccess.Contracts.Dtos;
using CursoDotNet.DataAccess.Contracts.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CursoDotNet.DataAccess.Contracts.Entidades;

namespace CursoDotNet.DataAccess.Repositories
{
    public class CancionRepository : ICancionRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public CancionRepository(ApplicationDbContext context)
        {
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
                            select u.canciones).FirstOrDefaultAsync();

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

            return result.Skip(numElementos*(numPagina-1)).Take(numElementos).ToList();
        }

        public async Task<CancionDto> Insert(CancionDto cancion)
        {
            var cancionAInsertar = new Cancion
            {
                titulo = cancion.Titulo,
                duracion = cancion.Duracion,
                createUserId = cancion.CreateUserId,
                createDateTime = cancion.CreateDateTime,
                Usuarioid =  (int)cancion.UsuarioId
            };


            var cancionInsertada = await _dbContext.Canciones.AddAsync(cancionAInsertar);

      

            return new CancionDto
            {
                Id = cancionInsertada.Entity.id,
                Titulo = cancionInsertada.Entity.titulo,
                Duracion = cancionInsertada.Entity.createUserId,
                CreateDateTime = cancionInsertada.Entity.createDateTime
            };
        }

        public async Task<CancionDto> Update(CancionDto cancion)
        {
            var cancionAInsertar = new Cancion
            {
                id = cancion.Id,
                titulo = cancion.Titulo,
                duracion = cancion.Duracion,
                updateUserId = cancion.UpdateUserId,
                updateDateTime = cancion.UpdateDateTime,
                Usuarioid = (int)cancion.UsuarioId
            };


             _dbContext.Canciones.Attach(cancionAInsertar);
             _dbContext.Entry(cancionAInsertar).State = EntityState.Modified;

          

            return cancion;
        }

        public async Task<bool> Delete(int id)
        {
            var cancion = _dbContext.Canciones.Find(id);

            _dbContext.Canciones.Remove(cancion);

            return true;
        }

    }
}
