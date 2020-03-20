using System.ComponentModel.DataAnnotations;

namespace CursoDotNet.DataAccess.Contracts.Entidades
{
    public class Rol : EntidadBase
    {
        [Required]
        public int id { get; set; }

        [Required]
        public string nombre { get; set; }
    }
}
