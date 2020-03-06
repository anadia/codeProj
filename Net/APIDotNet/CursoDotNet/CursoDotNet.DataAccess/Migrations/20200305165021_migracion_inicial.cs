using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CursoDotNet.DataAccess.Migrations
{
    public partial class migracion_inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    createUserId = table.Column<int>(nullable: false),
                    createDateTime = table.Column<DateTime>(nullable: false),
                    updateUserId = table.Column<int>(nullable: true),
                    updateDateTime = table.Column<DateTime>(nullable: true),
                    nombre = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    createUserId = table.Column<int>(nullable: false),
                    createDateTime = table.Column<DateTime>(nullable: false),
                    updateUserId = table.Column<int>(nullable: true),
                    updateDateTime = table.Column<DateTime>(nullable: true),
                    nombre = table.Column<string>(nullable: false),
                    email = table.Column<string>(nullable: false),
                    password = table.Column<string>(nullable: false),
                    rolId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.id);
                    table.ForeignKey(
                        name: "FK_Usuarios_Roles_rolId",
                        column: x => x.rolId,
                        principalTable: "Roles",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Canciones",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    createUserId = table.Column<int>(nullable: false),
                    createDateTime = table.Column<DateTime>(nullable: false),
                    updateUserId = table.Column<int>(nullable: true),
                    updateDateTime = table.Column<DateTime>(nullable: true),
                    titulo = table.Column<string>(nullable: false),
                    duracion = table.Column<string>(nullable: false),
                    Usuarioid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Canciones", x => x.id);
                    table.ForeignKey(
                        name: "FK_Canciones_Usuarios_Usuarioid",
                        column: x => x.Usuarioid,
                        principalTable: "Usuarios",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Canciones_Usuarioid",
                table: "Canciones",
                column: "Usuarioid");

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_rolId",
                table: "Usuarios",
                column: "rolId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Canciones");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}
