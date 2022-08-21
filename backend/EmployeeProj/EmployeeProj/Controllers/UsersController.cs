using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EmployeeProj.Services;
using EmployeeProj.Models;
using EmployeeProj.ViewModels;
using Microsoft.AspNetCore.Authorization;

namespace EmployeeProj.Controllers
{
    [Authorize]
    //class to perform CRUD operations
    ///Contains action methods to support GET, POST, PUT, and DELETE HTTP requests.
    [Route("api/users")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            this._userService = userService;
        }

        [HttpGet]
        public ActionResult<List<UserViewModel>> Get() =>
            _userService.Get();
       
        [HttpGet("{id:length(24)}", Name = "GetUser")]
        public ActionResult<UserViewModel> Get(string id)
        {
            int numaric_id;
            try { numaric_id = Int32.Parse(id); }
            catch { return NotFound(); }
            var user = _userService.Get(numaric_id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [AllowAnonymous]
        [HttpPost("register")]
        [HttpPost]
        public ActionResult<UserViewModel> Create(NewUserModel user)
        {
            User newUser = _userService.Create(user);
            if (newUser != null)
            {
                return Get(id: newUser.Id.ToString());
            }
            else
            {
                return Conflict(new { error = "username already exiest" });
            }
        }

        [HttpPut]
        public IActionResult Update(string id, [FromBody] NewUserModel user)
        {
            int numaric_id;
            try { numaric_id = Int32.Parse(id); }
            catch { return NotFound(); }
            var usr = _userService.Get(numaric_id);

            if (usr == null)
            {
                return NotFound();
            }

            _userService.Update(numaric_id, user);

            return NoContent();
        }

        [HttpDelete]
        public IActionResult Delete(string id)
        {
            int numaric_id;
            try { numaric_id = Int32.Parse(id); }
            catch { return NotFound(); }

            var user = _userService.Get(numaric_id);

            if (user == null)
            {
                return NotFound();
            }

            _userService.Remove(numaric_id);

            return NoContent();
        }
    }
}