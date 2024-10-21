"use strict";(self.webpackChunkcasdoorapp_website=self.webpackChunkcasdoorapp_website||[]).push([[348],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var o=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return r?o.createElement(y,i(i({ref:t},l),{},{components:r})):o.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=r(8168),n=(r(6540),r(5680));const a={title:"Connect Casdoor Server",description:"How to connect Casdoor Server to the Casdoor Authenticator App",keywords:["casdoor","authenticator","connect","server"],authors:["IZUMI-Zu"]},i=void 0,c={unversionedId:"configuration/connect-casdoor-server",id:"configuration/connect-casdoor-server",title:"Connect Casdoor Server",description:"How to connect Casdoor Server to the Casdoor Authenticator App",source:"@site/docs/configuration/connect-casdoor-server.md",sourceDirName:"configuration",slug:"/configuration/connect-casdoor-server",permalink:"/ru/docs/configuration/connect-casdoor-server",draft:!1,editUrl:"https://github.com/casdoor/casdoor-app/tree/main/docs/docs/configuration/connect-casdoor-server.md",tags:[],version:"current",frontMatter:{title:"Connect Casdoor Server",description:"How to connect Casdoor Server to the Casdoor Authenticator App",keywords:["casdoor","authenticator","connect","server"],authors:["IZUMI-Zu"]},sidebar:"tutorialSidebar",previous:{title:"Configuration and Integration",permalink:"/ru/docs/category/configuration-and-integration"},next:{title:"Import from other authenticators",permalink:"/ru/docs/configuration/import-from-other-authenticators"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Enable Totp Account storage in Casdoor Server",id:"step-1-enable-totp-account-storage-in-casdoor-server",level:2},{value:"Step 2: Configuring the Casdoor Authenticator App",id:"step-2-configuring-the-casdoor-authenticator-app",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,o.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Casdoor is an open-source identity management platform that provides authentication, authorization, and user management services. It supports various protocols like OAuth, SAML, and OpenID Connect, making it a versatile choice for securing your applications."),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("p",null,"Before proceeding, ensure you have the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A Casdoor server instance"),(0,n.yg)("li",{parentName:"ul"},"The Casdoor Authenticator App installed on your device"),(0,n.yg)("li",{parentName:"ul"},"The Casdoor server URL and credentials")),(0,n.yg)("h2",{id:"step-1-enable-totp-account-storage-in-casdoor-server"},"Step 1: Enable Totp Account storage in Casdoor Server"),(0,n.yg)("p",null,"Before using the Casdoor Authenticator App, you need to make sure that the MFA accounts setting is enabled in the Casdoor server."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Server MFA Setting",src:r(9162).A,width:"1790",height:"516"})),(0,n.yg)("h2",{id:"step-2-configuring-the-casdoor-authenticator-app"},"Step 2: Configuring the Casdoor Authenticator App"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Open the Casdoor Authenticator App on your device.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'On the main screen, tap the "Login" button.')),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You will be presented with three options to connect to your Casdoor server:"),(0,n.yg)("p",{parentName:"li"},"a. Manually enter server details:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},'Tap "Enter Server Manually"'),(0,n.yg)("li",{parentName:"ul"},"Input the Casdoor server URL and other required information"),(0,n.yg)("li",{parentName:"ul"},"Log in with your Casdoor account")),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"Manual Configuration",src:r(5080).A,width:"500",height:"733"})),(0,n.yg)("p",{parentName:"li"},"b. Scan QR code:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},'Tap "Scan QR Code"'),(0,n.yg)("li",{parentName:"ul"},"Use your device's camera to scan the QR code provided by your Casdoor server"),(0,n.yg)("li",{parentName:"ul"},'The QR code is located in the "My Account" -> "MFA accounts" table section of the Casdoor server'),(0,n.yg)("li",{parentName:"ul"},"The app will automatically connect to the server")),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"QR Code Scan",src:r(3988).A,width:"820",height:"308"})),(0,n.yg)("p",{parentName:"li"},"c. Try demo server:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},'Tap "Try Demo Server" to connect to a pre-configured demo instance'),(0,n.yg)("li",{parentName:"ul"},"This option is useful for testing the app's functionality without setting up your own server"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Now, you can view your TOTP codes and manage your 2FA settings directly from the Casdoor Authenticator App like other authenticator apps."))),(0,n.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.yg)("p",null,"If you encounter any issues while connecting:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Ensure your Casdoor server is running and accessible"),(0,n.yg)("li",{parentName:"ul"},"Double-check the server URL and your credentials"),(0,n.yg)("li",{parentName:"ul"},"Verify that your device has an active internet connection")))}d.isMDXComponent=!0},5080:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/manual-config-d2525382e7dacf1477ee5423abe4427e.png"},9162:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/mfa-account-setting-08f077e48bd79881635a03175db66d2c.png"},3988:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/qr-code-scan-694e6435771261fd3e2337a2a29a5a43.png"}}]);