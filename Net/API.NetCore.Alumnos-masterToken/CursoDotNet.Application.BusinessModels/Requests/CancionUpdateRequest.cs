using System.ComponentModel.DataAnnotations;

namespace CursoDotNet.Application.BusinessModels.Requests
{
    public class CancionUpdateRequest

    {
        [Required(ErrorMessage = "Este parametro Id es obligatorio")]
        public int? Id { get; set; }
        [Required(ErrorMessage = "Este parametro Titulo es obligatorio")]
        public string Titulo { get; set; }
        [Required(ErrorMessage = "Este parametro Duracion es obligatorio")]
        public int Duracion { get; set; }
    }
}