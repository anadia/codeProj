using CursoDotNet.DataAccess.Contracts.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace CursoDotNet.DataAccess.Contracts
{
    public interface IApplicationDbContext
    {
        DbSet<Cancion> Canciones { get; set; }

        DbSet<Usuario> Usuarios { get; set; }

        DbSet<Rol> Roles { get; set; }

        int SaveChanges();

        void Dispose();

        EntityEntry<TEntity> GetEntry<TEntity>(TEntity entity) where TEntity : class;

        DbSet<T> GetEntitySet<T>() where T : class;

        DatabaseFacade TheDatabase { get; }
    }
}
