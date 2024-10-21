"use strict";(self.webpackChunkcasdoorapp_website=self.webpackChunkcasdoorapp_website||[]).push([[300],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(t),g=o,y=s["".concat(p,".").concat(g)]||s[g]||c[g]||a;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3764:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(8168),o=(t(6540),t(5680));const a={title:"Build Process",description:"Casdoor App Build Process",keywords:["casdoor","authenticator","build","process"],authors:["IZUMI-Zu"]},i=void 0,l={unversionedId:"build/process",id:"build/process",title:"Build Process",description:"Casdoor App Build Process",source:"@site/docs/build/process.md",sourceDirName:"build",slug:"/build/process",permalink:"/es/docs/build/process",draft:!1,editUrl:"https://github.com/casdoor/casdoor-app/tree/main/docs/docs/build/process.md",tags:[],version:"current",frontMatter:{title:"Build Process",description:"Casdoor App Build Process",keywords:["casdoor","authenticator","build","process"],authors:["IZUMI-Zu"]},sidebar:"tutorialSidebar",previous:{title:"Build Configuration",permalink:"/es/docs/build/configuration"},next:{title:"Configuration and Integration",permalink:"/es/docs/category/configuration-and-integration"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Building the App",id:"building-the-app",level:2},{value:"For Development (React Native App)",id:"for-development-react-native-app",level:3},{value:"For Android",id:"for-android",level:3},{value:"For iOS",id:"for-ios",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:d},s="wrapper";function c(e){let{components:r,...t}=e;return(0,o.yg)(s,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"This document outlines the process for building the Casdoor Authenticator App from source code. Before starting, ensure you have completed the ",(0,o.yg)("a",{parentName:"p",href:"/docs/build/configuration"},"configuration")," step."),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("p",null,"Before building the app, make sure you have the following installed:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Node.js (LTS version recommended)"),(0,o.yg)("li",{parentName:"ul"},"npm (comes with Node.js)"),(0,o.yg)("li",{parentName:"ul"},"For Android: Android Studio and Android SDK"),(0,o.yg)("li",{parentName:"ul"},"For iOS: Xcode (Mac only)")),(0,o.yg)("h2",{id:"building-the-app"},"Building the App"),(0,o.yg)("h3",{id:"for-development-react-native-app"},"For Development (React Native App)"),(0,o.yg)("p",null,"We use Expo to develop and test the React Native app:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpx expo start --clear\n")),(0,o.yg)("p",null,"This will start the Expo development server. You can then run the app on:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"An iOS simulator (Mac only)"),(0,o.yg)("li",{parentName:"ul"},"An Android emulator"),(0,o.yg)("li",{parentName:"ul"},"Your physical device using the Expo Go app")),(0,o.yg)("h3",{id:"for-android"},"For Android"),(0,o.yg)("p",null,"To build the Android App APK:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpx expo prebuild --platform android\ncd android && ./gradlew assembleRelease\n")),(0,o.yg)("p",null,"The APK file will be in the ",(0,o.yg)("inlineCode",{parentName:"p"},"android/app/build/outputs/apk/release/")," directory."),(0,o.yg)("p",null,"For debugging the native Android App:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npx expo prebuild --platform android\ncd android && ./gradlew assembleDebug\n")),(0,o.yg)("p",null,"Find the debug APK in the ",(0,o.yg)("inlineCode",{parentName:"p"},"android/app/build/outputs/apk/debug/")," directory."),(0,o.yg)("p",null,"To run the development version:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Install the APK on your Android device")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Start the JS server with:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npx expo start --android\n")))),(0,o.yg)("h3",{id:"for-ios"},"For iOS"),(0,o.yg)("p",null,"To build the iOS app:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpx expo prebuild --platform ios\nnpx expo run:ios --configuration Release\n")),(0,o.yg)("p",null,"Note: iOS builds require a Mac with Xcode installed."),(0,o.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},'If you encounter "Command not found" errors, ensure that Node.js and npm are correctly installed and added to your system\'s PATH.'),(0,o.yg)("li",{parentName:"ul"},"For Android build issues, make sure your ANDROID_HOME environment variable is set correctly.")),(0,o.yg)("p",null,"For more detailed troubleshooting, refer to the ",(0,o.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/troubleshooting"},"React Native documentation")," and ",(0,o.yg)("a",{parentName:"p",href:"https://docs.expo.dev/guides/adopting-prebuild/#prebuild"},"Expo documentation"),"."))}c.isMDXComponent=!0}}]);