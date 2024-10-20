using PostServiceNamespace.Services;
using CommonLibrary.Models;
using NATS.Client;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<MongoDbSettings>(options =>
{
    var section = builder.Configuration.GetSection("MongoDbSettings");
    section.Bind(options);
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

// Set up NATS connection
builder.Services.AddSingleton<IConnection>(sp =>
{
    var opts = ConnectionFactory.GetDefaultOptions();
    opts.Url = "nats://nats:4222";
    return new ConnectionFactory().CreateConnection(opts);
});

builder.Services.AddSingleton<PostService>();
builder.Services.AddControllers();

var app = builder.Build();

app.Urls.Add("http://0.0.0.0:8080");
app.UseCors("AllowFrontend");

app.UseAuthorization();
app.MapControllers();
app.Run();
