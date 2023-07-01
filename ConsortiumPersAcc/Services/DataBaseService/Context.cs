using ConsortiumPersAcc.Models;
using Microsoft.EntityFrameworkCore;

namespace ConsortiumPersAcc.Services.DataBaseService;

public class Context : DbContext
{

    public Context()
    {
        Database.EnsureDeleted();
        Database.EnsureCreated();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySql("server=localhost;user=root;password=lfybk2000;database=db;", 
            new MySqlServerVersion(new Version(8, 0, 22)));
    }
    
    public DbSet<Laboratory> Laboratories { get; set; }
    public DbSet<Sponsor> Sponsors { get; set; }

}