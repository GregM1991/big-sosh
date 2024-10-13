# Big Sosh (React + ASP.NET Core + Microservices)

This is a full-stack Big Sosh built using **React** on the frontend and **ASP.NET Core** microservices on the backend. The project leverages **React Router v6** for navigation and data fetching, **React Query** for caching and state management, **MongoDB** as the NoSQL database, and **Docker** for containerization, with orchestration handled by **Kubernetes**. Continuous Integration/Deployment (CI/CD) is set up using **GitHub Actions**.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
  - [Docker and Kubernetes](#docker-and-kubernetes)
  - [CI/CD Pipeline](#ci-cd-pipeline)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Tech Stack

### Frontend
- **React** (with Vite)
- **React Router v6** (for navigation and data prefetching)
- **React Query** (for state and data caching)
- **Tailwind CSS** (for styling)
- **TypeScript**

### Backend
- **ASP.NET Core** (Web API with Microservices)
  - **User Service**
  - **Post Service**
  - **Comment Service**
- **MongoDB** (NoSQL database for data persistence)
- **MassTransit + RabbitMQ** (optional, for event-driven architecture)

### DevOps
- **Docker** (for containerizing services)
- **Kubernetes** (for orchestration and scaling)
- **GitHub Actions** (CI/CD pipeline for automated testing, building, and deploying)

## Features

- **User Management**: Create, update, and retrieve users.
- **Post Management**: Users can create, update, and fetch posts.
- **Commenting System**: Users can comment on posts.
- **React Query** for caching data, managing loading/error states, and providing stateful synchronization.
- **React Router** for navigation, with loaders for data fetching and actions for handling mutations.
- **Event-Driven Architecture**: Optional support for RabbitMQ with MassTransit for inter-service communication.
- **CI/CD Pipeline** with GitHub Actions for automated testing, building, and deployment to Kubernetes.
<!-- 
## Setup Instructions

### Prerequisites
- **Node.js** and **npm** installed on your local machine.
- **Docker** and **Kubernetes** installed.
- **MongoDB** running locally or on a cloud provider (e.g., MongoDB Atlas).
- **.NET SDK** installed. -->
<!-- 
### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```
  2. **Install dependencies:**
    ```bash
    npm install
    ```

  3. **Start the development server:**
    ```bash
    npm run dev
    ```

  4. **Access the frontend in your browser:**
    ```arduino
    http://localhost:3000
    ```

  ### Backend Setup

  1. **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

  2. **For each microservice (UserService, PostService, CommentService):**

    - **Install dependencies:**
      ```bash
      dotnet restore
      ```

    - **Run the service locally:**
      ```bash
      dotnet run --project UserService
      dotnet run --project PostService
      dotnet run --project CommentService
      ```

  3. **MongoDB Setup:** Ensure MongoDB is running on your machine or cloud. Update the connection strings in each service's `appsettings.json` file.

  ### Docker and Kubernetes

  1. **Build Docker images for each service:**
    ```bash
    docker build -t your-dockerhub-username/user-service ./UserService
    docker build -t your-dockerhub-username/post-service ./PostService
    docker build -t your-dockerhub-username/comment-service ./CommentService
    ```

  2. **Push Docker images to DockerHub:**
    ```bash
    docker push your-dockerhub-username/user-service
    docker push your-dockerhub-username/post-service
    docker push your-dockerhub-username/comment-service
    ```

  3. **Deploy to Kubernetes:**
    ```bash
    kubectl apply -f ./kubernetes/user-service.yaml
    kubectl apply -f ./kubernetes/post-service.yaml
    kubectl apply -f ./kubernetes/comment-service.yaml
    ```

  4. **Check the status of your Kubernetes services:**
    ```bash
    kubectl get pods
    kubectl get services
    ```

  ### CI/CD Pipeline

  The CI/CD pipeline is set up using GitHub Actions to automate the following tasks:

  - Run tests for both frontend and backend.
  - Build Docker images for each microservice.
  - Push images to DockerHub.
  - Deploy to Kubernetes.

  The pipeline is triggered on every push to the main branch or on pull requests.

  **To use the CI/CD pipeline:**

  1. Fork or clone this repository and make sure you have set up DockerHub credentials in GitHub Secrets (`DOCKER_USERNAME`, `DOCKER_PASSWORD`).
  2. GitHub Actions will automatically run on every push to the main branch.

  ### API Endpoints

  Here are the main API endpoints for each microservice:

  **User Service**

  - `GET /users`: Retrieve all users
  - `POST /users`: Create a new user

  **Post Service**

  - `GET /posts`: Retrieve all posts
  - `POST /posts`: Create a new post

  **Comment Service**

  - `GET /comments`: Retrieve all comments
  - `POST /comments`: Create a new comment -->
