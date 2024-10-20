using Microsoft.AspNetCore.Mvc;
using UserServiceNamespace.Services;
using UserServiceNamespace.Models;

namespace UserServiceNamespace.Controllers
{
  [ApiController]
  [Route("api/[controller]/[action]")]
  public class UserController(UserService userService) : ControllerBase
  {
    private readonly UserService _userService = userService;

        [HttpGet]
    public async Task<IActionResult> GetAll()
    {
      var users = await _userService.GetAllUsersAsync();
      return Ok(users);
    }

    [HttpPost]
    public async Task<IActionResult> Create(User newUser)
    {
      await _userService.CreateUserAsync(newUser);
      return CreatedAtAction(nameof(GetAll), new { id = newUser.Id }, newUser);
    }
  }
}