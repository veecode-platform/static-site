(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7145],{18503:function(e,o,t){"use strict";t.d(o,{W:function(){return c}});var n=t(57437);t(2265);var r=t(75226),l=t.n(r);let c=e=>{let{children:o}=e;return(0,n.jsx)("div",{className:l().root,children:o})}},42239:function(e,o,t){"use strict";t.d(o,{BackButton:function(){return s}});var n=t(57437),r=t(49089),l=t(8878),c=t(57982),i=t.n(c);let s=e=>{let{backToUrl:o,noPrevious:t}=e,c=(0,l.tv)();return(0,n.jsx)("section",{className:i().back,children:(0,n.jsx)("span",{onClick:()=>o?c.push(o):t?c.push("/"):c.back(),children:(0,n.jsx)(r.BMs,{})})})}},27145:function(e,o,t){"use strict";t.d(o,{zx:function(){return a},XZ:function(){return x.Checkbox},W2:function(){return n.W},k7:function(){return h},dL:function(){return p},x2:function(){return S},$_:function(){return j.Footer},h4:function(){return m.Header},II:function(){return x.Input},F6:function(){return f.NavigationLink},F_:function(){return b.ScrollTop},jx:function(){return g.SwitchLanguage},Kx:function(){return x.TextArea}});var n=t(18503),r=t(57437),l=t(36760),c=t.n(l),i=t(85845),s=t.n(i);let a=e=>{let{children:o,modal:t,loading:n,type:l,alt:i,headerButton:a,handleClick:d,size:_="md"}=e;return(0,r.jsx)("button",{type:l||"button",disabled:n,className:c()({[s().button]:!t,[s().buttonModal]:t,[s().buttonMd]:"md"===_,[s().buttonSm]:"sm"===_,[s().buttonLg]:"lg"===_}),style:i?{color:"#FFFFFF",backgroundColor:"#20a082"}:a?{minWidth:"6vw",height:"4vh",padding:"1em 1.2em"}:{},onClick:d,children:n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:s().loader}),"loading"]}):o})};var d=t(85427),_=t.n(d),u=t(42239);let h=e=>{let{titleBar:o,title:t,subtitle:l,children:i,noPrevious:s,noBack:a,noFooter:d,showButton:h,showOptions:p,notTranslate:f,backToUrl:x,noSpace:g}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Header,{showButton:!!h,showOptions:!!p,notTranslate:!!f}),(0,r.jsxs)("main",{className:_().root,children:[(0,r.jsxs)("section",{className:_().content,children:[o?(0,r.jsx)("article",{className:_().titleWrapper,children:(0,r.jsxs)("div",{className:_().titleWrapper__content,children:[""!==t?(0,r.jsx)("h1",{className:_()["titleWrapper__content-title"],children:t}):"",""!==l?(0,r.jsx)("h2",{className:_()["titleWrapper__content-subtitle"],children:l}):""]})}):"",(0,r.jsx)(n.W,{children:(0,r.jsx)("article",{className:c()({[_().contentWrapper]:!0,[_().contentWrapper__spaces]:!g}),children:i})})]}),!a&&(0,r.jsx)(u.BackButton,{backToUrl:x,noPrevious:s})]}),!d&&(0,r.jsx)(j.Footer,{})]})};function p(e){let{href:o,description:t,children:n}=e;return(0,r.jsx)("a",{href:o,rel:"noreferrer",target:"_blank","aria-label":t,children:n})}var f=t(36724);t(50199),t(33145),t(27648),t(16631);var x=t(18120);t(2265),t(97271);var m=t(44953),j=t(73191);t(20542);var g=t(83170);t(7983),t(8200);var b=t(28984),v=t(49089),w=t(22744),k=t(55110),y=t.n(k);let S=e=>{let{show:o,variant:t,message:n}=e;return(0,r.jsxs)("div",{className:"".concat(y().root," ").concat(o?y().show:y().hide," ").concat(y()[t]),children:["success"===t&&(0,r.jsx)(v.FJM,{}),"error"===t&&(0,r.jsx)(w.Fbu,{}),(0,r.jsx)("p",{children:n})]})}},20542:function(e,o,t){"use strict";t.d(o,{Breadcrumb:function(){return s}});var n=t(57437);t(2265);var r=t(38706),l=t(49089),c=t(85245),i=t.n(c);let s=e=>{let{active:o}=e,t=(0,r.T_)("pricing.comparePlans.breadcrumb");return(0,n.jsxs)("div",{className:i().breadcrumb,children:[(0,n.jsxs)("div",{className:i().breadcrumb__item,children:[(0,n.jsx)("span",{className:1===o?i().selected:"",children:"1"}),(0,n.jsx)("p",{children:t("option1")})]}),(0,n.jsx)("div",{className:i().breadcrumb__divider,children:(0,n.jsx)(l.H_v,{})}),(0,n.jsxs)("div",{className:i().breadcrumb__item,children:[(0,n.jsx)("span",{className:2===o?i().selected:"",children:"2"}),(0,n.jsx)("p",{children:t("option2")})]}),(0,n.jsx)("div",{className:i().breadcrumb__divider,children:(0,n.jsx)(l.H_v,{})}),(0,n.jsxs)("div",{className:i().breadcrumb__item,children:[(0,n.jsx)("span",{className:3===o?i().selected:"",children:"3"}),(0,n.jsx)("p",{children:t("option3")})]})]})}},8200:function(e,o,t){"use strict";t.d(o,{Chatbot:function(){return c}});var n=t(2265),r=t(8878);let l=t(40257).env.NEXT_PUBLIC_NEUROLEAD_ID,c=()=>{let e=(0,r.jD)();return n.useEffect(()=>{if("/"===e){let e=document.createElement("script");return e.src="https://cdn.leadster.com.br/neurolead/neurolead.min.js",e.async=!0,e.onload=()=>{window&&(window.neuroleadId=l)},document.head.appendChild(e),()=>{document.head.removeChild(e)}}},[e]),null}},7983:function(e,o,t){"use strict";t.d(o,{FaqList:function(){return f}});var n=t(57437),r=t(2265),l=t(38706),c=t(18503),i=t(36760),s=t.n(i),a=t(11140),d=t(41076),_=t.n(d);let u=e=>{let{item:o,onToggle:t,active:r}=e,{title:l,answer:c}=o;return(0,n.jsxs)("li",{onClick:()=>t(o.id),className:s()({[_().item]:!0,[_().item__active]:r}),children:[(0,n.jsxs)("span",{className:_().item__title,children:[(0,n.jsx)("p",{children:l}),(0,n.jsx)("button",{"aria-label":"toggle-button",onClick:()=>t(o.id),children:r?(0,n.jsx)(a.pZ2,{}):(0,n.jsx)(a.L3d,{})})]}),(0,n.jsx)("span",{className:s()({[_().cardAnswer]:!0,[_().cardAnswer__reset]:!r,[_().show]:r,[_().hide]:!r}),children:c})]})};var h=t(88114),p=t.n(h);let f=()=>{let e=(0,l.T_)("faq.items"),[o,t]=r.useState(0),i=e=>{if(o===e)return t(0);t(e)},s=[{id:1,title:e("ask1.title"),answer:e("ask1.answer")},{id:2,title:e("ask2.title"),answer:e("ask2.answer")},{id:3,title:e("ask3.title"),answer:e("ask3.answer")},{id:4,title:e("ask4.title"),answer:e("ask4.answer")},{id:5,title:e("ask5.title"),answer:e("ask5.answer")},{id:6,title:e("ask6.title"),answer:e("ask6.answer")},{id:7,title:e("ask7.title"),answer:e("ask7.answer")},{id:8,title:e("ask8.title"),answer:e("ask8.answer")},{id:9,title:e("ask9.title"),answer:e("ask9.answer")},{id:10,title:e("ask10.title"),answer:e("ask10.answer")},{id:11,title:e("ask11.title"),answer:e("ask11.answer")}];return(0,n.jsx)("section",{className:p().wrapper,onBlur:()=>{t(0)},children:(0,n.jsx)(c.W,{children:(0,n.jsx)("article",{className:p().content,children:(0,n.jsx)("ul",{className:p().content__faqList,children:s.map(e=>(0,n.jsx)(u,{item:e,onToggle:()=>{i(e.id)},active:o===e.id},e.id))})})})})}},73191:function(e,o,t){"use strict";t.d(o,{Footer:function(){return _}});var n=t(57437),r=t(33145),l=t(38706),c=t(84154),i=t(27145);let s=e=>{window.gtag("event",e)};var a=t(43895),d=t.n(a);let _=()=>{let e=(0,l.T_)("footer"),o=(0,l.T_)("accessibility");return(0,n.jsx)("footer",{className:d().footer,children:(0,n.jsxs)(i.W2,{children:[(0,n.jsxs)("section",{className:d().content,children:[(0,n.jsxs)("div",{className:d().content__logoAndSocial,children:[(0,n.jsx)(r.default,{src:"/assets/logo/logo.png",width:228,height:71,alt:"Veecode Plataform",style:{height:"auto"},className:d().logo}),(0,n.jsxs)("ul",{className:d().items,children:[(0,n.jsx)("li",{children:(0,n.jsx)(i.dL,{description:o("external-links.instagram"),href:"https://www.instagram.com/veecodeplatform/",children:(0,n.jsx)(c.Adh,{})})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.dL,{description:o("external-links.linkedin"),href:"https://www.linkedin.com/showcase/veecode-platform/",children:(0,n.jsx)(c.tsq,{})})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.dL,{description:o("external-links.x"),href:"https://twitter.com/veecodeplatform",children:(0,n.jsx)(c.Gh0,{})})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.dL,{description:o("external-links.discord"),href:"https://discord.gg/pREwxeVzAD",children:(0,n.jsx)(c.c63,{})})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.dL,{description:o("external-links.youtube"),href:"https://www.youtube.com/@veecodeplatform-br",children:(0,n.jsx)(c.oK$,{})})})]})]}),(0,n.jsx)("div",{className:d().content__details,children:(0,n.jsxs)("div",{className:d()["content__details-lists"],children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:e("about-title")})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.F6,{href:"/how-it-works",children:e("about-option1")})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.F6,{href:"/support",children:e("about-option2")})}),(0,n.jsxs)("li",{onClick:()=>s("joinUs"),children:[(0,n.jsx)(i.dL,{description:o("external-links.github"),href:"https://github.com/vfipaas/safira-support/discussions",children:e("about-option3")})," "]})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:e("docs-title")})}),(0,n.jsx)("li",{onClick:()=>s("vkdrDocs"),children:(0,n.jsx)(i.dL,{description:o("external-links.vkdr"),href:"https://docs.platform.vee.codes/vkdr/intro/",children:e("docs-option2")})}),(0,n.jsx)("li",{onClick:()=>s("devportal"),children:(0,n.jsx)(i.dL,{description:o("external-links.docs"),href:"https://docs.platform.vee.codes/devportal/intro/",children:e("docs-option3")})})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:e("more-title")})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.dL,{description:o("external-links.blog"),href:"https://blog.platform.vee.codes/",children:e("more-option1")})}),(0,n.jsx)("li",{children:(0,n.jsxs)(i.F6,{href:"/terms-of-service",children:[e("more-option2")," "]})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.F6,{href:"/privacy-policy",children:e("more-option3")})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.F6,{href:"/contact-us",children:e("more-option4")})}),(0,n.jsxs)("li",{children:[" ",(0,n.jsx)(i.F6,{href:"/faq",children:e("more-option5")})]}),(0,n.jsxs)("li",{children:[" ",(0,n.jsxs)(i.F6,{href:"/plugins",children:[e("more-option6")," "]})]})]})]})})]}),(0,n.jsx)("section",{className:d().footer__copy,children:(0,n.jsxs)("p",{children:["Copyright \xa9 ",new Date().getFullYear()," ",e("copyright")]})})]})})}},44953:function(e,o,t){"use strict";t.d(o,{Header:function(){return h}});var n=t(57437),r=t(2265),l=t(36760),c=t.n(l),i=t(33145),s=t(38706),a=t(49089),d=t(27145),_=t(13266),u=t.n(_);let h=e=>{let{fixedHeader:o,showButton:t,showOptions:l,notTranslate:_}=e,[h,p]=r.useState(!1),f=(0,s.T_)("header"),x=(0,s.T_)("accessibility");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("header",{className:c()({[u().wrapper]:!0,[u().wrapper__fixedHeader]:o}),children:(0,n.jsx)(d.W2,{children:(0,n.jsxs)("section",{className:u().content,children:[(0,n.jsx)("div",{className:u().content__logo,children:(0,n.jsxs)(d.F6,{href:"/",children:[(0,n.jsx)(i.default,{src:"/assets/logo/logo.png",priority:!0,alt:"VeeCode Plataform Logo",width:200,height:62,style:{width:"100%",height:"auto"},className:u().logo}),(0,n.jsx)(i.default,{src:"/assets/logo/logo-mobile.png",priority:!0,alt:"VeeCode Plataform Logo",width:34,height:48,style:{width:"100%",height:"auto"},className:u().logoMobile})]})}),(0,n.jsxs)("nav",{className:u().nav,children:[l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:u().nav__options,children:(0,n.jsx)(d.dL,{description:x("external-links.docs"),href:"https://docs.platform.vee.codes/",children:(0,n.jsxs)("h2",{children:[f("docs")," "]})})}),(0,n.jsx)("div",{className:u().nav__options,children:(0,n.jsx)(d.dL,{description:x("external-links.blog"),href:"https://blog.platform.vee.codes/",children:(0,n.jsx)("h2",{children:f("blog")})})}),(0,n.jsx)("div",{className:u().nav__options,children:(0,n.jsx)(d.F6,{href:"/plugins",children:(0,n.jsx)("h2",{children:f("plugins")})})}),(0,n.jsx)("div",{className:u().nav__options,children:(0,n.jsx)(d.F6,{href:"/pricing",children:(0,n.jsx)("h2",{children:f("pricing")})})}),(0,n.jsx)("div",{className:u().nav__options,children:(0,n.jsx)(d.F6,{href:"/contact-us",children:(0,n.jsx)("h2",{children:f("contactUs")})})})]}),t&&(0,n.jsx)("div",{className:u().nav__options,children:(0,n.jsx)(d.dL,{description:x("external-links.demo"),href:"https://devportal.demo.vee.codes/",children:(0,n.jsx)(d.zx,{"aria-label":f("demo"),headerButton:!0,children:f("demo")})})})]}),!_&&(0,n.jsx)(d.jx,{}),(0,n.jsx)("button",{"aria-label":"menu",className:u().mobileButton,onClick:()=>p(!h),children:(0,n.jsx)(a.Fm7,{})})]})})}),(0,n.jsxs)("ul",{className:c()({[u().menuMobile]:h,[u().menuMobileHide]:!h}),children:[(0,n.jsx)("li",{className:u().menuMobile__item,children:(0,n.jsx)(d.F6,{href:"/",children:"Home"})}),(0,n.jsx)("li",{className:u().menuMobile__item,children:(0,n.jsx)(d.dL,{description:x("external-links.docs"),href:"https://docs.platform.vee.codes/",children:f("docs")})}),(0,n.jsx)("li",{className:u().menuMobile__item,children:(0,n.jsx)(d.dL,{description:x("external-links.blog"),href:"https://blog.platform.vee.codes/",children:f("blog")})}),(0,n.jsx)("li",{className:u().menuMobile__item,children:(0,n.jsx)(d.F6,{href:"/plugins",children:f("plugins")})}),(0,n.jsx)("li",{className:u().menuMobile__item,children:(0,n.jsx)(d.F6,{href:"/pricing",children:f("pricing")})}),(0,n.jsx)("li",{className:u().menuMobile__item,children:(0,n.jsx)(d.dL,{description:x("external-links.demo"),href:"https://devportal.demo.vee.codes/",children:f("demo")})})]})]})}},36724:function(e,o,t){"use strict";t.d(o,{NavigationLink:function(){return c}});var n=t(57437),r=t(99376),l=t(8878);function c(e){let{href:o,...t}=e,c=(0,r.useSelectedLayoutSegment)(),i=c?"/".concat(c):"/",s=i===o;return(0,n.jsx)(l.rU,{"aria-current":s?"page":void 0,href:o,"aria-label":"Link: ".concat(i),...t})}},18120:function(e,o,t){"use strict";t.r(o),t.d(o,{Checkbox:function(){return F},Input:function(){return N},TextArea:function(){return L}});var n=t(57437);t(2265);var r=t(77314),l=t(38706),c=t(45008),i=t(99379);function s(){let e=(0,c._)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 72px;\n  width: 100%;\n"]);return s=function(){return e},e}function a(){let e=(0,c._)(["\n  display: flex;\n"]);return a=function(){return e},e}function d(){let e=(0,c._)(["\n  color: ",";\n  font-size: 12px;\n  font-weight: 500;\n  min-width: 50%;\n  text-align: ",";\n"]);return d=function(){return e},e}function _(){let e=(0,c._)(["\n  width: 100%;\n  border-radius: 4px;\n  height: 48px;\n  outline: none;\n  background-color: #f3f3f3;\n  //color: #FAFAFA;\n  border: ",";\n  font-size: 16px;\n  padding: 0.25em 0.5em;\n\n  @media (max-width: 415px) {\n    //align-items: center;\n    //padding: 0.5vh 0.5vw;\n  }\n\n  :focus {\n    border: 1px solid #33ffce;\n    font-size: large;\n  }\n\n  ::placeholder {\n    font-size: medium;\n  }\n  :-webkit-autofill {\n    -webkit-box-shadow: 0 0 0 30px #f3fefe inset;\n  }\n  &:-webkit-autofill {\n    -webkit-text-fill-color: #111111 !important;\n  }\n"]);return _=function(){return e},e}function u(){let e=(0,c._)(["\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  column-gap: 0.5vw;\n  row-gap: 0vh;\n  height: ",";\n  width: ",";\n  @media (max-width: 420px) {\n    gap: 3vw;\n  }\n"]);return u=function(){return e},e}function h(){let e=(0,c._)(["\n  cursor: pointer;\n  width: 0.9vw;\n  height: 0.9vw;\n  accent-color: #33ffce;\n  @media (max-width: 420px) {\n    width: 4vw;\n    height: 4vw;\n  }\n"]);return h=function(){return e},e}function p(){let e=(0,c._)(["\n    max-width: 100%;\n    font-size: small;\n    color: ",";\n    a{\n        text-decoration: underline;\n        cursor: pointer\n        color: inherit;\n\n        :link, :visited, :hover, :active{\n            color: inherit;\n        }\n    }\n"]);return p=function(){return e},e}function f(){let e=(0,c._)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: auto;\n  min-height: 15v;\n  width: 100%;\n  gap: 0.5vh;\n"]);return f=function(){return e},e}function x(){let e=(0,c._)(["\n  width: 100%;\n  border-radius: 4px;\n  height: auto;\n  min-height: 15vh;\n  outline: none;\n  border: ",";\n  font-size: 16px;\n  padding: 0.25em 0.5em;\n  font-family: inherit;\n  resize: vertical;\n  background-color: #f3f3f3;\n  margin-bottom: 1em;\n"]);return x=function(){return e},e}let m=i.ZP.div(s()),j=i.ZP.div(a()),g=i.ZP.label(d(),e=>e.$error?"#DB0000":"#f3f3f3",e=>e.$errorLabel?"right":"left"),b=i.ZP.input(_(),e=>e.error?"1px solid #DB0000":"1px solid #33FFCE"),v=(0,i.ZP)(m)(u(),e=>e.fullHeight?"60px":"32px",e=>e.fullHeight?"auto":"49%"),w=i.ZP.input.attrs({type:"checkbox"})(h()),k=(0,i.ZP)(g)(p(),e=>e.altColor?"grey":"inherit"),y=i.ZP.div(f()),S=i.ZP.textarea(x(),e=>e.error?"1px solid #DB0000":"1px solid #33FFCE"),N=e=>{let{name:o,placeholder:t,label:l,error:c}=e;return(0,n.jsx)(r.gN,{name:o,children:e=>{let{field:r}=e;return(0,n.jsxs)(m,{children:[(0,n.jsxs)(j,{children:[(0,n.jsx)(g,{htmlFor:o,$error:c,children:l}),(0,n.jsx)(g,{$errorLabel:!0,htmlFor:o,$error:c,children:c})]}),(0,n.jsx)(b,{...r,id:o,name:o,placeholder:t,error:c})]})}})},F=e=>{let{name:o,error:t,children:c,terms:i}=e,s=(0,l.T_)("contactUs.form.terms"),a=(0,n.jsxs)(n.Fragment,{children:[s("checkbox1.label"),(0,n.jsx)("a",{target:"_blank",href:"/terms-of-service",children:s("checkbox1.linkLabel")})," ",s("checkbox2.label"),(0,n.jsx)("a",{target:"_blank",href:"/privacy-policy",children:s("checkbox2.linkLabel")})]});return(0,n.jsx)(r.gN,{name:o,children:e=>{let{field:r}=e;return(0,n.jsxs)(v,{fullHeight:!c,children:[(0,n.jsx)(w,{...r,id:o,name:o}),(0,n.jsxs)(k,{altColor:!!c,$error:t,children:[c&&(0,n.jsx)("strong",{children:c}),i&&a]})]})}})},L=e=>{let{name:o,placeholder:t,error:l,label:c}=e;return(0,n.jsx)(r.gN,{name:o,type:"textarea",children:e=>{let{field:r}=e;return(0,n.jsxs)(y,{children:[(0,n.jsxs)(j,{children:[(0,n.jsx)(g,{htmlFor:o,$error:l,children:c}),(0,n.jsx)(g,{$errorLabel:!0,htmlFor:o,$error:l,children:l})]}),(0,n.jsx)(S,{...r,id:o,name:o,placeholder:t,error:l})]})}})}},28984:function(e,o,t){"use strict";t.d(o,{ScrollTop:function(){return a}});var n=t(57437),r=t(2265),l=t(49089),c=t(12716),i=t.n(c);let s=()=>{window.scrollTo({top:0,behavior:"smooth"})},a=()=>{let[e,o]=r.useState(!1);return window.addEventListener("scroll",()=>{let e=document.documentElement.scrollTop;return e>900?o(!0):e<=900?o(!1):void 0}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{onClick:s,style:{display:e?"inline":"none"},className:i().top,"aria-label":"scroll-up",children:(0,n.jsx)(l.$Pg,{})})})}},83170:function(e,o,t){"use strict";t.d(o,{SwitchLanguage:function(){return d}});var n=t(57437),r=t(2265),l=t(38706),c=t(32768),i=t(8878),s=t(50340),a=t.n(s);let d=()=>{let[e,o]=r.useState(!1),t=(0,l.T_)("localeSwitcher"),s=(0,i.jD)(),d=(0,i.tv)(),_=()=>o(!e),u=e=>{_(),d.push(s,{locale:e})};return(0,n.jsxs)("div",{className:a().root,children:[(0,n.jsx)("button",{"aria-label":"menu-language",className:a().button,onClick:_,children:(0,n.jsx)(c.moI,{})}),e&&(0,n.jsx)("div",{className:a().dropdown,children:(0,n.jsxs)("ul",{className:a().dropdown__list,children:[(0,n.jsx)("li",{className:a()["dropdown__list-item"],onClick:()=>u("pt"),children:t.rich("pt",{p:e=>(0,n.jsx)("p",{children:e}),span:e=>(0,n.jsx)("span",{children:e})})}),(0,n.jsx)("li",{className:a()["dropdown__list-item"],onClick:()=>u("en"),children:t.rich("en",{p:e=>(0,n.jsx)("p",{children:e}),span:e=>(0,n.jsx)("span",{children:e})})})]})})]})}},8878:function(e,o,t){"use strict";t.d(o,{jD:function(){return s},rU:function(){return l},tv:function(){return a}});var n=t(38322);let r=(0,t(35426).Z)({locales:["en","pt"],defaultLocale:"en",localeCookie:!1,localePrefix:"always",pathnames:{"/":"/","/plugins":"/plugins","/plugin":"/plugin","/plugin/[path]":"/plugin/[path]","/pricing":{pt:"/planos",en:"/pricing"},"/pricing/#plans":{pt:"/planos/#plans",en:"/pricing/#plans"},"/free-plan":{pt:"/plano-gratis",en:"/free-plan"},"/free-plan?plan=free":{pt:"/plano-gratis?plan=free",en:"/free-plan?plan=free"},"/contact-us":{pt:"/fale-conosco",en:"/contact-us"},"/contact-success":{pt:"/contato-recebido",en:"/contact-success"},"/contact-failed":{pt:"/contato-falhado",en:"/contact-failed"},"/how-it-works":{pt:"/como-funciona",en:"/how-it-works"},"/support":{pt:"/suporte",en:"/support"},"/terms-of-service":{pt:"/termos-de-servico",en:"/terms-of-service"},"/privacy-policy":{pt:"/politica-de-privacidade",en:"/privacy-policy"},"/faq":{pt:"/perguntas-frequentes",en:"/faq"},"/success":{pt:"/tudo-certo",en:"/success"},"/failed":{pt:"/houve-um-erro",en:"/failed"},"/validate":{pt:"/validacao",en:"/validate"},"/validate?plan=standard":{pt:"/validacao?plan=standard",en:"/validate?plan=standard"},"/governance":{pt:"/governancia",en:"/governance"}}}),{Link:l,getPathname:c,redirect:i,usePathname:s,useRouter:a}=(0,n.Z)(r)},50199:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",content:"ActionBarStyles_content__rLVVL",content__title:"ActionBarStyles_content__title__ZUrFt",content__button:"ActionBarStyles_content__button__XpVQI"}},85845:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",button:"ButtonStyles_button__9OuDi",buttonModal:"ButtonStyles_buttonModal__ZirWH",buttonMd:"ButtonStyles_buttonMd__zyrV2",buttonLg:"ButtonStyles_buttonLg__Fgjd5",buttonSm:"ButtonStyles_buttonSm__KkzDH",loader:"ButtonStyles_loader__la1YY",rotation:"ButtonStyles_rotation__cscLd"}},75226:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",root:"containerStyles_root__KKkPp"}},85427:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",root:"DefaultPageStyles_root__S4Ptk",content:"DefaultPageStyles_content__VUx8l",titleWrapper:"DefaultPageStyles_titleWrapper__mHWo4",titleWrapper__content:"DefaultPageStyles_titleWrapper__content__Kso_Q","titleWrapper__content-title":"DefaultPageStyles_titleWrapper__content-title__6ON87","titleWrapper__content-subtitle":"DefaultPageStyles_titleWrapper__content-subtitle__BwOv8",contentWrapper:"DefaultPageStyles_contentWrapper__C474z",contentWrapper__spaces:"DefaultPageStyles_contentWrapper__spaces__evZao"}},57982:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",back:"BackButton_back__mrAie"}},55110:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",root:"FeedBackStyles_root__tDlap",hide:"FeedBackStyles_hide__iqJd_",show:"FeedBackStyles_show__MqMhi",success:"FeedBackStyles_success__f048e",error:"FeedBackStyles_error__pghh5"}},97271:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",loading:"LoadingStyles_loading__ksjy1",loading__animation:"LoadingStyles_loading__animation__WwZse"}},16631:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",root:"PageNotFoundStyles_root__lo1T3",content:"PageNotFoundStyles_content___QeZW",content__img:"PageNotFoundStyles_content__img__zhUkR",content__goBack:"PageNotFoundStyles_content__goBack__Qvea6"}},85245:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",breadcrumb:"BreadcrumbStyles_breadcrumb__XnDKW",breadcrumb__item:"BreadcrumbStyles_breadcrumb__item__xolmx",selected:"BreadcrumbStyles_selected__nVTMz",breadcrumb__divider:"BreadcrumbStyles_breadcrumb__divider__hIimO"}},88114:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",wrapper:"FaqListStyles_wrapper__0jQ6P",content:"FaqListStyles_content__TgC1I",content__faqList:"FaqListStyles_content__faqList__CvPwg"}},41076:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",item:"AccordionItem_item__xYO2T",item__title:"AccordionItem_item__title__ylpCG",item__active:"AccordionItem_item__active__jJJ_q",cardAnswer:"AccordionItem_cardAnswer__oVuuM",cardAnswer__reset:"AccordionItem_cardAnswer__reset__9itOB",hide:"AccordionItem_hide__2wtR3",show:"AccordionItem_show__FtxtB"}},43895:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",footer:"FooterStyles_footer__mpJ5x",content:"FooterStyles_content__ICKWQ",content__logoAndSocial:"FooterStyles_content__logoAndSocial__8xZHM",logo:"FooterStyles_logo__NHijb",items:"FooterStyles_items__027BR",content__details:"FooterStyles_content__details__Plse2","content__details-lists":"FooterStyles_content__details-lists__8rDAw",footer__copy:"FooterStyles_footer__copy__JrC_Q"}},13266:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",wrapper:"HeaderStyles_wrapper__1P_zW",wrapper__fixedHeader:"HeaderStyles_wrapper__fixedHeader__j4c6X",content:"HeaderStyles_content__ibv8z",content__logo:"HeaderStyles_content__logo__tZNaF",logo:"HeaderStyles_logo__2KMnU",logoMobile:"HeaderStyles_logoMobile__8lEFC",nav:"HeaderStyles_nav___wqWw",nav__options:"HeaderStyles_nav__options__4Sdzl",mobileButton:"HeaderStyles_mobileButton__bsc3F",menuMobile:"HeaderStyles_menuMobile__xyoof",menuMobileHide:"HeaderStyles_menuMobileHide___3Tk_",menuMobile__item:"HeaderStyles_menuMobile__item__uvpsa"}},12716:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",top:"ScrollStyles_top__2gfXv"}},50340:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",root:"SwitchLanguageStyles_root__T3Kpl",button:"SwitchLanguageStyles_button__RUC8H",dropdown:"SwitchLanguageStyles_dropdown__kNrtc",dropdown__list:"SwitchLanguageStyles_dropdown__list__LNkK_","dropdown__list-item":"SwitchLanguageStyles_dropdown__list-item__Llt5d"}}}]);