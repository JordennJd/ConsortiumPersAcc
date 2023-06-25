namespace ConsortiumPersAcc.Models;

public class Laboratory
{
    public int place { get; set; }
    public int id { get; set; }
    public string sponsors { get; set; }
    public string name { get; set; }
    public Laboratory(int place, int id, string name,string sponsors)
    {
        this.place = place;
        this.id = id;
        this.name = name;
        this.sponsors = sponsors;
    }
    
}