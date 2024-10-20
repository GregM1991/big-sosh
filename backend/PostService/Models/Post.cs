using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PostServiceNamespace.Models
{
    public class Post
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = ObjectId.GenerateNewId().ToString();

        [BsonElement("userId")]
        [BsonRequired]
        public required string UserId { get; set; }

        [BsonElement("content")]
        [BsonRequired]
        public required string Content { get; set; }

        [BsonElement("createdAt")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [BsonElement("updatedAt")]
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}