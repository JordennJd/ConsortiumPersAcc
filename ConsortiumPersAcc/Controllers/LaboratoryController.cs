using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using ConsortiumPersAcc;
using ConsortiumPersAcc.Models;

namespace ConsortiumPersAcc.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LaboratoryController : ControllerBase
{
    private List<Laboratory> Labs = new List<Laboratory>{new Laboratory(1,"Lab1"),
        new Laboratory(2,"Lab2"),new Laboratory(3,"Lab1"),new Laboratory(4,"Lab2"),
        new Laboratory(5,"Lab1"),new Laboratory(6,"Lab2"),
        new Laboratory(7,"Lab1"),new Laboratory(8,"Lab2")};
    [HttpGet]
    [Route("GetLabs")]
    public IActionResult GetLabs()
    {
        return StatusCode(StatusCodes.Status200OK, Labs);
    }
}