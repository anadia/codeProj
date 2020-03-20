using CursoDotNet.Application.BusinessModels.Models;
using CursoDotNet.Application.Contracts.Services;
using CursoDotNet.DataAccess.Contracts.Dtos;
using CursoDotNet.DataAccess.Contracts.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CursoDotNet.DataAccess;
using CursoDotNet.DataAccess.Contracts;
using CursoDotNet.DataAccess.Contracts.Entidades;

namespace CursoDotNet.Application.Services
{
    public class CancionService : ICancionService
    {
        private readonly ICancionRepository _cancionRepository;
        private readonly ICancionGenericRepository _cancionGenericRepository;
        private readonly IUnitOfWork _uOw;

        public CancionService(ICancionRepository cancionRepository,
            ICancionGenericRepository cancionGenericRepository,
            IUnitOfWork uOw)
        {
            _cancionRepository = cancionRepository ?? throw new ArgumentNullException(nameof(cancionRepository));
            _cancionGenericRepository = cancionGenericRepository ?? throw new ArgumentNullException(nameof(cancionGenericRepository));
            _uOw = uOw ?? throw new ArgumentNullException(nameof(uOw));
        }

        #region CRUD
        public async Task<List<CancionModel>> GetAll()
        {
            var canciones = await _cancionRepository.GetAll();
            List<CancionModel> result = new List<CancionModel>();
            foreach (var c in canciones)
            {
                result.Add(MapCancion(c));
            }

            return result;
        }

        public async Task<List<CancionModel>> GetFilteredPaginated(string nombreUsuario, int numPagina,
            int numElementos)
        {
            var canciones = await _cancionRepository.GetFilteredPaginated(nombreUsuario, numPagina, numElementos);
            List<CancionModel> result = new List<CancionModel>();
            foreach (var c in canciones)
            {
                result.Add(MapCancion(c));
            }

            return result;
        }

        public async Task<CancionModel> Insert(CancionModel cancion)
        {
            var nuevaCancion = new CancionDto
            {
                Titulo = cancion.Titulo,
                Duracion = cancion.Duracion,
                UsuarioId = cancion.UsuarioId,
                CreateUserId = cancion.CreateUserId,
                CreateDateTime = cancion.CreateDateTime
            };
            var cancionInsertada = await _cancionRepository.Insert(nuevaCancion);

            await _uOw.CommitAsync();

            return MapCancion(cancionInsertada);
        }

        private CancionModel MapCancion(CancionDto cancion)
        {
            return new CancionModel
            {
                Id = cancion.Id,
                Titulo = cancion.Titulo,
                Duracion = cancion.Duracion,
                CreateUserId = cancion.CreateUserId,
                CreateDateTime = cancion.CreateDateTime,
                UpdateUserId = cancion.UpdateUserId,
                UpdateDateTime = cancion.UpdateDateTime
            };
        }


        public async Task<CancionModel> Update(CancionModel cancion)
        {
            var nuevaCancion = new CancionDto
            {
                Id = cancion.Id,
                Titulo = cancion.Titulo,
                Duracion = cancion.Duracion,
                UsuarioId = cancion.UsuarioId,
                UpdateUserId = cancion.UpdateUserId,
                UpdateDateTime = cancion.UpdateDateTime

            };

            var cancionActualizada = await _cancionRepository.Update(nuevaCancion);

            await _uOw.CommitAsync();

            return MapCancion(cancionActualizada);
        }

        public async Task<bool> Delete(int id)
        {
            var result = await _cancionRepository.Delete(id);
            await _uOw.CommitAsync();
            return result;
        }

        #endregion

        #region  CRUD Generic

        public async Task<List<CancionModel>> GetAllGeneric()
        {
            var canciones = await _cancionGenericRepository.GetAsync();
            var result = new List<CancionModel>();

            foreach (var c in canciones)
            {
                result.Add(new CancionModel
                {

                    Id = c.id,
                    Titulo = c.titulo,
                    Duracion = c.duracion,
                    CreateUserId = c.createUserId,
                    CreateDateTime = c.createDateTime
                });
            }

            return result;
        }

        public async Task<CancionModel> GetByIdGeneric(int id)
        {
            var canciones = await _cancionGenericRepository.GetAsync(c => c.id == id);

            var result = canciones.FirstOrDefault();

            return new CancionModel
            {
                Id = result.id,
                Titulo = result.titulo,
                Duracion = result.duracion,
                CreateUserId = result.createUserId,
                CreateDateTime = result.createDateTime
            };
        }

        public async Task<CancionModel> AddGeneric(CancionModel cancion)
        {
            var nuevaCancion = new Cancion
            {
                titulo = cancion.Titulo,
                duracion = cancion.Duracion,
                Usuarioid = (int)cancion.UsuarioId,
                createUserId = cancion.CreateUserId,
                createDateTime = cancion.CreateDateTime
            };
            var cancionInsertada = _cancionGenericRepository.Insert(nuevaCancion);

            await _uOw.CommitAsync();

            return MapCancion(cancionInsertada);
        }

        private CancionModel MapCancion(Cancion cancion)
        {
            return new CancionModel
            {
                Id = cancion.id,
                Titulo = cancion.titulo,
                Duracion = cancion.duracion,
                CreateUserId = cancion.createUserId,
                CreateDateTime = cancion.createDateTime,
                UpdateUserId = cancion.updateUserId,
                UpdateDateTime = cancion.updateDateTime
            };
        }


        public async Task<CancionModel> UpdateGeneric(CancionModel cancion)
        {
            var nuevaCancion = new Cancion
            {
                id = cancion.Id,
                titulo = cancion.Titulo,
                duracion = cancion.Duracion,
                Usuarioid = (int)cancion.UsuarioId,
                updateUserId = cancion.UpdateUserId,
                updateDateTime = cancion.UpdateDateTime

            };

             _cancionGenericRepository.Update(nuevaCancion);

            await _uOw.CommitAsync();

            return MapCancion(nuevaCancion);
        }

        public async Task<bool> DeleteGeneric(int id)
        {
             _cancionGenericRepository.Delete(id);
            await _uOw.CommitAsync();
            return true;
        }


        #endregion
    }
}











