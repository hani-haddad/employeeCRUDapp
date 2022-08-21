using System;
using EmployeeProj.Helpers;
using EmployeeProj.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Options;

namespace EmployeeProj.Repository
{
    public class EmpDbContext : DbContext
    {
        private readonly AppSettings _appSettings;

        public EmpDbContext()
        {
        }

        public EmpDbContext(DbContextOptions<EmpDbContext> options, IOptions<AppSettings> appSettings)
    : base(options)
        {
            _appSettings = appSettings.Value;
        }
        public virtual DbSet<User> User { get; set; }


    }
}
