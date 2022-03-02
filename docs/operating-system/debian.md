---
slug: debian
title: Debian
# authors: [natarajan]
tags: [debian]
sidebar_position: 2
---

## Package Manager

```
apt update
apt-get update

```

## Reusable terminal Commands

```shell
# General
sudo sh             # switch to root user
cat /etc/passwd     # List all users
pwd                 # Current working Directory
sudo passwd root    # Reset root user password

# Service Commands
sudo service ssh status     # Check the status of the service
sudo service ssh start      # Start the service
sudo service ssh restart    # Restart the service

# Other Service Commands
{start|stop|reload|force-reload|restart|try-restart|status}

# systemctl commands
sudo systemctl status ssh       # Status of SSH service
sudo systemctl status --help    # Help page

# Firewall and Security Settings
sudo ufw allow ssh      # Allow SSH ports

# User Add/update
sudo useradd <username>                     # Add new user without Home directory
useradd -m -d /PATH/TO/FOLDER <username>    # Add new user with Home directory. -m for Home dir, -d for home dir path
passwd <username>                           # Set the password for a user

```
