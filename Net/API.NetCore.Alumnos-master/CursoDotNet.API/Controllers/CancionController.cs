using CursoDotNet.Application.Contracts.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace CursoDotNet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CancionController : ControllerBase
    {
        private readonly ICancionService _cancionService;

        public CancionController(ICancionService cancionService)
        {
            _cancionService = cancionService ?? throw new ArgumentNullException(nameof(cancionService)); 
        }

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
    }
}