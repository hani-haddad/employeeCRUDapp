using Newtonsoft.Json;
using System;

namespace EmployeeProj.ViewModels
{
    public class UserCredintials
    {
        [JsonProperty("Username")]
        public string Username { get; set; }
        [JsonProperty("Password")]
        public string Password { get; set; }
    }
}
