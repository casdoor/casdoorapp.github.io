"use strict";(self.webpackChunkcasdoorapp_website=self.webpackChunkcasdoorapp_website||[]).push([[586],{5680:(t,o,e)=>{e.d(o,{xA:()=>s,yg:()=>m});var r=e(6540);function a(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}function n(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?n(Object(e),!0).forEach((function(o){a(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}function c(t,o){if(null==t)return{};var e,r,a=function(t,o){if(null==t)return{};var e,r,a={},n=Object.keys(t);for(r=0;r<n.length;r++)e=n[r],o.indexOf(e)>=0||(a[e]=t[e]);return a}(t,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)e=n[r],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var u=r.createContext({}),p=function(t){var o=r.useContext(u),e=o;return t&&(e="function"==typeof t?t(o):i(i({},o),t)),e},s=function(t){var o=p(t.components);return r.createElement(u.Provider,{value:o},t.children)},l="mdxType",h={inlineCode:"code",wrapper:function(t){var o=t.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(t,o){var e=t.components,a=t.mdxType,n=t.originalType,u=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),l=p(e),d=a,m=l["".concat(u,".").concat(d)]||l[d]||h[d]||n;return e?r.createElement(m,i(i({ref:o},s),{},{components:e})):r.createElement(m,i({ref:o},s))}));function m(t,o){var e=arguments,a=o&&o.mdxType;if("string"==typeof t||a){var n=e.length,i=new Array(n);i[0]=d;var c={};for(var u in o)hasOwnProperty.call(o,u)&&(c[u]=o[u]);c.originalType=t,c[l]="string"==typeof t?t:a,i[1]=c;for(var p=2;p<n;p++)i[p]=e[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},693:(t,o,e)=>{e.r(o),e.d(o,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var r=e(8168),a=(e(6540),e(5680));const n={title:"Import from other authenticators",description:"How to import your TOTP codes from other authenticators",keywords:["casdoor","authenticator","import","other","authenticators","Google Authenticator","Microsoft Authenticator"],authors:["IZUMI-Zu"]},i=void 0,c={unversionedId:"configuration/import-from-other-authenticators",id:"configuration/import-from-other-authenticators",title:"Import from other authenticators",description:"How to import your TOTP codes from other authenticators",source:"@site/docs/configuration/import-from-other-authenticators.md",sourceDirName:"configuration",slug:"/configuration/import-from-other-authenticators",permalink:"/ru/docs/configuration/import-from-other-authenticators",draft:!1,editUrl:"https://github.com/casdoor/casdoor-app/tree/main/docs/docs/configuration/import-from-other-authenticators.md",tags:[],version:"current",frontMatter:{title:"Import from other authenticators",description:"How to import your TOTP codes from other authenticators",keywords:["casdoor","authenticator","import","other","authenticators","Google Authenticator","Microsoft Authenticator"],authors:["IZUMI-Zu"]},sidebar:"tutorialSidebar",previous:{title:"Connect Casdoor Server",permalink:"/ru/docs/configuration/connect-casdoor-server"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Migration from Google Authenticator",id:"migration-from-google-authenticator",level:2},{value:"Step 1: Export TOTP data from Google Authenticator",id:"step-1-export-totp-data-from-google-authenticator",level:3},{value:"Step 2: Import TOTP data to the Casdoor Authenticator App",id:"step-2-import-totp-data-to-the-casdoor-authenticator-app",level:3},{value:"Migration from Microsoft Authenticators",id:"migration-from-microsoft-authenticators",level:2},{value:"Step 1: Export TOTP data from Microsoft Authenticator",id:"step-1-export-totp-data-from-microsoft-authenticator",level:3}],s={toc:p},l="wrapper";function h(t){let{components:o,...n}=t;return(0,a.yg)(l,(0,r.A)({},s,n,{components:o,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"The Casdoor Authenticator App supports importing TOTP codes from other authenticators such as Google Authenticator and Microsoft Authenticator. This feature allows you to seamlessly transfer your existing 2FA settings to the Casdoor Authenticator App, ensuring a smooth transition and continued security."),(0,a.yg)("h2",{id:"migration-from-google-authenticator"},"Migration from Google Authenticator"),(0,a.yg)("p",null,"If you are currently using Google Authenticator for your TOTP codes, you can easily migrate your TOTP data to the Casdoor Authenticator App. To do this, follow these steps:"),(0,a.yg)("h3",{id:"step-1-export-totp-data-from-google-authenticator"},"Step 1: Export TOTP data from Google Authenticator"),(0,a.yg)("p",null,'Select the "Transfer Accounts" option in the menu of Google Authenticator and choose the accounts you want to transfer. Then, click the "Export" button to generate a QR code.'),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Google Authenticator Export",src:e(5209).A,width:"625",height:"866"})),(0,a.yg)("h3",{id:"step-2-import-totp-data-to-the-casdoor-authenticator-app"},"Step 2: Import TOTP data to the Casdoor Authenticator App"),(0,a.yg)("p",null,"In the Casdoor Authenticator App, scan the QR code generated by Google Authenticator to import your TOTP data. The app will automatically add the accounts to your Casdoor Authenticator App, allowing you to manage your TOTP codes securely."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Import to Casdoor Authenticator",src:e(1783).A,width:"320",height:"691"})),(0,a.yg)("h2",{id:"migration-from-microsoft-authenticators"},"Migration from Microsoft Authenticators"),(0,a.yg)("p",null,"If you are currently using Microsoft Authenticator for your TOTP codes, you can easily migrate your TOTP data to the Casdoor Authenticator App. To do this, follow these steps:"),(0,a.yg)("h3",{id:"step-1-export-totp-data-from-microsoft-authenticator"},"Step 1: Export TOTP data from Microsoft Authenticator"),(0,a.yg)("p",null,"The Microsoft Authenticator app does not provide an export feature. If you want to export your TOTP data, you can use the following steps to export the SQLite database and then import it to the Casdoor Authenticator App."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Export the SQLite database (required root access)"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"The database is located at ",(0,a.yg)("inlineCode",{parentName:"li"},"/data/data/com.azure.authenticator/databases/PhoneFactor"),"."),(0,a.yg)("li",{parentName:"ul"},"Copy the database file to your device's storage."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Import the SQLite database to the Casdoor Authenticator App"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Open the Casdoor Authenticator App."),(0,a.yg)("li",{parentName:"ul"},'Click the "+" button to add a new account.'),(0,a.yg)("li",{parentName:"ul"},'Select "Import from other app" and then select Microsoft Authenticator.'),(0,a.yg)("li",{parentName:"ul"},"There will be a pop-up file picker. Select the database file you exported in Step 1."),(0,a.yg)("li",{parentName:"ul"},"The app will automatically add the accounts to your Casdoor Authenticator App, allowing you to manage your TOTP codes securely.")))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Import to Casdoor Authenticator",src:e(4561).A,width:"320",height:"692"})))}h.isMDXComponent=!0},5209:(t,o,e)=>{e.d(o,{A:()=>r});const r=e.p+"assets/images/google-export-3806b66cfeb2eaa4a99900044f356db9.png"},1783:(t,o,e)=>{e.d(o,{A:()=>r});const r=e.p+"assets/images/import-google-totp-1103ec60ccfef72ae15a9e289f5b6672.gif"},4561:(t,o,e)=>{e.d(o,{A:()=>r});const r=e.p+"assets/images/import-totp-e9de43b1dbcc803c7d0f0dea2600336d.gif"}}]);