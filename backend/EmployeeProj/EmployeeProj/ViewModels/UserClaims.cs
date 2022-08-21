using Newtonsoft.Json;
using System;
using System.Collections.Generic;
namespace EmployeeProj.ViewModels
{
    public class UserClaims
    {
        [JsonProperty("FirstName")]
        public string FirstName { get; set; }

        [JsonProperty("LastName")]
        public string LastName { get; set; }

        [JsonProperty("Token")]
        public string Token { get; set; }

        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("Email")]
        public string Email { get; set; }

        [JsonProperty("Username")]
        public string Username { get; set; }

        [JsonProperty("Age")]
        public string Age { get; set; }

    }
}
