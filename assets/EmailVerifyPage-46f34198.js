import{j as e,N as l,u as d,r as t,b as m,c as _,H as p,v as u}from"./index-152e607c.js";import{A as f}from"./AdvantagesSection-32d23d98.js";import{C as x,P as h}from"./Page-d9dc2f76.js";import{I as j}from"./index-fc795cbc.js";import"./iconBase-eaf5dce6.js";const k="_section_12pdz_1",v="_icon_12pdz_11",y="_title_12pdz_21",g="_text_12pdz_29",z="_button_12pdz_37",E="_mainTitle_12pdz_72",N="_loader_12pdz_1",s={section:k,icon:v,title:y,text:g,button:z,mainTitle:E,"visually-hidden":"_visually-hidden_12pdz_1","close-modal-btn":"_close-modal-btn_12pdz_1",loader:N},T=()=>e.jsxs("div",{className:s.section,children:[e.jsx(j,{className:s.icon}),e.jsx("h2",{className:s.title,children:"Email verified!"}),e.jsx("p",{className:s.text,children:"You can now sign in with your new account"}),e.jsx(l,{to:"/signin",className:s.button,children:"Sign In"})]});function A(){const n=d(),[i,a]=t.useState(null),o=m(),c=_().verifyToken;return t.useEffect(()=>{(async()=>{try{(await n(u(c))).payload?a(!0):a(!1)}catch{return}})()},[n,c]),t.useEffect(()=>{i===!1&&o("/not-found-page")},[o,i]),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx("title",{children:"Verification"})}),e.jsxs(h,{children:[e.jsx(T,{}),e.jsx(f,{})]})]})}export{A as default};
