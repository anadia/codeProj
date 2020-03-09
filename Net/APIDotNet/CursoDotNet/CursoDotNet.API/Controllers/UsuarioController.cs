using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CursoDotNet.Application.Contracts.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CursoDotNet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {

        private readonly IUsuarioService _usuarioService;

        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService ?? throw new ArgumentNullException(nameof(usuarioService));
        }
        [HttpGet]
        //GET api/Cancion/Login
        [Route("Login")]
        public async Task<ActionResult> Login(string email, string password)
        {
            return Ok(await _usuarioService.Login(email,password));
        }

    }
}