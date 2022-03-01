"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[4062],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6046:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={slug:"aws",title:"Amazon Web Srvice (AWS)",tags:["aws"],sidebar_position:2},s=void 0,c={unversionedId:"cloud/aws",id:"cloud/aws",title:"Amazon Web Srvice (AWS)",description:"Install AWS Cli",source:"@site/docs/cloud/aws.md",sourceDirName:"cloud",slug:"/cloud/aws",permalink:"/devops/docs/cloud/aws",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/cloud/aws.md",tags:[{label:"aws",permalink:"/devops/docs/tags/aws"}],version:"current",sidebarPosition:2,frontMatter:{slug:"aws",title:"Amazon Web Srvice (AWS)",tags:["aws"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Microsoft Azure",permalink:"/devops/docs/cloud/azure"},next:{title:"Google Cloud Provider (GCP)",permalink:"/devops/docs/cloud/gcp"}},u=[{value:"Install AWS Cli",id:"install-aws-cli",children:[],level:2},{value:"Generate Access key and Secret key in AWS Console",id:"generate-access-key-and-secret-key-in-aws-console",children:[],level:2},{value:"Login",id:"login",children:[{value:"Login in Windows OS",id:"login-in-windows-os",children:[],level:3},{value:"Credentials profile",id:"credentials-profile",children:[],level:3},{value:"Config profile",id:"config-profile",children:[],level:3},{value:"Login in Linux / Other OS",id:"login-in-linux--other-os",children:[],level:3}],level:2}],d={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"install-aws-cli"},"Install AWS Cli"),(0,o.kt)("p",null,"Install Latest version of AWS CLI( > 2.0)"),(0,o.kt)("h2",{id:"generate-access-key-and-secret-key-in-aws-console"},"Generate Access key and Secret key in AWS Console"),(0,o.kt)("h2",{id:"login"},"Login"),(0,o.kt)("h3",{id:"login-in-windows-os"},"Login in Windows OS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=Authenticate AWS Cli",title:"Authenticate",AWS:!0,Cli:!0},'aws configure set aws_access_key_id "${AWS_ACCESS_KEY_ID}"\naws configure set aws_secret_access_key "${AWS_SECRET_ACCESS_KEY}"\naws configure set region "${DEFAULT_REGION_NAME}"\n')),(0,o.kt)("p",null,"or just run ",(0,o.kt)("inlineCode",{parentName:"p"},"aws configure")," command in console. It will ask althe required values to authenticate."),(0,o.kt)("h3",{id:"credentials-profile"},"Credentials profile"),(0,o.kt)("p",null,"The credentials file uses a different naming format than the AWS CLI config file for named profiles. Do not use the word profile when creating an entry in the credentials file."),(0,o.kt)("p",null,"~/.aws/credentials (Linux & Mac) or %USERPROFILE%",".","aws\\credentials (Windows)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"\n[default]\naws_access_key_id=AKIAIOSFODNN7EXAMPLE\naws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n\n[user1]\naws_access_key_id=AKIAI44QH8DHBEXAMPLE\naws_secret_access_key=je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY\n\n")),(0,o.kt)("h3",{id:"config-profile"},"Config profile"),(0,o.kt)("p",null,"~/.aws/config (Linux & Mac) or %USERPROFILE%",".","aws\\config (Windows)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[default]\nregion=us-west-2\noutput=json\n\n[profile user1]\nregion=us-east-1\noutput=text\n")),(0,o.kt)("h3",{id:"login-in-linux--other-os"},"Login in Linux / Other OS"),(0,o.kt)("p",null,"TODO"))}p.isMDXComponent=!0}}]);