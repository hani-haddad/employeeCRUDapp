using System;
using System.Collections.Generic;
using System.Linq;
using EmployeeProj.Models;
using EmployeeProj.ViewModels;
using System.Net.Http;
using EmployeeProj.Repository;
using System.Threading.Tasks;


namespace EmployeeProj.Services
{
    public interface IUserService
    {
        List<UserViewModel> Get();
        UserViewModel Get(int id);
        User Create(NewUserModel user);
        void Update(int id, NewUserModel user);
        void UpdatePassword(int id, string password);
        void Remove(User user);
        void Remove(int id);


    }

    public class UserService: IUserService
    {
        private EmpDbContext empDbContext;

        public UserService(EmpDbContext context)
        {
            empDbContext = context;

        }

        public List<UserViewModel> Get()
        {
            List<UserViewModel> userViewModelList = new List<UserViewModel>();
            var usrList = empDbContext.User.ToList();
            if (usrList != null)
            {
                foreach (var usr in usrList)
                {
                    UserViewModel userViewModel = new UserViewModel();

                    userViewModel.Username = usr.Username;
                    userViewModel.Email = usr.Email;
                    userViewModel.FirstName = usr.FirstName;
                    userViewModel.LastName = usr.LastName;
                    userViewModel.Age = usr.Age;

                    userViewModelList.Add(userViewModel);
                }
                return userViewModelList;
            }


            return null;
        }

        public UserViewModel Get(int id)
        {
            UserViewModel userViewModel = new UserViewModel();
            var usr = empDbContext.User.ToList().Where(usr => usr.Id == id).FirstOrDefault();
            if (usr != null)
            {
                userViewModel.Username = usr.Username;
                userViewModel.Email = usr.Email;
                userViewModel.FirstName = usr.FirstName;
                userViewModel.LastName = usr.LastName;
                userViewModel.Age = usr.Age;

                return userViewModel;
            }

            return null;
        }

        public UserViewModel Get(string username)
        {
            UserViewModel userViewModel = new UserViewModel();
            var usr = empDbContext.User.ToList().Where(usr => usr.Username == username).FirstOrDefault();
            if (usr != null)
            {
                userViewModel.Username = usr.Username;
                userViewModel.Email = usr.Email;
                userViewModel.FirstName = usr.FirstName;
                userViewModel.LastName = usr.LastName;
                userViewModel.Age = usr.Age;

                return userViewModel;
            }

            return null;
        }

        public  User Create(NewUserModel user)
        {
            if (user != null)
            {
                var usr = this.Get(user.Username);
                if (usr == null)
                {
                    User newUser = new User();
                    newUser.FirstName = user.FirstName;
                    newUser.LastName = user.LastName;
                    newUser.Email = user.Email;
                    newUser.Username = user.Username;
                    newUser.Password = user.Password;
                    newUser.Age = user.Age;
                    empDbContext.Add(newUser);
                    empDbContext.SaveChanges();
                    return newUser;
                }
            }

            return null;
        }

        public void Update(int id, NewUserModel user)
        {
            if(user != null)
            {
                User currentUser = empDbContext.User.Where(usr => id == usr.Id ).FirstOrDefault();
                if (currentUser != null )
                {
                    if (currentUser.Username == user.Username)
                    {
                        currentUser.Age = user.Age;
                        currentUser.Email = user.Email;
                        currentUser.FirstName = user.FirstName;
                        currentUser.LastName = user.LastName;
                        currentUser.Password = user.Password;
                        empDbContext.Update(currentUser);
                        empDbContext.SaveChanges();
                    }
                  
                   
                }
            }
        }

        public void UpdatePassword(int id, string password)
        {
            User currentUser = empDbContext.User.Where(usr => id == usr.Id).FirstOrDefault();

            if (currentUser == null)
            {
                return;
            }
            currentUser.Password = password;
            empDbContext.Update(currentUser);
            empDbContext.SaveChanges();
        }

        public void Remove(User user)
        {
            if (user != null)
            {
                empDbContext.Remove(user);
                empDbContext.SaveChanges();
            }
        }

        public void Remove(int id)
        {
            if (id < 0)
            {
                return;
            }
            else
            {
                User currentUser = empDbContext.User.Where(usr => id == usr.Id).FirstOrDefault();
                if (currentUser != null)
                {
                    empDbContext.Remove(currentUser);
                    empDbContext.SaveChanges();
                } 
            }
        }
    }
}
