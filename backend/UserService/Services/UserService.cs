using MongoDB.Driver;
using Microsoft.Extensions.Options;
using UserServiceNamespace.Models;

namespace UserServiceNamespace.Services
{
  public class UserService
  {
    private readonly IMongoCollection<User> _users;

    public UserService(IOptions<MongoDbSettings> mongoDbSettings)
    {
        var client = new MongoClient(mongoDbSettings.Value.ConnectionString);
        var database = client.GetDatabase(mongoDbSettings.Value.DatabaseName);
        _users = database.GetCollection<User>(mongoDbSettings.Value.UserCollectionName);
    }

    public async Task<List<User>> GetAllUsersAsync() =>
        await _users.Find(_ => true).ToListAsync();

    public async Task CreateUserAsync(User newUser) =>
        await _users.InsertOneAsync(newUser);
  }
}