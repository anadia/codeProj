using CursoDotNet.DataAccess.Contracts;
using CursoDotNet.DataAccess.Contracts.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using System;
using System.Linq;

namespace CursoDotNet.DataAccess
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public DbSet<Cancion> Canciones { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Rol> Roles { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public ApplicationDbContext()
        {

        }

        public EntityEntry<TEntity> GetEntry<TEntity>(TEntity entity) where TEntity : class
        {
            return Entry(entity);
        }

        public DatabaseFacade TheDatabase
        {
            get
            {
                return Database;
            }
        }

        public DbSet<T> GetEntitySet<T>() where T : class
        {
            return Set<T>();
        }

        public override int SaveChanges()
        {
            var modifiedEntites = ChangeTracker.Entries()
                .Where(x => x.State == EntityState.Added || x.State == EntityState.Modified);

            modifiedEntites.ToList().ForEach(x =>
            {
                var entity = x.Entity as EntidadBase;
                entity?.SetAudit(x.State);
            });

            return base.SaveChanges();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.Entity<Cancion>().ToTable("Canciones");
            builder.Entity<Usuario>().ToTable("Usuarios");
            builder.Entity<Rol>().ToTable("Roles");

            builder.Entity<Cancion>().Property(x => x.id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Usuario>().Property(x => x.id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Rol>().Property(x => x.id).IsRequired().ValueGeneratedOnAdd();

            base.OnModelCreating(builder);

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                   .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                   .AddJsonFile("appsettings.json")
                   .Build();

                optionsBuilder
                    .UseSqlServer(configuration.GetConnectionString("DefaultConnection")).EnableSensitiveDataLogging().UseLazyLoadingProxies();

            }
        }
    }
}
