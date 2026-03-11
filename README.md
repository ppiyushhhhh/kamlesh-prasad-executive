DevOps Infrastructure & CI/CD Deployment Project

This project demonstrates a complete DevOps workflow including:

CI/CD pipeline for automated deployment

AWS EC2 infrastructure setup

Nginx web server configuration

Domain email infrastructure using Cloudflare

Gmail SMTP integration for sending emails from a custom domain

The goal of this project is to automate deployment and create a professional email system using a custom domain.

🌐 Live Application

The React application is deployed and accessible at:

Website:
http://kamleshprasad.xyz

Server IP (AWS EC2):
http://13.203.154.124

The website is hosted on an AWS EC2 Ubuntu server and served using Nginx.
The domain kamleshprasad.xyz is configured through Cloudflare DNS and mapped to the EC2 server.

🏗️ Project Architecture
Developer
   │
   ▼
GitHub Repository
   │
   ▼
GitHub Actions CI/CD Pipeline
   │
   ▼
AWS EC2 Server (Ubuntu)
   │
   ▼
Nginx Web Server
   │
   ▼
Live Website (kamleshprasad.xyz)

Email flow:

Domain Email
   │
   ▼
Cloudflare Email Routing
   │
   ▼
Gmail Inbox
   │
   ▼
Gmail SMTP (Send Email)
🚀 Technologies Used

Git & GitHub – Version control and repository hosting

GitHub Actions – CI/CD automation

AWS EC2 (Ubuntu) – Cloud server hosting

Nginx – Web server for hosting the React build

Node.js & npm – Build environment

React + Vite – Frontend application

Cloudflare – DNS and Email Routing

Gmail SMTP – Sending domain emails

⚙️ CI/CD Pipeline

The deployment pipeline is implemented using GitHub Actions.

Workflow location:

.github/workflows/deploy.yml
Pipeline Process

Developer pushes code to GitHub

GitHub Actions workflow triggers

Workflow connects to EC2 via SSH

Latest code is pulled from repository

Dependencies are installed

React application is built

Build files are deployed to Nginx

Nginx is restarted

This ensures automatic deployment whenever new code is pushed.

🖥️ Server Setup

An AWS EC2 Ubuntu instance was used as the hosting server.

Server Configuration

Install Node.js and npm

sudo apt install nodejs npm

Install Nginx

sudo apt install nginx

Deployment directory:

/var/www/html/

Nginx serves the React production build from this directory.

📦 Application Build

The React application uses a production build process.

Commands used:

npm install
npm run build

This generates a dist folder containing optimized:

HTML

CSS

JavaScript

These files are deployed to the Nginx web server.

🔐 Secure Deployment (SSH)

GitHub Actions connects to the EC2 server using SSH authentication.

Steps implemented:

Generated an SSH key pair

Added the private key to GitHub Secrets

Configured workflow authentication

GitHub Secret used:

EC2_SSH_KEY
📧 Email Infrastructure Setup

A professional domain email system was configured for:

kamleshprasad.xyz

Example domain emails:

admin@kamleshprasad.xyz

contact@kamleshprasad.xyz

🌍 DNS Configuration (Cloudflare)
Type	Name	Value	Purpose
A	kamleshprasad.xyz	13.203.154.124	Connect domain to EC2
CNAME	www	kamleshprasad.xyz	Redirect www traffic
✉️ Email Routing

Cloudflare Email Routing forwards domain emails to Gmail.

Example:

admin@kamleshprasad.xyz → piyushprasad8122@gmail.com
contact@kamleshprasad.xyz → piyushprasad8122@gmail.com

This allows receiving domain emails inside Gmail.

📬 Mail Server Configuration
MX Records
route1.mx.cloudflare.net
route2.mx.cloudflare.net
route3.mx.cloudflare.net

These records route incoming emails through Cloudflare mail servers.

🔒 Email Authentication

To improve deliverability and prevent spoofing, the following authentication records were configured.

SPF
v=spf1 include:_spf.mx.cloudflare.net include:_spf.google.com ~all

Allows:

Cloudflare Email Routing

Gmail SMTP sending

DKIM

A DKIM TXT record was added to verify domain authenticity.

Purpose:

Confirms sender identity

Prevents email modification

Improves deliverability

DMARC
v=DMARC1; p=quarantine; rua=mailto:admin@kamleshprasad.xyz

Purpose:

Protects domain from spoofing

Defines policy for authentication failures

📤 Gmail SMTP Configuration

Custom domain email was integrated with Gmail.

Setting	Value
SMTP Server	smtp.gmail.com
Port	587
Encryption	TLS
Authentication	Gmail App Password

This allows sending emails from Gmail using:

admin@kamleshprasad.xyz
⚠️ Issues Encountered

During setup the following issues occurred:

Incorrect SMTP configuration

Gmail App Password setup issues

Duplicate DMARC records

Emails initially delivered to spam

These issues were resolved by correcting DNS and authentication settings.

🎯 Final Outcome

The infrastructure now supports:

Automated deployment with CI/CD

AWS EC2 cloud hosting

Nginx production web server

Professional domain email system

Gmail integration for sending emails

Email authentication with SPF, DKIM, and DMARC

Working domain emails:

admin@kamleshprasad.xyz
contact@kamleshprasad.xyz
🧠 Skills Demonstrated

Linux server administration

AWS EC2 infrastructure management

Nginx web server configuration

CI/CD pipeline creation using GitHub Actions

Git version control

DNS management with Cloudflare

Email authentication (SPF, DKIM, DMARC)

Secure SSH deployment

Automated application deployment

🔮 Future Improvements

Future enhancements planned for this project:

Configure HTTPS using SSL certificates

Connect additional custom subdomains

Implement monitoring with Prometheus and Grafana

Containerize deployment using Docker

👨‍💻 Author

Piyush Prasad

DevOps & Cloud Enthusiast

Website:
http://kamleshprasad.xyz
