# CI/CD Deployment of React Application on AWS EC2 using GitHub Actions

## Project Overview

This project demonstrates an end-to-end CI/CD pipeline that automatically builds and deploys a React application to an AWS EC2 server using GitHub Actions and Nginx. The goal of the project is to automate the deployment process so that every code change pushed to GitHub is automatically built and deployed to a live server.

## Live Deployment

The application is currently deployed and accessible at:

http://13.203.154.124

The website is hosted on an AWS EC2 Ubuntu instance and served using the Nginx web server.

## Technologies Used

Git and GitHub for version control
GitHub Actions for CI/CD automation
AWS EC2 (Ubuntu) as the hosting server
Nginx as the web server
Node.js and npm for application build process
React and Vite for frontend development

## Project Architecture

Developer pushes code to GitHub →
GitHub Actions workflow is triggered →
Workflow connects to EC2 server via SSH →
Application is built using npm →
Build files are deployed to Nginx →
Website is served live from EC2

## Server Setup

An AWS EC2 Ubuntu instance was created to host the application.

The following setup steps were completed on the server:

* Installed Node.js and npm
* Installed and configured Nginx
* Cloned the project repository
* Built the application using npm
* Deployed the production build to the Nginx web directory

Deployment directory used on the server:

/var/www/html/

Nginx serves the static website from this directory.

## Application Build Process

The application uses a production build process to convert source code into optimized static files.

Commands used:

npm install
npm run build

This process generates a **dist** directory containing optimized HTML, CSS, and JavaScript files which are deployed to the Nginx server.

## CI/CD Implementation

A CI/CD pipeline was implemented using GitHub Actions.

Workflow location:

.github/workflows/deploy.yml

The pipeline automatically triggers when code is pushed to the **main** branch.

Deployment workflow steps:

1. GitHub detects a new code push
2. GitHub Actions starts the deployment workflow
3. The workflow connects to the EC2 server using SSH
4. Latest code is pulled from the repository
5. Project dependencies are installed
6. The application is built
7. Old deployment files are removed
8. New build files are copied to the Nginx directory
9. Nginx is restarted

This process ensures that the latest version of the application is always deployed automatically.

## Secure Server Authentication

Secure communication between GitHub Actions and the EC2 server was configured using SSH keys.

Steps implemented:

* Generated an SSH key pair
* Stored the private key in GitHub repository secrets
* Configured GitHub Actions to use the key for authentication

Secret used in GitHub:

EC2_SSH_KEY

## Automated Deployment Flow

1. Developer updates the application code
2. Code is pushed to GitHub
3. GitHub Actions pipeline runs automatically
4. EC2 server pulls the latest code
5. Application is rebuilt
6. Updated files are deployed to Nginx
7. Website is updated on the live server

## Project Outcome

This project demonstrates a practical DevOps workflow that automates application deployment using CI/CD pipelines. It removes the need for manual server updates and ensures faster and consistent deployments.

## Skills Demonstrated

Linux server management
AWS EC2 infrastructure management
Nginx web server configuration
Git version control
CI/CD pipeline creation using GitHub Actions
SSH authentication and secure server access
Automated application deployment

## Future Improvements

In future versions of this project, a custom domain will be connected to the website instead of accessing it through the EC2 public IP address. DNS records will be configured and an SSL certificate will be added to enable secure HTTPS access.

## Resume Project Description

Implemented a CI/CD pipeline using GitHub Actions to automatically build and deploy a React application to an AWS EC2 instance with Nginx, enabling automated production deployments on every code push.
