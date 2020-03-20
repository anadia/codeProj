using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using CursoDotNet.DataAccess.Contracts.Entidades;
using Microsoft.EntityFrameworkCore;

namespace CursoDotNet.DataAccess.Contracts.Dtos
{
    public class UsuarioDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Nombre { get; set; }

        [Required]
        public int Email { get; set; }

        [Required]
        public int Rol { get; set; }
    }
}