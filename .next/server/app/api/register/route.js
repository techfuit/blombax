"use strict";(()=>{var e={};e.id=5569,e.ids=[5569],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},77508:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>g,patchFetch:()=>m,requestAsyncStorage:()=>d,routeModule:()=>u,serverHooks:()=>l,staticGenerationAsyncStorage:()=>c});var s={};r.r(s),r.d(s,{POST:()=>p});var a=r(49303),o=r(88716),i=r(60670),n=r(87070);async function p(e){try{let t=await e.json(),r=await fetch("https://api.bloombax.com/api/signUp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok){let e=await r.json();return n.NextResponse.json({error:e.message},{status:r.status})}let s=await r.json();return n.NextResponse.json(s)}catch(e){return n.NextResponse.json({error:e.message},{status:500})}}let u=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/register/route",pathname:"/api/register",filename:"route",bundlePath:"app/api/register/route"},resolvedPagePath:"D:\\Webdesigne\\Work\\bloombax\\app\\api\\register\\route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:c,serverHooks:l}=u,g="/api/register/route";function m(){return(0,i.patchFetch)({serverHooks:l,staticGenerationAsyncStorage:c})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[8948,5972],()=>r(77508));module.exports=s})();