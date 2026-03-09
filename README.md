# Portfolio Website Deployment on AWS EC2 with GoDaddy Domain and Cloudflare DNS

This project demonstrates how to deploy a portfolio website on an AWS EC2 instance using Nginx as the web server. The domain was purchased from GoDaddy and DNS is managed through Cloudflare. The goal of this project is to host a static portfolio website on a cloud server and make it accessible through a custom domain.

## Project Overview

The website is hosted on an AWS EC2 instance running Ubuntu Linux. Nginx is used as the web server to serve the website files. Cloudflare is used to manage DNS records and connect the domain to the EC2 server.

The deployment process includes setting up the EC2 server, installing Nginx, uploading website files, configuring DNS records, and connecting the custom domain to the server.

## Architecture

User Browser  
→ Cloudflare DNS  
→ Domain: kamleshprasad.xyz  
→ AWS EC2 Public IP: 13.203.154.124  
→ Nginx Web Server  
→ Portfolio Website Files

## Infrastructure Details

Cloud Provider: AWS  
Compute Service: EC2  
Region: Asia Pacific (Mumbai)  
Operating System: Ubuntu Linux  
Web Server: Nginx  
Domain Provider: GoDaddy  
DNS Provider: Cloudflare  

Domain Name: kamleshprasad.xyz  
Public Server IP: 13.203.154.124  

## EC2 Security Group Configuration

The following inbound rules were configured in the EC2 security group to allow access to the server.

Port 22 — SSH access  
Port 80 — HTTP web traffic  
Port 443 — HTTPS web traffic  

These rules allow remote management and public access to the website.

## Step 1: Purchase Domain

The domain **kamleshprasad.xyz** was purchased from GoDaddy. Initially, GoDaddy was the DNS provider for the domain.

## Step 2: Launch AWS EC2 Instance

An EC2 instance was launched in the **Asia Pacific (Mumbai)** region using **Ubuntu Linux**.

The instance received a public IP address:

13.203.154.124

This instance will host the portfolio website.

## Step 3: Configure Security Group

Inbound rules were added to allow:

SSH access on port 22  
HTTP traffic on port 80  
HTTPS traffic on port 443  

This allows users to access the website and allows SSH access for server management.

## Step 4: Connect to EC2 Instance

The EC2 server was accessed using SSH.


ssh ubuntu@13.203.154.124


## Step 5: Install Nginx Web Server

Update system packages.


sudo apt update


Install Nginx.


sudo apt install nginx -y


Start the Nginx service.


sudo systemctl start nginx


Enable Nginx to start automatically on boot.


sudo systemctl enable nginx


Check service status.


sudo systemctl status nginx


## Step 6: Upload Website Files

The portfolio website files were placed in the Nginx default web root directory.


/var/www/html


Example website files:


index.html
assets/
favicon.ico
kamlesh-resume.pdf
placeholder.svg
robots.txt


Nginx serves these files when users access the website.

## Step 7: Verify Web Server

Check if Nginx is listening on port 80.


sudo ss -tulpn | grep nginx


Open the EC2 public IP in a browser.


http://13.203.154.124


If Nginx is configured correctly, the website should load.

## Step 8: Create Cloudflare Account

A Cloudflare account was created and the domain **kamleshprasad.xyz** was added to Cloudflare so DNS records could be managed.

## Step 9: Update Nameservers in GoDaddy

Cloudflare assigned the following nameservers.


chloe.ns.cloudflare.com
patryk.ns.cloudflare.com


These nameservers were updated in GoDaddy so the domain started using Cloudflare DNS.

## Step 10: Configure DNS Records in Cloudflare

DNS records were created to point the domain to the EC2 instance.

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


This configuration connects the domain to the EC2 server.

## Cloudflare Proxy Issue

When the Cloudflare proxy was initially enabled, the website returned **Error 521**.

Error 521 means Cloudflare could not establish a connection with the origin server.

## Temporary Fix

The proxy was temporarily disabled by switching the DNS record from **Proxied (orange cloud)** to **DNS Only (grey cloud)**.

This allowed the browser to communicate directly with the EC2 server.

Once disabled, the website became accessible.

## Website Access

The portfolio website can be accessed using the custom domain.


http://kamleshprasad.xyz


## Project Directory Structure


/var/www/html

index.html
assets/
favicon.ico
kamlesh-resume.pdf
placeholder.svg
robots.txt


## Future Improvements

Enable HTTPS using SSL certificates  
Enable Cloudflare proxy and caching  
Add CI/CD pipeline for automated deployment  
Improve website security and performance

## Author

Piyush Prasad  
DevOps and Cloud Enthusiast
