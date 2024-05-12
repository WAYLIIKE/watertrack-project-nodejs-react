import{r as p,j as s,H as y,N as b}from"./index-9f79cbd3.js";import{F as P,a as v,b as d,g as t,E as l,I as _,c as w}from"./IconEyeClose-b8ff41f4.js";import{c as R,a as m}from"./index.esm-e1951c56.js";import{C as L,P as S}from"./Page-a6fa7233.js";import{A as G}from"./AdvantagesSection-539f6678.js";import"./iconBase-df9a0304.js";const k="_signupLaptop_1d4as_2",A="_signupBack_1d4as_9",B="_signupName_1d4as_31",C="_signupForm_1d4as_48",U="_signupLabel_1d4as_65",$="_signupFormGroup_1d4as_81",T="_signupFormGroupEmail_1d4as_88",q="_signupField_1d4as_95",V="_signupButton_1d4as_128",f="_signupText_1d4as_156",H="_signupA_1d4as_172",z="_signupError_1d4as_188",M="_signUpErrorField_1d4as_196",Z="_signupIconEyes_1d4as_199",D="_signupIcon_1d4as_199",J="_signupPicture_1d4as_218",e={signupLaptop:k,signupBack:A,signupName:B,signupForm:C,signupLabel:U,signupFormGroup:$,signupFormGroupEmail:T,signupField:q,signupButton:V,signupText:f,signupA:H,signupError:z,signUpErrorField:M,signupIconEyes:Z,signupIcon:D,signupPicture:J};function ss(){const g=p.useId(),h=p.useId(),x=p.useId(),[c,j]=p.useState(!1),[u,E]=p.useState(!1),F=R().shape({email:m().email().matches("^(?!.*@[^,]*,)","Invalid email").required("Email is required"),password:m().matches(/\d/,"The password must contain at least one number").required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches("[a-zA-Z]","Password can only contain Latin letters."),passwordRepeat:m().required("No password provided").matches(/\d/,"The password must contain at least one number")}),N=()=>{j(!c)},I=()=>{E(!u)};return s.jsxs(L,{children:[s.jsx(y,{children:s.jsx("title",{children:"Sign up"})}),s.jsx(S,{children:s.jsxs("div",{className:e.signupLaptop,children:[s.jsx("div",{className:e.signupBack,children:s.jsx(P,{initialValues:{email:"",password:"",passwordRepeat:""},validationSchema:F,onSubmit:async(a,n)=>{const{passwordRepeat:r,password:o}=a;try{o!==r?n.setFieldError("passwordRepeat","Passwords do not match"):(console.log("Register success"),n.resetForm())}catch(i){console.error("Registration failed:",i.message)}},children:s.jsxs(v,{className:e.signupForm,children:[s.jsx("h1",{className:e.signupName,children:"Sign up"}),s.jsxs("div",{className:e.signupFormGroupEmail,children:[s.jsx("label",{className:e.signupLabel,htmlFor:g,children:"Email"}),s.jsx(d,{name:"email",children:({field:a,form:n})=>{const r=t(n.errors,a.name),o=t(n.touched,a.name),i=r&&o;return s.jsx("input",{...a,type:"text",className:`${e.signupField} ${i?e.signUpErrorField:""}`,id:g,autoComplete:"username",placeholder:"Enter your email"})}}),s.jsx(l,{name:"email",component:"span",className:e.signupError})]}),s.jsxs("div",{className:e.signupFormGroupEmail,children:[s.jsx("label",{className:e.signupLabel,htmlFor:h,children:"Password"}),s.jsxs("div",{className:e.signupIconEyes,children:[s.jsx(d,{name:"password",children:({field:a,form:n})=>{const r=t(n.errors,a.name),o=t(n.touched,a.name),i=r&&o;return s.jsx("input",{...a,type:c?"text":"password",className:`${e.signupField} ${i?e.signUpErrorField:""}`,id:h,autoComplete:"new-password",placeholder:"Enter your password"})}}),s.jsx("div",{className:e.signupIcon,onClick:N,children:c?s.jsx(_,{}):s.jsx(w,{})})]}),s.jsx(l,{name:"password",component:"span",className:e.signupError})]}),s.jsxs("div",{className:e.signupFormGroup,children:[s.jsx("label",{className:e.signupLabel,htmlFor:x,children:"Repeat password"}),s.jsxs("div",{className:e.signupIconEyes,children:[s.jsx(d,{name:"passwordRepeat",children:({field:a,form:n})=>{const r=t(n.errors,a.name),o=t(n.touched,a.name),i=r&&o;return s.jsx("input",{...a,type:u?"text":"password",className:`${e.signupField} ${i?e.signUpErrorField:""}`,id:x,autoComplete:"new-password",placeholder:"Repeat password"})}}),s.jsx("div",{className:e.signupIcon,onClick:I,children:u?s.jsx(_,{}):s.jsx(w,{})})]}),s.jsx(l,{name:"passwordRepeat",component:"span",className:e.signupError})]}),s.jsx("button",{className:e.signupButton,type:"submit",children:"Sign Up"}),s.jsxs("p",{className:e.signupText,children:["Already have an account?"," ",s.jsx(b,{to:"/signin",className:e.signupA,children:"Sign In"})]})]})})}),s.jsx("div",{className:e.signupPicture,children:s.jsx(G,{})})]})})]})}export{ss as default};
