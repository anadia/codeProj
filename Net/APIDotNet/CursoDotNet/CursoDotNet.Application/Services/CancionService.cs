using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CursoDotNet.Application.BusinessModels.Models;
using CursoDotNet.Application.Contracts.Services;
using CursoDotNet.DataAccess.Contracts.Repositories;

namespace CursoDotNet.Application.Services
{
    public class CancionService : ICancionService

    {
        private readonly ICancionRepository _cancionRepository;
        public CancionService(ICancionRepository cancionRepository)
        {
            _cancionRepository = cancionRepository ?? throw new  ArgumentNullException(nameof(cancionRepository));
        }

        public async Task <List<CancionModel>> GetAll()
        {
            var canciones = await _cancionRepository.GetAll();
            
            List<CancionModel> result = new List<CancionModel>();

            foreach (var c in canciones)
            {
                result.Add(new CancionModel

                    {
                    Id = c.Id,
                    Titulo = c.Titulo,
                    Duracion = c.Duracion,
                    CreateUserId = c.CreateUserId,
                    CreateDateTime = c.CreateDateTime,
                    UpdateUserId = c.UpdateUserId,
                    UpdateDateTime = c.UpdateDateTime

                } );
            }

            return result;

        }

        public async Task<object> GetFilteredPaginate(string nombreUsuario, int numPagina, int numElementos)
        {
            //TODO: Cambiar la llamada
            var canciones = await _cancionRepository.GetAll();

            List<CancionModel> result = new List<CancionModel>();
            foreach (var c in canciones)
            {
                result.Add(new CancionModel

                {
                    Id = c.Id,
                    Titulo = c.Titulo,
                    Duracion = c.Duracion,
                    CreateUserId = c.CreateUserId,
                    CreateDateTime = c.CreateDateTime,
                    UpdateUserId = c.UpdateUserId,
                    UpdateDateTime = c.UpdateDateTime

                });
            }

            return result;
        }
    }
}