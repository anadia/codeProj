using System;
using System.Threading.Tasks;
using CursoDotNet.Application.Contracts.Services;
using Microsoft.AspNetCore.Mvc;

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
        [HttpGet]
        //GET api/Cancion/GetAll
        [Route("GetAll")]
        public async Task<ActionResult> GetAll()
        {
            return Ok(await _cancionService.GetAll());
        }


        [Route("GetFilteredPaginated")]
        public async Task<ActionResult> GetFilteredPaginated(string nombreUsuario, int numPagina, int numElementos )
        {
            return Ok(await _cancionService.GetFilteredPaginate( nombreUsuario,  numPagina, numElementos)); //TODO
        }


    }
}