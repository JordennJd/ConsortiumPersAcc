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

    private List<Laboratory> Laboratories = new List<Laboratory>();
    private Sponsor[] Sponsors;
    [HttpGet]
    [Route("GetLabs")]
    public IActionResult GetLabs()
    {

        Sponsor spon1 = new Sponsor() { name = "spon1", id = 1 };
        Partner part1 = new Partner() { name = "part", id = 1 };
        List<Partner> parts = new List<Partner>() { part1 };

        List<Sponsor> spons = new List<Sponsor>() { spon1 };
        Laboratory lab1 =new Laboratory(){name = "lab1",place = 1,id=1,Sponsors = spons,Partners = parts};
        using (var context = new Context())
        {
            context.Laboratories.Add(lab1);
            context.SaveChanges();
            Console.WriteLine(context.Laboratories.Count());
        }

        Laboratories.Add(lab1);

        return StatusCode(StatusCodes.Status200OK, Laboratories);
    }

}