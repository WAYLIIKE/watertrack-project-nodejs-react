import{u as F,r as l,j as s,s as I,N,H as w}from"./index-e88f5b30.js";import{A as b}from"./AdvantagesSection-d3f05877.js";import{C as f,P}from"./Page-24eb9516.js";import{F as v,a as y,b as d,g as a,E as p,I as L,c as S}from"./IconEye-ee6e97bd.js";import{c as B,a as u}from"./index.esm-b6f534e5.js";import"./iconBase-92b79015.js";const G="_signinLaptop_2giot_2",k="_signinPicture_2giot_10",_={signinLaptop:G,signinPicture:k,"close-modal-btn":"_close-modal-btn_2giot_1"},A="_signinBack_18fae_1",C="_signinName_18fae_23",$="_signinForm_18fae_40",T="_signinLabel_18fae_55",q="_signinFormGroupEmail_18fae_70",D="_signinFormGroupPassword_18fae_77",H="_signinField_18fae_84",V="_signinButton_18fae_131",z="_signinText_18fae_159",M="_signinA_18fae_175",R="_signinError_18fae_191",U="_signInErrorField_18fae_199",Z="_signinIconEyes_18fae_202",J="_signinIcon_18fae_202",n={signinBack:A,signinName:C,signinForm:$,signinLabel:T,signinFormGroupEmail:q,signinFormGroupPassword:D,signinField:H,signinButton:V,signinText:z,signinA:M,signinError:R,signInErrorField:U,signinIconEyes:Z,signinIcon:J,"close-modal-btn":"_close-modal-btn_18fae_1"},K=()=>{const h=F(),m=l.useId(),g=l.useId(),[o,x]=l.useState(!1),j=B().shape({email:u().email().matches("^(?!.*@[^,]*,)","Invalid email").required("Email is required"),password:u().matches(/\d/,"The password must contain at least one number").required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches("[a-zA-Z]","Password can only contain Latin letters.")}),E=()=>{x(!o)};return s.jsx("div",{className:n.signinBack,children:s.jsx(v,{initialValues:{email:"",password:""},validationSchema:j,onSubmit:(i,e)=>{h(I(i)),e.resetForm()},children:s.jsxs(y,{className:n.signinForm,autoComplete:"on",children:[s.jsx("h1",{className:n.signinName,children:"Sign In"}),s.jsxs("div",{className:n.signinFormGroupEmail,children:[s.jsx("label",{className:n.signinLabel,htmlFor:m,children:"Email"}),s.jsx(d,{name:"email",children:({field:i,form:e})=>{const r=a(e.errors,i.name),t=a(e.touched,i.name),c=r&&t;return s.jsx("input",{...i,type:"text",className:`${n.signinField} ${c?n.signInErrorField:""}`,id:m,autoComplete:"username",placeholder:"Enter your email"})}}),s.jsx(p,{name:"email",component:"span",className:n.signinError})]}),s.jsxs("div",{className:n.signinFormGroupPassword,children:[s.jsx("label",{className:n.signinLabel,htmlFor:g,children:"Password"}),s.jsxs("div",{className:n.signinIconEyes,children:[s.jsx(d,{name:"password",children:({field:i,form:e})=>{const r=a(e.errors,i.name),t=a(e.touched,i.name),c=r&&t;return s.jsx("input",{...i,type:o?"text":"password",className:`${n.signinField} ${c?n.signInErrorField:""}`,id:g,autoComplete:"current-password",placeholder:"Enter your password"})}}),s.jsx("div",{className:n.signinIcon,onClick:E,children:o?s.jsx(L,{}):s.jsx(S,{})})]}),s.jsx(p,{name:"password",component:"span",className:n.signinError})]}),s.jsx("button",{className:n.signinButton,type:"submit",children:"Log In"}),s.jsxs("p",{className:n.signinText,children:["Don’t have an account?",s.jsx(N,{to:"/signup",className:n.signinA,children:"Sign Up"})]})]})})})};function ns(){return s.jsxs(f,{children:[s.jsx(w,{children:s.jsx("title",{children:"Sign in"})}),s.jsx(P,{children:s.jsxs("div",{className:_.signinLaptop,children:[s.jsx(K,{}),s.jsx("div",{className:_.signinPicture,children:s.jsx(b,{})})]})})]})}export{ns as default};
