(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4576],{22808:e=>{e.exports={color1:"#33ffce",color10:"#555",color11:"#555",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",formWrapper:"FreePlanFormContentStyles_formWrapper__4LcMX",form:"FreePlanFormContentStyles_form__e1hy6",form__buttonWrapper:"FreePlanFormContentStyles_form__buttonWrapper__04DrL",actions:"FreePlanFormContentStyles_actions__nTWZz",animation:"FreePlanFormContentStyles_animation__8XAIl"}},29553:(e,r,t)=>{"use strict";t.d(r,{u:()=>l});var o=t(80722);let l=async e=>{try{var r,t;let l=[""];e.vkpr&&l.push("vkpr"),e.safiracli&&l.push("safira-cli"),e.support&&l.push("support"),e.devportal&&l.push("devportal");let n={"full-name":e.name,organization:null!=(r=e.company)?r:"","e-mail":e.email,interests:l,question:e.question,"job-title":e.title,"contact-type":null!=(t=e.type)?t:"TRIAL"},{data:a}=await o.A.post("/contacts",n);return a}catch(e){throw Error("[Error in Contact Us]: ".concat(e))}}},40204:(e,r,t)=>{"use strict";t.d(r,{FreePlanFormContent:()=>g});var o=t(95155),l=t(12115),n=t(74220),a=t(44885),s=t(22319),i=t(62966),m=t(12422),c=t(42921),d=t(8900),p=t(49694),h=t(35695),u=t(17652),b=t(73866),_=t.n(b),f=t(37129),v=t(78531),x=t(35272),P=t(29553),y=t(22808),j=t.n(y);let g=()=>{let[e,r]=l.useState(!1),t=(0,u.c3)("freePlan"),b=(0,h.useRouter)(),y=(0,h.useSearchParams)().get("plan");l.useEffect(()=>{window.innerWidth>1300&&setTimeout(()=>{window.scrollTo({top:120,left:300,behavior:"smooth"})},500)},[]);let g=(0,f.Ik)({name:(0,f.Yj)().required(t("form.validate.required")),company:(0,f.Yj)().required(t("form.validate.required")),email:(0,f.Yj)().email(t("form.validate.invalid-email")).required(t("form.validate.required")),title:(0,f.Yj)().required(t("form.validate.required")),terms:(0,f.zM)().isTrue().default(!0).required("*Required")}),S=()=>{r(!1)},F=()=>{setTimeout(()=>{b.push("https://docs.platform.vee.codes/vkdr/intro/")},1500)},k={gtmId:"GTM-56RG967",events:{generateLead:{currency:"USD",value:1}}};return(0,o.jsx)("div",{className:j().formWrapper,children:(0,o.jsx)(p.l1,{initialValues:{name:"",company:"",email:"",title:"",terms:!1,type:"FREE-PLAN",plan:y},validationSchema:g,onSubmit:async e=>{let t=await (0,P.u)(e);_().initialize(k),t&&(r(!0),F())},children:r=>{let{errors:l,touched:h,handleSubmit:u,isSubmitting:b}=r;return(0,o.jsxs)(p.lV,{onSubmit:u,className:j().form,children:[(0,o.jsx)(x.Input,{name:"name",placeholder:t("form.name.placeholder"),label:t("form.name.label"),error:l.name&&h.name&&l.name}),(0,o.jsx)(x.Input,{name:"title",placeholder:t("form.title.placeholder"),label:t("form.title.label"),error:l.title&&h.title&&l.title}),(0,o.jsx)(x.Input,{name:"company",placeholder:t("form.org.placeholder"),label:t("form.org.label"),error:l.company&&h.company&&l.company}),(0,o.jsx)(x.Input,{name:"email",placeholder:t("form.email.placeholder"),label:t("form.email.label"),error:l.email&&h.email&&l.email}),(0,o.jsx)(x.Checkbox,{name:"terms",terms:!0,error:l.terms&&h.terms&&l.terms}),(0,o.jsx)("div",{className:j().form__buttonWrapper,children:(0,o.jsx)(v.$n,{"aria-label":t("buttonLabel"),type:"submit",loading:b,children:t("buttonLabel")})}),(0,o.jsxs)(s.A,{fullWidth:!0,open:e,onClose:S,"aria-labelledby":"success-alert-dialog","aria-describedby":"success-alert-dialog",children:[(0,o.jsx)(i.A,{children:(0,o.jsx)(d.A,{"aria-label":"close",onClick:S,sx:{position:"absolute",right:8,top:8},children:(0,o.jsx)(a.A,{})})}),(0,o.jsx)(m.A,{className:j().animation,style:{textAlignLast:"center"},children:(0,o.jsx)(n.GL,{src:"/assets/animations/success.json",autoplay:!0})}),(0,o.jsx)(i.A,{style:{alignSelf:"center",fontWeight:"bold"},children:(0,o.jsx)("h3",{children:t("feedback.title")})}),(0,o.jsxs)(m.A,{style:{margin:".5em 1em 1.5em 1em"},children:[(0,o.jsx)(c.A,{children:(0,o.jsx)("p",{style:{fontSize:"1.5em",textAlign:"center"},children:t.rich("feedback.message",{strong:e=>(0,o.jsx)("strong",{children:e})})})}),(0,o.jsx)(v.Tm,{href:"/",children:(0,o.jsx)("p",{style:{textDecoration:"underline",fontSize:".9em",textAlign:"center",padding:"2em 0 1em 0",color:"#1c8068"},children:t("feedback.footerLink")})})]})]})]})}})})}},55508:e=>{e.exports={color1:"#33ffce",color10:"#555",color11:"#555",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",content:"FreePlanStyles_content__D4oMC",text:"FreePlanStyles_text__Ixtcs",text__header:"FreePlanStyles_text__header__HVpVL",text__resume:"FreePlanStyles_text__resume__M4_K5",content__options:"FreePlanStyles_content__options__R_rSH"}},77517:(e,r,t)=>{Promise.resolve().then(t.bind(t,46160)),Promise.resolve().then(t.bind(t,46096)),Promise.resolve().then(t.t.bind(t,6874,23)),Promise.resolve().then(t.t.bind(t,33063,23)),Promise.resolve().then(t.bind(t,40204)),Promise.resolve().then(t.t.bind(t,82131,23)),Promise.resolve().then(t.t.bind(t,88933,23)),Promise.resolve().then(t.t.bind(t,81891,23)),Promise.resolve().then(t.t.bind(t,77859,23)),Promise.resolve().then(t.bind(t,95455)),Promise.resolve().then(t.t.bind(t,80761,23)),Promise.resolve().then(t.t.bind(t,1471,23)),Promise.resolve().then(t.t.bind(t,32375,23)),Promise.resolve().then(t.t.bind(t,55508,23)),Promise.resolve().then(t.bind(t,10279)),Promise.resolve().then(t.bind(t,32363)),Promise.resolve().then(t.bind(t,50509)),Promise.resolve().then(t.bind(t,29196)),Promise.resolve().then(t.bind(t,24787)),Promise.resolve().then(t.bind(t,55077)),Promise.resolve().then(t.bind(t,35272)),Promise.resolve().then(t.bind(t,35034)),Promise.resolve().then(t.bind(t,96818))},80722:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});let o=t(23464).A.create({baseURL:"https://api.platform.vee.codes/landing-page/v1",headers:{"x-api-key":"hm3gqnWpue1kPdMrzSe6k4jHCgBfJpyE2ncmd5FY","content-type":"application/json"}})}},e=>{var r=r=>e(e.s=r);e.O(0,[5862,4369,519,4563,5479,9204,8087,6711,512,4363,6160,6242,1561,8085,8531,8441,1684,7358],()=>r(77517)),_N_E=e.O()}]);