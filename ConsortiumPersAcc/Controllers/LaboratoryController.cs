using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using ConsortiumPersAcc;
using ConsortiumPersAcc.Models;
using ConsortiumPersAcc.Services.DataBaseService;
namespace ConsortiumPersAcc.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LaboratoryController : ControllerBase
{

    private List<Laboratory> Laboratories;
    private Sponsor[] Sponsors;
    [HttpGet]
    [Route("GetLabs")]
    public IActionResult GetLabs()
    {
        Laboratories = LaboratoryHandler.GetAllLaboratories();
        Sponsors = SponsorsHandler.GetAllSponsorsForLab();
        ProcessData(Laboratories, Sponsors);
        return StatusCode(StatusCodes.Status200OK, Laboratories);
    }

    private void ProcessData(List<Laboratory> Laboratories, Sponsor[] Sponsors)
    {
        for(int i = 0;i<Laboratories.Count;i++)
        {
            for (int j = 0; j < Sponsors.Length; j++)
            {
                if (Sponsors[j].LaboratoriesId.Contains(i+1))
                {
                    Laboratories[i].sponsors+=(Sponsors[j].name)+'&';
                }   
            }
            if (Laboratories[i].sponsors.Length != 0)
            {
                Laboratories[i].sponsors = Laboratories[i].sponsors[..^1];
            }
            else
            {
                Laboratories[i].sponsors += "NoSPONSORS";
            }
        }
    }
}