"use strict";(self.webpackChunkcasdoorapp_website=self.webpackChunkcasdoorapp_website||[]).push([[123],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),y=o,g=p["".concat(s,".").concat(y)]||p[y]||d[y]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(8168),o=(n(6540),n(5680));const r={title:"Basic Usage",description:"Casdoor App Basic Usage",keywords:["casdoor","authenticator"],authors:["IZUMI-Zu"]},i=void 0,c={unversionedId:"basic/usage",id:"basic/usage",title:"Basic Usage",description:"Casdoor App Basic Usage",source:"@site/docs/basic/usage.md",sourceDirName:"basic",slug:"/basic/usage",permalink:"/fr/docs/basic/usage",draft:!1,editUrl:"https://github.com/casdoor/casdoorapp-website/edit/master/docs/basic/usage.md",tags:[],version:"current",frontMatter:{title:"Basic Usage",description:"Casdoor App Basic Usage",keywords:["casdoor","authenticator"],authors:["IZUMI-Zu"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/fr/docs/basic/getting-started"},next:{title:"Build",permalink:"/fr/docs/category/build"}},s={},l=[{value:"Using the Casdoor Authenticator App",id:"using-the-casdoor-authenticator-app",level:2},{value:"Adding an Account",id:"adding-an-account",level:3},{value:"Generating TOTP Codes",id:"generating-totp-codes",level:3},{value:"Managing Accounts",id:"managing-accounts",level:3},{value:"Syncing with Casdoor Server",id:"syncing-with-casdoor-server",level:3},{value:"Security Tips",id:"security-tips",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"using-the-casdoor-authenticator-app"},"Using the Casdoor Authenticator App"),(0,o.yg)("p",null,"The Casdoor Authenticator App provides a secure and convenient way to manage your two-factor authentication (2FA) needs. Here's how to use the app effectively:"),(0,o.yg)("h3",{id:"adding-an-account"},"Adding an Account"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Open the Casdoor Authenticator App on your mobile device."),(0,o.yg)("li",{parentName:"ol"},'Tap the "+" button to add a new account.'),(0,o.yg)("li",{parentName:"ol"},"Choose one of the following methods to add an account:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Scan QR Code: Use your device's camera to scan the QR code provided by the service you're setting up 2FA for."),(0,o.yg)("li",{parentName:"ul"},"Manual Entry: If a QR code is not available, you can manually enter the account details and secret key.")))),(0,o.yg)("h3",{id:"generating-totp-codes"},"Generating TOTP Codes"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Open the Casdoor Authenticator App."),(0,o.yg)("li",{parentName:"ol"},"Locate the account you need a code for in the list."),(0,o.yg)("li",{parentName:"ol"},"The current TOTP code will be displayed next to the account name."),(0,o.yg)("li",{parentName:"ol"},"Use this code when prompted during the login process on the service you're accessing.")),(0,o.yg)("h3",{id:"managing-accounts"},"Managing Accounts"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"To edit an account, tap on the account and select the edit option."),(0,o.yg)("li",{parentName:"ul"},"To remove an account, swipe left on the account and tap the delete button.")),(0,o.yg)("h3",{id:"syncing-with-casdoor-server"},"Syncing with Casdoor Server"),(0,o.yg)("p",null,"If you've enabled server-side synchronization:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Ensure you're logged in to your Casdoor account within the app."),(0,o.yg)("li",{parentName:"ol"},"Your accounts will automatically sync with the Casdoor server."),(0,o.yg)("li",{parentName:"ol"},"To manually trigger a sync, pull down on the account list to refresh.")),(0,o.yg)("h3",{id:"security-tips"},"Security Tips"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Regularly back up your accounts to prevent loss of access."),(0,o.yg)("li",{parentName:"ul"},"When adding accounts manually, double-check the secret key to ensure accuracy.")),(0,o.yg)("p",null,"By following these steps, you can effectively use the Casdoor Authenticator App to secure your online accounts with two-factor authentication."))}d.isMDXComponent=!0}}]);