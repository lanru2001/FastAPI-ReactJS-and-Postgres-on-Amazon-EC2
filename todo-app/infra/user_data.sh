#!/bin/bash

set -e

# Update system
apt update -y
apt install -y docker.io docker-compose git

systemctl enable docker
systemctl start docker

# Create app directory
mkdir -p /home/ubuntu/app
cd /home/ubuntu/app
