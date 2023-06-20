using ConsortiumPersAcc.Models;
namespace ConsortiumPersAcc.Services.DataBaseService;

internal sealed class LaboratoryHandler
{
    public static void AddLaboratory(Laboratory Laboratory)
    {
        RequestGenerator.INSERT(GetStringForINSERT(Laboratory), "users(id, name, sponsorsId)");
    }

    public static void DeleteLaboratory(Laboratory Laboratory)
    {
        RequestGenerator.DELETE("id = {Laboratory.id}","Laboratories");
        

    }
    public static void UpdateLaboratoryId(int LabId, int CorrectId){
        RequestGenerator.UPDATE($"id= '{CorrectId}'","Laboratories", $"id = {LabId}");
    }
    

    private static string GetStringForINSERT(Laboratory Laboratory)
    {
        if (Laboratory != null)
            return $"{Laboratory.id},'{Laboratory.name}'";

        return null;
    }

    public static bool IsLaboratoryInDB(Laboratory Laboratory)
    {
        List<string [] > request = RequestGenerator.SELECT("id", "Laboratories");
        if(request.Count == 0){
            return false;
        }
        return request[0][0].Contains(Laboratory.id.ToString()); 
    }

    public static List<Laboratory> GetAllLaboratories()
    {
        List<string[]> LaboratoriesStr = RequestGenerator.SELECT("*", "Laboratories");
        List<Laboratory> Laboratories = new List<Laboratory>();
        for (int i = 0; i < LaboratoriesStr.Count; i++)
        {
            Laboratories.Add(new Laboratory(Convert.ToInt32(LaboratoriesStr[i][0]),LaboratoriesStr[i][1]));
        }
        
        return Laboratories;
    }

    public  static void PutIdInOrder()
    {
        List<string[]> Laboratories = RequestGenerator.SELECT("*", "Laboratories");
        for (int i = 0; i < Laboratories.Count; i++)
        {
            if (Laboratories[i][0] != i.ToString())
            {
                UpdateLaboratoryId(Convert.ToInt32(Laboratories[i][0]), i+1);
            }
        }
        
    }
}

