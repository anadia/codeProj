using CursoDotNet.Application.BusinessModels.Requests;
using CursoDotNet.Application.Contracts.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

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

        //GET api/Usuario/Login
        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult> Login([FromBody]LoginRequest request)
        {
            return Ok(await _usuarioService.Login(request.email, request.password));
        }
    }
}