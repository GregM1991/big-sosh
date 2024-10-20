using MongoDB.Driver;
using CommonLibrary.Models;
using NATS.Client;
using System.Text;
using Newtonsoft.Json;
using CommonLibrary.Events;
using PostServiceNamespace.Models;
using Microsoft.Extensions.Options;

namespace PostServiceNamespace.Services
{
    public class PostService
    {
        private readonly IMongoCollection<Post> _postsCollection;
        private readonly IConnection _natsConnection;

        public PostService(IOptions<MongoDbSettings> mongoDbSettings, IConnection natsConnection)
        {
            var mongoClient = new MongoClient(mongoDbSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(mongoDbSettings.Value.DatabaseName);
            _postsCollection = mongoDatabase.GetCollection<Post>(mongoDbSettings.Value.CollectionName);
            _natsConnection = natsConnection;
        }

        public async Task CreatePostAsync(string content, string userId)
        {
            var newPost = new Post
            {
                Content = content,
                UserId = userId,
            };
            await _postsCollection.InsertOneAsync(newPost);

            PublishPostCreatedEvent(newPost);
        }

        private void PublishPostCreatedEvent(Post post)
        {
            var postCreatedEvent = new PostCreatedEvent
            {
                PostId = post.Id,
                UserId = post.UserId,
                Content = post.Content,
            };

            var eventData = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(postCreatedEvent));
            _natsConnection.Publish("PostCreated", eventData);
        }

        // Other methods remain unchanged
        public async Task<List<Post>> GetAllPostsAsync() =>
        await _postsCollection.Find(_ => true).SortByDescending(p => p.CreatedAt).ToListAsync();

        public async Task<List<Post>> GetPostsByUserAsync(string userId) =>
            await _postsCollection.Find(p => p.UserId == userId).SortByDescending(p => p.CreatedAt).ToListAsync();

        public async Task UpdatePostAsync(string id, Post updatedPost) =>
            await _postsCollection.ReplaceOneAsync(p => p.Id == id, updatedPost);

        public async Task DeletePostAsync(string id) =>
            await _postsCollection.DeleteOneAsync(p => p.Id == id);
    }
}
