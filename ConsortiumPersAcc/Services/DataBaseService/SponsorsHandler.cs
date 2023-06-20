using ConsortiumPersAcc.Models;
namespace ConsortiumPersAcc.Services.DataBaseService;

public class SponsorsHandler
{
    public static Sponsor[] GetAllSponsorsForLab()
    {
        List<string[]> SponsorStr = RequestGenerator.SELECT("*", "Sponsors");
        List<Sponsor> Sponsors = new List<Sponsor>();
        for (int i = 0; i < SponsorStr.Count; i++)
        {
            Sponsors.Add(new Sponsor(Convert.ToInt32(SponsorStr[i][0]), SponsorStr[i][1],GetIdList(SponsorStr[i][2])));
        }

        return Sponsors.ToArray();
    }

    public static List<int> GetIdList(string Idstr)
    {
        string[] Id = Idstr.Split('&');
        List<int> IdInt = new List<int>(Id.Length);
        for (int i = 0; i < Id.Length; i++)
        {
            IdInt.Add(Convert.ToInt32(Id[i]));
        }

        return IdInt;
    }
}