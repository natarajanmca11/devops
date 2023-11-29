"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[3],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return g}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=n,d=p["".concat(c,".").concat(g)]||p[g]||u[g]||i;return r?o.createElement(d,a(a({ref:t},m),{},{components:r})):o.createElement(d,a({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1845:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],l={slug:"git",title:"Git",tags:["git"],sidebar_position:11},c=void 0,s={unversionedId:"tools/git",id:"tools/git",title:"Git",description:"Rollback last commit in a local git repository",source:"@site/docs/tools/git.md",sourceDirName:"tools",slug:"/tools/git",permalink:"/devops/docs/tools/git",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/tools/git.md",tags:[{label:"git",permalink:"/devops/docs/tags/git"}],version:"current",sidebarPosition:11,frontMatter:{slug:"git",title:"Git",tags:["git"],sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Bash",permalink:"/devops/docs/tools/bash"},next:{title:"Husky",permalink:"/devops/docs/tools/husky"}},m=[{value:"Rollback last commit in a local git repository",id:"rollback-last-commit-in-a-local-git-repository",children:[],level:2},{value:"Revert the last commit from GitHub remote repository",id:"revert-the-last-commit-from-github-remote-repository",children:[],level:2},{value:"Set local repo user name and email",id:"set-local-repo-user-name-and-email",children:[],level:2},{value:"For (global) default email (which is configured in your ~/.gitconfig):",id:"for-global-default-email-which-is-configured-in-your-gitconfig",children:[],level:2},{value:"Ask password on each time",id:"ask-password-on-each-time",children:[],level:2}],u={toc:m};function p(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rollback-last-commit-in-a-local-git-repository"},"Rollback last commit in a local git repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Revert the last commit in a local git repository"',title:'"Revert',the:!0,last:!0,commit:!0,in:!0,a:!0,local:!0,git:!0,'repository"':!0},"git reset HEAD~1\n")),(0,i.kt)("h2",{id:"revert-the-last-commit-from-github-remote-repository"},"Revert the last commit from GitHub remote repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Revert the last commit from remote repository"',title:'"Revert',the:!0,last:!0,commit:!0,from:!0,remote:!0,'repository"':!0},"git checkout <branch-name>\n\n# Revert 1 commit from remote\ngit push --force origin HEAD~1:<branch-name>\n")),(0,i.kt)("h2",{id:"set-local-repo-user-name-and-email"},"Set local repo user name and email"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git config user.name "Your Full Name Here"\ngit config user.email [email protected]\n')),(0,i.kt)("h2",{id:"for-global-default-email-which-is-configured-in-your-gitconfig"},"For (global) default email (which is configured in your ~/.gitconfig):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git config --global user.name "Your Name Here"\ngit config --global user.email [email protected]\n')),(0,i.kt)("h2",{id:"ask-password-on-each-time"},"Ask password on each time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git config credential.helper store\n")))}p.isMDXComponent=!0}}]);