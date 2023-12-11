"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4386],{405238:function(e,n,t){t.d(n,{G:function(){return j}});var l={};t.r(l),t.d(l,{itemCount:function(){return g},oneTimePurchaseItemCount:function(){return N},subscriptionItemCount:function(){return v}});var r=t(390239),a=t(575115),i=t(107401),o=t(893109),c=t(245227),s=t(293065),u=t(227297),d=t(803528),m=t(412363),p=t(151749),y=t(489621),f=t.n(y),x=t(156055),h=t(491288),w=t(985115);const g=e=>e.count+" "+w.Ho(e.count,0,h.en,{"1":"item",other:"items"}),N=e=>"One-time purchase ("+e.count+" "+w.Ho(e.count,0,h.en,{"1":"item",other:"items"})+")",v=e=>"Subscription ("+e.count+" "+w.Ho(e.count,0,h.en,{"1":"item",other:"items"})+")";const b=6,E="48",I=e=>{let{item:n,size:t,className:l,orderDetailsHref:a,isACCInstallItem:i,shouldAnimate:c}=e;var s;const{router:u}=(0,o.tv)(),p="".concat(n.imageAlt||"").concat(n.quantity>2&&!(null===(s=n.imageAlt)||void 0===s?void 0:s.includes("quantity"))?", quantity ".concat(n.quantity):"").concat(n.icons||i?" with addon services":""),y=t>E?t:E;return(0,r.jsx)(d.Z,{className:f()(l,{"fade-in":c}),alt:p||"product",preload:!1,src:(0,m.P)({src:n.image,height:y,width:y}),height:t,width:t,onClick:()=>{a&&u.push(a)}})},S=e=>{let{quantity:n,style:t}=e;return(0,r.jsx)(p.C,{UNSAFE_className:"absolute",UNSAFE_style:t,"aria-hidden":!0,color:"white",children:n})},L=e=>{let{style:n}=e;return(0,r.jsx)(p.C,{color:"white",UNSAFE_className:"shadow-none absolute",UNSAFE_style:n,"aria-hidden":!0,children:(0,r.jsx)(u.J,{size:"small",name:"Warning","aria-hidden":!0})})},j=e=>{let{items:n,multiLine:t=!1,className:o,showItemCount:m=!0,itemCount:p,showIconsInThumbnail:y=!1,orderDetailsHref:h,enableQueueing:w=!1,isACCInstallItem:g=!1,isFullPageCart:N,thumbnailSizeOverride:v,isUnavailable:j=!1,AtcAndBuyNowWrapper:V,defaultItemsCount:C=b,animateImages:O=!1,isFFModuleEnabledOnCart:B=!1,hideWrenchIcon:A=!1,isSubscription:k=!1}=e;const{0:M,1:P}=(0,x.useState)([]),{0:F,1:_}=(0,x.useState)(0),{isMobile:q}=(0,i.vP)(),U=x.createRef(),z=((e,n)=>n||(e?"40":E))(q,v),W=+z+16,T=n.length,H=p||T,R=H&&W,D=q?15:24,G=w&&n.some(e=>{let{showExpirationTimer:n,expiresAt:t}=e;return n&&t}),J=function(e,n){const{0:t,1:l}=(0,x.useState)(!1),r=(0,x.useRef)(n.length);return(0,x.useEffect)(()=>{l(r.current<n.length),r.current=n.length},[n]),n=>e&&t&&0===n}(O,n);(0,x.useEffect)(()=>{var e;const l=(null===(e=U.current)||void 0===e?void 0:e.clientWidth)||0;let r=Math.floor(l/W)||C,a=0;if(t&&(r*=3),r>T)r=T;else{const e=l-r*W>28;a=T-r,!a||!t&&e||(r--,a++)}P(n.slice(0,r)),_(a)},[n,U.current,W]);const Q=M.some(e=>!!e.icons),X={top:"-8px",right:"88"===v?"11px":"-8px"};return(0,r.jsxs)("div",{className:o,ref:U,children:[m&&!N&&(0,r.jsx)("div",{className:"f7 f6-m gray mb2",children:k?function(){const e=n.some(e=>{var n;return null===e||void 0===e||null===(n=e.subscription)||void 0===n?void 0:n.isSelected});return(0,r.jsxs)(r.Fragment,{children:[e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.J,{className:"color-gray-130",name:"Subscription",size:"small"}),"\xA0"]}),(t=p,(0,a.m)(l,e?"subscriptionItemCount":"oneTimePurchaseItemCount",{count:t}))]});var t}():(0,a.m)(l,"itemCount",{count:H})}),(0,r.jsxs)("ul",{className:f()("flex list ma0 pa0",t&&"flex-wrap"),style:{minHeight:"".concat(R,"px")},children:[M.map((e,n)=>{var t;return(0,r.jsxs)("li",{className:f()("relative","72"===v?"mr2":"mr3"),children:[(0,r.jsx)("div",{style:!G||e.expiresAt&&e.showExpirationTimer?{}:{paddingTop:"".concat(D,"px")}}),G&&e.expiresAt&&e.showExpirationTimer&&(0,r.jsx)(s.w,{endTime:new Date(e.expiresAt),ticketState:"valid",showClockIcon:!1,size:q?"small":"default"}),y&&(null===(t=e.icons)||void 0===t?void 0:t.length)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:f()("88"===v&&"ph3"),children:(0,r.jsxs)("div",{className:f()("ba b--black-10 br2 pa1"),children:[(0,r.jsx)(I,{item:e,size:z,orderDetailsHref:h,isACCInstallItem:g}),e.isWarning?(0,r.jsx)(L,{style:X}):e.quantity>1&&!e.shouldHideQuantityBadge&&(0,r.jsx)(S,{quantity:e.quantity,style:X}),g&&!A&&(0,r.jsx)("div",{className:"mt1 tc",children:(0,r.jsx)(u.J,{name:"Installation","data-testid":"wrench-icon"})}),(0,r.jsx)("div",{className:"flex justify-around black",children:e.icons.map((e,n)=>(0,c.K)(e)&&e.src?(0,r.jsx)(d.Z,{"data-testid":"image-icon",src:e.src,height:e.height,width:e.width,preload:e.preload,alt:e.alt,className:e.className},n):"string"===typeof e?(0,r.jsx)(u.J,{name:e,"data-testid":"icon"},n):null)})]})}),!!V&&(0,r.jsx)(V,{item:e})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:f()("88"===v?"ph3":""),children:[(0,r.jsx)(I,{item:e,size:z,orderDetailsHref:h,className:f()({"o-30":j}),isACCInstallItem:g,shouldAnimate:J(n)}),e.isWarning?(0,r.jsx)(L,{style:X}):e.quantity>1&&!e.shouldHideQuantityBadge&&(0,r.jsx)(S,{quantity:e.quantity,style:X}),g&&!A&&(0,r.jsx)("div",{className:"mt1 tc",children:(0,r.jsx)(u.J,{name:"Installation","data-testid":"wrench-icon"})})]}),!!V&&(0,r.jsx)("div",{style:{paddingTop:Q&&!g?"26px":"4px"},children:(0,r.jsx)(V,{item:e})})]})]},e.id||n)}),F>0&&(0,r.jsx)("li",{className:f()("dark-gray b ph1",B?"self-baselane mt2":"self-center mt3"),children:"+".concat(F)})]})]})}}}]);