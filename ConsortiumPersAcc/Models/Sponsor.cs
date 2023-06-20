namespace ConsortiumPersAcc.Models;

public class Sponsor
{
    public int id { get; set; }
    public string name { get; set; }
    public List<int> LaboratoriesId { get; set; }

    public Sponsor(int id, string name, List<int> LaboratoriesId)
    {
        this.id = id;
        this.name = name;
        this.LaboratoriesId = LaboratoriesId;
    }
}