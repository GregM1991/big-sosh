using UserServiceNamespace.Services;
using UserServiceNamespace.Models;

var builder = WebApplication.CreateBuilder(args);

// Configure MongoDB settings from configuration
builder.Services.Configure<MongoDbSettings>(options =>
{
    var section = builder.Configuration.GetSection("MongoDbSettings");
    section.Bind(options);
    // Override with environment variable if present
    var connectionString = Environment.GetEnvironmentVariable("MongoDbSettings__ConnectionString");
    if (!string.IsNullOrEmpty(connectionString))
    {
        options.ConnectionString = connectionString;
    }
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        builder =>
        {
            builder.WithOrigins("http://localhost:5173")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials();
        });
});

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