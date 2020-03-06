using System.ComponentModel.DataAnnotations;

namespace CursoDotNet.DataAccess.Contracts.Entidades
{
    public class Cancion: EntidadBase
    {
        [Required]
        public int id { get; set; }

        [Required]
        public string titulo { get; set; }

        [Required]
        public string duracion { get; set; }
    }
}