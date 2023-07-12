"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[2786],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6871:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={slug:"azure",title:"Microsoft Azure",tags:["azure"],sidebar_position:1},l=void 0,u={unversionedId:"cloud/azure",id:"cloud/azure",title:"Microsoft Azure",description:"Install Azure Cli",source:"@site/docs/cloud/azure.md",sourceDirName:"cloud",slug:"/cloud/azure",permalink:"/devops/docs/cloud/azure",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/cloud/azure.md",tags:[{label:"azure",permalink:"/devops/docs/tags/azure"}],version:"current",sidebarPosition:1,frontMatter:{slug:"azure",title:"Microsoft Azure",tags:["azure"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/devops/docs/introduction"},next:{title:"Amazon Web Srvice (AWS)",permalink:"/devops/docs/cloud/aws"}},s=[{value:"Install Azure Cli",id:"install-azure-cli",children:[],level:2},{value:"Login",id:"login",children:[],level:2},{value:"Create service principle",id:"create-service-principle",children:[],level:2},{value:"Azure Active Directory",id:"azure-active-directory",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-azure-cli"},"Install Azure Cli"),(0,a.kt)("h2",{id:"login"},"Login"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Azure Cli command to login in azure cloud"',title:'"Azure',Cli:!0,command:!0,to:!0,login:!0,in:!0,azure:!0,'cloud"':!0},"az login\n(or)\naz login -u <username> -p <password>\n(or)\naz login --service-principal -u <app-id> -p <password-or-cert> --tenant <tenant>\n(or)\naz login --identity\n(or)\naz login --identity --username <client_id|object_id|resource_id>\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Reference")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli"},"Authenticate Azure Cli"))))),(0,a.kt)("h2",{id:"create-service-principle"},"Create service principle"),(0,a.kt)("h2",{id:"azure-active-directory"},"Azure Active Directory"),(0,a.kt)("p",null,"App Registration -> ","[Your App]"," -> Manage -> Authentication -> Add a Platform => Mobile and desktop applications"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#"},'using Microsoft.Identity.Client;\nusing static System.Console;\n\nstring clientId = "<ApplicationID / ClientID>";\n\nvar app = PublicClientApplicationBuilder\n            .Create(clientId)\n            .WithRedirectUri("http://localhost")\n            .Build();\n\nstring[] scopes = { "https://database.windows.net/.default" };\n\nvar result = await app\n                .AcquireTokenInteractive(scopes)\n                .ExecuteAsync();\n\nWriteLine(result.AccessToken);\n')))}d.isMDXComponent=!0}}]);