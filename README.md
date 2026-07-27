# Dockerized Node.js Architecture & AWS ECS Deployment 🐳☁️

A lightweight, fully containerized Node.js environment designed to implement core DevOps practices — from optimized local containerization to production-ready cloud deployment on AWS ECS with Load Balancing.

---

## 🏗️ Cloud Deployment Architecture (AWS)

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

- **Container Registry:** Pushed optimized Docker images to **Amazon ECR**.
- **Container Orchestration:** Deployed on **AWS ECS** using custom Task Definitions and Service revisions.
- **Traffic Routing & Health:** Configured an **Application Load Balancer (ALB)** with active Target Group health checks.
- **Port Mapping & Config:** Dynamic environment variable injection (`PORT=3000`) across container revisions.

---

## ⚙️ Local Infrastructure & Core Features

- **Optimized Image Size:** Configured multi-stage builds to strictly separate the development/build environment from the final production image.
- **Rapid Rebuilds:** Layered `Dockerfile` instructions strategically to maximize Docker's internal caching mechanism.
- **Developer Experience (DX):** Integrated volume bind mounts via `docker-compose.yml` to enable instant code reloading without rebuilding containers.
- **Isolated Networking:** Deployed a custom bridge network (`my-net`) for secure and isolated container-to-container communication.

---

## 🚀 Quick Start (Local)

```bash
# Clone and spin up the environment
git clone [https://github.com/your-username/repo-name.git](https://github.com/your-username/repo-name.git)
cd repo-name
docker compose up -d
```
🛠️ AWS Services & Tech Stack
Runtime: Node.js, Express.js

Containers: Docker, Docker Compose

Cloud Infrastructure: AWS ECR, AWS ECS, AWS Application Load Balancer (ALB), AWS VPC Security Groups