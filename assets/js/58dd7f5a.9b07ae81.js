"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[8547],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return b}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=o,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5528:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],c={slug:"sonarqube",title:"Sonarqube",tags:["sonarqube"],sidebar_position:7},i=void 0,u={unversionedId:"tools/sonarqube",id:"tools/sonarqube",title:"Sonarqube",description:"Integrate with Github Actions",source:"@site/docs/tools/sonarqube.md",sourceDirName:"tools",slug:"/tools/sonarqube",permalink:"/devops/docs/tools/sonarqube",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/tools/sonarqube.md",tags:[{label:"sonarqube",permalink:"/devops/docs/tags/sonarqube"}],version:"current",sidebarPosition:7,frontMatter:{slug:"sonarqube",title:"Sonarqube",tags:["sonarqube"],sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Prometheus",permalink:"/devops/docs/tools/prometheus"},next:{title:"SSH",permalink:"/devops/docs/tools/ssh"}},l=[{value:"Integrate with Github Actions",id:"integrate-with-github-actions",children:[],level:2}],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"integrate-with-github-actions"},"Integrate with Github Actions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: Build\non:\n  push:\n    branches:\n      - master\n  pull_request:\n    types: [opened, synchronize, reopened]\njobs:\n  build:\n    name: Build\n    runs-on: windows-latest\n    steps:\n      - name: Set up JDK 11\n        uses: actions/setup-java@v1\n        with:\n          java-version: 1.11\n      - uses: actions/checkout@v2\n        with:\n          fetch-depth: 0  # Shallow clones should be disabled for a better relevancy of analysis\n      - name: Cache SonarCloud packages\n        uses: actions/cache@v1\n        with:\n          path: ~\\sonar\\cache\n          key: ${{ runner.os }}-sonar\n          restore-keys: ${{ runner.os }}-sonar\n      - name: Cache SonarCloud scanner\n        id: cache-sonar-scanner\n        uses: actions/cache@v1\n        with:\n          path: .\\.sonar\\scanner\n          key: ${{ runner.os }}-sonar-scanner\n          restore-keys: ${{ runner.os }}-sonar-scanner\n      - name: Install SonarCloud scanner\n        if: steps.cache-sonar-scanner.outputs.cache-hit != \'true\'\n        shell: powershell\n        run: |\n          New-Item -Path .\\.sonar\\scanner -ItemType Directory\n          dotnet tool update dotnet-sonarscanner --tool-path .\\.sonar\\scanner\n      - name: Build and analyze\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  # Needed to get PR information, if any\n          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}\n        shell: powershell\n        run: |\n          .\\.sonar\\scanner\\dotnet-sonarscanner begin /k:"natarajanmca11_dotnet-api" /o:"natarajanmca11" /d:sonar.login="${{ secrets.SONAR_TOKEN }}" /d:sonar.host.url="https://sonarcloud.io"\n          <insert_your_build_command>\n          .\\.sonar\\scanner\\dotnet-sonarscanner end /d:sonar.login="${{ secrets.SONAR_TOKEN }}"\n')))}d.isMDXComponent=!0}}]);