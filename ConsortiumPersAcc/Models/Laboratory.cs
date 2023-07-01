namespace ConsortiumPersAcc.Models;

public class Laboratory
{
    public int place { get; set; }
    public int id { get; set; }
    public string name { get; set; }

    public List<Sponsor> Sponsors { get; set; }
    public List<Partner> Partners { get; set; }

}