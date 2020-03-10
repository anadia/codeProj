using System;
using CursoDotNet.DataAccess.Contracts;
using CursoDotNet.DataAccess.Contracts.Entidades;

namespace CursoDotNet.DataAccess.Repositories
{
    public class CancionGenericRepository : GenericRepository<Cancion>, ICancionGenericRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public CancionGenericRepository(ApplicationDbContext dbContext): base(dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }
    }
}