"use strict";(self.webpackChunkcasdoorapp_website=self.webpackChunkcasdoorapp_website||[]).push([[112],{5680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>f});var o=t(6540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),p=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=p(e.components);return o.createElement(u.Provider,{value:r},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},g=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),g=n,f=c["".concat(u,".").concat(g)]||c[g]||s[g]||i;return t?o.createElement(f,a(a({ref:r},d),{},{components:t})):o.createElement(f,a({ref:r},d))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2691:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(8168),n=(t(6540),t(5680));const i={title:"Build Configuration",description:"Casdoor App Build Configuration",keywords:["casdoor","authenticator","configuration","build","android","ios"],authors:["IZUMI-Zu"]},a=void 0,l={unversionedId:"build/configuration",id:"build/configuration",title:"Build Configuration",description:"Casdoor App Build Configuration",source:"@site/docs/build/configuration.md",sourceDirName:"build",slug:"/build/configuration",permalink:"/uk/docs/build/configuration",draft:!1,editUrl:"https://github.com/casdoor/casdoorapp-website/edit/master/docs/build/configuration.md",tags:[],version:"current",frontMatter:{title:"Build Configuration",description:"Casdoor App Build Configuration",keywords:["casdoor","authenticator","configuration","build","android","ios"],authors:["IZUMI-Zu"]},sidebar:"tutorialSidebar",previous:{title:"Build",permalink:"/uk/docs/category/build"},next:{title:"Build Process",permalink:"/uk/docs/build/process"}},u={},p=[{value:"Build Configuration for Casdoor Authenticator App",id:"build-configuration-for-casdoor-authenticator-app",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"General Configuration",id:"general-configuration",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],d={toc:p},c="wrapper";function s(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,o.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"build-configuration-for-casdoor-authenticator-app"},"Build Configuration for Casdoor Authenticator App"),(0,n.yg)("p",null,"This guide provides instructions on how to configure and build the Casdoor Authenticator App for both Android and iOS platforms."),(0,n.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("p",null,"Before you begin, ensure you have the following installed:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://developer.apple.com/xcode/"},"Xcode")," (for iOS development, macOS only)"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://developer.android.com/studio"},"Android Studio")," (for Android development)",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Make sure to install the Android NDK (Native Development Kit) through the SDK Manager")))),(0,n.yg)("h3",{id:"general-configuration"},"General Configuration"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Clone the Casdoor Authenticator App repository:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/casdoor/casdoor-app.git\ncd casdoor-app\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Install dependencies:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm install\n")))),(0,n.yg)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If you encounter any build errors, ensure all dependencies are up to date and compatible."),(0,n.yg)("li",{parentName:"ul"},"For iOS, try cleaning the build folder in Xcode (Product > Clean Build Folder) if you face any issues."),(0,n.yg)("li",{parentName:"ul"},"For Android, you can try cleaning the project with ",(0,n.yg)("inlineCode",{parentName:"li"},"./gradlew clean")," in the ",(0,n.yg)("inlineCode",{parentName:"li"},"android")," directory.")),(0,n.yg)("p",null,"By following these configuration steps, you should be able to successfully build the Casdoor Authenticator App for both Android and iOS platforms."))}s.isMDXComponent=!0}}]);