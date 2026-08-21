# School Portal CI/CD Pipeline

A Continuous Integration and Continuous Deployment pipeline for a School Portal MVP.
This solves the problem of manual deployments breaking in Nigerian schools.

## Tech Stack
- **Backend**: Node.js + Express
- **CI**: GitHub Actions
- **CD**: Render Free Tier
- **Language**: JavaScript

## CI/CD Flow
1. **CI**: On every push to `main`, GitHub Actions installs dependencies and tests the server.
2. **CD**: Render automatically detects the push and deploys the app to a live URL.

## Live Demo
**Health Check Endpoint**: [https://school-portal-cicd-gossy.onrender.com/health](https://school-portal-cicd-gossy.onrender.com/health)
Response: `{"status":"ok","message":"Server is running"}`

## How to Test Locally
1. `npm install`
2. `npm start`
3. Visit `http://localhost:3000/health`

## Author
3MTT Fellowship - DO-01 CI/CD for a School Portal
