using Microsoft.AspNetCore.Mvc;
using PostServiceNamespace.Services;
using PostServiceNamespace.Models;
using static PostServiceNamespace.Models.Request;

namespace PostServiceNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class PostController(PostService postService) : ControllerBase
    {
        private readonly PostService _postService = postService;

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var posts = await _postService.GetAllPostsAsync();
            return Ok(posts);
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetByUser(string userId)
        {
            var posts = await _postService.GetPostsByUserAsync(userId);
            return Ok(posts);
        }

        [HttpPost("{userId}")]
        public async Task<IActionResult> Create(CreateRequest request, string userId)
        {
            await _postService.CreatePostAsync(request.Content, userId);
            return Ok(new { });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Post updatedPost)
        {
            await _postService.UpdatePostAsync(id, updatedPost);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _postService.DeletePostAsync(id);
            return NoContent();
        }
    }
}
