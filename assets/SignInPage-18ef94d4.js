import{u as F,r as l,j as s,s as I,N,H as w}from"./index-6057213b.js";import{A as b}from"./AdvantagesSection-8fffd186.js";import{C as v,P as y}from"./Page-9c9c19b3.js";import{F as P,a as L,b as g,g as e,E as u}from"./formik.esm-abb16840.js";import{c as S,a as p,I as B,b as G}from"./index.esm-151e0a79.js";import"./iconBase-80e48171.js";const $="_signinLaptop_2giot_2",k="_signinPicture_2giot_10",A="_loader_2giot_1",_={signinLaptop:$,signinPicture:k,"visually-hidden":"_visually-hidden_2giot_1","close-modal-btn":"_close-modal-btn_2giot_1",loader:A},C="_signinBack_1pouj_1",T="_signinName_1pouj_23",q="_signinForm_1pouj_40",f="_signinLabel_1pouj_55",D="_signinFormGroupEmail_1pouj_70",H="_signinFormGroupPassword_1pouj_77",V="_signinField_1pouj_84",z="_signinButton_1pouj_132",M="_signinText_1pouj_161",R="_signinA_1pouj_177",U="_signinError_1pouj_193",Z="_signInErrorField_1pouj_201",J="_signinIconEyes_1pouj_204",K="_signinIcon_1pouj_204",O="_loader_1pouj_1",n={signinBack:C,signinName:T,signinForm:q,signinLabel:f,signinFormGroupEmail:D,signinFormGroupPassword:H,signinField:V,signinButton:z,signinText:M,signinA:R,signinError:U,signInErrorField:Z,signinIconEyes:J,signinIcon:K,"visually-hidden":"_visually-hidden_1pouj_1","close-modal-btn":"_close-modal-btn_1pouj_1",loader:O},Q=()=>{const h=F(),d=l.useId(),m=l.useId(),[a,j]=l.useState(!1),x=S().shape({email:p().email().matches("^(?!.*@[^,]*,)","Invalid email").required("Email is required"),password:p().matches(/\d/,"The password must contain at least one number").required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches("[a-zA-Z]","Password can only contain Latin letters.")}),E=()=>{j(!a)};return s.jsx("div",{className:n.signinBack,children:s.jsx(P,{initialValues:{email:"",password:""},validationSchema:x,onSubmit:(i,o)=>{h(I(i)),o.resetForm()},children:s.jsxs(L,{className:n.signinForm,autoComplete:"on",children:[s.jsx("h1",{className:n.signinName,children:"Sign In"}),s.jsxs("div",{className:n.signinFormGroupEmail,children:[s.jsx("label",{className:n.signinLabel,htmlFor:d,children:"Email"}),s.jsx(g,{name:"email",children:({field:i,form:o})=>{const r=e(o.errors,i.name),t=e(o.touched,i.name),c=r&&t;return s.jsx("input",{...i,type:"text",className:`${n.signinField} ${c?n.signInErrorField:""}`,id:d,autoComplete:"username",placeholder:"Enter your email"})}}),s.jsx(u,{name:"email",component:"span",className:n.signinError})]}),s.jsxs("div",{className:n.signinFormGroupPassword,children:[s.jsx("label",{className:n.signinLabel,htmlFor:m,children:"Password"}),s.jsxs("div",{className:n.signinIconEyes,children:[s.jsx(g,{name:"password",children:({field:i,form:o})=>{const r=e(o.errors,i.name),t=e(o.touched,i.name),c=r&&t;return s.jsx("input",{...i,type:a?"text":"password",className:`${n.signinField} ${c?n.signInErrorField:""}`,id:m,autoComplete:"current-password",placeholder:"Enter your password"})}}),s.jsx("div",{className:n.signinIcon,onClick:E,children:a?s.jsx(B,{}):s.jsx(G,{})})]}),s.jsx(u,{name:"password",component:"span",className:n.signinError})]}),s.jsx("button",{className:n.signinButton,type:"submit",children:"Log In"}),s.jsxs("p",{className:n.signinText,children:["Don`t have an account? ",s.jsx(N,{to:"/signup",className:n.signinA,children:"Sign Up"})]})]})})})};function os(){return s.jsxs(v,{children:[s.jsx(w,{children:s.jsx("title",{children:"Sign in"})}),s.jsx(y,{children:s.jsxs("div",{className:_.signinLaptop,children:[s.jsx(Q,{}),s.jsx("div",{className:_.signinPicture,children:s.jsx(b,{})})]})})]})}export{os as default};
