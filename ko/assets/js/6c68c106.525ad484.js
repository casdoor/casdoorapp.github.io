"use strict";(self.webpackChunkcasdoorapp_website=self.webpackChunkcasdoorapp_website||[]).push([[118],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(8168),n=(r(6540),r(5680));const o={title:"Getting Started",description:"Casdoor Authenticator Getting Started",keywords:["casdoor","authenticator"],authors:["IZUMI-Zu"]},i=void 0,l={unversionedId:"basic/getting-started",id:"basic/getting-started",title:"Getting Started",description:"Casdoor Authenticator Getting Started",source:"@site/docs/basic/getting-started.md",sourceDirName:"basic",slug:"/basic/getting-started",permalink:"/ko/docs/basic/getting-started",draft:!1,editUrl:"https://github.com/casdoor/casdoorapp-website/edit/master/docs/basic/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",description:"Casdoor Authenticator Getting Started",keywords:["casdoor","authenticator"],authors:["IZUMI-Zu"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/ko/docs/overview"},next:{title:"Basic Usage",permalink:"/ko/docs/basic/usage"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Initial Setup",id:"initial-setup",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"The Casdoor Authenticator App is a mobile application designed to enhance the security of your online accounts by providing Time-based One-Time Passwords (TOTP) for multi-factor authentication. This guide will help you get started with the app quickly and easily."),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("p",null,"Before you begin, ensure you have the following prerequisites:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A Casdoor server (optional)"),(0,n.yg)("li",{parentName:"ul"},"A compatible mobile device (iOS or Android)")),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"For iOS users:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Currently, the app is not available on the App Store."),(0,n.yg)("li",{parentName:"ul"},"You can build the app from source code. See ",(0,n.yg)("a",{parentName:"li",href:"/ko/docs/build/configuration"},"here")," for more details."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"For Android users:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"You can download the app from the ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/casdoor/casdoor-authenticator/releases"},"GitHub Releases page"),"."),(0,n.yg)("li",{parentName:"ul"},"Install the APK file on your device.")))),(0,n.yg)("h2",{id:"initial-setup"},"Initial Setup"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Open the Casdoor Authenticator App after installation"),(0,n.yg)("li",{parentName:"ol"},"If you have a Casdoor account and want to use server-side synchronization:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},'Tap "Log in with Casdoor"'),(0,n.yg)("li",{parentName:"ul"},"Enter your Casdoor credentials"))),(0,n.yg)("li",{parentName:"ol"},"Use the app to scan the QR code to add your Multi-factor authentication.")))}d.isMDXComponent=!0}}]);