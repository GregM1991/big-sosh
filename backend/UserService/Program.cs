using UserServiceNamespace.Services;
using UserServiceNamespace.Models;

var builder = WebApplication.CreateBuilder(args);

// Configure MongoDB settings from configuration
builder.Services.Configure<MongoDbSettings>(
    builder.Configuration.GetSection("MongoDbSettings"));

// Register UserService as a singleton
builder.Services.AddSingleton<UserService>();

// Add controllers to the service collection
builder.Services.AddControllers();

var app = builder.Build();

// Configure the app to listen on port 8080
app.Urls.Add("http://0.0.0.0:8080");

// Map controller endpoints
app.MapControllers();

// Run the application
app.Run();