# 🐳 Node.js Docker & AWS ECS Architecture ☁️

A full-stack DevOps project demonstrating the containerization of a Node.js Express application and its production deployment to AWS Elastic Container Service (ECS).

The application logic is intentionally minimal to focus strictly on infrastructure, image optimization, container orchestration, and cloud networking.

## 🏗️ Cloud Architecture Flow

```text
[ Client Request ]
│
▼
[ AWS Application Load Balancer (Port 80) ]
│
▼
[ Target Group (Port 3000) ]
│
▼
[ AWS ECS Task / Container (Express.js) ]
```

⚙️ Core Infrastructure Implemented
🐳 Local Docker Environment
Optimized Image Size: Configured multi-stage builds to strictly separate the development/build environment from the final production image.

Rapid Rebuilds: Layered Dockerfile instructions strategically to maximize Docker's internal caching mechanism.

Developer Experience (DX): Integrated volume bind mounts via docker-compose.yml to enable instant code reloading without rebuilding containers.

Isolated Networking: Deployed a custom bridge network (my-net) for secure and isolated container-to-container communication.

☁️ AWS Cloud Deployment
Container Registry: Built and pushed the optimized Docker image to Amazon ECR.

Container Orchestration: Deployed the application using AWS ECS with custom Task Definitions to manage the container lifecycle.

Environment Management: Dynamically injected environment variables (e.g., PORT=3000) securely through ECS Task revisions.

Traffic Management & Health Checks: Configured an Application Load Balancer (ALB) and Target Groups with active health checks to seamlessly route internet traffic (Port 80) to the application containers (Port 3000).

🚀 Quick Start (Local Development)
Bash

# Clone and spin up the environment

git clone [https://github.com/your-username/repo-name.git](https://github.com/your-username/repo-name.git)
cd repo-name

# Run the container in detached mode

docker compose up -d
