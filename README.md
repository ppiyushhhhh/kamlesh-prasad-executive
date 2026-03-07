k# DevOps Monitoring Stack on AWS EC2

This project demonstrates a complete monitoring setup using Prometheus, Grafana, Node Exporter, and Alertmanager deployed on an AWS EC2 instance. The stack monitors system metrics and sends email alerts when issues occur.

## Project Overview

The monitoring system collects metrics from the EC2 instance, visualizes them in Grafana dashboards, and triggers email alerts when predefined thresholds are exceeded.

Public EC2 IP

13.203.154.124

Services

Prometheus  
Grafana  
Node Exporter  
Alertmanager  

## Architecture

Node Exporter collects system metrics from the EC2 server.

Prometheus scrapes the metrics from Node Exporter and evaluates alert rules.

Alertmanager receives alerts from Prometheus and sends email notifications.

Grafana connects to Prometheus and visualizes metrics through dashboards.

Flow

Node Exporter → Prometheus → Alertmanager → Email Notification  
Node Exporter → Prometheus → Grafana Dashboard

## Services Access

Prometheus

http://13.203.154.124:9090

Alertmanager

http://13.203.154.124:9093

Grafana

http://13.203.154.124:3000

Default Grafana Login

Username: admin  
Password: admin

## Features

System metrics monitoring  
CPU usage monitoring  
Memory usage monitoring  
Disk usage monitoring  
Instance availability monitoring  
Email alerts when services go down  
Grafana dashboards for visualization  

## Alerting System

Prometheus evaluates alert rules continuously. When a condition is met, the alert is sent to Alertmanager which then sends an email notification.

Example alert

Instance Down Alert

Condition

up == 0

This alert triggers if the Node Exporter service becomes unavailable.

Email notifications are sent via Gmail SMTP using Alertmanager.

## Screenshots

### EC2 Instance

![EC2 Instance](screenshots/Ec2%20instance%20.png)

### Prometheus Targets

![Prometheus Targets](screenshots/prometheus-targets.png)

### Grafana Dashboard

![Grafana Dashboard](screenshots/grafana-dashboard.png)

### GitHub Actions

![GitHub Actions](screenshots/github-actions.png)

### Grafana Service Status

![Grafana Service](screenshots/systemctl%20status%20grafana-server.png)

### Prometheus and Node Exporter Status

![Prometheus Node Exporter](screenshots/systemctl%20status%20prometheus,%20systemctl%20status%20node_exporter.png)

## Alert Testing

Alerts were tested by stopping services and generating system load.

Example tests

Stop Node Exporter

sudo systemctl stop node_exporter

Generate CPU Load

stress --cpu 2 --timeout 120

## Installation Steps

Update packages

sudo apt update

Install Node Exporter

Download Node Exporter  
Create service file  
Start Node Exporter

Install Prometheus

Download Prometheus  
Configure prometheus.yml  
Create service file  
Start Prometheus

Install Grafana

sudo apt install grafana

Start Grafana

sudo systemctl start grafana-server

Install Alertmanager

Download Alertmanager  
Configure alertmanager.yml  
Create service file  
Start Alertmanager

## Security Group Configuration

Allowed Ports

22  SSH  
3000 Grafana  
9090 Prometheus  
9093 Alertmanager  

## Future Improvements

Add more alert rules such as

High CPU usage alert  
High memory usage alert  
Low disk space alert  

Integrate Slack notifications

Add HTTPS security for dashboards

## Author

Piyush Prasad

DevOps and Cloud Enthusiast
