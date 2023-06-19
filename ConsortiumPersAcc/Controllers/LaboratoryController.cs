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
    [HttpGet]
    [Route("GetLabs")]
    public IActionResult GetLabs()
    {
        LaboratoryHandler.PutIdInOrder();
        Laboratories = LaboratoryHandler.GetAllLaboratories();
        return StatusCode(StatusCodes.Status200OK, Laboratories);
    }
}