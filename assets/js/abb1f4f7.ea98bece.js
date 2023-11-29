"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[1783],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=l,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},360:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],s={slug:"bash",title:"Bash",tags:["bash"],sidebar_position:10},o=void 0,c={unversionedId:"tools/bash",id:"tools/bash",title:"Bash",description:"Docs",source:"@site/docs/tools/bash.md",sourceDirName:"tools",slug:"/tools/bash",permalink:"/devops/docs/tools/bash",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/tools/bash.md",tags:[{label:"bash",permalink:"/devops/docs/tags/bash"}],version:"current",sidebarPosition:10,frontMatter:{slug:"bash",title:"Bash",tags:["bash"],sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Helm Charts",permalink:"/devops/docs/tools/helm"},next:{title:"Git",permalink:"/devops/docs/tools/git"}},p=[{value:"Docs",id:"docs",children:[],level:2},{value:"Bash Script file",id:"bash-script-file",children:[],level:2},{value:"Execute",id:"execute",children:[],level:2},{value:"Variables",id:"variables",children:[{value:"Declare variable",id:"declare-variable",children:[],level:3},{value:"Access the variable",id:"access-the-variable",children:[],level:3}],level:2},{value:"Grouping",id:"grouping",children:[],level:2},{value:"Bash Startup",id:"bash-startup",children:[],level:2},{value:"Typeset",id:"typeset",children:[],level:2},{value:"Declare",id:"declare",children:[],level:2},{value:"While Loop",id:"while-loop",children:[],level:2},{value:"For Loops",id:"for-loops",children:[],level:2},{value:"Case Statement",id:"case-statement",children:[],level:2},{value:"If Statement",id:"if-statement",children:[],level:2},{value:"Bash Commands",id:"bash-commands",children:[{value:"Tail",id:"tail",children:[],level:4},{value:"Sed",id:"sed",children:[{value:"File all files with multiple replacements",id:"file-all-files-with-multiple-replacements",children:[],level:5}],level:4},{value:"awk",id:"awk",children:[],level:4}],level:2}],d={toc:p};function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"docs"},"Docs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"man bash\ninfo bash\n")),(0,r.kt)("h2",{id:"bash-script-file"},"Bash Script file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Common usage"',title:'"Common','usage"':!0},"#!/bin/bash\n")),(0,r.kt)("p",null,"(or)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"#!/usr/bin/env bash\n")),(0,r.kt)("h2",{id:"execute"},"Execute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"chmod +x script.sh\n./script.sh\n")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"declare-variable"},"Declare variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'variableName="value"\nexport variableName2="value2"\ndeclare -x variableName3="value3"\n')),(0,r.kt)("h3",{id:"access-the-variable"},"Access the variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"echo $variableName\necho $variableName2\necho $variableName3\n")),(0,r.kt)("h2",{id:"grouping"},"Grouping"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"() -> scope clear\n{} -> scope extend\n")),(0,r.kt)("h2",{id:"bash-startup"},"Bash Startup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},".bash_profile # read when bash is invoked as login shell\n.bashrc # executed when new shell is started\n\n")),(0,r.kt)("h2",{id:"typeset"},"Typeset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"typeset -i x # x must be an integer\n\n# Types\n-i -> Integer\n\n")),(0,r.kt)("h2",{id:"declare"},"Declare"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"declare -a ArrayVariable\n\n# Options\n-l -> To lowercase\n-u -> To uppercase\n-r -> Read only\n-a -> To indexed array\n\n")),(0,r.kt)("h2",{id:"while-loop"},"While Loop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"while \n    command list 1\ndo\n    command list\ndone\n# loops while command list 1 succeeds\n\n\nwhile \n    read a b\ndo\n    echo a is $a b is $b\ndone <data_file\n")),(0,r.kt)("h2",{id:"for-loops"},"For Loops"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"for <var> in <list>\ndo\necho i is $i\ndone\n\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"expression inside `` symbol will execute before the loop begin. Ex."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"for num in `seq 1 5`\ndo\necho num is $num\ndone\n")))),(0,r.kt)("h2",{id:"case-statement"},"Case Statement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"case expression in\npattern 1| pattern 3)\n    command list;;\npattern 2)\n    command list;;\nesac\n")),(0,r.kt)("h2",{id:"if-statement"},"If Statement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"if \ncommand list\nthen\ncommand list\nelse\ncommand list\nfi\n")),(0,r.kt)("h2",{id:"bash-commands"},"Bash Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"time find / -name core\nsource script.sh \n#(or) \n. script.sh\nalias ll=\"ls -l\"\nunalias ll\nread a b <data_file\n(or)\nread a b c d\nseq 1 5\nfind . -name '*.c'\ngrep txt    # Find text in result\nlsof        # List all port and process names\nsed         # Find and replace\nwc -l <filename> # get word/line count of the file\ntest        # Evoluate the epxression. ex. test -f myfile (or) test $x -gt 10\n            # Alternatives of test is  [[-gt, -lt]] or ((>, <))\nstrings \nps [-ly | -el]\nhead\ntail\n\n\n")),(0,r.kt)("h4",{id:"tail"},"Tail"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"tail -2 <filename>      # Get last 2 line of the file\ntail -n2 -f <filename>  # Watch/Monitor file changes\n")),(0,r.kt)("h4",{id:"sed"},"Sed"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/g")," in the pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"'/s/old/new/g")," is repleace all the ",(0,r.kt)("inlineCode",{parentName:"p"},"old")," value with ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," value. Otherwise it will replce the first occarance of each line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p -> Print\nd -> delete\nG -> Space between line. ex: `sed G f.txt` (or) `sed 'G;G' f.txt`\ns -> substitute\ng -> \nf -> script file\ne -> script\ni -> extention\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sed 's/old/new/'; 's/demo/prod/'\nsed -id 's/old/new/g' file1.txt\nsed -d 's/[xX]/Y/' -e 's/b.*n/blue/'\nsed -f sedscript -n sed4    # sed scripts file as input\ndate | sed 's/J/j/'\nsed '1,5p'\n\nsed '/alpha/s/beta/gama/'\nsed '/apple/,/orange/d'\nsed '/important/!s/print/throw_away/'\n\n")),(0,r.kt)("h5",{id:"file-all-files-with-multiple-replacements"},"File all files with multiple replacements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"find . -type f -name '*.txt' -exec sed -f sedfile {} +\n")),(0,r.kt)("p",null,"(or)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"find . -type f -name '*.txt' -exec sed -f sedfile {} \\;\n")),(0,r.kt)("h4",{id:"awk"},"awk"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"echo $?  # Last process exit status")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"file")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," end of the expression will run the bash in background.")),(0,r.kt)("li",{parentName:"ol"})))))}m.isMDXComponent=!0}}]);