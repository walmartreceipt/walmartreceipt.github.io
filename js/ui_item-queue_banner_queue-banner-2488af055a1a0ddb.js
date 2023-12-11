"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92758],{122025:function(e,n,t){t.r(n),t.d(n,{closeBanner:function(){return d},closeDialog:function(){return L},defaultMessage:function(){return y},dialogTitle:function(){return r},dontRefresh:function(){return s},errorMessage:function(){return p},expired:function(){return N},hangOn:function(){return o},leave:function(){return g},leaveItem:function(){return v},leaveText:function(){return b},leaveTheLine:function(){return f},leaveTheLineText:function(){return m},leftToBuy:function(){return A},ok:function(){return w},otherItem:function(){return M},purchase:function(){return S},purchaseMultiple:function(){return k},purchaseSingle:function(){return j},purchaseTime:function(){return C},queueCtaText:function(){return c},queueDialog:function(){return E},queueItem:function(){return T},remove:function(){return I},stayInLine:function(){return x},timerStartMessage:function(){return h},validItem:function(){return O},viewItem:function(){return u},wait:function(){return V},waitOver:function(){return F},warning:function(){return i},youAreInLine:function(){return P}});var l=t(491288),a=t(985115);const r=e=>"You're in line for "+e.queueTickets+" items",i=()=>"Warning",o=()=>"Hang on, we're getting you in line.",s=()=>"Please don't refresh or leave the line.",c=e=>a.Ys(e.isValid,{true:"Buy",other:"View"}),u=e=>"View the "+e.name,d=()=>"Close banner",m=()=>"Leave the line",p=()=>"Something went wrong. Please try again.",y=()=>"If you leave now, you'll lose your chance to purchase this item.",f=()=>"Leave the line?",w=()=>"Ok",x=()=>"Stay in line",g=()=>"Leave",v=e=>"Leave the line for "+e.name+" ",h=()=>"Complete your purchase before the timer ends.",E=e=>"Once it's your turn, you'll have "+e.queueTime+" minutes to complete your purchase.",L=()=>"Close dialog",b=()=>"Leave",S=()=>"to purchase",A=()=>"left to buy",V=()=>"estimated wait",I=()=>"Remove",N=()=>"Time expired",C=()=>"Less than 2 minutes to purchase",F=()=>"Whoo hoo- the wait is over!",k=()=>"Less than 2 minutes left for 1 or more items",j=()=>"Less than 2 minutes left for 1 item",M=e=>"You're in line for "+e.count+" other "+a.Ho(e.count,0,l.en,{"1":"item",other:"items"}),T=e=>"You're in line for "+e.queueTickets+" "+a.Ho(e.queueTickets,0,l.en,{"1":"item",other:"items"}),O=e=>e.validTickets+" "+a.Ho(e.validTickets,0,l.en,{"1":"item is",other:"items are"})+" ready to buy.",P=()=>"You're in line"},166145:function(e,n,t){t.d(n,{UI:function(){return i},di:function(){return c},q0:function(){return r},sY:function(){return o},xI:function(){return s}});var l=t(859427),a=t(884350);const r=(e,n,t)=>{var r;return{context:t,action:"onClick",name:"leaveLine",payload:{nm:{nm:"leaveLine"},li:{nm:"leaveLine"},ta:n?{ov:"lineDetails"}:{mn:"reservationTimer"},pr:{us:e.customMetadata.item.itemID,qp:(0,a.H)(null===e||void 0===e||null===(r=e.customMetadata)||void 0===r?void 0:r.admissionLikelihood),wt:"pending"===e.state||"paused"===e.state?1e3*(0,l.ok)(e.expectedTurnTimeUnixTimestamp):1e3*(0,l.ok)(e.expires)}}}},i=(e,n,t)=>{var r;return{context:t,action:"onClick",name:"viewItem",payload:{nm:{nm:"viewItem"},li:{nm:"viewItem"},ta:n?{ov:"lineDetails"}:{mn:"queueIt"},pr:{us:e.customMetadata.item.itemID,qp:(0,a.H)(null===e||void 0===e||null===(r=e.customMetadata)||void 0===r?void 0:r.admissionLikelihood),wt:"pending"===e.state||"paused"===e.state?1e3*(0,l.ok)(e.expectedTurnTimeUnixTimestamp):1e3*(0,l.ok)(e.expires)}}}},o=e=>({context:e,action:"onClick",name:"dismiss",payload:{nm:{nm:"dismiss"},li:{nm:"dismiss"},ta:{ov:"lineDetails"}}}),s=e=>({context:e||"queueing",action:"onClick",name:"stayInLine",payload:{nm:{nm:"stayInLine"},li:{nm:"stayInLine"},ta:{ov:"leaveLineConfirm",pt:e||"waitingRoom"}}}),c=e=>({context:e||"queueing",action:"onClick",name:"dismiss",payload:{nm:{nm:"dismiss"},li:{nm:"dismiss"},ta:{ov:"leaveLineConfirm",pt:e||"waitingRoom"}}})},394111:function(e,n,t){t.d(n,{i:function(){return m}});var l=t(224174),a=t(158529),r=t(235077),i=t(230767),o=t(754257),s=t(931556),c=t(156055),u=t(166145),d=t(699998);const m=()=>{var e;const n=null===(e=(0,a.iC)(l.YL).shared.values)||void 0===e?void 0:e.enableQueueSizeIncrease,{pageTitle:t}=(0,c.useContext)(i.z1),{0:m,1:p}=(0,c.useState)(!1),{0:y,1:f}=(0,c.useState)(null),{0:w,1:x}=(0,c.useState)(!1),{queueError:g,removeTicketByQueueValue:v,activeTicketsByExpiryTime:h,isErrorInQueueTickets:E,displayedQueueTicket:L}=(0,o.B)(),b=(0,r.wG)(),S=Boolean(g)||E,A=(e,n)=>{"error"!==e.state&&b((0,u.q0)(e,n,t)),f(e)},V=()=>{b((0,u.di)(t)),f(null)},[I,{status:N}]=(0,s.p)({onSuccess:(e,n)=>{v(n),V()},onError:()=>{x(!0)}}),C=()=>p(!0),F={isError:w,isLeaveDialogueLoading:"loading"===N,onDismissError:()=>x(!1),queueError:g,onConfirmLeaveQueue:async e=>{await I(e.queue)},onCloseLeaveQueue:V,onStayInLine:()=>{b((0,u.xI)(t)),f(null)},onOpenLeaveQueueDialog:A,onCloseQueueDialog:()=>{b((0,u.sY)(t)),p(!1)},displayedQueueTicket:L,queueTickets:h,isQueueDialogOpen:m,ticketToLeave:y,shouldRenderError:S};return L?{...F,...(0,d.Z)(L,{onOpenLeaveQueueDialog:A},t),footerProps:(0,d.u)(n,h,{onOpenQueueDialog:C})}:F}},816173:function(e,n,t){t.d(n,{Z:function(){return O}});var l=t(390239),a=t(893109),r=t(969502),i=t(489621),o=t.n(i),s=t(156055),c=t(234811),u=t(107401),d=t(235077),m=t(230767),p=t(605276),y=t(508994),f=t(859427),w=t(884350),x=t(699998),g=t(394111);const v=(e,n)=>{const t=(0,x.Z)(e,{onOpenLeaveQueueDialog:n},""),{timerProps:l}=t,{name:a}=e.customMetadata.item;if(l){const e=l.endTime&&(0,f.ok)(l.endTime.getTime());return void 0===e?{valid:!1,alert:!1,message:"",timeRemaining:0,name:""}:"valid"===l.ticketState&&0===e?{valid:!0,alert:!0,message:"Time Expired to buy \" ".concat(a),timeRemaining:e,name:a}:e&&"valid"===l.ticketState&&e<300?{valid:!0,alert:!1,message:"".concat(h(e)," left to buy ").concat(a),timeRemaining:e,name:a}:e&&"valid"===l.ticketState&&300===e?{valid:!0,alert:!0,message:"".concat(h(e)," left to buy ").concat(a),timeRemaining:e,name:a}:{valid:!1,alert:!1,message:"",timeRemaining:0,name:a}}return{valid:!1,alert:!1,message:"",timeRemaining:0,name:""}},h=e=>{const n=Math.floor(e/60),t=e%60;return n>=1?"".concat(n,":").concat(t.toString().padStart(2,"0")," minutes"):"".concat(t," seconds")};var E=t(575115),L=t(227297),b=t(122025);const S=e=>{let{onClose:n,titleId:t,title:a}=e;return(0,l.jsxs)("div",{className:"white items-center flex flex-row-reverse justify-between ph4 pv3",children:[(0,l.jsx)("button",{"aria-label":(0,E.m)(b,"closeDialog"),className:"bg-dark-blue pa0 white bn pointer h1",onClick:n,children:(0,l.jsx)(L.J,{name:"Close",size:"medium"})}),(0,l.jsx)("h2",{id:t,className:"f3 mv0",children:a})]})};var A=t(295368),V=t(603868);const I=(0,E.m)(b,"errorMessage"),N=(0,E.m)(b,"defaultMessage"),C=e=>{let{isError:n,isLeaveDialogueLoading:t,isOpen:a,onClose:r,onStayInLine:i,onDismissError:o,onLeaveQueue:c}=e;const{pageTitle:u}=(0,s.useContext)(m.z1),f=(0,d.wG)();return(0,s.useEffect)(()=>{a&&f({context:u||"queueing",action:"overlayView",name:"leaveLineConfirm",payload:{nm:{nm:"leaveLineConfirm"},ta:{ov:"leaveLineConfirm",pt:u||"waitingRoom"}}})},[a,f,u]),(0,l.jsx)(p.Z,{children:(0,l.jsx)(y.Z,{title:(0,E.m)(b,"leaveTheLine"),isOpen:a,onClose:r,size:"small",actions:n?(0,l.jsx)("div",{className:"flex flex-column flex-row-reverse-m w-100 w-auto-m",children:(0,l.jsx)(A.Z,{className:"mt4 pv0 f6-m pv2-m mt0-m",onClick:o,variant:"primary",children:(0,E.m)(b,"ok")})}):(0,l.jsx)("div",{className:"flex flex-column flex-row-reverse-m w-100 w-auto-m",children:t?(0,l.jsx)(V.$,{color:"gray",size:"small",UNSAFE_className:"tc"}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z,{variant:"primary",isFullWidth:!0,onClick:i,className:"f6-m",children:(0,E.m)(b,"stayInLine")}),(0,l.jsx)(A.Z,{className:"mt4 pv0 f6-m pv2-m mt0-m",isFullWidth:!0,onClick:c,variant:"tertiary",children:(0,E.m)(b,"leave")})]})}),children:(0,l.jsx)("p",{className:"mv0 dark-gray tc f6 f5-m tl-m lh-copy",children:n?I:N})})})};C.DEFAULT_MESSAGE=N,C.ERROR_MESSAGE=I;var F=t(412363),k=t(803528);var j=t(293065);const M=e=>{let{className:n,children:t,float:i,isQueueDialogOpen:s}=e;const c=(0,r.M)(),{asPath:u}=(0,a.tv)().router,d=u.includes("/cart"),m=u.includes("/checkout"),p=i?T(c,u,s?"hidden":"visible",n):{className:o()("bg-dark-blue white",{"br3 br--top":!c&&(d||m),"nl3 nr3":!d&&!m},n),style:{padding:"1px",marginBottom:c?"18px":"inherit"}};return(0,l.jsx)("div",{...p,"data-testid":"queue-banner",children:t})},T=(e,n,t,l)=>{const a="fixed z-1 bg-dark-blue",r=n.includes("/ip");return e?{className:o()(a,"w-100 left-0 right-0",l),style:{bottom:r?"72px":"0",visibility:t}}:{className:o()(a,"br2 overflow-hidden shadow-3",l),style:{bottom:"24px",left:"24px",width:"400px",visibility:t}}};M.Body=e=>{let{children:n,isQueueDialog:t,onClick:r,text:i,queueTicket:s,className:c}=e;const{isMobile:d}=(0,u.vP)(),{asPath:m}=(0,a.tv)().router,p=m.includes("/cart"),y=m.includes("/checkout");return(0,l.jsxs)("div",{className:o()("flex",p||y?"bg-transparent":"bg-white br2 shadow-2",t?"mb3 pa3 br3 flex-column":"ma2 items-center",c),children:[n,r&&(!y||y&&d)&&(i?(0,l.jsx)(A.Z,{className:o()("h2",{"ml-auto":!t,"w-20 mb3 nt4 ml2":t}),onClick:r,variant:"tertiary","aria-label":(null===s||void 0===s?void 0:s.customMetadata.item.name)?(0,E.m)(b,"leaveItem",{name:null===s||void 0===s?void 0:s.customMetadata.item.name}):i,children:t?(0,E.m)(b,"leaveTheLineText"):i}):(0,l.jsx)(A.Z,{"aria-label":(0,E.m)(b,"closeBanner"),className:o()("bg-transparent bn h2 pb0 pointer pt0 self-center w3 ml-auto grey"),onClick:r,type:"button",useLDButton:!1,children:(0,l.jsx)(L.J,{className:"v-btm",name:"Close"})}))]})},M.Cta=e=>{let{onClick:n,isQueueDialog:t,queueTicket:a,className:r}=e;var i,s,c,u;const d="valid"===(null===a||void 0===a?void 0:a.state),m=d?null===a||void 0===a||null===(i=a.customMetadata)||void 0===i||null===(s=i.viewItemCtaLabel)||void 0===s?void 0:s.valid:null===a||void 0===a||null===(c=a.customMetadata)||void 0===c||null===(u=c.viewItemCtaLabel)||void 0===u?void 0:u.pending;return(0,l.jsx)(A.Z,{className:o()("".concat(t&&"flex self-end"),r),onClick:n,size:"small",variant:"".concat(t?"secondary":"tertiary"),"aria-label":(0,E.m)(b,"viewItem",{name:null===a||void 0===a?void 0:a.customMetadata.item.name}),children:m||(0,E.m)(b,"queueCtaText",{isValid:d})})},M.Image=e=>{let{className:n,isQueueDialog:t,isQueueFooterOpen:a,src:r,height:i,width:s,name:c}=e;const{isMobile:d}=(0,u.vP)(),{imageHeight:m,imageWidth:p}={imageHeight:(y={src:r,height:i,width:s}).height||40,imageWidth:y.width||40};var y;const f=(0,F.P)({src:r,height:m.toString(),width:p.toString()});return(0,l.jsx)("div",{className:o()("br2 overflow-hidden",{mr2:t},n),style:{maxWidth:p,maxHeight:m},children:(0,l.jsx)(k.Z,{alt:c,"data-testid":"queue-product-image",preload:!0,loading:"eager",src:f,srcSet:"".concat(f," 1x, ").concat(f," 2x"),height:"auto",width:"auto"})})},M.Dialog=e=>{let{children:n,isOpen:t,onClose:a,title:r,queueTickets:i}=e;const{pageTitle:o}=(0,s.useContext)(m.z1),{isMobile:x}=(0,u.vP)(),h=(0,d.wG)(),{TimerAnnouce:E}=(e=>{const{onOpenLeaveQueueDialog:n}=(0,g.i)(),t=e.map(e=>v(e,n)).filter(e=>e.valid).sort((e,n)=>e.timeRemaining-n.timeRemaining);return{TimerAnnouce:()=>{return 1===t.length?{alert:t[0].alert,message:t[0].message}:t.length>1?{alert:t[0].alert,message:"".concat(t[0].message,", ").concat((e=t.length-1,"".concat(e,1===e?" other item":" other items"))," will expire in less than 5 mins.")}:{alert:!1,message:""};var e}}})(i),{alert:L,message:b}=E();(0,s.useEffect)(()=>{if(t){const e=null===i||void 0===i?void 0:i.map(e=>{var n,t,l;return{us:null===e||void 0===e||null===(n=e.customMetadata)||void 0===n||null===(t=n.item)||void 0===t?void 0:t.itemID,qp:(0,w.H)(null===e||void 0===e||null===(l=e.customMetadata)||void 0===l?void 0:l.admissionLikelihood),wt:"pending"===e.state||"paused"===e.state?1e3*(0,f.ok)(null===e||void 0===e?void 0:e.expectedTurnTimeUnixTimestamp):1e3*(0,f.ok)(null===e||void 0===e?void 0:e.expires)}});h({context:o,action:"overlayView",name:"lineDetails",payload:{nm:{nm:"lineDetails"},pr:e}})}},[t,i,o,h]),(0,s.useEffect)(()=>{t&&setTimeout(()=>{const e=document.querySelector(".item-queue-bg div[role=\"dialog\"]");e&&e.classList.add("bg-dark-blue","scrollbar-queue-panel")},50)},[t]);const A=L?(0,l.jsx)(c.VisuallyHidden,{role:"alert","aria-live":"assertive",children:b}):(0,l.jsx)(c.VisuallyHidden,{"aria-live":"off",children:b});return(0,l.jsx)(p.Z,{children:(0,l.jsx)(y.Z,{closeButtonProps:{className:"white"},title:x?(0,l.jsxs)(l.Fragment,{children:[A,(0,l.jsx)("span",{className:"white",children:r})]}):e=>{let{titleId:n}=e;return(0,l.jsxs)(l.Fragment,{children:[A,(0,l.jsx)(S,{title:r,onClose:a,titleId:n}),(0,l.jsx)(c.Divider,{})]})},isOpen:t,onClose:a,position:"right",desktopComponent:"panel",size:"medium",className:"item-queue-bg",children:n})})},M.Error=()=>(0,l.jsxs)("div",{className:"flex ma3 mv5-m","data-testid":"queue-error-banner",children:[(0,l.jsx)(L.J,{name:"Warning",size:"small",className:"gold mr2"}),(0,l.jsx)("p",{className:"f6 ma0 white lh-copy",children:"".concat((0,E.m)(b,"hangOn")," ").concat((0,E.m)(b,"dontRefresh"))})]}),M.LeaveQueueDialog=C,M.Footer=e=>{let{message:n,onClick:t}=e;return(0,l.jsx)("div",{className:"flex white items-start f6 justify-between items-center b--white ma2","data-testid":"queue-banner-footer",children:t&&(0,l.jsxs)(A.Z,{"aria-label":n,className:"white no-underline pr0 h1 justify-between w-100 pl0",onClick:t,variant:"tertiary",UNSAFE_style:{color:"white"},children:[(0,l.jsx)("span",{children:n}),(0,l.jsx)(L.J,{name:"ChevronRight",size:"small"})]})})},M.Timer=e=>{const{asPath:n}=(0,a.tv)().router,t=n.includes("/ip"),r=n.includes("/cart"),i=n.includes("/checkout");return(0,l.jsx)("div",{className:"".concat((t||r||i)&&"ml2"),children:(0,l.jsx)(j.w,{...e})})},M.TimerMessage=e=>{let{className:n,isQueueDialog:t,message:r}=e;const{asPath:i}=(0,a.tv)().router,s=i.includes("/cart"),c=i.includes("/checkout");return(0,l.jsx)("p",{className:o()("f6 ml2",{black:!t,ma0:t,white:s||c},n),children:r})};var O=M},699998:function(e,n,t){t.d(n,{Z:function(){return o},u:function(){return s}});var l=t(575115),a=t(705398),r=t(122025),i=t(166145);const o=(e,n,t)=>{let{onOpenLeaveQueueDialog:o}=n;return"valid"===e.state?{leaveQueueProps:{text:(0,l.m)(r,"leaveText"),onClick:o},timerProps:{endTime:c(e.expires),message:(0,l.m)(r,"leftToBuy"),ticketState:e.state},ctaProps:{onClick:(n,l,a)=>()=>{l((0,i.UI)(e,a,t)),n(e.customMetadata.item.itemURL)}}}:"pending"===e.state||"paused"===e.state?{leaveQueueProps:{text:(0,l.m)(r,"leaveText"),onClick:o},timerProps:{endTime:c(e.expectedTurnTimeUnixTimestamp),message:(0,l.m)(r,"wait"),ticketState:e.state},ctaProps:{onClick:(n,l,r)=>()=>{l((0,i.UI)(e,r,t)),n((0,a.$)(e))}}}:"error"===e.state&&"TICKET_EXPIRED"===e.errorCode?{leaveQueueProps:{text:(0,l.m)(r,"remove"),onClick:o},timerProps:{message:(0,l.m)(r,"expired"),ticketState:e.state}}:{}},s=(e,n,t)=>{let{onOpenQueueDialog:a}=t;const i=n.length,o=n.filter(e=>"valid"===e.state).length,s=(0,l.m)(r,"queueItem",{queueTickets:i}),c=(0,l.m)(r,"validItem",{validTickets:o});if(!(i<2)){if(e)return{message:"".concat(s).concat(o>0?". ".concat(c):""),onClick:a};{const e=i-1;return{message:(0,l.m)(r,"otherItem",{count:e}),onClick:a}}}},c=e=>new Date(e)},931556:function(e,n,t){t.d(n,{p:function(){return c}});var l=t(235077),a=t(230767),r=t(964226),i=t(412784),o=t(156055),s=t(903196);const c=e=>{const{pageTitle:n}=(0,o.useContext)(a.z1),t=(0,r.Z)(),c=(0,l.wG)(),u=null===e||void 0===e?void 0:e.onSuccess,d=null===e||void 0===e?void 0:e.onError;return(0,i.D)(e=>(0,s.Ch)(t,"discardTicket",e),{onSuccess:(e,t,l)=>{c({context:n||"queueing",action:"onClick",name:"leaveLine",payload:{nm:{nm:"leaveLine"},li:{nm:"leaveLine"},ta:{ov:"leaveLineConfirm",pt:n||"waitingRoom"}}}),null===u||void 0===u||u(e,t,l)},onError:function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];c({context:n||"queueing",action:"onClick",name:"leaveLine",payload:{nm:{nm:"error"},li:{nm:"leaveLine"},ta:{ov:"leaveLineConfirm",pt:n||"waitingRoom"}}}),null===d||void 0===d||d(...t)}})}},754257:function(e,n,t){t.d(n,{B:function(){return r}});var l=t(156055),a=t(913070);const r=()=>{const{error:e,itemQueueData:n,setItemQueueData:t,...r}=(()=>{const e=(0,l.useContext)(a.e);if(!e)throw new Error("useQueueContext must be used within ItemQueueContextProvider");return e})(),i=(0,l.useCallback)(e=>{Array.isArray(e)?null===t||void 0===t||t(e):null===t||void 0===t||t([...n,e])},[n,t]),o=(0,l.useCallback)(e=>{const t=n.filter(n=>n.queue!==e);i(t)},[n,i]);return{...r,queueData:n,queueError:e,removeTicketByQueueValue:o,setQueueData:t,updateQueueData:i}}},884350:function(e,n,t){t.d(n,{H:function(){return l}});const l=e=>"guaranteed"===e?"1":"likely"===e?"2":"3"}}]);