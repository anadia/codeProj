using CursoDotNet.Application.Contracts.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using CursoDotNet.Application.BusinessModels.Models;
using CursoDotNet.Application.BusinessModels.Requests;
using Microsoft.AspNetCore.Authorization;

namespace CursoDotNet.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CancionController : ControllerBase
    {
        private readonly ICancionService _cancionService;

        public CancionController(ICancionService cancionService)
        {
            _cancionService = cancionService ?? throw new ArgumentNullException(nameof(cancionService)); 
        }
        #region AnterioresMetodos
        //GET api/Cancion/GetAll
        [HttpGet]
        [Route("GetAll")]
        public async Task<ActionResult> GetAll()
        {
            return Ok(await _cancionService.GetAll());
        }

        // api/Cancion/GetFilteredPaginated
        
        [HttpGet]
        [Route("GetFilteredPaginated")]
        public async Task<ActionResult> GetFilteredPaginated(string nombreUsuario, int numPagina, int numElementos)
        {
            return Ok(await _cancionService.GetFilteredPaginated(nombreUsuario, numPagina, numElementos));
        }


        // api/Cancion/Insert
        [HttpPost]
        [Route("Insert")]
        public async Task<ActionResult> Insert([FromBody]CancionRequest request)
        {

            int tokenUsuarioId = int.Parse(((ClaimsIdentity) User.Identity).Name);
            var cancion = new CancionModel
            {
                Titulo = request.Titulo,
                Duracion = request.Duracion,
                UsuarioId = tokenUsuarioId,
                CreateUserId = tokenUsuarioId,
                CreateDateTime = DateTime.Now
            };

            return Ok(await _cancionService.Insert((cancion)));
        }

        // api/Cancion/Update
        [HttpPut]
        [Route("Update")]
        public async Task<ActionResult> Update([FromBody]CancionUpdateRequest request)
        {
            if (ModelState.IsValid)
            {

                int tokenUsuarioId = int.Parse(((ClaimsIdentity)User.Identity).Name);
                var cancion = new CancionModel
                {
                    Id = (int)request.Id,
                    Titulo = request.Titulo,
                    Duracion = request.Duracion,
                    UsuarioId = tokenUsuarioId,
                    CreateUserId = tokenUsuarioId,
                    CreateDateTime = DateTime.Now
                };

                return Ok(await _cancionService.Update((cancion)));
            }
            else
            {
                return BadRequest(ModelState);
            }
        }


        // api/Cancion/Delete
        [HttpDelete]
        [Route("Delete")]
        public async Task<ActionResult> Delete(int id)
        {
            if (id != 0)
            {
                return Ok(await _cancionService.Delete(id));
            }
            else
            {
                return BadRequest();
            }

            
        }
        #endregion

        #region NuevosMetodosGenericos


        //GET api/Cancion/GetAllGeneric
        [HttpGet]
        [Route("GetByIdGeneric")]
        public async Task<ActionResult> GetByIdGeneric(int id)
        {
            return Ok(await _cancionService.GetByIdGeneric(id));
        }


        //GET api/Cancion/GetAllGeneric
        [HttpGet]
        [Route("GetAllGeneric")]
        public async Task<ActionResult> GetAllGeneric()
        {
            return Ok(await _cancionService.GetAllGeneric());
        }



        // api/Cancion/Insert
        [HttpPost]
        [Route("AddGeneric")]
        public async Task<ActionResult> AddGeneric([FromBody]CancionRequest request)
        {

            int tokenUsuarioId = int.Parse(((ClaimsIdentity)User.Identity).Name);
            var cancion = new CancionModel
            {
                Titulo = request.Titulo,
                Duracion = request.Duracion,
                UsuarioId = tokenUsuarioId,
                CreateUserId = tokenUsuarioId,
                CreateDateTime = DateTime.Now
            };

            return Ok(await _cancionService.AddGeneric((cancion)));
        }

        // api/Cancion/Update
        [HttpPut]
        [Route("UpdateGeneric")]
        public async Task<ActionResult> UpdateGeneric([FromBody]CancionUpdateRequest request)
        {
            if (ModelState.IsValid)
            {

                int tokenUsuarioId = int.Parse(((ClaimsIdentity)User.Identity).Name);
                var cancion = new CancionModel
                {
                    Id = (int)request.Id,
                    Titulo = request.Titulo,
                    Duracion = request.Duracion,
                    UsuarioId = tokenUsuarioId,
                    CreateUserId = tokenUsuarioId,
                    CreateDateTime = DateTime.Now
                };

                return Ok(await _cancionService.UpdateGeneric((cancion)));
            }
            else
            {
                return BadRequest(ModelState);
            }
        }


        // api/Cancion/Delete
        [HttpDelete]
        [Route("DeleteGeneric")]
        public async Task<ActionResult> DeDeleteGenericlete(int id)
        {
            if (id != 0)
            {
                return Ok(await _cancionService.DeleteGeneric(id));
            }
            else
            {
                return BadRequest();
            }


        }


        #endregion
    }
}