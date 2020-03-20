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
        public string Email { get; set; }

        [Required]
        public string Rol { get; set; }

        [Required]
        public int CreateUserId { get; set; }

        [Required]
        public DateTime CreateDateTime { get; set; }

        public int? UpdateUserId { get; set; }

        public DateTime? UpdateDateTime { get; set; }

    }
}
