"use strict";(self.webpackChunkcasdoorapp_website=self.webpackChunkcasdoorapp_website||[]).push([[413],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var o=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||n;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(8168),a=(r(6540),r(5680));const n={title:"Overview",description:"Casdoor Authenticator Overview",keywords:["casdoor","authenticator"],authors:["IZUMI-Zu"]},i=void 0,s={unversionedId:"overview",id:"overview",title:"Overview",description:"Casdoor Authenticator Overview",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/zh/docs/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoorapp-website/edit/master/docs/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Casdoor Authenticator Overview",keywords:["casdoor","authenticator"],authors:["IZUMI-Zu"]},sidebar:"tutorialSidebar",previous:{title:"The Basics",permalink:"/zh/docs/category/the-basics"},next:{title:"Getting Started",permalink:"/zh/docs/basic/getting-started"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Casdoor?",id:"what-is-casdoor",level:2},{value:"What is Casdoor Authenticator App?",id:"what-is-casdoor-authenticator-app",level:2},{value:"Casdoor Authenticator App Features",id:"casdoor-authenticator-app-features",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Integration with Casdoor Ecosystem",id:"integration-with-casdoor-ecosystem",level:2},{value:"Getting Started",id:"getting-started",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,o.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"The Casdoor Authenticator App is a mobile application designed to enhance the security and user experience of the Casdoor ecosystem. As part of Casdoor's comprehensive Identity Access Management (IAM) and Single-Sign-On (SSO) platform, this app provides a convenient and secure way to manage Two-Factor Authentication (2FA) for Casdoor users."),(0,a.yg)("h2",{id:"what-is-casdoor"},"What is Casdoor?"),(0,a.yg)("p",null,"Casdoor is a UI-first IAM/SSO platform that supports various authentication protocols and methods, including OAuth 2.0, OIDC, SAML, CAS, LDAP, SCIM, WebAuthn, TOTP, MFA, RADIUS, Google Workspace, Active Directory, and Kerberos. It offers a web-based UI for management and supports localization in 10+ languages."),(0,a.yg)("h2",{id:"what-is-casdoor-authenticator-app"},"What is Casdoor Authenticator App?"),(0,a.yg)("p",null,"The Casdoor Authenticator App is a dedicated mobile application that complements the Casdoor platform by providing robust Two-Factor Authentication capabilities. It serves as a secure, user-friendly tool for generating Time-based One-Time Passwords (TOTP), enabling users to add an extra layer of security to their Casdoor-managed accounts. This app is designed to work seamlessly with the Casdoor ecosystem while also offering flexibility for use with other TOTP-compatible services."),(0,a.yg)("h2",{id:"casdoor-authenticator-app-features"},"Casdoor Authenticator App Features"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"TOTP Support"),": Generates Time-based One-Time Passwords (TOTP) for enhanced login security."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Offline Functionality"),": Provides TOTP codes without requiring an internet connection."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Secure Backup"),": Supports syncing TOTP data to the Casdoor server for secure backups."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"User-Friendly Interface"),": Offers a simple and intuitive mobile app interface for managing 2FA."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Cross-Platform"),": Available for both Android and iOS devices."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Migration Support"),": Allows easy migration of TOTP data from other authenticator apps like Google Authenticator.")),(0,a.yg)("h2",{id:"how-it-works"},"How It Works"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Installation"),": Users download the Casdoor Authenticator App from official sources or app stores."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Server Configuration"),": (Optional) Administrators enable TOTP account storage in the Casdoor server."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Login"),": Users log in to the app using their Casdoor account credentials."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"TOTP Management"),": Users can add, view, and manage their TOTP codes directly from the app."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Authentication"),": During login to Casdoor-enabled applications, users can use the app to generate TOTP codes for 2FA.")),(0,a.yg)("h2",{id:"integration-with-casdoor-ecosystem"},"Integration with Casdoor Ecosystem"),(0,a.yg)("p",null,"The Casdoor Authenticator App seamlessly integrates with the broader Casdoor platform, providing:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Enhanced security for Casdoor-managed applications"),(0,a.yg)("li",{parentName:"ul"},"Consistent user experience across web and mobile interfaces"),(0,a.yg)("li",{parentName:"ul"},"Centralized management of authentication methods for administrators")),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("p",null,"To begin using the Casdoor Authenticator App:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Download the app from the official sources or app stores."),(0,a.yg)("li",{parentName:"ol"},"Ensure your Casdoor server has MFA accounts enabled (if using server-side storage)."),(0,a.yg)("li",{parentName:"ol"},"Log in to the app using your Casdoor credentials."),(0,a.yg)("li",{parentName:"ol"},"Start adding and managing your TOTP codes for various accounts.")),(0,a.yg)("p",null,"For detailed instructions on setup, usage, and migration from other authenticator apps, please refer to our comprehensive documentation."))}u.isMDXComponent=!0}}]);