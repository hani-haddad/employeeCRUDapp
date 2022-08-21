using System;
using Newtonsoft.Json;

namespace EmployeeProj.ViewModels
{
    public class NewUserModel
    {
        [JsonProperty("FirstName")]
        public string FirstName { get; set; }

        [JsonProperty("LastName")]
        public string LastName { get; set; }

        [JsonProperty("Token")]
        public string Token { get; set; }

        [JsonProperty("Email")]
        public string Email { get; set; }

        [JsonProperty("Username")]
        public string Username { get; set; }

        [JsonProperty("Password")]
        public string Password { get; set; }

        [JsonProperty("Age")]
        public string Age { get; set; }
    }
}
