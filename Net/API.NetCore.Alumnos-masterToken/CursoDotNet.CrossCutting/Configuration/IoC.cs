using CursoDotNet.Application.Contracts.Services;
using CursoDotNet.Application.Services;
using CursoDotNet.DataAccess;
using CursoDotNet.DataAccess.Contracts;
using CursoDotNet.DataAccess.Contracts.Repositories;
using CursoDotNet.DataAccess.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CursoDotNet.CrossCutting.Configuration
{
    public static class IoC
    {
        public static IServiceCollection Register(this IServiceCollection services, IConfiguration configuration)
        {
            AddRegistration(services);
            AddRepositories(services);
            AddServices(services);

            return services;
        }

        public static IServiceCollection AddRegistration(this IServiceCollection services)
        {



            return services;
        }

        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddTransient<ICancionService, CancionService>();
            services.AddTransient<IUsuarioService, UsuarioService>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            return services;
        }

        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddTransient<ICancionRepository, CancionRepository>();
            services.AddTransient<IUsuarioRepository, UsuarioRepository>();
            services.AddTransient<ICancionGenericRepository, CancionGenericRepository>();

            return services;
        }
    }
}
