using System.ComponentModel.DataAnnotations.Schema;

namespace ConsortiumPersAcc.Models;

public class Laboratory
{
    [NotMapped]
    public int place { get; set; }
    public int id { get; set; }
    public string name { get; set; }

    public List<Sponsor> Sponsors { get; set; }

}