(()=>{var e={};e.id=1055,e.ids=[1055],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},99167:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>x,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),r(82851),r(70652),r(41888);var a=r(23191),o=r(88716),n=r(37922),s=r.n(n),l=r(95231),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let d=["",{children:["RegistrationReward",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,82851)),"D:\\Webdesigne\\Work\\bloombax\\app\\RegistrationReward\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,70652)),"D:\\Webdesigne\\Work\\bloombax\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,41888)),"D:\\Webdesigne\\Work\\bloombax\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\Webdesigne\\Work\\bloombax\\app\\RegistrationReward\\page.jsx"],c="/RegistrationReward/page",x={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/RegistrationReward/page",pathname:"/RegistrationReward",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},21833:(e,t,r)=>{Promise.resolve().then(r.bind(r,50717))},60858:(e,t,r)=>{Promise.resolve().then(r.bind(r,21231)),Promise.resolve().then(r.bind(r,23361)),Promise.resolve().then(r.bind(r,40381))},61753:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},95583:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,79404,23))},50717:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var a=r(10326),o=r(90434),n=r(17577),s=r(43353),l=r.n(s),i=r(46226);let d=l()(async()=>{},{loadableGenerated:{modules:["app\\RegistrationReward\\page.jsx -> react-confetti"]},ssr:!1});function u(){let[e,t]=(0,n.useState)(!0),[r,s]=(0,n.useState)({width:0,height:0});return(0,a.jsxs)("div",{className:"h-screen w-full flex flex-col items-center justify-center gap-2 px-4",children:[a.jsx(i.default,{src:"/DFM Logo Dark Mode.png",height:500,width:500,alt:"DFM logo",className:"w-32 h-12 flex items-center justify-center absolute top-10 left-20 max-sm:left-1/2 max-sm:-translate-x-1/2"}),e&&r.width&&r.height&&a.jsx(d,{width:r.width,height:r.height}),a.jsx("h1",{className:"text-4xl lg:text-5xl text-center pb-10 font-bold gradient-text2",children:"Congratulations"}),a.jsx("p",{className:" text-base sm:text-xl lg:text-2xl text-center mb-6",children:"You will be Receive 20 USDT."}),a.jsx(o.default,{href:"/login",className:"px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 text-sm md:text-base lg:text-lg text-white font-bold tracking-widest bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-600",children:"Claim Your Reward"})]})}},21231:(e,t,r)=>{"use strict";r.d(t,{default:()=>p});var a=r(10326),o=r(17577);let n=()=>4*Math.random()+1,s=()=>4*Math.random()+16,l=()=>Math.random()>.5?"rounded-full":"",i=()=>{let e=["bg-white","bg-yellow-300","bg-blue-400","bg-red-500"];return e[Math.floor(Math.random()*e.length)]},d=()=>.7*Math.random()+.3,u=()=>{let e=["star-move","star-twinkle","star-slide","star-fall"];return e[Math.floor(Math.random()*e.length)]},c=()=>{let e=["normal","reverse"];return e[Math.floor(Math.random()*e.length)]},x=({style:e})=>{let t=n(),r=s(),o=l(),x=i(),p=d(),m=u(),f=c();return a.jsx("div",{className:`${x} ${o} fixed ${m}`,style:{...e,width:`${t}px`,height:`${t}px`,animationDuration:`${r}s`,animationDirection:f,opacity:p}})},p=({count:e})=>{let[t,r]=(0,o.useState)([]);return(0,o.useEffect)(()=>{let t=[];for(let r=0;r<e;r++)t.push(a.jsx(x,{style:{top:`${100*Math.random()}vh`,left:`${100*Math.random()}vw`}},r));r(t)},[e]),a.jsx(a.Fragment,{children:t})}},23361:(e,t,r)=>{"use strict";r.d(t,{GlobalProvider:()=>s,r:()=>l});var a=r(10326),o=r(17577);let n=(0,o.createContext)();function s({children:e}){let[t,r]=(0,o.useState)(!0);return a.jsx(n.Provider,{value:{isOpen:t,setOpen:r},children:e})}function l(){return(0,o.useContext)(n)}},43353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let a=r(91174);r(10326),r(17577);let o=a._(r(77028));function n(e,t){var r;let a={loading:e=>{let{error:t,isLoading:r,pastDelay:a}=e;return null}};"function"==typeof e&&(a.loader=e);let n={...a,...t};return(0,o.default)({...n,modules:null==(r=n.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},933:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let a=r(94129);function o(e){let{reason:t,children:r}=e;throw new a.BailoutToCSRError(t)}},77028:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let a=r(10326),o=r(17577),n=r(933),s=r(46618);function l(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},d=function(e){let t={...i,...e},r=(0,o.lazy)(()=>t.loader().then(l)),d=t.loading;function u(e){let l=d?(0,a.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.PreloadCss,{moduleIds:t.modules}),(0,a.jsx)(r,{...e})]}):(0,a.jsx)(n.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(r,{...e})});return(0,a.jsx)(o.Suspense,{fallback:l,children:i})}return u.displayName="LoadableComponent",u}},46618:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return n}});let a=r(10326),o=r(55403);function n(e){let{moduleIds:t}=e,r=(0,o.getExpectedRequestStore)("next/dynamic css"),n=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));n.push(...t)}}return 0===n.length?null:(0,a.jsx)(a.Fragment,{children:n.map(e=>(0,a.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},82851:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>s,__esModule:()=>n,default:()=>l});var a=r(68570);let o=(0,a.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\app\RegistrationReward\page.jsx`),{__esModule:n,$$typeof:s}=o;o.default;let l=(0,a.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\app\RegistrationReward\page.jsx#default`)},70652:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b,metadata:()=>h});var a=r(19510),o=r(80143),n=r.n(o);r(67272);var s=r(68570);let l=(0,s.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\components\Stars.jsx`),{__esModule:i,$$typeof:d}=l;l.default;let u=(0,s.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\components\Stars.jsx#default`);var c=r(19125);let x=(0,s.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\hook\useContext.js`),{__esModule:p,$$typeof:m}=x;x.default;let f=(0,s.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\hook\useContext.js#GlobalProvider`);(0,s.createProxy)(String.raw`D:\Webdesigne\Work\bloombax\hook\useContext.js#useGlobalContextProvider`);let h={title:"Bloombax",description:"Trusted trading platform"};function b({children:e}){return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{className:`${n().className} bgGradient bg-[#f3eeee] text-black relative`,children:[a.jsx(c.x7,{position:"top-right"}),a.jsx(u,{count:400}),a.jsx(f,{children:a.jsx("div",{className:"relative z-10",children:e})})]})})}},41888:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var a=r(19510),o=r(57371);function n(){return a.jsx("div",{className:"flex items-center justify-center h-screen bg-black",children:(0,a.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,a.jsxs)("div",{className:"animate-colorSplits text-[220px] relative ",children:["404",a.jsx("div",{className:"absolute top-0 left-[-2px] z-10 overflow-visible text-[#333] glitches",style:{clipPath:"polygon(0% 0%, 100% 0, 100% 25%, 0 25%, 0 30%, 100% 30%, 100% 50%, 0 50%, 0 60%, 100% 60%, 100% 65%, 0 65%, 0 80%, 100% 80%, 100% 85%, 0 85%, 0% 0%)"},children:"404"})]}),a.jsx("h2",{className:"text-lg font-semibold",children:" Page Not Found"}),a.jsx(o.default,{href:"/",className:"bg-base-color px-8 py-3 rounded-md text-black font-semibold hover:bg-base-color-hover hover:scale-105 transition-all duration-150",children:"Return Home"})]})})}},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(66621);let o=e=>[{type:"image/x-icon",sizes:"2000x1459",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[8948,8605,285],()=>r(99167));module.exports=a})();