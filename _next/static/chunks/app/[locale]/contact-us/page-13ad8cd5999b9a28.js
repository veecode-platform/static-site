(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4800],{64695:function(e,t,r){Promise.resolve().then(r.bind(r,6641)),Promise.resolve().then(r.bind(r,79441)),Promise.resolve().then(r.t.bind(r,65878,23)),Promise.resolve().then(r.t.bind(r,72972,23)),Promise.resolve().then(r.bind(r,5917)),Promise.resolve().then(r.t.bind(r,75226,23)),Promise.resolve().then(r.t.bind(r,85845,23)),Promise.resolve().then(r.t.bind(r,85427,23)),Promise.resolve().then(r.t.bind(r,50199,23)),Promise.resolve().then(r.bind(r,42239)),Promise.resolve().then(r.t.bind(r,16631,23)),Promise.resolve().then(r.t.bind(r,97271,23)),Promise.resolve().then(r.t.bind(r,55110,23)),Promise.resolve().then(r.t.bind(r,1840,23)),Promise.resolve().then(r.bind(r,20542)),Promise.resolve().then(r.bind(r,8200)),Promise.resolve().then(r.bind(r,7983)),Promise.resolve().then(r.bind(r,73191)),Promise.resolve().then(r.bind(r,44953)),Promise.resolve().then(r.bind(r,36724)),Promise.resolve().then(r.bind(r,18120)),Promise.resolve().then(r.bind(r,28984)),Promise.resolve().then(r.bind(r,83170))},69780:function(e,t,r){"use strict";var n,o=(n=r(78227))&&n.__esModule?n:{default:n};e.exports={tags:function(e){var t=e.id,r=e.events,n=e.dataLayer,a=e.dataLayerName,i=e.preview,s="&gtm_auth="+e.auth,l="&gtm_preview="+i;t||(0,o.default)("GTM Id is required");var c="\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(r).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+s+l+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+a+"','"+t+"');";return{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+s+l+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:c,dataLayerVar:this.dataLayer(n,a)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}}},90761:function(e,t,r){"use strict";var n,o=(n=r(69780))&&n.__esModule?n:{default:n};e.exports={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=o.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,r=e.events,n=e.dataLayer,o=e.dataLayerName,a=e.auth,i=e.preview,s=this.gtm({id:t,events:void 0===r?{}:r,dataLayer:n||void 0,dataLayerName:void 0===o?"dataLayer":o,auth:void 0===a?"":a,preview:void 0===i?"":i});n&&document.head.appendChild(s.dataScript),document.head.insertBefore(s.script(),document.head.childNodes[0]),document.body.insertBefore(s.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,r=e.dataLayerName,n=void 0===r?"dataLayer":r;if(window[n])return window[n].push(t);var a=o.default.dataLayer(t,n),i=this.dataScript(a);document.head.insertBefore(i,document.head.childNodes[0])}}},4828:function(e,t,r){"use strict";var n,o=(n=r(90761))&&n.__esModule?n:{default:n};e.exports=o.default},78227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){console.warn("[react-gtm]",e)}},5917:function(e,t,r){"use strict";r.d(t,{FormElement:function(){return _}});var n=r(57437),o=r(77314),a=r(38706),i=r(4828),s=r.n(i),l=r(34422),c=r(27145),d=r(29249),m=r(8878),u=r(25082),p=r.n(u);let _=e=>{let{company:t,checkbox:r,type:i}=e,u=(0,a.T_)("contactUs.form"),_=(0,l.Ry)({name:(0,l.Z_)().required("*required"),company:(0,l.Z_)().required("*required").default(null),email:(0,l.Z_)().email("*invalid email").required("*required"),question:(0,l.Z_)().required("*required")}),h=(0,m.tv)(),f={gtmId:"GTM-56RG967",events:{generateLead:{currency:"USD",value:1}}};return(0,n.jsx)("div",{className:p().formWrapper,children:(0,n.jsx)(o.J9,{initialValues:{name:"",company:"",email:"",question:"",type:i,vkpr:!1,safiracli:!1,support:!1,devportal:!1},validationSchema:_,onSubmit:async e=>{try{await (0,d.j)(e),s().initialize(f),h.push("/contact-success")}catch(e){console.error(e),h.push("/contact-failed")}},children:e=>{let{errors:a,touched:i,handleSubmit:s,isSubmitting:l}=e;return(0,n.jsxs)(o.l0,{onSubmit:s,className:p().form,children:[(0,n.jsx)(c.II,{name:"name",placeholder:u("name.placeholder"),label:u("name.label"),error:a.name&&i.name&&a.name}),(0,n.jsx)(c.II,{name:"email",placeholder:u("email.placeholder"),label:u("email.label"),error:a.email&&i.email&&a.email}),t&&(0,n.jsx)(c.II,{name:"company",placeholder:u("org.placeholder"),label:u("org.label"),error:a.company&&i.company&&a.company}),r&&(0,n.jsxs)("div",{className:p().form__checkboxWrapper,children:[(0,n.jsx)("h1",{children:"Which products are you interested in?"}),(0,n.jsx)(c.XZ,{name:"vkpr",children:"VKPR"}),(0,n.jsx)(c.XZ,{name:"safiracli",children:"Safira-cli"}),(0,n.jsx)(c.XZ,{name:"support",children:"Expert Support"}),(0,n.jsx)(c.XZ,{name:"devportal",children:"Devportal"})]}),(0,n.jsx)(c.Kx,{name:"question",placeholder:u("message.placeholder"),label:u("message.label"),error:a.question&&i.question&&a.question}),(0,n.jsx)("div",{className:p().form__buttonWrapper,children:(0,n.jsx)(c.zx,{"aria-label":u("buttonLabel"),type:"submit",loading:l,alt:!0,children:u("buttonLabel")})})]})}})})}},29249:function(e,t,r){"use strict";r.d(t,{j:function(){return o}});var n=r(28223);let o=async e=>{try{var t,r;let o=[""];e.vkpr&&o.push("vkpr"),e.safiracli&&o.push("safira-cli"),e.support&&o.push("support"),e.devportal&&o.push("devportal");let a={"full-name":e.name,organization:null!==(t=e.company)&&void 0!==t?t:"","e-mail":e.email,interests:o,question:e.question,"job-title":e.title,"contact-type":null!==(r=e.type)&&void 0!==r?r:"TRIAL"},{data:i}=await n.Z.post("/contacts",a);return i}catch(e){throw Error("[Error in Contact Us]: ".concat(e))}}},28223:function(e,t,r){"use strict";var n=r(83464),o=r(40257);let a=o.env.NEXT_PUBLIC_LAMBDA_BASE_URL,i=n.Z.create({baseURL:a,headers:{"x-api-key":o.env.NEXT_PUBLIC_LAMBDA_API_KEY,"content-type":"application/json"}});t.Z=i},1840:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",content:"ContactUsStyles_content___pymI",content__options:"ContactUsStyles_content__options__YDwfH","content__options-decoration":"ContactUsStyles_content__options-decoration__KL06y","ef-pulse-grow":"ContactUsStyles_ef-pulse-grow__YPltw","content__options-formWraper":"ContactUsStyles_content__options-formWraper__CGoRv",content__faq:"ContactUsStyles_content__faq__mtqUM"}},25082:function(e){e.exports={color1:"#33ffce",color2:"#fafafa",color3:"#000",color4:"#555",color5:"#555",color6:"#555",color7:"#555",color8:"#555",color9:"#555",color10:"#555",color11:"#555",formWrapper:"FormElementStyles_formWrapper__iZFNP",form:"FormElementStyles_form__DiBCR",form__buttonWrapper:"FormElementStyles_form__buttonWrapper__IL8Nn",form__checkboxWrapper:"FormElementStyles_form__checkboxWrapper__cQQbw"}}},function(e){e.O(0,[7856,736,6613,7831,6051,522,1779,7699,5706,6641,2067,9922,7145,2971,2117,1744],function(){return e(e.s=64695)}),_N_E=e.O()}]);