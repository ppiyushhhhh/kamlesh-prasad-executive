# DevOps Monitoring & CI/CD Deployment Project

## Project Overview

This project demonstrates a complete DevOps workflow where a website is automatically deployed to an AWS EC2 server using GitHub Actions and monitored using Prometheus, Node Exporter, and Grafana.

The application is hosted using Nginx and infrastructure metrics are collected and visualized through a monitoring stack.

Metrics such as CPU usage, memory usage, disk utilization, and network traffic are collected using Node Exporter and Prometheus and visualized in Grafana dashboards.

Server Public IP
13.203.154.124

---

## Architecture

User → Nginx Web Server → Website

Monitoring Stack
Node Exporter → Prometheus → Grafana

Deployment Pipeline
GitHub Repository → GitHub Actions → EC2 Deployment

---

## Technologies Used

AWS EC2 (Ubuntu Server)

Nginx Web Server

GitHub Actions CI/CD

Prometheus Monitoring

Node Exporter System Metrics

Grafana Dashboard Visualization

Linux Systemd Services

Git & GitHub

---

## Features

Automatic website deployment using GitHub Actions

Website hosting using Nginx

Real time infrastructure monitoring

CPU monitoring

Memory monitoring

Disk usage monitoring

Network traffic monitoring

Prometheus metrics collection

Grafana monitoring dashboards

Automatic service startup using systemd

---

## Project Setup

### 1. Launch EC2 Instance

Create an Ubuntu EC2 instance from AWS Console and connect using SSH.

Example connection

ssh -i key.pem ubuntu@13.203.154.124

Update packages

sudo apt update

---

### 2. Install Required Packages

Install necessary tools and web server.

sudo apt install nginx git nodejs npm -y

---

### 3. Configure Nginx

Nginx hosts the application files.

Web root directory

/var/www/html

Restart nginx

sudo systemctl restart nginx

Access website

http://13.203.154.124

---

### 4. CI/CD Deployment Using GitHub Actions

GitHub Actions automatically deploys the application to the EC2 server.

Workflow process

Connect to EC2 using SSH

Pull latest code from GitHub repository

Install project dependencies

Build application

Copy files to Nginx directory

Restart Nginx service

Deployment runs automatically when code is pushed to the main branch.

---

### 5. Install Node Exporter

Node Exporter collects server level metrics.

Metrics include

CPU usage

Memory usage

Disk usage

Network statistics

Node Exporter runs on port

9100

Metrics endpoint

http://13.203.154.124:9100/metrics

---

### 6. Install Prometheus

Prometheus scrapes metrics from Node Exporter.

Example scrape configuration

localhost:9100

Prometheus runs on port

9090

Prometheus UI

http://13.203.154.124:9090

Prometheus stores monitoring metrics in a time series database.

---

### 7. Install Grafana

Grafana visualizes metrics collected by Prometheus.

Grafana runs on port

3000

Grafana dashboard

http://13.203.154.124:3000

Default login

Username: admin
Password: admin

Grafana connects to Prometheus as the data source.

---

## Monitoring Dashboard

The Node Exporter Full dashboard is imported from the Grafana dashboard library.

Dashboard ID

1860

Metrics displayed

CPU usage

RAM usage

Disk utilization

Network traffic

System load

Filesystem usage

---

## Running Services

Monitoring services run as Linux system services.

node_exporter.service

prometheus.service

grafana-server.service

nginx.service

This ensures services start automatically after server reboot.

---

## Project Screenshots

### AWS EC2 Instance

![EC2 Instance](screenshots/ec2-instance.png)

---

### Grafana Service Running

![Grafana Service](screenshots/grafana-service.png)

---

### Prometheus and Node Exporter Services

![Monitoring Services](screenshots/monitoring-services.png)

---

## Future Improvements

Add custom domain and DNS configuration

Enable HTTPS using Let's Encrypt

Implement Prometheus Alertmanager

Add application level monitoring

Containerize services using Docker

Use Terraform for infrastructure automation

---

## Author

Piyush Prasad

DevOps Learning Project
