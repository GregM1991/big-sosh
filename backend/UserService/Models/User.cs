using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace UserServiceNamespace.Models
{
  public class User
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("name")]
    [BsonRequired]
    required public string Name { get; set; }

    [BsonElement("email")]
    [BsonRequired]
    required public string Email { get; set; }

    public User()
    {
      Id = ObjectId.GenerateNewId().ToString();
    }
  }
}