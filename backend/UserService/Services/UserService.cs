using MongoDB.Driver;
using Microsoft.Extensions.Options;
using UserServiceNamespace.Models;

namespace UserServiceNamespace.Services
{
  public class UserService
  {
    private readonly IMongoCollection<User> _usersCollection;

    public UserService(IOptions<MongoDbSettings> mongoDbSettings)
    {
      var mongoClient = new MongoClient(mongoDbSettings.Value.ConnectionString);
      var mongoDatabase = mongoClient.GetDatabase(mongoDbSettings.Value.DatabaseName);
      _usersCollection = mongoDatabase.GetCollection<User>(mongoDbSettings.Value.UserCollectionName);
    }

    public async Task<List<User>> GetAllUsersAsync() =>
        await _usersCollection.Find(_ => true).ToListAsync();

    public async Task CreateUserAsync(User newUser) =>
        await _usersCollection.InsertOneAsync(newUser);
  }
}