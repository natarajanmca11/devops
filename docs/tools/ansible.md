---
slug: ansible
title: Ansible
# authors: [natarajan]
tags: [ansible]
sidebar_position: 1
---

## Setup Ansible Controle panel

### Install Ansible in Ubutu

### Install Ansible in Windows
TODO:


## Establish Connecton 

### Target Windows (winrm)

1. Check whether WinRM service is running. `winrm quickconfig`
2. Create HTTPS listener

```shell title="Run the bleow Powershell commands in Administrator mode"
  # List listeners
  WinRM e winrm/config/listener

  # Generate self signed certificate
  New-SelfSignedCertificate -DnsName "<YOUR_DNS_NAME>" -CertStoreLocation Cert:\LocalMachine\My

  # Create HTTPS Listeners
  winrm create winrm/config/Listener?Address=*+Transport=HTTPS '@{Hostname="<YOUR_DNS_NAME>"; CertificateThumbprint="<COPIED_CERTIFICATE_THUMBPRINT>"}'
```
3. Add firewall exception

:::info Open the port `5985` for `HTTP` and `5986` for `HTTPS` (recomended) in the target `Windows OS` firewall and Cloud provider's `Security Group / Networking`.
:::info

4. Validate HTTPS listener `WinRM e winrm/config/listener`

5. Verify you can connect to the machine via HTTPS

```shell title="Run the bleow Powershell commands in Administrator mode"
$hostName="<DNS_NAME>" # example: "mission.westus.cloudapp.azure.com"
$winrmPort = "5986"

# Get the credentials of the machine
$cred = Get-Credential

# Connect to the machine
$soptions = New-PSSessionOption -SkipCACheck
Enter-PSSession -ComputerName $hostName -Port $winrmPort -Credential $cred -SessionOption $soptions -UseSSL
```

:::tip To Allow Unencrypted Password, run the following command (Not Recomended)
    
    Set-Item -Path WSMan:\localhost\Service\Auth\Basic -Value $true
    winrm set winrm/config/service '@{AllowUnencrypted="true"}'

:::tip

