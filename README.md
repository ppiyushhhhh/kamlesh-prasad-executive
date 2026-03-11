# DevOps Infrastructure & CI/CD Deployment Project

This project demonstrates a **complete DevOps workflow** including:

- CI/CD pipeline for automated deployment
- AWS EC2 infrastructure setup
- Nginx web server configuration
- Domain email infrastructure using Cloudflare
- Gmail SMTP integration for sending emails from a custom domain

The goal of this project is to automate deployment and create a professional email system using a custom domain.

---

## 🌐 Live Application

The React application is deployed and accessible at:

**Website:**  
http://kamleshprasad.xyz

**Server IP (AWS EC2):**  
http://13.203.154.124

The website is hosted on an **AWS EC2 Ubuntu server** and served using **Nginx**.

---

## 🏗️ Project Architecture


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


Email Flow


Domain Email
│
▼
Cloudflare Email Routing
│
▼
Gmail Inbox
│
▼
Gmail SMTP


---

## 🚀 Technologies Used

- **Git & GitHub** – Version control
- **GitHub Actions** – CI/CD automation
- **AWS EC2 (Ubuntu)** – Cloud server
- **Nginx** – Web server
- **Node.js & npm** – Runtime and package manager
- **React + Vite** – Frontend framework
- **Cloudflare** – DNS & Email Routing
- **Gmail SMTP** – Sending domain emails

---

## ⚙️ CI/CD Pipeline

The deployment pipeline is implemented using **GitHub Actions**.

Workflow location:


.github/workflows/deploy.yml


### Deployment Steps

1. Developer pushes code to GitHub
2. GitHub Actions workflow triggers
3. Workflow connects to EC2 via SSH
4. Latest code is pulled
5. Dependencies are installed
6. React app is built
7. Files are deployed to Nginx
8. Nginx is restarted

---

## 🖥️ Server Setup

An **AWS EC2 Ubuntu instance** was used as the hosting server.

### Install Node.js


sudo apt install nodejs npm


### Install Nginx


sudo apt install nginx


Deployment directory:


/var/www/html/


---

## 📦 Application Build

Commands used to build the React app:


npm install
npm run build


This generates a **dist folder** containing optimized production files.

---

## 🔐 Secure Deployment (SSH)

GitHub Actions connects to the EC2 server using **SSH authentication**.

Steps:

1. Generate SSH key pair
2. Add private key to GitHub Secrets
3. Configure GitHub Actions workflow

GitHub Secret used:


EC2_SSH_KEY


---

## 📧 Email Infrastructure Setup

A professional domain email system was configured for:


kamleshprasad.xyz


Example emails:

- admin@kamleshprasad.xyz
- contact@kamleshprasad.xyz

---

## 🌍 DNS Configuration (Cloudflare)

| Type | Name | Value | Purpose |
|-----|------|------|------|
| A | kamleshprasad.xyz | 13.203.154.124 | Connect domain to EC2 |
| CNAME | www | kamleshprasad.xyz | Redirect www traffic |

---

## ✉️ Email Routing

Cloudflare Email Routing forwards domain emails to Gmail.

Example:


admin@kamleshprasad.xyz
 → piyushprasad8122@gmail.com

contact@kamleshprasad.xyz
 → piyushprasad8122@gmail.com


---

## 🔒 Email Authentication

### SPF


v=spf1 include:_spf.mx.cloudflare.net include:_spf.google.com ~all


### DMARC


v=DMARC1; p=quarantine; rua=mailto:admin@kamleshprasad.xyz


DKIM was also configured to improve deliverability.

---

## 🎯 Final Outcome

The system now supports:

- Automated deployment using CI/CD
- AWS EC2 hosting
- Nginx web server
- Professional domain email
- Gmail SMTP integration
- Email authentication (SPF, DKIM, DMARC)

---

## 🧠 Skills Demonstrated

- Linux server management
- AWS EC2 infrastructure
- Nginx configuration
- CI/CD using GitHub Actions
- Git version control
- DNS management with Cloudflare
- Email authentication setup
- Automated deployment

---

## 🔮 Future Improvements

Future improvements include:

- HTTPS with SSL certificates
- Monitoring using Prometheus and Grafana
- Docker-based deployments

---

## 👨‍💻 Author

**Piyush Prasad**

DevOps & Cloud Enthusiast

Website:  
http://kamleshprasad.xyz
