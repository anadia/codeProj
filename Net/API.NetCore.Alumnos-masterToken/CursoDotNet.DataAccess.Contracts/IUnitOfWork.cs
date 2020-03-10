using System.Threading.Tasks;

namespace CursoDotNet.DataAccess
{
    public interface IUnitOfWork
    {
        void Commit();
        Task CommitAsync();
        void BeginTransaction();
        void CommitTransaction();
        void RollbackTransaction();
    }
}