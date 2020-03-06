using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using CursoDotNet.DataAccess.Contracts.Entidades;
using Microsoft.EntityFrameworkCore;

namespace CursoDotNet.DataAccess.Contracts.Dtos
{
    public class CancionDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Titulo { get; set; }

        [Required]
        public int Duracion { get; set; }

        [Required]
        public int CreateUserId { get; set; }
        [Required]
        public DateTime CreateDateTime { get; set; }
        public int? UpdateUserId { get; set; }
        public DateTime? UpdateDateTime { get; set; }

       
    }
}