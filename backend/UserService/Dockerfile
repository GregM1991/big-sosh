# Use the official .NET SDK image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory
WORKDIR /src

# Copy the project files for UserService and CommonLibrary
COPY ./backend/UserService/UserService.csproj ./UserService/
COPY ./backend/CommonLibrary/CommonLibrary.csproj ./CommonLibrary/

# Restore dependencies
RUN dotnet restore ./UserService/UserService.csproj

# Copy the rest of the source code
COPY ./backend/UserService/ ./UserService/
COPY ./backend/CommonLibrary/ ./CommonLibrary/

# Build the application
RUN dotnet build ./UserService/UserService.csproj -c Release -o /app/build

# Use a runtime image for the final stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/build .

# Expose port 8080 and run the app
EXPOSE 8080
ENTRYPOINT ["dotnet", "UserService.dll"]
