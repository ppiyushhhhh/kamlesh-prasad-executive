# Portfolio Website Deployment on AWS EC2 with GoDaddy Domain, Cloudflare DNS, SSL, and GitHub Actions

This project demonstrates how to deploy a portfolio website on an AWS EC2 instance using Nginx as the web server. The domain is purchased from GoDaddy and DNS is managed through Cloudflare. SSL is enabled for secure HTTPS access, and GitHub Actions is used to automatically deploy updates to the EC2 server whenever changes are pushed to the repository.

Project Overview

The objective of this project is to host a portfolio website on a cloud server and make it accessible through a custom domain with HTTPS security. The project also implements a simple CI/CD pipeline using GitHub Actions so that any update pushed to GitHub is automatically deployed to the AWS EC2 server.

Architecture

User Browser  
→ Cloudflare DNS  
→ Domain: kamleshprasad.xyz  
→ AWS EC2 Instance (13.203.154.124)  
→ Nginx Web Server  
→ Portfolio Website Files

CI/CD Deployment Flow

Developer pushes code to GitHub  
→ GitHub Actions workflow runs  
→ GitHub Actions connects to EC2 using SSH  
→ Latest code is pulled to the server  
→ Website updates automatically

Infrastructure Details

Cloud Provider: AWS  
Compute Service: EC2  
Region: Asia Pacific (Mumbai)  
Operating System: Ubuntu Linux  
Web Server: Nginx  
Domain Provider: GoDaddy  
DNS Provider: Cloudflare  
CI/CD Tool: GitHub Actions

Domain Name

kamleshprasad.xyz

Server Public IP

13.203.154.124

EC2 Security Group Configuration

The following inbound rules were configured.

Port 22 — SSH access  
Port 80 — HTTP traffic  
Port 443 — HTTPS traffic

Step 1 Purchase Domain

The domain kamleshprasad.xyz was purchased from GoDaddy.

Step 2 Launch EC2 Instance

An EC2 instance was created in the Asia Pacific (Mumbai) region using Ubuntu Linux.

Public IP assigned

13.203.154.124

Step 3 Configure Security Group

Inbound rules were configured to allow SSH, HTTP, and HTTPS traffic.

Step 4 Connect to EC2 Server

ssh ubuntu@13.203.154.124

Step 5 Install Nginx Web Server

Update system packages

sudo apt update

Install Nginx

sudo apt install nginx -y

Start Nginx

sudo systemctl start nginx

Enable Nginx at boot

sudo systemctl enable nginx

Verify Nginx status

sudo systemctl status nginx

Step 6 Upload Website Files

Website files are placed inside the Nginx web root directory.

/var/www/html

Example project files

index.html  
assets/  
favicon.ico  
kamlesh-resume.pdf  
placeholder.svg  
robots.txt  

Step 7 Verify Web Server

Check if Nginx is running

sudo ss -tulpn | grep nginx

Test using the EC2 public IP

http://13.203.154.124

Cloudflare DNS Configuration

Step 8 Create Cloudflare Account

Add the domain kamleshprasad.xyz to Cloudflare.

Step 9 Update Nameservers in GoDaddy

Cloudflare provides nameservers.

chloe.ns.cloudflare.com  
patryk.ns.cloudflare.com  

Update these nameservers in GoDaddy.

Step 10 Configure DNS Records

A Record

Name  
kamleshprasad.xyz

IP Address  
13.203.154.124

CNAME Record

Name  
www

Target  
kamleshprasad.xyz

This connects the domain to the EC2 instance.

SSL Configuration

SSL was configured so the website can be accessed securely using HTTPS.

Example access

https://kamleshprasad.xyz

Cloudflare handles SSL encryption between the user and the server.

Continuous Deployment using GitHub Actions

GitHub Actions is used to automatically deploy website updates to the EC2 server whenever changes are pushed to the main branch.

Workflow Process

Developer pushes code to GitHub  
GitHub Actions pipeline starts  
GitHub Actions connects to EC2 using SSH  
Latest repository code is pulled  
Website files update automatically

GitHub Actions Workflow File

Create the following file in your repository.

.github/workflows/deploy.yml

Workflow Code

```yaml
name: Deploy Portfolio to AWS EC2

on:
  push:
    branches:
      - main

jobs:
  deploy:
    name: Deploy Website
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Deploy to EC2 via SSH
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_SSH_KEY }}
          script: |
            cd /var/www/html
            git pull origin main

GitHub Secrets Configuration

Add the following secrets in your GitHub repository.

Repository
Settings
Secrets and Variables
Actions

Create these secrets.

EC2_HOST

13.203.154.124

EC2_USER

ubuntu

EC2_SSH_KEY

Paste the full content of your EC2 private key (.pem file).

Example Deployment Command Executed on EC2

cd /var/www/html
git pull origin main

Whenever a new commit is pushed to GitHub, this command runs automatically through the GitHub Actions workflow.

Repository Structure

portfolio-website-aws

README.md
index.html
assets/
.github/
workflows/
deploy.yml

Future Improvements

Enable automatic SSL renewal
Add Docker container deployment
Add infrastructure automation using Terraform
Improve CI/CD pipeline with build and testing stages

Author

Piyush Prasad
DevOps and Cloud Enthusiast
