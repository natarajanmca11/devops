"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[7664],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},841:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={slug:"debian",title:"Debian",tags:["debian"],sidebar_position:2},c=void 0,u={unversionedId:"operating-system/debian",id:"operating-system/debian",title:"Debian",description:"Package Manager",source:"@site/docs/operating-system/debian.md",sourceDirName:"operating-system",slug:"/operating-system/debian",permalink:"/devops/docs/operating-system/debian",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/operating-system/debian.md",tags:[{label:"debian",permalink:"/devops/docs/tags/debian"}],version:"current",sidebarPosition:2,frontMatter:{slug:"debian",title:"Debian",tags:["debian"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Alpine",permalink:"/devops/docs/operating-system/alpine"},next:{title:"Ubuntu",permalink:"/devops/docs/operating-system/ubuntu"}},l=[{value:"Package Manager",id:"package-manager",children:[],level:2},{value:"Reusable terminal Commands",id:"reusable-terminal-commands",children:[],level:2}],d={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"package-manager"},"Package Manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apt update\napt-get update\n\n")),(0,o.kt)("h2",{id:"reusable-terminal-commands"},"Reusable terminal Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# General\nsudo sh             # switch to root user\ncat /etc/passwd     # List all users\npwd                 # Current working Directory\nsudo passwd root    # Reset root user password\n\n# Service Commands\nsudo service ssh status     # Check the status of the service\nsudo service ssh start      # Start the service\nsudo service ssh restart    # Restart the service\n\n# Other Service Commands\n{start|stop|reload|force-reload|restart|try-restart|status}\n\n# systemctl commands\nsudo systemctl status ssh       # Status of SSH service\nsudo systemctl status --help    # Help page\n\n# Firewall and Security Settings\nsudo ufw allow ssh      # Allow SSH ports\n\n# User Add/update\nsudo useradd <username>                     # Add new user without Home directory\nuseradd -m -d /PATH/TO/FOLDER <username>    # Add new user with Home directory. -m for Home dir, -d for home dir path\npasswd <username>                           # Set the password for a user\n\n")))}p.isMDXComponent=!0}}]);