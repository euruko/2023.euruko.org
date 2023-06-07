import{r as o,w as re,j as n,A as oe,m as le,b as k,f as y,c as v,d as $,S as ce,a as I,o as _,e as R,g as ue,I as de,h as he,R as F,L as me,N as J}from"./index-7a28a19e.js";function fe(t){const e=Object.assign({},t);for(let a in e)e[a]===void 0&&delete e[a];return e}function xe(t,e){if(t!=null){if(typeof t=="function"){t(e);return}try{t.current=e}catch{throw new Error(`Cannot assign value '${e}' to ref '${t}'`)}}}function pe(...t){return e=>{t.forEach(a=>{xe(a,e)})}}function ge(...t){return o.useMemo(()=>pe(...t),t)}var H={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},Z={enter:(t,e)=>({...t,delay:typeof e=="number"?e:e?.enter}),exit:(t,e)=>({...t,delay:typeof e=="number"?e:e?.exit})},ve=t=>t!=null&&parseInt(t.toString(),10)>0,U={exit:{height:{duration:.2,ease:H.ease},opacity:{duration:.3,ease:H.ease}},enter:{height:{duration:.3,ease:H.ease},opacity:{duration:.4,ease:H.ease}}},ye={exit:({animateOpacity:t,startingHeight:e,transition:a,transitionEnd:i,delay:s})=>{var r;return{...t&&{opacity:ve(e)?1:0},height:e,transitionEnd:i?.exit,transition:(r=a?.exit)!=null?r:Z.exit(U.exit,s)}},enter:({animateOpacity:t,endingHeight:e,transition:a,transitionEnd:i,delay:s})=>{var r;return{...t&&{opacity:1},height:e,transitionEnd:i?.enter,transition:(r=a?.enter)!=null?r:Z.enter(U.enter,s)}}},Y=o.forwardRef((t,e)=>{const{in:a,unmountOnExit:i,animateOpacity:s=!0,startingHeight:r=0,endingHeight:u="auto",style:l,className:f,transition:c,transitionEnd:h,...g}=t,[m,C]=o.useState(!1);o.useEffect(()=>{const A=setTimeout(()=>{C(!0)});return()=>clearTimeout(A)},[]),re({condition:Number(r)>0&&!!i,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const j=parseFloat(r.toString())>0,E={startingHeight:r,endingHeight:u,animateOpacity:s,transition:m?c:{enter:{duration:0}},transitionEnd:{enter:h?.enter,exit:i?h?.exit:{...h?.exit,display:j?"block":"none"}}},D=i?a:!0,V=a||i?"enter":"exit";return n.jsx(oe,{initial:!1,custom:E,children:D&&n.jsx(le.div,{ref:e,...g,className:k("chakra-collapse",f),style:{overflow:"hidden",display:"block",...l},custom:E,variants:ye,initial:i?"exit":!1,animate:V,exit:"exit"})})});Y.displayName="Collapse";var Q=y(function(e,a){const{htmlWidth:i,htmlHeight:s,alt:r,...u}=e;return n.jsx("img",{width:i,height:s,ref:a,alt:r,...u})});Q.displayName="NativeImage";var je=y((t,e)=>n.jsx(v.img,{ref:e,as:Q,className:"chakra-image",...t}));function be(t){return o.Children.toArray(t).filter(e=>o.isValidElement(e))}var[Oe,ke]=$({strict:!1,name:"ButtonGroupContext"});function Ce(t){const[e,a]=o.useState(!t);return{ref:o.useCallback(r=>{r&&a(r.tagName==="BUTTON")},[]),type:e?"button":void 0}}function O(t){const{children:e,className:a,...i}=t,s=o.isValidElement(e)?o.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,r=k("chakra-button__icon",a);return n.jsx(v.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:r,children:s})}O.displayName="ButtonIcon";function M(t){const{label:e,placement:a,spacing:i="0.5rem",children:s=n.jsx(ce,{color:"currentColor",width:"1em",height:"1em"}),className:r,__css:u,...l}=t,f=k("chakra-button__spinner",r),c=a==="start"?"marginEnd":"marginStart",h=o.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[c]:e?i:0,fontSize:"1em",lineHeight:"normal",...u}),[u,e,c,i]);return n.jsx(v.div,{className:f,...l,__css:h,children:s})}M.displayName="ButtonSpinner";var Se=y((t,e)=>{const a=ke(),i=I("Button",{...a,...t}),{isDisabled:s=a?.isDisabled,isLoading:r,isActive:u,children:l,leftIcon:f,rightIcon:c,loadingText:h,iconSpacing:g="0.5rem",type:m,spinner:C,spinnerPlacement:j="start",className:E,as:D,...V}=_(t),A=o.useMemo(()=>{const se={...i?._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!a&&{_focus:se}}},[i,a]),{ref:ie,type:ae}=Ce(D),z={rightIcon:c,leftIcon:f,iconSpacing:g,children:l};return n.jsxs(v.button,{ref:ge(e,ie),as:D,type:m??ae,"data-active":R(u),"data-loading":R(r),__css:A,className:k("chakra-button",E),...V,disabled:s||r,children:[r&&j==="start"&&n.jsx(M,{className:"chakra-button__spinner--start",label:h,placement:"start",spacing:g,children:C}),r?h||n.jsx(v.span,{opacity:0,children:n.jsx(G,{...z})}):n.jsx(G,{...z}),r&&j==="end"&&n.jsx(M,{className:"chakra-button__spinner--end",label:h,placement:"end",spacing:g,children:C})]})});Se.displayName="Button";function G(t){const{leftIcon:e,rightIcon:a,children:i,iconSpacing:s}=t;return n.jsxs(n.Fragment,{children:[e&&n.jsx(O,{marginEnd:s,children:e}),i,a&&n.jsx(O,{marginStart:s,children:a})]})}var[Le,q]=$({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),w=y(function(e,a){const i=ue("List",e),{children:s,styleType:r="none",stylePosition:u,spacing:l,...f}=_(e),c=be(s),g=l?{["& > *:not(style) ~ *:not(style)"]:{mt:l}}:{};return n.jsx(Le,{value:i,children:n.jsx(v.ul,{ref:a,listStyleType:r,listStylePosition:u,role:"list",__css:{...i.container,...g},...f,children:c})})});w.displayName="List";var Ne=y((t,e)=>{const{as:a,...i}=t;return n.jsx(w,{ref:e,as:"ol",styleType:"decimal",marginStart:"1em",...i})});Ne.displayName="OrderedList";var we=y(function(e,a){const{as:i,...s}=e;return n.jsx(w,{ref:a,as:"ul",styleType:"initial",marginStart:"1em",...s})});we.displayName="UnorderedList";var x=y(function(e,a){const i=q();return n.jsx(v.li,{ref:a,...e,__css:i.item})});x.displayName="ListItem";var _e=y(function(e,a){const i=q();return n.jsx(de,{ref:a,role:"presentation",...e,__css:i.icon})});_e.displayName="ListIcon";var S=y(function(e,a){const i=I("Text",e),{className:s,align:r,decoration:u,casing:l,...f}=_(e),c=fe({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return n.jsx(v.p,{ref:a,className:k("chakra-text",e.className),...c,...f,__css:i})});S.displayName="Text";var Ee=y(function(e,a){const i=I("Heading",e),{className:s,...r}=_(e);return n.jsx(v.h2,{ref:a,className:k("chakra-heading",e.className),...r,__css:i})});Ee.displayName="Heading";var d=y(function(e,a){const i=I("Link",e),{className:s,isExternal:r,...u}=_(e);return n.jsx(v.a,{target:r?"_blank":void 0,rel:r?"noopener":void 0,ref:a,className:k("chakra-link",s),...u,__css:i})});d.displayName="Link";var ee=v("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});ee.displayName="Center";var De={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};y(function(e,a){const{axis:i="both",...s}=e;return n.jsx(v.div,{ref:a,__css:De[i],...s,position:"absolute"})});var b=y(function(e,a){const{direction:i,align:s,justify:r,wrap:u,basis:l,grow:f,shrink:c,...h}=e,g={display:"flex",flexDirection:i,alignItems:s,justifyContent:r,flexWrap:u,flexBasis:l,flexGrow:f,flexShrink:c};return n.jsx(v.div,{ref:a,__css:g,...h})});b.displayName="Flex";function B(t,e={}){const{ssr:a=!0,fallback:i}=e,{getWindow:s}=he(),r=Array.isArray(t)?t:[t];let u=Array.isArray(i)?i:[i];u=u.filter(c=>c!=null);const[l,f]=o.useState(()=>r.map((c,h)=>({media:c,matches:a?!!u[h]:s().matchMedia(c).matches})));return o.useEffect(()=>{const c=s();f(r.map(m=>({media:m,matches:c.matchMedia(m).matches})));const h=r.map(m=>c.matchMedia(m)),g=m=>{f(C=>C.slice().map(j=>j.media===m.media?{...j,matches:m.matches}:j))};return h.forEach(m=>{typeof m.addListener=="function"?m.addListener(g):m.addEventListener("change",g)}),()=>{h.forEach(m=>{typeof m.removeListener=="function"?m.removeListener(g):m.removeEventListener("change",g)})}},[s]),l.map(c=>c.matches)}const Me=()=>{const[t]=B("(max-width: 700px)");return n.jsxs("footer",{id:"contacts",children:[n.jsxs(b,{margin:"auto",maxW:"1520px",justifyContent:"space-around",p:t?void 0:"100px 0px",flexWrap:"wrap",color:"#D9D9D9",children:[n.jsxs(b,{flexDirection:"column",alignContent:"center",minWidth:"30%",p:"20px",children:[n.jsx(S,{variant:"regularText",fontSize:t?"28px":"42px",fontWeight:600,lineHeight:"90%",children:"Sponsorship:"}),n.jsx(d,{fontSize:t?"20px":"30px",fontWeight:500,color:"#7f7f7f",textDecoration:"underline",mt:"30px",href:"mailto:sponsors@euruko.org",children:"sponsors@euruko.org"})]}),n.jsxs(b,{flexDirection:"column",alignContent:"center",minWidth:"30%",p:"20px",children:[n.jsx(S,{variant:"regularText",fontSize:t?"28px":"42px",fontWeight:600,lineHeight:"90%",children:"Collaboration:"}),n.jsx(d,{fontSize:t?"20px":"30px",fontWeight:500,color:"#7f7f7f",textDecoration:"underline",mt:"30px",href:"mailto:organisers@euruko.org",children:"organisers@euruko.org"})]}),n.jsxs(b,{flexDirection:"column",alignContent:"center",minWidth:"30%",p:"20px",children:[n.jsx(S,{variant:"regularText",fontSize:t?"28px":"42px",fontWeight:600,lineHeight:"90%",children:"Any other question:"}),n.jsx(d,{textDecoration:"underline",fontSize:t?"20px":"30px",fontWeight:500,color:"#7f7f7f",mt:"30px",href:"mailto:contact@euruko.org",children:"contact@euruko.org"})]})]}),n.jsx(d,{fontWeight:500,fontSize:"21px",lineHeight:"120%",color:"#D9D9D9",href:"https://2023.euruko.org/privacy/",textDecoration:"underline",target:"_blank",children:"Privacy Policy"}),n.jsxs(S,{variant:"regularText",fontSize:"21px",fontWeight:500,color:"#7f7f7f",p:t?"20px":"100px",children:["Euruko 2023 ",n.jsx("br",{}),"Vilnius, Lithuania ",n.jsx("br",{}),"21 — 23 of September"]})]})};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var P=function(){return P=Object.assign||function(e){for(var a,i=1,s=arguments.length;i<s;i++){a=arguments[i];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},P.apply(this,arguments)};function He(t,e){var a={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(a[i[s]]=t[i[s]]);return a}var L="",N=null,T=null,te=null;function W(){L="",N!==null&&N.disconnect(),T!==null&&(window.clearTimeout(T),T=null)}function K(t){var e=["BUTTON","INPUT","SELECT","TEXTAREA"],a=["A","AREA"];return e.includes(t.tagName)&&!t.hasAttribute("disabled")||a.includes(t.tagName)&&t.hasAttribute("href")}function X(){var t=null;if(L==="#")t=document.body;else{var e=L.replace("#","");t=document.getElementById(e),t===null&&L==="#top"&&(t=document.body)}if(t!==null){te(t);var a=t.getAttribute("tabindex");return a===null&&!K(t)&&t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),a===null&&!K(t)&&(t.blur(),t.removeAttribute("tabindex")),W(),!0}return!1}function Te(t){window.setTimeout(function(){X()===!1&&(N===null&&(N=new MutationObserver(X)),N.observe(document,{attributes:!0,childList:!0,subtree:!0}),T=window.setTimeout(function(){W()},t||1e4))},0)}function ne(t){return F.forwardRef(function(e,a){var i="";typeof e.to=="string"&&e.to.includes("#")?i="#"+e.to.split("#").slice(1).join("#"):typeof e.to=="object"&&typeof e.to.hash=="string"&&(i=e.to.hash);var s={};t===J&&(s.isActive=function(l,f){return l&&l.isExact&&f.hash===i});function r(l){W(),L=e.elementId?"#"+e.elementId:i,e.onClick&&e.onClick(l),L!==""&&!l.defaultPrevented&&l.button===0&&(!e.target||e.target==="_self")&&!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)&&(te=e.scroll||function(f){return e.smooth?f.scrollIntoView({behavior:"smooth"}):f.scrollIntoView()},Te(e.timeout))}var u=He(e,["scroll","smooth","timeout","elementId"]);return F.createElement(t,P({},s,u,{onClick:r,ref:a}),e.children)})}var p=ne(me);ne(J);const Ie=({title:t,titleId:e,...a},i)=>o.createElement("svg",{width:215,height:40,viewBox:"0 0 215 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:i,"aria-labelledby":e,...a},t?o.createElement("title",{id:e},t):null,o.createElement("path",{d:"M28.4249 8.01146V2.55532H0.130249V36.3544H28.4249V30.8983H6.74521V22.0139H26.8798V17.6201H6.74521V8.01146H28.4249Z",fill:"#D9D9D9"}),o.createElement("path",{d:"M54.5852 2.55532V25.1524C54.5852 29.836 51.5916 32.8296 46.9563 32.8296C42.2727 32.8296 38.7962 30.5603 38.7962 25.1524V2.55532H31.6019V24.1867C31.6019 30.8017 35.1749 37.0787 46.7149 37.0787C57.9169 37.0787 61.7796 30.4637 61.7796 24.1867V2.55532H54.5852Z",fill:"#D9D9D9"}),o.createElement("path",{d:"M67.6699 36.3544H74.2849V22.9796H91.4259L86.6457 36.451H100.696V30.9466H95.2403C96.2543 24.7661 97.22 20.6137 92.7295 20.324V18.7306C97.1234 18.0546 100.358 15.5438 100.358 10.812C100.358 4.43841 94.5161 2.6036 87.8528 2.6036H67.6699V36.3544ZM74.2849 7.96318H87.8045C90.9913 7.96318 93.7918 9.55656 93.7918 12.9365C93.7918 16.2198 90.9913 17.958 87.708 17.9098L74.2849 17.8132V7.96318Z",fill:"#D9D9D9"}),o.createElement("path",{d:"M126.369 2.55532V25.1524C126.369 29.836 123.375 32.8296 118.74 32.8296C114.056 32.8296 110.58 30.5603 110.58 25.1524V2.55532H103.385V24.1867C103.385 30.8017 106.958 37.0787 118.498 37.0787C129.7 37.0787 133.563 30.4637 133.563 24.1867V2.55532H126.369Z",fill:"#D9D9D9"}),o.createElement("path",{d:"M166.879 20.7103C165.961 19.31 162.823 18.4892 159.298 18.4892C157.608 18.4892 155.822 18.6823 154.132 19.1169C152.732 19.5031 150.752 20.2757 149.593 20.6137L149.641 19.0686C153.456 18.296 158.043 16.9924 160.505 14.0953L172.721 2.55532H164.61L148.434 17.3304H146.068V2.55532H139.453V36.3544H146.068V22.9796H163.209L158.429 36.451H172.48V30.9466H167.024C167.893 25.249 169.1 21.8208 166.879 20.7103Z",fill:"#D9D9D9"}),o.createElement("path",{d:"M201.841 27.4625C197.301 32.0023 192.38 35.2668 188.11 36.8869C183.793 38.5252 180.346 38.4165 178.512 36.5829C176.678 34.7492 176.57 31.3022 178.208 26.9844C179.828 22.7148 183.092 17.7933 187.632 13.2534C192.172 8.71347 197.094 5.44898 201.363 3.82893C205.681 2.19061 209.128 2.29929 210.962 4.13294C212.795 5.9666 212.904 9.41366 211.266 13.7314C209.646 18.001 206.381 22.9226 201.841 27.4625Z",stroke:"#D9D9D9"}),o.createElement("mask",{id:"mask0_200_117",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:169,y:-1,width:44,height:40},o.createElement("path",{d:"M202.196 27.8157C193.04 36.9718 181.948 40.7247 177.421 36.1981C172.895 31.6715 163.916 14.6875 173.072 5.53142C182.228 -3.62465 206.052 -1.48558 210.578 3.04103C215.105 7.56764 211.352 18.6596 202.196 27.8157Z",fill:"#FF6161"})),o.createElement("g",{mask:"url(#mask0_200_117)"},o.createElement("path",{d:"M192.776 1.64502C181.381 1.64502 172.4 9.41881 172.4 19.3171C172.4 29.4086 181.14 36.9409 192.776 36.9409C204.461 36.9409 213.201 29.4086 213.201 19.3171C213.152 9.17739 204.461 1.64502 192.776 1.64502ZM192.776 31.8228C185.63 31.8228 179.884 27.3806 179.884 19.5103C179.884 11.7365 185.63 6.90802 193.066 7.00459C200.743 7.10116 205.861 11.6399 205.861 19.5103C205.861 27.284 200.019 31.8228 192.776 31.8228Z",fill:"#D9D9D9"})));o.forwardRef(Ie);const Ve=""+new URL("logo-fc08516f.svg",import.meta.url).href,Be=()=>{const[t,e]=o.useState(!1),[a]=B("(max-width: 1180px)"),[i]=B("(max-width: 1500px)");return n.jsx("nav",{children:a?n.jsxs(b,{flexDirection:"column",maxWidth:"1920px",m:"auto",width:"100%",position:"fixed",top:0,zIndex:999,backgroundColor:t?"#D9D9D9":"black",boxShadow:"2xl",children:[n.jsx(ee,{textAlign:"center",width:"100%",children:n.jsx(S,{display:"block",fontWeight:600,lineHeight:"90%",letterSpacing:"-0.06em",fontSize:"42px",m:"20px",color:"#606060",textDecoration:"underline",cursor:"pointer",onClick:()=>e(!t),children:t?"<back":"menu"})}),n.jsx(Y,{in:t,children:n.jsxs(w,{onClick:()=>{e(!1)},sx:{"& li":{margin:"20px"}},children:[n.jsx(x,{children:n.jsx(d,{as:p,variant:"mobileNavLink",to:"/#",children:"Home"})}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"mobileNavLink",to:"/#tickets",children:"Tickets"})}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"mobileNavLink",to:"/#speakers",children:"Speakers"})}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"mobileNavLink",opacity:.5,children:"Agenda"})}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"mobileNavLink",to:"/#callSponsors",children:"Sponsors"})}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"mobileNavLink",to:"/#callCommunities",children:"Communities"})}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"mobileNavLink",opacity:.5,children:"Job board"})}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"mobileNavLink",to:"/#contacts",children:"Contacts"})})]})})]}):n.jsx(b,{position:"fixed",top:0,zIndex:999,backgroundColor:"black",width:"100%",boxShadow:"2xl",children:n.jsxs(b,{maxWidth:"1920px",m:"auto",width:"100%",children:[n.jsxs(w,{display:"flex",justifyContent:"space-between",width:"100%",m:"40px 50px",sx:{"& li":{display:"flex"}},gap:i?"20px":"60px",children:[n.jsx(x,{children:n.jsx(d,{as:p,variant:"navLink",href:"/#tickets",to:"/#tickets",children:"Tickets"})}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"navLink",to:"/#speakers",children:"Speakers"})}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"navLink",opacity:.5,cursor:"not-allowed",children:"Agenda"})}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"navLink",to:"/#callSponsors",children:"Sponsors"})}),n.jsx(x,{flexGrow:1,justifyContent:"center"}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"navLink",to:"/#callCommunities",children:"Communities"})}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"navLink",opacity:.5,cursor:"not-allowed",children:"Job board"})}),n.jsx(x,{children:n.jsx(d,{as:p,variant:"navLink",to:"/#contacts",children:"Contacts"})})]}),n.jsx(d,{as:p,position:"absolute",top:"30px",left:"50%",transform:"translateX(-50%)",to:"/#",children:n.jsx(je,{src:Ve,alt:"Euruko 2023 logo",width:"215px",height:"40px"})})]})})})};export{Se as B,ee as C,b as F,Ee as H,je as I,d as L,Be as N,S as T,p as a,Me as b,B as u};
