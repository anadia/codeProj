﻿using System.ComponentModel.DataAnnotations;

namespace CursoDotNet.Application.BusinessModels.Requests
{
    public class LoginRequest
    {
        [Required]
        public string email { get; set; }
        [Required]
        public string password { get; set; }
    }
}
