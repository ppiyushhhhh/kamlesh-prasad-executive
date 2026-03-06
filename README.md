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

Automatic deployment using GitHub Actions

Website hosting using Nginx

Real time infrastructure monitoring

CPU monitoring

Memory monitoring

Disk usage monitoring

Network traffic monitoring

Prometheus metrics collection

Grafana dashboards

System services configured for automatic startup

---

## Project Setup

### 1. Launch EC2 Instance

Create an Ubuntu EC2 instance from AWS Console and connect using SSH.

Example

ssh -i key.pem ubuntu@13.203.154.124

Update system

sudo apt update

---

### 2. Install Required Packages

Install necessary tools.

sudo apt install nginx git nodejs npm -y

---

### 3. Configure Nginx

Nginx hosts the application files.

Website root directory

/var/www/html

Restart nginx

sudo systemctl restart nginx

Access the application

http://13.203.154.124

---

### 4. CI/CD Deployment Using GitHub Actions

GitHub Actions automatically deploys the application to the EC2 server.

Workflow steps

Connect to EC2 via SSH

Pull latest code from GitHub repository

Install dependencies

Build project

Deploy files to Nginx directory

Restart Nginx service

Deployment runs automatically whenever code is pushed to the main branch.

---

### 5. Install Node Exporter

Node Exporter collects server level metrics.

Metrics collected

CPU usage

Memory usage

Disk usage

Network statistics

Node Exporter Port

9100

Metrics Endpoint

http://13.203.154.124:9100/metrics

---

### 6. Install Prometheus

Prometheus scrapes metrics from Node Exporter.

Example scrape configuration

localhost:9100

Prometheus Port

9090

Prometheus UI

http://13.203.154.124:9090

Prometheus stores monitoring data in a time series database.

---

### 7. Install Grafana

Grafana visualizes metrics collected by Prometheus.

Grafana Port

3000

Grafana Dashboard

http://13.203.154.124:3000

Default Login

Username: admin
Password: admin

Grafana connects to Prometheus as the data source.

---

## Monitoring Dashboard

The Node Exporter Full dashboard is imported from Grafana dashboard library.

Dashboard ID

1860

Metrics displayed

CPU usage

Memory usage

Disk utilization

Network traffic

System load

Filesystem usage

---

## Running Services

Monitoring components run as Linux services.

node_exporter.service
prometheus.service
grafana-server.service
nginx.service

This ensures services automatically start when the server reboots.

---

## Project Screenshots

### AWS EC2 Instance

![EC2 Instance](screenshots/Ec2%20instance%20.png)

---

### GitHub Actions Deployment Pipeline

![GitHub Actions](screenshots/github-actions.png)

---

### Grafana Monitoring Dashboard

![Grafana Dashboard](screenshots/grafana-dashboard.png)

---

### Prometheus Monitoring Targets

![Prometheus Targets](screenshots/prometheus-targets.png)

---

### Grafana Service Running

![Grafana Service](screenshots/systemctl%20status%20grafana-server.png)

---

### Prometheus and Node Exporter Services

![Monitoring Services](screenshots/systemctl%20status%20prometheus,%20systemctl%20status%20node_exporter.png)

---

## Future Improvements

Add custom domain and DNS configuration

Enable HTTPS using Let's Encrypt

Add Prometheus Alertmanager for alerts

Monitor application level metrics

Containerize services using Docker

Implement Infrastructure as Code using Terraform

---

## Author

Piyush Prasad

DevOps Learning Project
