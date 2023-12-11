"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47579],{8020:function(e,n,a){a.r(n),a.d(n,{addAddress:function(){return l},addNewAddressText:function(){return t},addressNotVerified:function(){return f},deliveryFromStoreText:function(){return y},deliveryNotAvailable:function(){return g},editCustomerAddress:function(){return i},editPrimaryName:function(){return o},editText:function(){return v},inHomeDeliveryText:function(){return m},isDeliverableText:function(){return s},isInHomeAvailableText:function(){return c},isShippableOnlyText:function(){return d},nextWeekDelivery:function(){return u},noCoordinates:function(){return w},shippingText:function(){return p},toCalculateTax:function(){return r},walmartPlus:function(){return x}});const l=()=>"Please add your home address",t=()=>"Add new address",r=()=>"Used to calculate taxes.",i=e=>"Edit "+e.primaryName+" "+e.customerAddress,o=e=>"Edit "+e.primaryName,s=()=>"shipping available, delivery from store available",d=()=>"shipping available",c=()=>", inhome delivery available",u=e=>"Next weekly delivery is "+e.wrst,m=()=>"InHome delivery",p=()=>"Shipping",y=()=>"Delivery from store",f=()=>"This address hasn&apos;t been verified.",g=()=>"Delivery not available yet",v=()=>"Edit",w=()=>"Please edit and save the address to confirm serviceability.",x=()=>"Walmart Plus"},910102:function(e,n,a){a.d(n,{Z:function(){return L}});var l=a(390239),t=a(577427),r=a(560241),i=a(158529),o=a(575115),s=(a(156055),a(130096)),d=a(295368),c=a(8020);var u=e=>{let{editButtonLabel:n,onEdit:a}=e;return(0,l.jsx)(d.Z,{variant:"tertiary",className:"pa0 self-start","aria-label":n,onClick:a,style:{marginTop:"-8px"},onLinkExtras:{ta:{pt:"selectAddress"},nm:{nm:"editAddress"}},onLinkName:"editAddress",children:(0,o.m)(c,"editText")})};var m=e=>{let{children:n,address:a,primaryLabel:t,secondaryLabel:r,isDeliverable:i,isShippableOnly:d,isInHomeAvailable:m,isChecked:p,isEditable:y=!0,onSelectAddress:f,editButtonLabel:g,onEdit:v,isDisabled:w}=e,x="".concat(t," ").concat(r);return i?x+="".concat((0,o.m)(c,"isDeliverableText")):d&&(x+="".concat((0,o.m)(c,"isShippableOnlyText"))),m&&(x+="".concat((0,o.m)(c,"isInHomeAvailableText"))),(0,l.jsxs)("li",{className:"flex items-center pv3 bb b--near-white",style:{minHeight:"72px"},children:[(0,l.jsx)(s.Z,{checked:p,className:"w-100 flex",disabled:w,id:a.id,label:n,name:"",onLinkName:"pickAddress",onLinkExtras:{nm:{nm:"pickAddress"}},onChange:()=>f(a),"aria-label":x}),y&&(0,l.jsx)(u,{editButtonLabel:g,onEdit:v})]})},p=a(915541),y=a(913416),f=a(224174),g=a(227297),v=a(803528),w=a(489621),x=a.n(w);const E=e=>{let{hasCoordinates:n}=e;const a=(0,t.N)().isFCShippingEnabled,{hideShippingLabel:r=!1}=(0,y.J)(),i=!n,s=a&&!r?(0,l.jsx)("div",{className:"f7 ml1",children:(0,o.m)(c,"addressNotVerified")}):(0,l.jsx)("div",{className:"red f7",children:(0,o.m)(c,"deliveryNotAvailable")});return i?(0,l.jsx)("div",{className:"red f7",children:(0,o.m)(c,"noCoordinates")}):s};var b=e=>{let{primaryLabel:n,secondaryLabel:a,isDeliverable:r,isShippableOnly:s,isInHomeAvailable:d,weeklyReservationStartTime:u,hasCoordinates:m,isDisabled:p}=e;var w;const b=(0,t.N)().isFCShippingEnabled,{hideShippingLabel:L=!1}=(0,y.J)(),A=(0,i.iC)(f.YL),{enableWeeklyReservationCartBookslot:S}=null===(w=A.shared)||void 0===w?void 0:w.values;return(0,l.jsxs)("div",{className:"flex flex-column w-100",style:{marginTop:"-2px",fontWeight:"lighter"},children:[(0,l.jsxs)("div",{className:x()("lh-copy w-80 ml1",{"o-30":p}),children:[(0,l.jsx)("div",{className:"b f5 dark-gray",children:n}),(0,l.jsx)("div",{className:"f6 mid-gray",children:a})]}),b&&r&&(0,l.jsxs)("div",{className:"flex",children:[!L&&(0,l.jsxs)("div",{className:"f7 mr2 pt1",children:[(0,l.jsx)("span",{className:"mr1","aria-hidden":!0,children:(0,l.jsx)(g.J,{name:"Check",className:"green",size:"small"})}),(0,o.m)(c,"shippingText")]}),(0,l.jsxs)("div",{className:"f7 ml2 pt1",children:[(0,l.jsx)("span",{className:"mr1","aria-hidden":!0,children:(0,l.jsx)(g.J,{name:"Check",className:"green",size:"small"})}),(0,o.m)(c,"deliveryFromStoreText")]})]}),(0,l.jsxs)("div",{className:"flex",children:[b&&s&&(0,l.jsxs)("div",{className:"f7 pt1 mr4",children:[(0,l.jsx)("span",{className:"mr1","aria-hidden":!0,children:(0,l.jsx)(g.J,{name:"Check",className:"green",size:"small"})}),(0,o.m)(c,"shippingText")]}),d&&(0,l.jsxs)("div",{className:"f7 pt1",children:[(0,l.jsx)("span",{className:"mr1","aria-hidden":!0,children:(0,l.jsx)(g.J,{name:"Check",className:"green",size:"small"})}),(0,o.m)(c,"inHomeDeliveryText")]})]}),p&&(0,l.jsx)(E,{hasCoordinates:m}),S&&u&&(0,l.jsxs)("div",{className:"lh-copy flex items-center pt2",children:[(0,l.jsx)(v.Z,{className:"mr2",src:"//i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg",alt:(0,o.m)(c,"walmartPlus"),preload:!1,height:20,width:17}),(0,l.jsx)("span",{className:"blue b f7",children:(0,o.m)(c,"nextWeekDelivery",{wrst:u})})]})]})};var L=e=>{let{addresses:n,onSelectAddress:a,selectedAddressId:s,onEdit:d}=e;var u;const y=(0,i.iC)(r.Tg),f=(null===(u=y.cart.values)||void 0===u?void 0:u.enableInHomeDelivery)||!1,g=(0,t.N)(),v=g.isFCShippingEnabled,w=f&&v,x=g.disableAddressOnEmptyLatLong,E=null===n||void 0===n?void 0:n.map(e=>({registry:null,addressTitle:null,latitude:null,longitude:null,extendedPostalCode:null,...e}));return(0,l.jsx)("ul",{className:"pa0 ma0",children:E&&E.map((e,n)=>{var t,r,i;const u=null===(t=y.cart.values)||void 0===t?void 0:t.enableRegistry,g=u&&e.registry?e.addressTitle:"".concat(e.firstName," ").concat(e.lastName),E=(0,p.AO)(e),L=u?(0,o.m)(c,"editPrimaryName",{primaryName:g}):(0,o.m)(c,"editCustomerAddress",{primaryName:g,customerAddress:E}),A=(0,p.YI)(e,v,w),S=(0,p.lJ)(e,v,w),h=(0,p.VS)(e,w),{weeklyReservationDetails:I}=e,N=!!e.longitude&&!!e.latitude,V=!A&&!S||x&&!N;return(0,l.jsx)(m,{address:e,primaryLabel:g,secondaryLabel:E,editButtonLabel:L,isDeliverable:A,isShippableOnly:S,isInHomeAvailable:h,onSelectAddress:e=>a(e),isChecked:e.id===s,isEditable:f?e.allowEditOrRemove:!(null===(r=e.registry)||void 0===r?void 0:r.id),onEdit:()=>{d(e)},isDisabled:V,children:(0,l.jsx)(b,{primaryLabel:g,secondaryLabel:E,isDeliverable:A,isShippableOnly:S,isInHomeAvailable:h,weeklyReservationStartTime:null===I||void 0===I||null===(i=I.slot)||void 0===i?void 0:i.displayValueStartTime,hasCoordinates:!!e.longitude&&!!e.latitude,isDisabled:V})},n)})})}},915541:function(e,n,a){a.d(n,{AO:function(){return l},BH:function(){return s},QB:function(){return o},VS:function(){return i},YI:function(){return t},lJ:function(){return r},oX:function(){return d}});const l=e=>{let n="";const{addressLineOne:a="",addressLineTwo:l="",city:t,state:r,postalCode:i,registry:o}=e;return o&&o.id?"".concat(t,", ").concat(r):(a&&(n="".concat(n).concat(a,",")),l&&(n="".concat(n," ").concat(l,",")),"".concat(n," ").concat(t,", ").concat(r," ").concat(i))},t=(e,n,a)=>a?e.capabilities.includes("DELIVERY")&&e.capabilities.includes("SHIPPING"):!(n||!e.accessPoint)||n&&"DELIVERABLE_SHIPPABLE"===e.serviceStatus,r=(e,n,a)=>a?e.capabilities.includes("SHIPPING")&&!e.capabilities.includes("DELIVERY"):!(n||!e.accessPoint)||n&&"SHIPPABLE_ONLY"===e.serviceStatus,i=(e,n)=>n&&e.capabilities.includes("INHOME"),o=(e,n,a)=>{const l=[];return e.forEach(e=>{e.id===n||e.id===a?l.unshift(e):l.push(e)}),l},s=e=>{const n=[];return e.forEach(e=>{var a;n.push({id:e.id,de:"DELIVERABLE_SHIPPABLE"===e.serviceStatus?1:0,se:"SHIPPABLE_ONLY"===e.serviceStatus?1:0,he:(null===(a=e.capabilities)||void 0===a?void 0:a.includes("INHOME"))?1:0})}),n},d=e=>{let n=null;return e.forEach(e=>{e.isDefault&&(n=e.id)}),n}}}]);