using System.ComponentModel.DataAnnotations;

namespace CursoDotNet.Application.BusinessModels.Requests
{
    public class CancionRequest
    {
        [Required]
        public string Titulo { get; set; }
        [Required]
        public int Duracion { get; set; }
    }
}