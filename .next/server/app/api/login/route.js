"use strict";(()=>{var e={};e.id=5740,e.ids=[5740],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},66178:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>g,patchFetch:()=>m,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>c});var o={};r.r(o),r.d(o,{POST:()=>u});var s=r(49303),n=r(88716),a=r(60670),i=r(87070);async function u(e){try{let{email:t,password:r}=await e.json(),o=await fetch("https://api.bloombax.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:r})}),s=await o.json();if(!o.ok)return i.NextResponse.json({error:s.error||"Login failed"},{status:400});let{status:n,sessionId:a}=s;if(!n)return i.NextResponse.json({error:"Login unsuccessful"},{status:401});let u=i.NextResponse.json({message:"Login successful",status:!0,sessionId:a});return u.cookies.set("sessionId",a,{httpOnly:!0,secure:!0,sameSite:"None",expires:new Date(Date.now()+6048e5)}),u}catch(e){return i.NextResponse.json({error:"An error occurred"},{status:500})}}let p=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/login/route",pathname:"/api/login",filename:"route",bundlePath:"app/api/login/route"},resolvedPagePath:"D:\\Webdesigne\\Work\\bloombax\\app\\api\\login\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:d}=p,g="/api/login/route";function m(){return(0,a.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:c})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[8948,5972],()=>r(66178));module.exports=o})();