:::info Reference
1. [WinRm Https](https://www.visualstudiogeeks.com/devops/how-to-configure-winrm-for-https-manually)
:::info

### Target Ubuntu (SSH)

1. Install the `OpenSSH Server` in target OS

2. Run the `OpenSSH Server` service in the target OS

3. connect using `ssh username@hostname`. Ex. `ssh admin@192.168.0.1` (or) `ssh -i key.pem username@hostname`


TODO:

## Sample Inventory file

### Target - Windows OS
```ini
[GCP]
43.81.83.173

[GCP:vars]
ansible_connection=winrm 
ansible_user=ansibleadmin
ansible_password=admin@123
ansible_port=5986
ansible_winrm_server_cert_validation=ignore
```

### Target - Linux/Other OS

TODO:


## Angular Application Deployed in NGINX Web Server
(Controle plane is Ubntu -> Target OS is Windows)

### Tasks
1. [Install](./nginx.md#nginx-instalation) the NGINX Web Server
2. Configure the NGINX Web Server by edit/copy the [nginx.conf](./nginx.md#https-web-server-sample-config) file
3. Run the NGINX as windows service
4. Zip the Angular distribution folder
5. Copy to the target machine
6. Remove existing deployment
7. Unzip the file

### Sample playbook file 

Deploy the static web application (html/css) in NGINX Web Server 

```yml title=playbook.yml
- hosts: {{HOSTS}}
  remote_user: root
  gather_facts: False

  pre_tasks:
  - debug: msg="Ansible is working!"
  - name: ping
    win_ping:

  tasks:
  # Install NGINX WebServer

  - name: Install NGINX
    win_chocolatey:
      name: nginx
      version: '1.12.1'
      state: present

  - name: Install nssm
    win_chocolatey:
      name: nssm
      state: present

  - name: Copy NGINX conf file
    win_template: 
      src: nginx.conf.tpl
      dest: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\conf\nginx.conf

  - name: Copy Cert file 1
    win_template: 
      src: ../cert.pem
      dest: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\conf\cert.pem

  - name: Copy Cert file 2
    win_template: 
      src: ../cert.key
      dest: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\conf\cert.key

  - name: Create Log Folder
    win_file:
      path: C:\nginx
      state: directory

  - name: Install nginx as service
    win_nssm:
      name: nginx
      application: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\nginx.exe
      app_parameters_free_form: -c C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\conf\nginx.conf -p C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1
      stdout_file: C:\nginx\nginx_out.txt
      stderr_file: C:\nginx\nginx_error.txt
      start_mode: auto

  - name: Start Nginx
    win_service:
      name: nginx
      start_mode: auto
      state: started

  # https://docs.ansible.com/ansible/2.5/modules/win_firewall_rule_module.html
  - name: Firewall rules
    win_firewall_rule:
      name: "{{ item.name }}"
      localport: "{{ item.port }}"
      action: allow
      direction: in
      protocol: tcp
      state: present
      enabled: yes
    with_items:
      - {name: HTTP, port: 80}
      - {name: HTTPS, port: 443}
      - {name: WINRM-HTTPS, port: 5986}

  # Deploy the Angular Application

  - name: Archive the Angular Application
    archive:
      path: /opt/atlassian/pipelines/agent/build/dist/Mission-web
      dest: ./app.zip
      format: zip
    delegate_to: localhost
    become: false

  - name: Copy zip File to target
    win_copy: 
      src: ./app.zip
      dest: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\

  - name: Unarchive
    win_unzip:
      src: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\app.zip
      dest: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\
      delete_archive: yes  

  - name: Remove existing ui deployment
    win_file:
      path: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\html
      state: absent

  - name: Create Folder
    win_file:
      path: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\html
      state: directory

  - name: Move Content 
    win_copy:
      remote_src: yes
      src: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\Mission-web\
      dest: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\html\

  - name: Remove directory structure
    win_file:
      path: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\Mission-web
      state: absent
```


## Spring Bboot Application Deploy as Windows Service In Winsows

### Tasks

1. [Install](./nginx.md#nginx-instalation) the NGINX Web Server

### Sample playbook file

```yml titiel=playbook.yml
- hosts: {{HOSTS}}
  remote_user: root
  gather_facts: False

  pre_tasks:
  - debug: msg="Ansible is working in control machine"
  - name: Client machine connectivity check by Ping
    win_ping:

  tasks:

  # PROXY Server Deployment

  - name: Install NGINX
    win_chocolatey:
      name: nginx
      version: '1.12.1'
      state: present
  
  - name: Install nssm
    win_chocolatey:
      name: nssm
      state: present

  - name: Copy NGINX conf file
    win_template: 
      src: nginx.conf.tpl
      dest: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\conf\nginx.conf

  # Certificate (.pem & .key ) files copy to target machine
  
  - name: Copy Cert file 1
    win_template: 
      src: ../cert.pem
      dest: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\conf\cert.pem

  - name: Copy Cert file 2
    win_template: 
      src: ../cert.key
      dest: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\conf\cert.key

  - name: Create Log Folder
    win_file:
      path: C:\nginx
      state: directory

  - name: Install nginx as service
    win_nssm:
      name: nginx
      application: C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\nginx.exe
      app_parameters_free_form: -c C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1\conf\nginx.conf -p C:\ProgramData\chocolatey\lib\nginx\tools\nginx-1.12.1
      stdout_file: C:\nginx\nginx_out.txt
      stderr_file: C:\nginx\nginx_error.txt
      start_mode: auto

  - name: Start Nginx
    win_service:
      name: nginx
      start_mode: auto
      state: started

  # https://docs.ansible.com/ansible/2.5/modules/win_firewall_rule_module.html
  - name: Firewall rules
    win_firewall_rule:
      name: "{{ item.name }}"
      localport: "{{ item.port }}"
      action: allow
      direction: in
      protocol: tcp
      state: present
      enabled: yes
    with_items:
      - {name: HTTP, port: 80}
      - {name: HTTPS, port: 443}
      - {name: WINRM-HTTPS, port: 5986}

  # REST API Deployment

  - name: Remove Spring Boot service
    win_service:
      name: mission-api
      state: absent
    ignore_errors: yes

  - name: Create Application Folder
    win_file:
      path: C:\Mission\App
      state: directory

  - name: Copy API application
    copy: 
      src: /opt/atlassian/pipelines/agent/build/target/mission-app-core-1.0-SNAPSHOT.jar
      dest: C:\Mission\App\mission-app-core-1.0-SNAPSHOT.jar
      directory_mode: yes

  - name: Archive the Config
    archive:
      path: /opt/atlassian/pipelines/agent/build/src/main/resources/config
      dest: ./config.zip
      format: zip
    delegate_to: localhost
    become: false

  - name: Copy zip File to target
    win_copy: 
      src: ./config.zip
      dest: C:\Mission\

  - name: Remove existing Config
    win_file:
      path: C:\Mission\config
      state: absent

  - name: Unarchive
    win_unzip:
      src: C:\Mission\config.zip
      dest: C:\Mission\
      delete_archive: yes  

  # - name: Install Java
  #   win_chocolatey:
  #     name: jdk8
  #     state: present
  #     version: 8.0.191

  # https://community.chocolatey.org/packages/openjdk8#ansible
  - name: Install openjdk8
    win_chocolatey:
      name: openjdk8
      version: '8.312.07'
      source: https://community.chocolatey.org/api/v2/
      state: present

  - name: Set Java_home
    win_environment:
      state: present
      name: JAVA_HOME
      value: 'C:\Program Files\java\jdk1.8.0_191'
      level: machine

  - name: Add Java to path
    win_path:
      elements:
        - 'C:\Program Files\java\jdk1.8.0_191\bin'

  - name: Install Spring Boot app as Windows service (via nssm)
    win_nssm:
      name: mission-api
      application: C:\Program Files\java\jdk1.8.0_191\bin\java.exe
      app_parameters_free_form: "-jar C:/Mission/App/mission-app-core-1.0-SNAPSHOT.jar"
      state: stopped
  
  - name: Set the Application path for the Spring Boot app to the folder where the needed native libraries reside
    raw: nssm set mission-api AppDirectory C:/Mission/

  - name: Set SPRING_DATASOURCE_URL
    win_environment:
      state: present
      name: SPRING_DATASOURCE_URL
      value: 'jdbc:postgresql://{{dburl}}:{{dbport}}/{{dbname}}'
      level: machine

  - name: Set SPRING_DATASOURCE_USERNAME
    win_environment:
      state: present
      name: SPRING_DATASOURCE_USERNAME
      value: '{{dbusername}}'
      level: machine

  - name: Set SPRING_DATASOURCE_PASSWORD
    win_environment:
      state: present
      name: SPRING_DATASOURCE_PASSWORD
      value: '{{dbpassword}}'
      level: machine

  - name: Set SERVER_PORT
    win_environment:
      state: present
      name: SERVER_PORT
      value: '{{serverport}}'
      level: machine

  - name: Fire up Spring Boot app Windows service
    win_service:
      name: mission-api
      state: restarted

    ###### Smoke test, if app has booted up correctly
  # - name: Wait until our Spring Boot app is up & running
  #   win_uri:
  #     url: "https://{{SUBDOMAIN}}.mission.io/miosvc/actuator/health"
  #     method: GET
  #   register: result
  #   until: result.status_code is defined and result.status_code == 200 
  #   retries: 5
  #   delay: 5
```

:::info Reference
1. [Ansible with Terraform for configuration management](https://www.digitalocean.com/community/tutorials/how-to-use-ansible-with-terraform-for-configuration-management)

:::info