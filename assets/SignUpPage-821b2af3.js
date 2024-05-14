import{u as S,r as t,j as s,a as L,b as U,N as G,H as $}from"./index-e88f5b30.js";import{C as k,P as A}from"./Page-24eb9516.js";import{A as B}from"./AdvantagesSection-d3f05877.js";import{F as C,a as T,b as l,g as p,E as d,I as x,c as w}from"./IconEye-ee6e97bd.js";import{c as q,a as m}from"./index.esm-b6f534e5.js";import"./iconBase-92b79015.js";const V="_signupLaptop_7be1r_2",f="_signupPicture_7be1r_10",E={signupLaptop:V,signupPicture:f,"close-modal-btn":"_close-modal-btn_7be1r_1"},H="_signupBack_e1tj4_1",z="_signupName_e1tj4_23",D="_signupForm_e1tj4_40",M="_signupLabel_e1tj4_57",O="_signupFormGroup_e1tj4_73",Z="_signupFormGroupEmail_e1tj4_80",J="_signupField_e1tj4_87",K="_signupButton_e1tj4_134",Q="_signupText_e1tj4_162",W="_signupA_e1tj4_178",X="_signupError_e1tj4_194",Y="_signUpErrorField_e1tj4_202",ss="_signupIconEyes_e1tj4_205",es="_signupIcon_e1tj4_205",e={signupBack:H,signupName:z,signupForm:D,signupLabel:M,signupFormGroup:O,signupFormGroupEmail:Z,signupField:J,signupButton:K,signupText:Q,signupA:W,signupError:X,signUpErrorField:Y,signupIconEyes:ss,signupIcon:es,"close-modal-btn":"_close-modal-btn_e1tj4_1"},ns=()=>{const F=S(),g=t.useId(),h=t.useId(),j=t.useId(),[c,N]=t.useState(!1),[u,b]=t.useState(!1),[I,v]=t.useState(!1),P=q().shape({email:m().email().matches("^(?!.*@[^,]*,)","Invalid email").required("Email is required"),password:m().matches(/\d/,"The password must contain at least one number").required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches("[a-zA-Z]","Password can only contain Latin letters."),passwordRepeat:m().required("No password provided").matches(/\d/,"The password must contain at least one number")}),y=()=>{N(!c)},R=()=>{b(!u)};return I?s.jsx(L,{to:"/signin"}):s.jsx("div",{className:e.signupBack,children:s.jsx(C,{initialValues:{email:"",password:"",passwordRepeat:""},validationSchema:P,onSubmit:(n,a)=>{const{passwordRepeat:r,password:o,email:i}=n;if(o!==r)return a.setFieldError("passwordRepeat","Passwords do not match");const _={email:i,password:o};console.log(_),F(U(_)),v(!0),a.resetForm()},children:s.jsxs(T,{className:e.signupForm,children:[s.jsx("h1",{className:e.signupName,children:"Sign up"}),s.jsxs("div",{className:e.signupFormGroupEmail,children:[s.jsx("label",{className:e.signupLabel,htmlFor:g,children:"Email"}),s.jsx(l,{name:"email",children:({field:n,form:a})=>{const r=p(a.errors,n.name),o=p(a.touched,n.name),i=r&&o;return s.jsx("input",{...n,type:"text",className:`${e.signupField} ${i?e.signUpErrorField:""}`,id:g,autoComplete:"username",placeholder:"Enter your email"})}}),s.jsx(d,{name:"email",component:"span",className:e.signupError})]}),s.jsxs("div",{className:e.signupFormGroupEmail,children:[s.jsx("label",{className:e.signupLabel,htmlFor:h,children:"Password"}),s.jsxs("div",{className:e.signupIconEyes,children:[s.jsx(l,{name:"password",children:({field:n,form:a})=>{const r=p(a.errors,n.name),o=p(a.touched,n.name),i=r&&o;return s.jsx("input",{...n,type:c?"text":"password",className:`${e.signupField} ${i?e.signUpErrorField:""}`,id:h,autoComplete:"new-password",placeholder:"Enter your password"})}}),s.jsx("div",{className:e.signupIcon,onClick:y,children:c?s.jsx(x,{}):s.jsx(w,{})})]}),s.jsx(d,{name:"password",component:"span",className:e.signupError})]}),s.jsxs("div",{className:e.signupFormGroup,children:[s.jsx("label",{className:e.signupLabel,htmlFor:j,children:"Repeat password"}),s.jsxs("div",{className:e.signupIconEyes,children:[s.jsx(l,{name:"passwordRepeat",children:({field:n,form:a})=>{const r=p(a.errors,n.name),o=p(a.touched,n.name),i=r&&o;return s.jsx("input",{...n,type:u?"text":"password",className:`${e.signupField} ${i?e.signUpErrorField:""}`,id:j,autoComplete:"new-password",placeholder:"Repeat password"})}}),s.jsx("div",{className:e.signupIcon,onClick:R,children:u?s.jsx(x,{}):s.jsx(w,{})})]}),s.jsx(d,{name:"passwordRepeat",component:"span",className:e.signupError})]}),s.jsx("button",{className:e.signupButton,type:"submit",children:"Sign Up"}),s.jsxs("p",{className:e.signupText,children:["Already have an account?"," ",s.jsx(G,{to:"/signin",className:e.signupA,children:"Sign In"})]})]})})})};function cs(){return s.jsxs(k,{children:[s.jsx($,{children:s.jsx("title",{children:"Sign up"})}),s.jsx(A,{children:s.jsxs("div",{className:E.signupLaptop,children:[s.jsx(ns,{}),s.jsx("div",{className:E.signupPicture,children:s.jsx(B,{})})]})})]})}export{cs as default};
