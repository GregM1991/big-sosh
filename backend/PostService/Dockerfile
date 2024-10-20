# Use the official .NET SDK image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory
WORKDIR /src

# Copy the project files for PostService and CommonLibrary
COPY ./backend/PostService/PostService.csproj ./PostService/
COPY ./backend/CommonLibrary/CommonLibrary.csproj ./CommonLibrary/

# Restore dependencies
RUN dotnet restore ./PostService/PostService.csproj

# Copy the rest of the source code
COPY ./backend/PostService/ ./PostService/
COPY ./backend/CommonLibrary/ ./CommonLibrary/

# Build the application
RUN dotnet build ./PostService/PostService.csproj -c Release -o /app/build

# Use a runtime image for the final stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/build .

# Expose port 8080 and run the app
EXPOSE 8080
ENTRYPOINT ["dotnet", "PostService.dll"]
