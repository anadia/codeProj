﻿// <auto-generated />
using System;
using CursoDotNet.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CursoDotNet.DataAccess.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20200309082711_migracion_inicial")]
    partial class migracion_inicial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CursoDotNet.DataAccess.Contracts.Entidades.Cancion", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("Usuarioid")
                        .HasColumnType("int");

                    b.Property<DateTime>("createDateTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("createUserId")
                        .HasColumnType("int");

                    b.Property<int>("duracion")
                        .HasColumnType("int");

                    b.Property<string>("titulo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("updateDateTime")
                        .HasColumnType("datetime2");

                    b.Property<int?>("updateUserId")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("Usuarioid");

                    b.ToTable("Canciones");
                });

            modelBuilder.Entity("CursoDotNet.DataAccess.Contracts.Entidades.Rol", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("createDateTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("createUserId")
                        .HasColumnType("int");

                    b.Property<string>("nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("updateDateTime")
                        .HasColumnType("datetime2");

                    b.Property<int?>("updateUserId")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("CursoDotNet.DataAccess.Contracts.Entidades.Usuario", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("createDateTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("createUserId")
                        .HasColumnType("int");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("rolId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("updateDateTime")
                        .HasColumnType("datetime2");

                    b.Property<int?>("updateUserId")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("rolId");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("CursoDotNet.DataAccess.Contracts.Entidades.Cancion", b =>
                {
                    b.HasOne("CursoDotNet.DataAccess.Contracts.Entidades.Usuario", null)
                        .WithMany("canciones")
                        .HasForeignKey("Usuarioid");
                });

            modelBuilder.Entity("CursoDotNet.DataAccess.Contracts.Entidades.Usuario", b =>
                {
                    b.HasOne("CursoDotNet.DataAccess.Contracts.Entidades.Rol", "rol")
                        .WithMany()
                        .HasForeignKey("rolId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}