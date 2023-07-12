"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[8680],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3788:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={slug:"dotnet",title:"Microsoft Dotnet",tags:["dotnet","dotnetcore"],sidebar_position:1},l="Dotnet",c={unversionedId:"frameworks/dotnet",id:"frameworks/dotnet",title:"Microsoft Dotnet",description:"Single file",source:"@site/docs/frameworks/dotnet.md",sourceDirName:"frameworks",slug:"/frameworks/dotnet",permalink:"/devops/docs/frameworks/dotnet",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/frameworks/dotnet.md",tags:[{label:"dotnet",permalink:"/devops/docs/tags/dotnet"},{label:"dotnetcore",permalink:"/devops/docs/tags/dotnetcore"}],version:"current",sidebarPosition:1,frontMatter:{slug:"dotnet",title:"Microsoft Dotnet",tags:["dotnet","dotnetcore"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Rust",permalink:"/devops/docs/program-language/rust"},next:{title:"Spring Boot",permalink:"/devops/docs/frameworks/spring-boot"}},p=[{value:"Single file",id:"single-file",children:[],level:3},{value:"Awesome Dotnet",id:"awesome-dotnet",children:[],level:2},{value:"Github Actions to build Dotnet 7 project",id:"github-actions-to-build-dotnet-7-project",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dotnet"},"Dotnet"),(0,a.kt)("h1",{id:"compilation"},"Compilation"),(0,a.kt)("h3",{id:"single-file"},"Single file"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://dotnetcoretutorials.com/2021/11/10/single-file-apps-in-net-6/"},"Single File App in Dotnet 6"))),(0,a.kt)("h2",{id:"awesome-dotnet"},"Awesome Dotnet"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Query Builder ",(0,a.kt)("a",{parentName:"li",href:"https://sqlkata.com/"},"sqlkata")),(0,a.kt)("li",{parentName:"ol"},"OPEN API ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-6.0&tabs=visual-studio"},"swashbuckle")),(0,a.kt)("li",{parentName:"ol"},"Mediator ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jbogard/MediatR/wiki"},"MediatR")),(0,a.kt)("li",{parentName:"ol"},"CQRS ",(0,a.kt)("a",{parentName:"li",href:"https://event-driven.io/en/cqrs_is_simpler_than_you_think_with_net6/"},"CQRS")),(0,a.kt)("li",{parentName:"ol"},"Sample Dotnet Project ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cwilby/acme-architecture"},"Best Practice"))),(0,a.kt)("h2",{id:"github-actions-to-build-dotnet-7-project"},"Github Actions to build Dotnet 7 project"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Operating System")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This github actions runs on windows-latest OS."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: SAST With Sonar Cloud\n\non:\n  push:\n    branches: ["feature/*"]\n  pull_request:\n    branches: ["main"]\n  workflow_dispatch:\n\njobs:\n  sast:\n    name: Static Application Security Testing\n    runs-on: windows-latest\n    steps:\n      - name: Set up JDK 11\n        uses: actions/setup-java@v3\n        with:\n          distribution: "microsoft"\n          java-version: 11\n\n      - uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n\n      - name: Cache SonarQube packages\n        uses: actions/cache@v3\n        with:\n          path: ~/sonar/cache\n          key: ${{ runner.os }}-sonar\n          restore-keys: ${{ runner.os }}-sonar\n\n      - name: Cache SonarQube scanner\n        id: cache-sonar-scanner\n        uses: actions/cache@v3\n        with:\n          path: ./.sonar/scanner\n          key: ${{ runner.os }}-sonar-scanner\n          restore-keys: ${{ runner.os }}-sonar-scanner\n\n      - name: Install SonarQube scanner\n        shell: powershell\n        run: dotnet tool update --global dotnet-sonarscanner  --version 5.12.0\n\n      - name: Install Dotnet Coverage tool\n        shell: powershell\n        run: dotnet tool update --global dotnet-coverage --version 17.4.4\n\n      - name: Build and analyze\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}\n        shell: powershell\n        run: |\n          dotnet tool list -g\n          dotnet build --no-incremental\n          dotnet coverage collect "dotnet test" -f xml -o "coverage.xml"\n          dotnet sonarscanner begin /k:"<project-key>" /o:"<org-name>" /d:sonar.login="${{ secrets.SONAR_TOKEN }}" /d:sonar.cs.vscoveragexml.reportsPaths=coverage.xml /d:sonar.host.url="https://sonarcloud.io"\n          dotnet build --no-incremental\n          dotnet sonarscanner end /d:sonar.login="${{ secrets.SONAR_TOKEN }}"\n')))}d.isMDXComponent=!0}}]);