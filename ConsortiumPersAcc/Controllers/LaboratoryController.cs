using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using ConsortiumPersAcc;
using ConsortiumPersAcc.Models;
using ConsortiumPersAcc.Services.DataBaseService;
using Microsoft.EntityFrameworkCore;

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

        Sponsor spon1 = new Sponsor() { name = "yandexlogo" };
        Sponsor spon2 = new Sponsor() { name = "gazpromlogo" };
        Sponsor spon3 = new Sponsor() { name = "gazpromlogo" };

        Sponsor spon4 = new Sponsor() { name = "gazpromlogo" };

        Sponsor spon5 = new Sponsor() { name = "gazpromlogo" };



        List<Sponsor> spons1 = new List<Sponsor>() { spon1, new Sponsor() { name = "sponsor" } };
        List<Sponsor> spons2 = new List<Sponsor>() { spon2, new Sponsor() { name = "gazpromlogo" }, new Sponsor() { name = "gazpromlogo" }, new Sponsor() { name = "gazpromlogo" }, new Sponsor() { name = "gazpromlogo" } };
        List<Sponsor> spons3 = new List<Sponsor>() { spon3 };
        List<Sponsor> spons4 = new List<Sponsor>() { spon4 };
        Laboratory lab1 = new Laboratory() { name = "lab1", id = 1, place = 1, Sponsors = spons1 };
        Laboratory lab2 = new Laboratory() { name = "lab2", id = 2, place = 2, Sponsors = spons2 };
        Laboratory lab3 = new Laboratory() { name = "lab3", id = 3, place = 3, Sponsors = spons3 };
        Laboratory lab4 = new Laboratory() { name = "lab4", id = 4, place = 4, Sponsors = spons4 };

        Laboratories.Add(lab1);
        Laboratories.Add(lab2);
        Laboratories.Add(lab3);
        Laboratories.Add(lab4);


        // using (var context = new Context())
        // {
        //     int place = 1;
        //     context.Laboratories.Add(lab1);
        //     context.Laboratories.Add(lab2);
        //     context.Laboratories.Add(lab3);
        //     context.Laboratories.Add(lab4);
        //     context.SaveChanges();
        //
        //     foreach (var lab in context.Laboratories.Include("Sponsors"))
        //     {
        //         lab.place = place; 
        //         Laboratories.Add(lab);
        //         place++;
        //
        //     }
        // }
        return StatusCode(StatusCodes.Status200OK, Laboratories);
    }

}