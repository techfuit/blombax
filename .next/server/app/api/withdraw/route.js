"use strict";(()=>{var e={};e.id=5886,e.ids=[5886],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},74778:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>h,patchFetch:()=>m,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>x,staticGenerationAsyncStorage:()=>l});var s={};r.r(s),r.d(s,{POST:()=>u});var o=r(49303),a=r(88716),n=r(60670),i=r(71615),p=r(87070);async function u(e){try{let t=i.cookies().get("sessionId")?.value,{amount:r,address:s}=await e.json();if(!t)return p.NextResponse.json({error:"Session ID not found"},{status:401});let o=await fetch("https://api.bloombax.com/api/withdraw",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:t,amount:r,address:s})});if(!o.ok){let e=await o.json();return p.NextResponse.json({error:e.message},{status:o.status})}let a=await o.json();return p.NextResponse.json(a)}catch(e){return p.NextResponse.json({error:e.message},{status:500})}}let d=new o.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/withdraw/route",pathname:"/api/withdraw",filename:"route",bundlePath:"app/api/withdraw/route"},resolvedPagePath:"D:\\Webdesigne\\Work\\bloombax\\app\\api\\withdraw\\route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:x}=d,h="/api/withdraw/route";function m(){return(0,n.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:l})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[8948,5972,1615],()=>r(74778));module.exports=s})();