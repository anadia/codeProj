using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CursoDotNet.DataAccess.Contracts.Entidades
{
    public class Usuario : EntidadBase
    {
        [Required]
        public int id { get; set; }

        [Required]
        public string nombre { get; set; }

        [Required]
        public string email { get; set; }

        [Required]
        public string password { get; set; }

        [Required]
        public int rolId { get; set; }

        [Required]
        public virtual Rol rol { get; set; }

        [Required]
        public virtual ICollection<Cancion> canciones { get; set; }
    }
}
