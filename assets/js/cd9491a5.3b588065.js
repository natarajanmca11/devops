"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[2478],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return t?a.createElement(g,l(l({ref:n},m),{},{components:t})):a.createElement(g,l({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5348:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),l=["components"],r={slug:"ansible",title:"Ansible",tags:["ansible"],sidebar_position:1},s=void 0,p={unversionedId:"tools/ansible",id:"tools/ansible",title:"Ansible",description:"Setup Ansible Controle panel",source:"@site/docs/tools/ansible.md",sourceDirName:"tools",slug:"/tools/ansible",permalink:"/devops/docs/tools/ansible",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/tools/ansible.md",tags:[{label:"ansible",permalink:"/devops/docs/tags/ansible"}],version:"current",sidebarPosition:1,frontMatter:{slug:"ansible",title:"Ansible",tags:["ansible"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Jenkins",permalink:"/devops/docs/pipeline/jenkins"},next:{title:"NGINX",permalink:"/devops/docs/tools/nginx"}},m=[{value:"Setup Ansible Controle panel",id:"setup-ansible-controle-panel",children:[{value:"Install Ansible in Alpine",id:"install-ansible-in-alpine",children:[],level:3},{value:"Install Ansible in Ubutu",id:"install-ansible-in-ubutu",children:[],level:3}],level:2},{value:"Establish Connecton",id:"establish-connecton",children:[{value:"Target Windows (winrm)",id:"target-windows-winrm",children:[],level:3},{value:"Target Ubuntu (SSH)",id:"target-ubuntu-ssh",children:[],level:3}],level:2},{value:"Sample Inventory file",id:"sample-inventory-file",children:[{value:"Target - Windows OS",id:"target---windows-os",children:[],level:3},{value:"Target - Linux/Other OS",id:"target---linuxother-os",children:[],level:3},{value:"Ansible Vault Ref",id:"ansible-vault-ref",children:[],level:3}],level:2},{value:"Ansible Key Features",id:"ansible-key-features",children:[{value:"Lookup",id:"lookup",children:[{value:"INI Lookup Example",id:"ini-lookup-example",children:[],level:4},{value:"Java properties Lookup Example",id:"java-properties-lookup-example",children:[],level:4}],level:3}],level:2},{value:"Sample Playbooks",id:"sample-playbooks",children:[{value:"Windows: Angular Application Deployed in NGINX Web Server",id:"windows-angular-application-deployed-in-nginx-web-server",children:[{value:"Tasks",id:"tasks",children:[],level:4},{value:"Playbook file",id:"playbook-file",children:[],level:4}],level:3},{value:"Windeows: Spring Boot Application Deploy as Windows Service In Winsows",id:"windeows-spring-boot-application-deploy-as-windows-service-in-winsows",children:[{value:"Tasks",id:"tasks-1",children:[],level:4},{value:"Playbook file",id:"playbook-file-1",children:[],level:4}],level:3},{value:"Debian: Spring Boot Application deploy",id:"debian-spring-boot-application-deploy",children:[{value:"Tasks",id:"tasks-2",children:[],level:4},{value:"Playbook file",id:"playbook-file-2",children:[],level:4}],level:3}],level:2},{value:"Ansible Galaxy (ansible-galaxy)",id:"ansible-galaxy-ansible-galaxy",children:[],level:2}],c={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setup-ansible-controle-panel"},"Setup Ansible Controle panel"),(0,o.kt)("h3",{id:"install-ansible-in-alpine"},"Install Ansible in Alpine"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"apk add --update ansible sshpass python3 py3-pip && ln -sf python3 /usr/bin/python\npip install pywinrm                                   # This is required If target is Windows OS\nansible-galaxy collection install community.general   # Install if required\nansible-galaxy collection install ansible.posix       # Install if required\n\n")),(0,o.kt)("h3",{id:"install-ansible-in-ubutu"},"Install Ansible in Ubutu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update\nsudo apt-get install software-properties-common\nsudo apt-add-repository ppa:ansible/ansible\nsudo apt-get update\nsudo apt-get install ansible -y\n")),(0,o.kt)("h2",{id:"establish-connecton"},"Establish Connecton"),(0,o.kt)("h3",{id:"target-windows-winrm"},"Target Windows (winrm)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check whether WinRM service is running. ",(0,o.kt)("inlineCode",{parentName:"li"},"winrm quickconfig")),(0,o.kt)("li",{parentName:"ol"},"Create HTTPS listener")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Run the bleow Powershell commands in Administrator mode"',title:'"Run',the:!0,bleow:!0,Powershell:!0,commands:!0,in:!0,Administrator:!0,'mode"':!0},'  # List listeners\n  WinRM e winrm/config/listener\n\n  # Generate self signed certificate\n  New-SelfSignedCertificate -DnsName "<YOUR_DNS_NAME>" -CertStoreLocation Cert:\\LocalMachine\\My\n\n  # Create HTTPS Listeners\n  winrm create winrm/config/Listener?Address=*+Transport=HTTPS \'@{Hostname="<YOUR_DNS_NAME>"; CertificateThumbprint="<COPIED_CERTIFICATE_THUMBPRINT>"}\'\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add firewall exception")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Open the port ",(0,o.kt)("inlineCode",{parentName:"h5"},"5985")," for ",(0,o.kt)("inlineCode",{parentName:"h5"},"HTTP")," and ",(0,o.kt)("inlineCode",{parentName:"h5"},"5986")," for ",(0,o.kt)("inlineCode",{parentName:"h5"},"HTTPS")," (recomended) in the target ",(0,o.kt)("inlineCode",{parentName:"h5"},"Windows OS")," firewall and Cloud provider's ",(0,o.kt)("inlineCode",{parentName:"h5"},"Security Group / Networking"),".")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Validate HTTPS listener ",(0,o.kt)("inlineCode",{parentName:"p"},"WinRM e winrm/config/listener"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify you can connect to the machine via HTTPS"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Run the bleow Powershell commands in Administrator mode"',title:'"Run',the:!0,bleow:!0,Powershell:!0,commands:!0,in:!0,Administrator:!0,'mode"':!0},'$hostName="<DNS_NAME>" # example: "mission.westus.cloudapp.azure.com"\n$winrmPort = "5986"\n\n# Get the credentials of the machine\n$cred = Get-Credential\n\n# Connect to the machine\n$soptions = New-PSSessionOption -SkipCACheck\nEnter-PSSession -ComputerName $hostName -Port $winrmPort -Credential $cred -SessionOption $soptions -UseSSL\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"To Allow Unencrypted Password, run the following command (Not Recomended)")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"Set-Item -Path WSMan:\\localhost\\Service\\Auth\\Basic -Value $true\nwinrm set winrm/config/service '@{AllowUnencrypted=\"true\"}'\n")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Reference")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.visualstudiogeeks.com/devops/how-to-configure-winrm-for-https-manually"},"WinRm Https"))))),(0,o.kt)("h3",{id:"target-ubuntu-ssh"},"Target Ubuntu (SSH)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenSSH Server")," in target OS")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenSSH Server")," service in the target OS")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"connect using ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh username@hostname"),". Ex. ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh admin@192.168.0.1")," (or) ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh -i key.pem username@hostname")))),(0,o.kt)("p",null,"TODO:"),(0,o.kt)("h2",{id:"sample-inventory-file"},"Sample Inventory file"),(0,o.kt)("h3",{id:"target---windows-os"},"Target - Windows OS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[GCP]\n43.81.83.173\n\n[GCP:vars]\nansible_connection=winrm \nansible_user=ansibleadmin\nansible_password=admin@123\nansible_port=5986\nansible_winrm_server_cert_validation=ignore\n")),(0,o.kt)("h3",{id:"target---linuxother-os"},"Target - Linux/Other OS"),(0,o.kt)("p",null,"TODO:"),(0,o.kt)("h3",{id:"ansible-vault-ref"},"Ansible Vault ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.ansible.com/ansible/latest/network/getting_started/first_inventory.html"},"Ref")),(0,o.kt)("p",null,"TODO:"),(0,o.kt)("h2",{id:"ansible-key-features"},"Ansible Key Features"),(0,o.kt)("h3",{id:"lookup"},"Lookup"),(0,o.kt)("h4",{id:"ini-lookup-example"},"INI Lookup Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[production]\n# My production information\nuser=robert\npass=somerandompassword\n\n[integration]\n# My integration information\nuser=gertrude\npass=anotherpassword\n")),(0,o.kt)("p",null,"We can use the ini plugin to lookup user configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"- debug: msg=\"User in integration is {{ lookup('ini', 'user section=integration file=users.ini') }}\"\n- debug: msg=\"User in production  is {{ lookup('ini', 'user section=production  file=users.ini') }}\"\n")),(0,o.kt)("h4",{id:"java-properties-lookup-example"},"Java properties Lookup Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"user.name=robert\nuser.pass=somerandompassword\n")),(0,o.kt)("p",null,"You can retrieve the user.name field with the following lookup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"- debug: msg=\"user.name is {{ lookup('ini', 'user.name type=properties file=user.properties') }}\"\n")),(0,o.kt)("h2",{id:"sample-playbooks"},"Sample Playbooks"),(0,o.kt)("h3",{id:"windows-angular-application-deployed-in-nginx-web-server"},"Windows: Angular Application Deployed in NGINX Web Server"),(0,o.kt)("p",null,"(Controle plane is Ubntu -> Target OS is Windows)"),(0,o.kt)("h4",{id:"tasks"},"Tasks"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/devops/docs/tools/nginx#nginx-instalation"},"Install")," the NGINX Web Server"),(0,o.kt)("li",{parentName:"ol"},"Configure the NGINX Web Server by edit/copy the ",(0,o.kt)("a",{parentName:"li",href:"/devops/docs/tools/nginx#https-web-server-sample-config"},"nginx.conf")," file"),(0,o.kt)("li",{parentName:"ol"},"Run the NGINX as windows service"),(0,o.kt)("li",{parentName:"ol"},"Zip the Angular distribution folder"),(0,o.kt)("li",{parentName:"ol"},"Copy to the target machine"),(0,o.kt)("li",{parentName:"ol"},"Remove existing deployment"),(0,o.kt)("li",{parentName:"ol"},"Unzip the file")),(0,o.kt)("h4",{id:"playbook-file"},"Playbook file"),(0,o.kt)("p",null,"Deploy the static web application (html/css) in NGINX Web Server "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=playbook.yml",title:"playbook.yml"},'- hosts: {{HOSTS}}\n  remote_user: root\n  gather_facts: False\n\n  pre_tasks:\n  - debug: msg="Ansible is working!"\n  - name: ping\n    win_ping:\n\n  tasks:\n  # Install NGINX WebServer\n\n  - name: Install NGINX\n    win_chocolatey:\n      name: nginx\n      version: \'1.12.1\'\n      state: present\n\n  - name: Install nssm\n    win_chocolatey:\n      name: nssm\n      state: present\n\n  - name: Copy NGINX conf file\n    win_template: \n      src: nginx.conf.tpl\n      dest: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\conf\\nginx.conf\n\n  - name: Copy Cert file 1\n    win_template: \n      src: ../cert.pem\n      dest: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\conf\\cert.pem\n\n  - name: Copy Cert file 2\n    win_template: \n      src: ../cert.key\n      dest: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\conf\\cert.key\n\n  - name: Create Log Folder\n    win_file:\n      path: C:\\nginx\n      state: directory\n\n  - name: Install nginx as service\n    win_nssm:\n      name: nginx\n      application: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\nginx.exe\n      app_parameters_free_form: -c C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\conf\\nginx.conf -p C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\n      stdout_file: C:\\nginx\\nginx_out.txt\n      stderr_file: C:\\nginx\\nginx_error.txt\n      start_mode: auto\n\n  - name: Start Nginx\n    win_service:\n      name: nginx\n      start_mode: auto\n      state: started\n\n  # https://docs.ansible.com/ansible/2.5/modules/win_firewall_rule_module.html\n  - name: Firewall rules\n    win_firewall_rule:\n      name: "{{ item.name }}"\n      localport: "{{ item.port }}"\n      action: allow\n      direction: in\n      protocol: tcp\n      state: present\n      enabled: yes\n    with_items:\n      - {name: HTTP, port: 80}\n      - {name: HTTPS, port: 443}\n      - {name: WINRM-HTTPS, port: 5986}\n\n  # Deploy the Angular Application\n\n  - name: Archive the Angular Application\n    archive:\n      path: /opt/atlassian/pipelines/agent/build/dist/Mission-web\n      dest: ./app.zip\n      format: zip\n    delegate_to: localhost\n    become: false\n\n  - name: Copy zip File to target\n    win_copy: \n      src: ./app.zip\n      dest: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\\n\n  - name: Unarchive\n    win_unzip:\n      src: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\app.zip\n      dest: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\\n      delete_archive: yes  \n\n  - name: Remove existing ui deployment\n    win_file:\n      path: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\html\n      state: absent\n\n  - name: Create Folder\n    win_file:\n      path: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\html\n      state: directory\n\n  - name: Move Content \n    win_copy:\n      remote_src: yes\n      src: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\Mission-web\\\n      dest: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\html\\\n\n  - name: Remove directory structure\n    win_file:\n      path: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\Mission-web\n      state: absent\n')),(0,o.kt)("h3",{id:"windeows-spring-boot-application-deploy-as-windows-service-in-winsows"},"Windeows: Spring Boot Application Deploy as Windows Service In Winsows"),(0,o.kt)("h4",{id:"tasks-1"},"Tasks"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/devops/docs/tools/nginx#nginx-instalation"},"Install")," the NGINX Web Server")),(0,o.kt)("h4",{id:"playbook-file-1"},"Playbook file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'titiel="playbook.yml"',titiel:'"playbook.yml"'},"- hosts: {{HOSTS}}\n  remote_user: root\n  gather_facts: False\n\n  pre_tasks:\n  - debug: msg=\"Ansible is working in control machine\"\n  - name: Client machine connectivity check by Ping\n    win_ping:\n\n  tasks:\n\n  # PROXY Server Deployment\n\n  - name: Install NGINX\n    win_chocolatey:\n      name: nginx\n      version: '1.12.1'\n      state: present\n  \n  - name: Install nssm\n    win_chocolatey:\n      name: nssm\n      state: present\n\n  - name: Copy NGINX conf file\n    win_template: \n      src: nginx.conf.tpl\n      dest: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\conf\\nginx.conf\n\n  # Certificate (.pem & .key ) files copy to target machine\n  \n  - name: Copy Cert file 1\n    win_template: \n      src: ../cert.pem\n      dest: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\conf\\cert.pem\n\n  - name: Copy Cert file 2\n    win_template: \n      src: ../cert.key\n      dest: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\conf\\cert.key\n\n  - name: Create Log Folder\n    win_file:\n      path: C:\\nginx\n      state: directory\n\n  - name: Install nginx as service\n    win_nssm:\n      name: nginx\n      application: C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\nginx.exe\n      app_parameters_free_form: -c C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\\conf\\nginx.conf -p C:\\ProgramData\\chocolatey\\lib\\nginx\\tools\\nginx-1.12.1\n      stdout_file: C:\\nginx\\nginx_out.txt\n      stderr_file: C:\\nginx\\nginx_error.txt\n      start_mode: auto\n\n  - name: Start Nginx\n    win_service:\n      name: nginx\n      start_mode: auto\n      state: started\n\n  # https://docs.ansible.com/ansible/2.5/modules/win_firewall_rule_module.html\n  - name: Firewall rules\n    win_firewall_rule:\n      name: \"{{ item.name }}\"\n      localport: \"{{ item.port }}\"\n      action: allow\n      direction: in\n      protocol: tcp\n      state: present\n      enabled: yes\n    with_items:\n      - {name: HTTP, port: 80}\n      - {name: HTTPS, port: 443}\n      - {name: WINRM-HTTPS, port: 5986}\n\n  # REST API Deployment\n\n  - name: Remove Spring Boot service\n    win_service:\n      name: mission-api\n      state: absent\n    ignore_errors: yes\n\n  - name: Create Application Folder\n    win_file:\n      path: C:\\Mission\\App\n      state: directory\n\n  - name: Copy API application\n    copy: \n      src: /opt/atlassian/pipelines/agent/build/target/mission-app-core-1.0-SNAPSHOT.jar\n      dest: C:\\Mission\\App\\mission-app-core-1.0-SNAPSHOT.jar\n      directory_mode: yes\n\n  - name: Archive the Config\n    archive:\n      path: /opt/atlassian/pipelines/agent/build/src/main/resources/config\n      dest: ./config.zip\n      format: zip\n    delegate_to: localhost\n    become: false\n\n  - name: Copy zip File to target\n    win_copy: \n      src: ./config.zip\n      dest: C:\\Mission\\\n\n  - name: Remove existing Config\n    win_file:\n      path: C:\\Mission\\config\n      state: absent\n\n  - name: Unarchive\n    win_unzip:\n      src: C:\\Mission\\config.zip\n      dest: C:\\Mission\\\n      delete_archive: yes  \n\n  # - name: Install Java\n  #   win_chocolatey:\n  #     name: jdk8\n  #     state: present\n  #     version: 8.0.191\n\n  # https://community.chocolatey.org/packages/openjdk8#ansible\n  - name: Install openjdk8\n    win_chocolatey:\n      name: openjdk8\n      version: '8.312.07'\n      source: https://community.chocolatey.org/api/v2/\n      state: present\n\n  - name: Set Java_home\n    win_environment:\n      state: present\n      name: JAVA_HOME\n      value: 'C:\\Program Files\\java\\jdk1.8.0_191'\n      level: machine\n\n  - name: Add Java to path\n    win_path:\n      elements:\n        - 'C:\\Program Files\\java\\jdk1.8.0_191\\bin'\n\n  - name: Install Spring Boot app as Windows service (via nssm)\n    win_nssm:\n      name: mission-api\n      application: C:\\Program Files\\java\\jdk1.8.0_191\\bin\\java.exe\n      app_parameters_free_form: \"-jar C:/Mission/App/mission-app-core-1.0-SNAPSHOT.jar\"\n      state: stopped\n  \n  - name: Set the Application path for the Spring Boot app to the folder where the needed native libraries reside\n    raw: nssm set mission-api AppDirectory C:/Mission/\n\n  - name: Set SPRING_DATASOURCE_URL\n    win_environment:\n      state: present\n      name: SPRING_DATASOURCE_URL\n      value: 'jdbc:postgresql://{{dburl}}:{{dbport}}/{{dbname}}'\n      level: machine\n\n  - name: Set SPRING_DATASOURCE_USERNAME\n    win_environment:\n      state: present\n      name: SPRING_DATASOURCE_USERNAME\n      value: '{{dbusername}}'\n      level: machine\n\n  - name: Set SPRING_DATASOURCE_PASSWORD\n    win_environment:\n      state: present\n      name: SPRING_DATASOURCE_PASSWORD\n      value: '{{dbpassword}}'\n      level: machine\n\n  - name: Set SERVER_PORT\n    win_environment:\n      state: present\n      name: SERVER_PORT\n      value: '{{serverport}}'\n      level: machine\n\n  - name: Fire up Spring Boot app Windows service\n    win_service:\n      name: mission-api\n      state: restarted\n\n    ###### Smoke test, if app has booted up correctly\n  # - name: Wait until our Spring Boot app is up & running\n  #   win_uri:\n  #     url: \"https://{{SUBDOMAIN}}.mission.io/miosvc/actuator/health\"\n  #     method: GET\n  #   register: result\n  #   until: result.status_code is defined and result.status_code == 200 \n  #   retries: 5\n  #   delay: 5\n")),(0,o.kt)("h3",{id:"debian-spring-boot-application-deploy"},"Debian: Spring Boot Application deploy"),(0,o.kt)("h4",{id:"tasks-2"},"Tasks"),(0,o.kt)("h4",{id:"playbook-file-2"},"Playbook file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="playbook.yml"',title:'"playbook.yml"'},"\n- hosts: all\n  remote_user: amazeadmin\n  gather_facts: false\n  vars:\n    ansible_python_interpreter: /usr/bin/python3\n  become: true\n\n  tasks:\n    - name: Install Prerequisites\n      apt: \n        name: aptitude \n        update_cache: yes \n        state: latest \n        force_apt_get: yes\n\n  # Sudo Group Setup\n    - name: Make sure we have a 'wheel' group\n      group:\n        name: wheel\n        state: present\n\n    - name: Allow 'wheel' group to have passwordless sudo\n      lineinfile:\n        path: /etc/sudoers\n        state: present\n        regexp: '^%wheel'\n        line: '%wheel ALL=(ALL) NOPASSWD: ALL'\n        validate: '/usr/sbin/visudo -cf %s'\n\n  # User + Key Setup\n    - name: Create a new regular user with sudo privileges\n      user:\n        name: amazeadmin\n        state: present\n        groups: wheel\n        append: true\n        create_home: true\n        shell: /bin/bash\n\n    - name: Set authorized key for remote user\n      authorized_key:\n        user: amazeadmin\n        state: present\n        key: \"{{ lookup('file', './amazeadmin.pub') }}\"\n        # key: ./amazeadmin.pub\n\n    - name: Disable password authentication for root\n      lineinfile:\n        path: /etc/ssh/sshd_config\n        state: present\n        regexp: '^#?PermitRootLogin'\n        line: 'PermitRootLogin prohibit-password'\n\n  # Install Packages\n    - name: Update apt\n      apt: update_cache=yes\n\n    - name: Install required system packages\n      apt: name=ufw state=latest\n\n # UFW Setup\n    - name: UFW - Allow SSH connections\n      ufw:\n        rule: allow\n        name: OpenSSH\n\n    - name: UFW - Deny all other incoming traffic by default\n      ufw:\n        state: enabled\n        policy: deny\n        direction: incoming\n\n    - name: Install latest version of \"openjdk-11-jdk\" ignoring \"install-recommends\"\n      apt:\n        name: openjdk-11-jdk\n        state: latest\n        install_recommends: no\n\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Reference")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-use-ansible-with-terraform-for-configuration-management"},"Ansible with Terraform for configuration management"))))),(0,o.kt)("h2",{id:"ansible-galaxy-ansible-galaxy"},"Ansible Galaxy (ansible-galaxy)"))}d.isMDXComponent=!0}}]);