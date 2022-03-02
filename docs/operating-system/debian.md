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
sudo ufw enable         # Enable firewall
sudo ufw status         # Check the firewall status for all the ports
sudo ufw allow ssh      # Allow SSH ports

# User Add/update
sudo useradd <username> <groupname>         # Add new user without Home directory. Ex. "sudo useradd foo sudo" (or) "sudo adduser foo -G sudo"; useradd/adduser both are correct.
useradd -m -d /PATH/TO/FOLDER <username>    # Add new user with Home directory. -m for Home dir, -d for home dir path
passwd <username>                           # Set the password for a user
sudo deluser <username>                     # Remove User
sudo deluser --remove-home <username>       # Remove user including home directory. 
usermod -aG sudo <username>                 # Add user to sudo group.

# Get VM Details
cat /etc/os-release
[lsblk](https://www.cyberciti.biz/faq/find-hard-disk-hardware-specs-on-linux/)
blkid

# Search apt package
apt-cache search --names-only '^openjdk-8*'


```
