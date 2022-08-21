using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeProj.Helpers;
using EmployeeProj.Models;
using EmployeeProj.Repository;
using EmployeeProj.ViewModels;

namespace EmployeeProj.Services
{
    public interface IAuthService
    {
        UserClaims Login(UserCredintials user);

    }

    public class AuthService : IAuthService
    {
        private EmpDbContext _context;
        private readonly IJwtHelper _jwt;

        public AuthService(EmpDbContext context, IJwtHelper jwt)
        {
            _context = context;
            _jwt = jwt;
        }

        public UserClaims Login(UserCredintials user)
        {
            User currentUser = _context.User.Where(usr => true).ToList().Where(usr => usr.Username == user.Username && usr.Password == user.Password).FirstOrDefault();
            if (currentUser != null)
            {
                UserClaims claims = new UserClaims();

                claims.Id = currentUser.Id;
                claims.Username = user.Username;
                claims.FirstName = currentUser.FirstName;
                claims.LastName = currentUser.LastName;
                claims.Email = currentUser.Email;
                claims.Age = currentUser.Age;
                claims.Token = _jwt.GenerateToken(claims);
                return claims;
            }
        return null;
        }
    }
}