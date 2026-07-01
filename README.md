# FastAPI-ReactJS-and-Postgres-on-Amazon-EC2

Production-style example of a GitHub Actions CI/CD pipeline that deploys a simple Todo application consisting of:

Frontend: ReactJS
Backend: Python (Flask/FastAPI/Django)
Database: PostgreSQL
Deployment Target: Ubuntu EC2 instance
Deployment Method: Docker Compose over SSH
Architecture
                   GitHub Repository
                          |
                  Push to main branch
                          |
                  GitHub Actions Runner
                          |
          -------------------------------
          |                             |
      Build Backend               Build Frontend
          |                             |
          -------------------------------
                          |
                Run Unit Tests
                          |
                Build Docker Images
                          |
                SSH into EC2
                          |
                 Pull latest code
                          |
             docker compose up -d --build
                          |
             Python API + React + PostgreSQL
