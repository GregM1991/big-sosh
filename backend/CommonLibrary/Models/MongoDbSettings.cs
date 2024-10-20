// File: Models/MongoDbSettings.cs
namespace CommonLibrary.Models
{
    public class MongoDbSettings
    {
        public required string ConnectionString { get; set; }
        public required string DatabaseName { get; set; }
        public required string CollectionName { get; set; }
    }
}