import{u as n,h as r,r as l,j as s,P as i,Q as m}from"./index-4fc38a0a.js";const d="_section_131gs_1",x="_totalBox_131gs_11",g="_studentsBox_131gs_26",_="_item_131gs_39",u="_img_131gs_46",p="_customerImg_131gs_52",j="_customerText_131gs_69",h="_customerTextLiters_131gs_76",N="_span_131gs_82",v="_ellipse_131gs_88",y="_textAdvantage_131gs_94",B="_text_131gs_94",k="_textBlack_131gs_123",T="_advantagesGroup_131gs_131",f="_group_131gs_137",A="_loader_131gs_1",t={section:d,totalBox:x,studentsBox:g,item:_,img:u,customerImg:p,customerText:j,customerTextLiters:h,span:N,ellipse:v,textAdvantage:y,text:B,textBlack:k,advantagesGroup:T,group:f,"visually-hidden":"_visually-hidden_131gs_1","close-modal-btn":"_close-modal-btn_131gs_1",loader:A},w="/watertrack-project-nodejs-react/assets/girl1-7d652a20.png",b="/watertrack-project-nodejs-react/assets/girl2-f5d3e92a.png",L="/watertrack-project-nodejs-react/assets/boy-045c3535.png",G=()=>{const a=n(),c=r(e=>e.user.count),o=r(e=>e.water.todaySumamryWater);return l.useEffect(()=>{(async()=>{c||await a(i()),await a(m())})()},[a,c]),s.jsxs("div",{className:t.section,children:[s.jsx("div",{className:t.totalBox,children:s.jsxs("p",{className:t.customerTextLiters,children:[s.jsx("span",{className:t.span,children:o})," Liters drunk today"]})}),s.jsxs("div",{className:t.studentsBox,children:[s.jsxs("ul",{className:t.customerImg,children:[s.jsx("li",{className:t.item,children:s.jsx("img",{className:t.img,src:b,alt:"girl1"})}),s.jsx("li",{className:t.item,children:s.jsx("img",{className:t.img,src:L,alt:"boy"})}),s.jsx("li",{className:t.item,children:s.jsx("img",{className:t.img,src:w,alt:"girl2"})})]}),s.jsxs("p",{className:t.customerText,children:["Our ",s.jsx("span",{className:t.span,children:c})," happy customers"]})]}),s.jsx("div",{className:t.group,children:s.jsxs("ul",{className:t.advantagesGroup,children:[s.jsxs("li",{className:t.textAdvantage,children:[s.jsx("div",{className:t.ellipse}),s.jsx("p",{className:t.text,children:"Habit drive"})]}),s.jsx("li",{className:t.textAdvantage,children:s.jsx("p",{className:t.textBlack,children:"View statistics"})}),s.jsx("li",{className:t.textAdvantage,children:s.jsx("p",{className:t.textBlack,children:"Personal rate setting"})})]})})]})};export{G as A};