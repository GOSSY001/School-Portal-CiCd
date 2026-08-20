# 3MTT School Portal - CI/CD Capstone

## Nigerian Problem Context
Manual deploys break portals. Students cannot access results during updates.

## Solution
A containerized School Portal with automated CI/CD pipeline using GitHub Actions + Docker + Render.

## Core Features
- Student can login with ID to view results
- Build + Test stages in GitHub Actions
- Auto-deploy on push to main branch
- Zero downtime deployment

## Tech Stack
Git, GitHub Actions, Docker, Nginx, Render Free Tier

## How to Deploy
1. Push code to GitHub
2. GitHub Actions builds and pushes Docker image
3. Render pulls new image and deploys automatically

## Live Demo
https://your-render-link.onrender.com

## Author
Godspower Young - 3MTT DevOps Track
