
using UserServiceNamespace.Services;
using UserServiceNamespace.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<MongoDbSettings>(
    builder.Configuration.GetSection("MongoDbSettings"));

builder.Services.AddSingleton<UserService>();

builder.Services.AddControllers();

var app = builder.Build();

app.MapControllers();

app.Run();