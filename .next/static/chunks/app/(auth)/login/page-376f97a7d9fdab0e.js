(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{1005:function(e,t,r){Promise.resolve().then(r.bind(r,6008))},6008:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var a=r(7437),o=r(2265),s=r(3145),n=r(7648),l=r(2193);function i(e){let{submitForm:t}=e,[r,i]=(0,o.useState)({}),[c,d]=(0,o.useState)({}),m=e=>{i(t=>({...t,[e]:!t[e]}))},u=e=>{let{name:t,value:r}=e.target;d(e=>({...e,[t]:r}))};return(0,a.jsx)("div",{className:"p-10 max-sm:px-5 my-10",children:(0,a.jsxs)("div",{className:"flex flex-col items-center p-10 max-sm:px-5 md:w-[620px] mx-auto rounded-2xl gap-5",children:[(0,a.jsx)(s.default,{alt:"Logo",src:l.Z,className:" h-24 object-cover rounded-md"}),(0,a.jsx)("p",{className:"",children:"Login here to access your account"}),(0,a.jsxs)("form",{onSubmit:t,className:"w-full",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"font-medium text-black",children:"E-mail or Username"}),(0,a.jsx)("input",{type:"email || text",id:"email",name:"email",required:!0,className:"w-full mb-2.5 px-5 py-2 text-lg border border-opacity-60 border-black rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent",onChange:u}),(0,a.jsx)("label",{htmlFor:"password",className:"font-medium text-black",children:"Password"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:r.password?"text":"password",id:"password",name:"password",required:!0,className:"w-full mb-2.5 px-5 py-2 text-lg text-black border border-opacity-60 border-black rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent",onChange:u}),(0,a.jsx)("button",{type:"button",className:"absolute right-3 top-[14.5px]",onClick:()=>m("password"),children:r.password?(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"h-5 w-5 text-gray-500",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825a3.975 3.975 0 01-3.75 0m-1.425-1.2A9.015 9.015 0 012.08 12a9.014 9.014 0 016.62-6.62m1.425-1.2a3.975 3.975 0 013.75 0m1.425 1.2A9.015 9.015 0 0121.92 12a9.014 9.014 0 01-6.62 6.62m-1.425 1.2a3.975 3.975 0 01-3.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z"})}):(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"h-5 w-5 text-gray-500",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.929 4.929a12 12 0 0114.142 0m0 0a12.046 12.046 0 013.463 7.071 12.046 12.046 0 01-3.463 7.071m-14.142 0a12.046 12.046 0 01-3.463-7.071 12.046 12.046 0 013.463-7.071m3.463 7.071a4.5 4.5 0 019 0 4.5 4.5 0 01-9 0z"})})})]})]}),(0,a.jsxs)("div",{className:"flex items-center mb-3",children:[(0,a.jsx)("input",{type:"checkbox",name:"rememberMe",id:"rememberMe",className:"mr-2"}),(0,a.jsx)("label",{htmlFor:"rememberMe",className:"text-lg text-black",children:"Remember Me"})]}),(0,a.jsx)("button",{type:"submit",className:"w-full py-2.5 bg-button-color hover:bg-button-hover-color rounded-md font-medium",children:"Login Me"}),(0,a.jsxs)("div",{className:"text-lg text-center mt-7 tracking-wide",children:["Forgot Password? ",(0,a.jsx)(n.default,{href:"/forgetPassword",className:"text-form-color underline",children:"Reset Password"})]}),(0,a.jsxs)("div",{className:"text-lg text-center mt-2 tracking-wide",children:[" Don't"," have an account? ",(0,a.jsx)(n.default,{href:"/register",className:"text-form-color  underline",children:"Register"})]})]})]})})}var c=r(9770),d=r(6707);function m(){let{login:e}=(0,c.a)(),t=async t=>{t.preventDefault();let r=new FormData(t.target),a=r.get("email"),o=r.get("password"),s="on"===r.get("rememberMe");await e(a,o,s)};return(0,a.jsxs)("div",{children:[(0,a.jsx)(i,{submitForm:t}),(0,a.jsx)(d.Z,{})]})}},6707:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(7437);function o(){return(0,a.jsx)("div",{className:"p-5 w-full flex items-center justify-center",children:(0,a.jsx)("p",{className:"text-sm",children:"\xa9 2024 Bloombax. All Rights Reserved."})})}r(2265)},9770:function(e,t,r){"use strict";r.d(t,{a:function(){return n}});let a=async()=>{try{let e=await fetch("/api/user",{method:"POST",headers:{"Content-Type":"application/json"}});if(!e.ok){let t=(await e.json()).error||"Failed to fetch Direct Bonus data";throw Error(t)}let{data:t}=await e.json();return t}catch(e){throw e}};var o=r(2265),s=r(9064);let n=()=>{let[e,t]=(0,o.useState)(null),[r,n]=(0,o.useState)(!0);(0,o.useEffect)(()=>{(async()=>{try{let e=await a();t(e),n(!1)}catch(e){i()}})()},[]);let l=e=>{t(e)},i=()=>{document.cookie="sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",localStorage.removeItem("rememberMe"),localStorage.removeItem("email"),t(null)};return{user:e,loading:r,login:async(e,t,r)=>{try{let a=await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})});if(!a.ok){if(!1===a.status)throw Error("Incorrect email or password");throw Error("Login failed")}let{status:o,sessionId:n,data:i}=await a.json();if(!o){s.ZP.error("Login unsuccessful",{duration:2e3});return}l(i),document.cookie="sessionId=".concat(n,"; path=/;"),r?(localStorage.setItem("rememberMe","true"),localStorage.setItem("email",e)):(localStorage.removeItem("rememberMe"),localStorage.removeItem("email")),window.location.href="/dashboard",s.ZP.success("Login successful",{duration:2e3})}catch(e){s.ZP.error(e.message||"Login failed",{duration:2e3})}},logout:async()=>{try{if(!(await fetch("/api/logout",{method:"POST"})).ok)throw Error("Logout failed");i(),window.location.href="/login"}catch(e){s.ZP.error(e.message,{duration:2e3})}}}}},7648:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var a=r(2972),o=r.n(a)},2193:function(e,t){"use strict";t.Z={src:"/_next/static/media/Logo.4a76d414.png",height:620,width:850,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAElBMVEVMaXGtcienbye4eil/LwCRWyQM8GblAAAABnRSTlMARSVdCA4iXJVIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5JREFUeJxjYMAALIxMTEyMTKwMLMyMjIzMzEyYSgAEIQAmx+jSRwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}}},function(e){e.O(0,[64,145,972,971,117,744],function(){return e(e.s=1005)}),_N_E=e.O()}]);