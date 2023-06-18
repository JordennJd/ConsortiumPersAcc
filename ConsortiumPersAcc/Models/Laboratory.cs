namespace ConsortiumPersAcc.Models;

public class Laboratory
{
    public int id { get; set; }

    public string name { get; set; }

    public Laboratory(int id, string name)
    {
        this.id = id;
        this.name = name;
    }
    
}