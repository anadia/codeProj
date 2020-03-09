using System;
using System.ComponentModel.DataAnnotations;

namespace CursoDotNet.Application.BusinessModels.Models
{
    public class UsuarioModel
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