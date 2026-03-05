# CI/CD Deployment of React Application on AWS EC2 using GitHub Actions

## Live Website

http://13.203.154.124

The application is hosted on an AWS EC2 Ubuntu instance and served using the Nginx web server.

## Monitoring Dashboard

http://13.203.154.124:19999

A Netdata monitoring dashboard has been configured on the server to monitor real-time system metrics such as CPU usage, memory utilization, disk activity, and network traffic.

## Project Overview

This project demonstrates an end-to-end CI/CD pipeline that automatically builds and deploys a React application to an AWS EC2 server using GitHub Actions and Nginx.

The objective of this project is to automate the deployment workflow so that every code change pushed to GitHub is automatically built and deployed to a live server without manual intervention.

## Technologies Used

Git and GitHub for version control
GitHub Actions for CI/CD automation
AWS EC2 (Ubuntu) as the hosting server
Nginx as the web server
Node.js and npm for application build process
React and Vite for frontend development
Netdata for server monitoring
Linux for server administration

## Architecture

Developer → GitHub Repository → GitHub Actions CI/CD → SSH → AWS EC2 Server → Nginx → Live Website

Monitoring Layer:

Netdata → Server Metrics → Real-time Monitoring Dashboard

## Project Structure

project-root
├── src/
├── public/
├── dist/
├── .github/workflows/
│   └── deploy.yml
├── package.json
└── README.md

src contains the React application source code.

dist contains the production build files generated during the build process.

.github/workflows contains the CI/CD workflow configuration.

## Server Setup

An AWS EC2 Ubuntu instance was created to host the application.

The following setup was completed:

Install Node.js and npm
Install and configure Nginx
Clone the project repository
Generate production build files
Deploy build files to Nginx web directory
Install Netdata monitoring tool

Deployment directory used on the server:

/var/www/html/

Nginx serves the static website from this directory.

## Application Build Process

The React application uses a production build process to generate optimized static files.

Commands used:

npm install
npm run build

The build command generates a dist directory containing optimized HTML, CSS, and JavaScript files.

These files are deployed to the Nginx server.

## CI/CD Pipeline

A CI/CD pipeline has been implemented using GitHub Actions.

Workflow file location:

.github/workflows/deploy.yml

The pipeline automatically triggers when code is pushed to the main branch.

### Deployment Process

1. Developer pushes code to GitHub
2. GitHub Actions workflow is triggered
3. Workflow connects to EC2 server using SSH
4. Latest code is pulled from the repository
5. Project dependencies are installed
6. Application build process runs
7. Existing deployment files are removed
8. New build files are copied to the Nginx directory
9. Nginx service is restarted
10. Updated website becomes live

## Monitoring Implementation

Netdata has been installed on the EC2 server to monitor system performance.

The monitoring dashboard provides real-time visibility into:

CPU usage
Memory usage
Disk utilization
Network traffic
System processes

Monitoring Dashboard Access:

http://13.203.154.124:19999

## Secure Authentication

Secure communication between GitHub Actions and the EC2 instance is configured using SSH keys.

Implementation steps:

Generate SSH key pair
Store private key in GitHub repository secrets
Configure workflow to use the SSH key for deployment

Secret used:

EC2_SSH_KEY

## Automated Deployment Workflow

Developer updates application code
Code is pushed to GitHub
GitHub Actions pipeline runs automatically
EC2 server pulls the latest code
Application is rebuilt
Updated files are deployed to Nginx
Live website is updated automatically

## Skills Demonstrated

Linux server management
AWS EC2 infrastructure management
Nginx web server configuration
Git version control
CI/CD pipeline implementation using GitHub Actions
SSH authentication and secure server access
Automated application deployment
Server monitoring using Netdata

## Future Improvements

Add a custom domain to the website instead of using the EC2 public IP address.

Configure DNS records to point the domain to the EC2 server.

Enable HTTPS using SSL certificates.

Future enhancements may include:

Prometheus and Grafana monitoring stack
Docker containerization
Infrastructure as Code using Terraform
Automated server provisioning

