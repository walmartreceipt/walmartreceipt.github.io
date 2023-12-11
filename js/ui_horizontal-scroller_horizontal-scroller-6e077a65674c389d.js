"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27059],{91418:function(e,t,s){s.d(t,{c:function(){return a}});var n=s(390239),r=s(595365),i=s(235077),o=s(752578),l=s(156055);const a=e=>{let{children:t,containerRef:s,currentSlide:a,moduleContext:c="",moduleLinkExtras:d={},moduleName:u="",moduleViewExtras:h={},nextButton:v,pageTitle:p,previousButton:m,slideMap:f,style:S,slideSequence:b,element:g="ul",firstSlideModuleViewsExtras:x,...C}=e;const{moduleProps:y,zone:E}=(0,l.useContext)(o.p),w=(0,l.useRef)({}),T=(0,l.useRef)({}),P=(0,l.useRef)({}),L=(0,l.useRef)(!1),R=(0,l.useRef)({}),k=(0,l.useRef)(),{0:I,1:N}=(0,l.useState)(!1),M=(0,i.wG)();return[h,d]=(0,r.U0)({pageTitle:p,moduleLinkExtras:d,moduleViewExtras:h}),(0,l.useEffect)((()=>{if(s.current&&"IntersectionObserver"in window){const e=new IntersectionObserver((e=>{e.forEach((e=>{N(e.isIntersecting)}))}),{threshold:.05});return e.observe(s.current),()=>e.disconnect()}}),[]),(0,l.useEffect)((()=>{s.current&&void 0!==k.current&&(s.current.scrollLeft=k.current,k.current=void 0),R.current=S}),[s,S]),(0,l.useEffect)((()=>{let e=0;w.current.length||f.forEach(((t,s)=>{w.current["slide-".concat(s)]={firstIndex:String(e),hasFired:!1},e+=t.length})),w.current.totalSlides=e}),[f]),(0,l.useEffect)((()=>{var e;const t=w.current["slide-".concat(a)],s=Object.keys(T.current).length&&{co:(null===(e=T.current[0])||void 0===e?void 0:e.co)||{zn:-1,nm:"error"}},n=b&&b.length?{im:{an:b[a]}}:{},i={pl:{tn:w.current.totalSlides,sn:a+1},...s,...n};if(I&&t&&!t.hasFired){const e=Object.values(T.current).slice(parseInt(w.current["slide-".concat(a)].firstIndex,10),parseInt(w.current.hasOwnProperty("slide-".concat(a+1))?w.current["slide-".concat(a+1)].firstIndex:"",10)||void 0),t={},s=(0,r.TF)(u);e.forEach((e=>{Object.keys(e).forEach((s=>{if(Array.isArray(e[s])){const n=t.hasOwnProperty(s)?t[s]:[];t[s]=[...n,...e[s]]}}))}));let n={...t,...i,...h};x&&0===a&&(n={...n,...x}),M({context:c,name:s,action:L.current?"overlayView":"moduleView",payload:n}),w.current["slide-".concat(a)].hasFired=!0}}),[a,w,I]),s.current&&R.current&&S&&"x mandatory"===S.scrollSnapType&&R.current.scrollSnapType!==S.scrollSnapType&&(k.current=s.current.scrollLeft),(0,n.jsxs)(r.fC.Provider,{value:{doAddToPayload:e=>{var t,s;const n=(null===(s=null===(t=e.moduleElement.current)||void 0===t?void 0:t.closest("[data-slide]"))||void 0===s?void 0:s.getAttribute("data-slide"))||"0";T.current[n]=T.current[n]||{};const{type:i,name:o,moduleId:l}=y||{};return E&&(T.current[n].co={zn:E,...y&&{ty:i,id:l,nm:o}}),(0,r.nt)({...e,moduleContext:c,moduleLinkExtras:d,moduleViewStore:T.current[n],onLinkStore:P.current,sendBeacon:M})},setIsOverlay:()=>L.current=!0},children:[m,(0,n.jsx)(g,{ref:s,style:S,...C,children:t}),v]})}},198357:function(e,t,s){s.d(t,{Z:function(){return R}});var n=s(390239),r=s(575115),i=s(227297),o=s(29695),l=s(489621),a=s.n(l),c=s(345996),d=s(156055),u=s(391630),h=s(234811),v=s(107401);const p=e=>e?{borderColor:"transparent transparent transparent black",borderWidth:"5px 0px 5px 8px",padding:"0",borderStyle:"solid"}:{height:"9px",borderStyle:"double",borderColor:"transparent transparent transparent black",borderWidth:"0 0 0 7px"},m=e=>{let{carouselRef:t,count:s,activeIndex:i,handleSlideClick:o,isPaused:l,shouldAutoRotate:c,handleRotationClick:m,onScrollEnd:f,onScrollStart:S,povScrollbar:b,scrollbarContainerClassName:g,carouselControllerAriaHidden:x}=e;const{0:C,1:y}=(0,d.useState)(0),{0:E,1:w}=(0,d.useState)(0),{0:T,1:P}=(0,d.useState)(0),{0:L,1:R}=(0,d.useState)(void 0),k=(0,d.useRef)(null);(0,d.useEffect)((()=>{const e=()=>{k.current&&P(k.current.clientWidth),t.current&&w(t.current.clientWidth/t.current.scrollWidth)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),(0,d.useEffect)((()=>{const e=()=>{t.current&&y(t.current.scrollLeft/t.current.scrollWidth)};return t.current&&(t.current.removeEventListener("scroll",e),t.current.addEventListener("scroll",e,{passive:!0})),()=>{t.current&&t.current.removeEventListener("scroll",e)}}),[t.current,k.current]),(0,d.useEffect)((()=>{const e=e=>{if(t.current&&void 0!==L){const s=t.current.scrollWidth*L.scrubberLeftPercent;t.current.scrollLeft=s-(L.clientX-e.clientX)*(t.current.scrollWidth/T)}},s=()=>{R(void 0),f()};return window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",s),void 0!==L&&(window.addEventListener("pointermove",e),window.addEventListener("pointerup",s)),()=>{window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",s)}}),[t.current,L]);const{isMobile:I}=(0,v.vP)(),N=E*T;let M=C*T;if(N<40){M-=(40-N)*(M/(T-N)||0)}M-=2;const A=Math.max(N,40)+4,j={className:"absolute b--none bg-transparent h-100 top-0"};return(0,n.jsxs)("div",{role:"navigation","aria-hidden":x,"aria-label":(0,r.m)(u,"controlsLabel"),"data-testid":"carousel-controller",className:a()("flex items-center",b?"absolute bg-white-80 bottom-1 br-pill":"dn-l"),style:b?{marginLeft:"50%",transform:"translateX(-50%)",width:I?184:343}:void 0,children:[b&&c&&(0,n.jsx)("button",{className:"bg-transparent flex bn items-center mh2 pa0",onClick:m,style:{height:24,width:24},"aria-label":(0,r.m)(u,"buttonLabel",{isPaused:l}),children:(0,n.jsx)("span",{className:"center",style:p(l)})}),(0,n.jsxs)("div",{className:a()("flex-auto flex flex-column justify-center pr3 relative",b&&!c&&"pa3",g),"data-testid":"scrollbar-container",style:{height:b?24:44},children:[(0,n.jsxs)("div",{className:"flex flex-column justify-center w-100 relative",ref:k,children:[(0,n.jsx)("div",{className:"absolute bg-near-white br-pill w-100",style:{height:2}}),(0,n.jsxs)("div",{className:"absolute b--none bg-transparent h-100 pa0 top-0 z-1",onPointerDown:e=>{S(),R({clientX:e.clientX,scrubberLeftPercent:C})},"data-testid":"carousel-scrubber",style:{left:M,touchAction:"none",width:A,top:-4},children:[(0,n.jsx)("span",{className:a()("db b--solid bg-gray br-pill bw1",L?"b--gray":"b--transparent"),style:{backgroundClip:"padding-box",height:4,boxSizing:"content-box"}}),(0,n.jsx)(h.VisuallyHidden,{children:(0,r.m)(u,"carouselCount",{count:i+1,totalCount:s})})]})]}),(0,n.jsx)("button",{...j,className:a()(j.className,"left-0 z-9"),"data-testid":"carousel-controller-next",onClick:()=>o(Math.max(i-1,0)),style:{width:Math.max(40,M+16)},"aria-label":(0,r.m)(u,"prevSlideScroll")}),(0,n.jsx)("button",{...j,className:a()(j.className,"right-0 z-9"),"data-testid":"carousel-controller-prev",onClick:()=>o(Math.min(i+1,s-1)),style:{width:Math.max(40,T-M-A+16)},"aria-label":(0,r.m)(u,"nextSlideScroll")})]})]})};var f=s(158529),S=s(224174),b=s(91418),g=s(595365),x=s(235077),C=s(752578);const y=e=>{let{children:t,containerRef:s,currentSlide:r,moduleContext:i="",moduleLinkExtras:o,moduleName:l="",moduleViewExtras:a,nextButton:c,pageTitle:u,previousButton:h,slideMap:v,style:p,slideSequence:m,element:f="ul",firstSlideModuleViewsExtras:S,...b}=e;const{moduleProps:y,zone:E}=(0,d.useContext)(C.p),w=(0,d.useRef)({}),T=(0,d.useRef)({}),P=(0,d.useRef)({}),L=(0,d.useRef)(!1),R=(0,d.useRef)({}),k=(0,d.useRef)(),{0:I,1:N}=(0,d.useState)(!1),M=(0,x.wG)(),{0:A,1:j}=(0,d.useMemo)((()=>(0,g.U0)({pageTitle:u,moduleLinkExtras:o||{},moduleViewExtras:a||{}})),[o,a,u]);(0,d.useEffect)((()=>{if(s.current&&"IntersectionObserver"in window){const e=new IntersectionObserver((e=>{e.forEach((e=>{N(e.isIntersecting)}))}),{threshold:.05});return e.observe(s.current),()=>e.disconnect()}}),[]),(0,d.useEffect)((()=>{s.current&&void 0!==k.current&&(s.current.scrollLeft=k.current,k.current=void 0),R.current=p}),[s,p]),(0,d.useEffect)((()=>{let e=0;w.current.length||v.forEach(((t,s)=>{w.current["slide-".concat(s)]={firstIndex:String(e),hasFired:!1},e+=t.length})),w.current.totalSlides=e}),[v]),(0,d.useEffect)((()=>{var e;const t=w.current["slide-".concat(r)],s=Object.keys(T.current).length&&{co:(null===(e=T.current[0])||void 0===e?void 0:e.co)||{zn:-1,nm:"error"}},n=m&&m.length?{im:{an:m[r]}}:{},o={pl:{tn:w.current.totalSlides,sn:r+1},...s,...n};if(I&&t&&!t.hasFired){const e=Object.values(T.current).slice(parseInt(t.firstIndex,10),parseInt(w.current.hasOwnProperty("slide-".concat(r+1))?w.current["slide-".concat(r+1)].firstIndex:"",10)||void 0),s={},n=(0,g.TF)(l);e.forEach((e=>{Object.keys(e).forEach((t=>{if(Array.isArray(e[t])){const n=s.hasOwnProperty(t)?s[t]:[];s[t]=[...n,...e[t]]}}))}));let a={...s,...o,...A};S&&0===r&&(a={...a,...S}),M({context:i,name:n,action:L.current?"overlayView":"moduleView",payload:a}),w.current["slide-".concat(r)].hasFired=!0}}),[r,w,I]);const F=(0,d.useCallback)((e=>{var t,s;const n=(null===(s=null===(t=e.moduleElement.current)||void 0===t?void 0:t.closest("[data-slide]"))||void 0===s?void 0:s.getAttribute("data-slide"))||"0";T.current[n]=T.current[n]||{};const{type:r,name:o,moduleId:l}=y||{};return E&&(T.current[n].co={zn:E,...y&&{ty:r,id:l,nm:o}}),(0,g.nt)({...e,moduleContext:i,moduleLinkExtras:j,moduleViewStore:T.current[n],onLinkStore:P.current,sendBeacon:M})}),[i,j,y,M,E]),H=(0,d.useCallback)((()=>L.current=!0),[]),z=(0,d.useMemo)((()=>({doAddToPayload:F,setIsOverlay:H})),[F,H]);return s.current&&R.current&&p&&"x mandatory"===p.scrollSnapType&&R.current.scrollSnapType!==p.scrollSnapType&&(k.current=s.current.scrollLeft),(0,n.jsxs)(g.fC.Provider,{value:z,children:[h,(0,n.jsx)(f,{"data-testid":"memo-horizontal-scroller",ref:s,style:p,...b,children:t}),c]})},E=e=>{var t;const s=(0,f.iC)(S.YL),r=(null===s||void 0===s||null===(t=s.shared)||void 0===t?void 0:t.values)||{},i=(null===r||void 0===r?void 0:r.enableInpMemoCarousel)?y:b.c;return(0,n.jsx)(i,{...e})},w=e=>{const t=e.getElementsByTagName("a");return t.length?t:e.getElementsByTagName("button")},T=e=>{const{showSmallNavButtons:t,chevronPadding:s,chevronSize:r,name:o}=e;return(0,n.jsx)(i.J,{name:o,className:a()({pa2:t}),style:t?void 0:{padding:s},size:r})},P=(0,d.memo)((e=>{let{children:t,classNameTile:s,inputRefs:r,disableTransition:i,transitioning:o}=e;return(0,n.jsx)(n.Fragment,{children:d.Children.map(t,((e,t)=>(0,n.jsx)("li",{className:a()("flex flex-column items-center",{transitioning:o&&!i},s),"data-slide":t,ref:e=>{r[t]=e},children:e},"carousel-tile-".concat(t))))})}));class L extends d.Component{componentDidMount(){var e,t,s,n;this.mountTime=Date.now(),null===(e=this.carouselContainer.current)||void 0===e||e.addEventListener("scroll",(()=>{this.setState({transitioning:!0}),this.scrollCallback()}),{passive:!0}),null===(t=this.carouselContainer.current)||void 0===t||t.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),null===(s=this.carouselContainer.current)||void 0===s||s.addEventListener("touchend",this.handleTouchEnd,!1),null===(n=this.carouselContainer.current)||void 0===n||n.addEventListener("touchcancel",this.handleTouchCancel,!1),!this.props.shouldAutoRotate||(this.props.delayHeroPovPlay||this.props.delayFirstHeroPovTime)&&void 0!==this.props.adsReady||this.handlePlay(),this.props.forceDelayTime?setTimeout((()=>{this.calculatePageCount()}),this.props.forceDelayTime):this.calculatePageCount(),window.addEventListener("resize",this.calculatePageCount)}componentDidUpdate(e,t){const{currentSlide:s,maxHeight:n,isAutoRotateReady:r,isPaused:i,isFocusPaused:o}=this.state,{children:l,shouldEnableDynamicHeight:a,scrollToIndex:c,shouldAutoRotate:d}=this.props;if((this.props.delayFirstHeroPovTime||this.props.delayHeroPovPlay)&&e.adsReady!==this.props.adsReady&&this.props.adsReady){const e=Date.now()-this.mountTime,t=this.props.delayFirstHeroPovTime?8e3:this.rotationTimeLapse,s=Math.max(t-e,0);this.skipAnimation=e>t,this.rotateTimeout=setTimeout((()=>{this.setState({isAutoRotateReady:!0}),this.rotateTimeout&&clearTimeout(this.rotateTimeout)}),s)}if(!d||this.rotationInterval||!r||i||o||this.handlePlay(!0,this.skipAnimation),s!==t.currentSlide){const{onSlideChange:e}=this.props;e&&e(s,!!this.withScrubber.current),this.stopTransition()}if((this.shouldRecalculatePageCount(l,e.children)||e.customCarouselWidth!==this.props.customCarouselWidth)&&this.calculatePageCount(),this.shouldUpdateHeight(s,n,a),void 0!==c&&e.scrollToIndex!==c){const e=Math.floor(c/this.state.slideMap[0].length);this.setTargetSlide(Math.min(e,this.state.slideMap.length-1))}}componentWillUnmount(){var e;window.removeEventListener("resize",this.calculatePageCount),null===(e=this.carouselContainer.current)||void 0===e||e.removeEventListener("scroll",this.scrollCallback),this.scrollCallback.clear(),this.rotationInterval&&clearInterval(this.rotationInterval),this.rotateTimeout&&clearTimeout(this.rotateTimeout)}shouldUpdateHeight(e,t,s){if(s){const s=this.getSlideHeight(e);s!==t&&0!==s&&this.updateHeight(s)}}updateHeight(e){this.setState({maxHeight:e})}calculatePageCount(){const{clientWidth:e=0}=this.carouselContainer.current||{},t=[[]];let s=0,n=e+1;const r=this.props.snapAlignTile||"start";let i=0;this.inputRefs.forEach(((o,l)=>{if(o){const{width:a,x:c}=o.getBoundingClientRect();0===l&&(i=c);const d=c-i;let u="";0===l&&(u=r),d+a>n?(t.push([o]),s++,n=d+e,u=r):t[s].push(o),o.style.setProperty("scroll-snap-align",u)}})),this.setState({slideCount:t.length,slideMap:t})}handleTouchStart(){this.setState({transitioning:!0,touched:!0})}handleTouchEnd(){this.setState({touched:!1})}handleTouchCancel(){this.setState({touched:!1})}stopTransition(){this.setState((e=>{let{touched:t}=e;return{transitioning:t}}))}getSlideHeight(e){let t=this.inputRefs[e],s=0;for(;1===t.children.length;){t=t.children[0];const e=t.getBoundingClientRect().height||0;e>s&&(s=e)}return s?s+20:0}shouldRecalculatePageCount(e,t){var s,n;return d.Children.count(e)!==d.Children.count(t)||(null===(s=d.Children.map(t,(e=>null===e||void 0===e?void 0:e.key)))||void 0===s?void 0:s.join())!==(null===(n=d.Children.map(e,(e=>null===e||void 0===e?void 0:e.key)))||void 0===n?void 0:n.join())}getIndex(e,t){if(this.carouselContainer.current){const{scrollLeft:n,scrollWidth:r}=this.carouselContainer.current;let i=e-1,o=0;for(let l=0;l<e;l++){var s;const a=null===(s=t[l][0])||void 0===s?void 0:s.offsetLeft;if(Math.floor(n)<=a){const{shouldEnablePartialScrollSnap:t=!0}=this.props,s=a-o;i=t&&l>0&&l!==e-1&&s>0&&n-s/2<=o&&n+s+2<r?l-1:l;break}o=a}return i}return 0}calculateIndex(){this.hasAutoAdvanced?this.hasAutoAdvanced=!1:this.handlePause(),this.setState((e=>{let{slideCount:t,slideMap:s}=e;return{currentSlide:this.getIndex(t,s)}}))}handlePause(){this.rotationInterval&&clearInterval(this.rotationInterval),this.setState({isPaused:!0})}handlePlay(){const e=e=>{this.state.isPaused||this.state.isFocusPaused||this.nextSlide(!0,e)};arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&e(arguments.length>1&&void 0!==arguments[1]&&arguments[1]),this.rotationInterval=setInterval(e,this.rotationTimeLapse),this.setState({isPaused:!1})}handleFocusIn(){this.setState({isFocusPaused:!0})}handleFocusOut(){this.setState({isFocusPaused:!1})}handleScrollEnd(){this.withScrubber.current=!1;const e=this.getIndex(this.state.slideCount,this.state.slideMap);this.setTargetSlide(e,(()=>this.setState({scrolling:!1})))}handleScrollStart(){this.withScrubber.current=!0,this.setState({scrolling:!0})}setTargetSlide(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this.carouselContainer.current){var r;const i=null===(r=this.state.slideMap[e][0])||void 0===r?void 0:r.offsetLeft;if(t){const n=parseInt(i.toFixed(),10),r=()=>{var i;const o=(this.state.slideMap[0].length-this.state.slideMap[e].length)*(this.state.slideMap[e][0].offsetWidth+16)+48,l=Boolean(void 0!==(null===(i=this.carouselContainer.current)||void 0===i?void 0:i.scrollLeft)&&(s?this.carouselContainer.current.scrollLeft<=n:this.carouselContainer.current.scrollLeft>=n-o));this.carouselContainer.current&&l&&(this.carouselContainer.current.removeEventListener("scroll",r),t())};this.carouselContainer.current.addEventListener("scroll",r),r()}this.carouselContainer.current.scrollTo&&this.setState({transitioning:!0},(()=>{var e;return null===(e=this.carouselContainer.current)||void 0===e?void 0:e.scrollTo({left:i,behavior:n?"auto":"smooth"})}))}}nextSlide(e,t){if(this.carouselContainer.current){let s=this.state.currentSlide+1;this.state.slideMap[s]||(s=0),this.hasAutoAdvanced=e,this.setTargetSlide(s,void 0,void 0,t)}}render(){const{chevronPadding:e=12,children:t,className:s,classNameTile:i="",shouldSnap:l=!0,shouldAutoRotate:c=!1,shouldSuppressPagination:d,shouldEnableDynamicWidth:h,moduleContext:v,moduleName:p,moduleViewExtras:f,moduleLinkExtras:S,navButtonStyle:b,nextLinkExtras:g,previousLinkExtras:x,isScrollArrowHidden:C=!1,onSlideChange:y,disableTransition:L=!0,povScrollbar:R=!1,scrollbarContainerClassName:k,showSmallNavButtons:I=!1,chevronSize:N="medium",shouldEnableDynamicHeight:M=!1,shouldEnablePartialScrollSnap:A=!0,carouselControllerAriaHidden:j=!1,anchorNavButtonTopOffset:F,slideSequence:H,scrollToIndex:z,delayHeroPovPlay:O,delayFirstHeroPovTime:B,adsReady:V,unOrderedListStyle:W,snapAlignTile:D,customCarouselWidth:U,firstSlideModuleViewsExtras:X,previousLinkAriaLabel:q=(0,r.m)(u,"prevSlideButton",{moduleName:p}),nextLinkAriaLabel:_=(0,r.m)(u,"nextSlideButton",{moduleName:p}),forceDelayTime:Z,...G}=this.props,J=!!c||R,{inputRefs:Y}=this;return(0,n.jsxs)("div",{className:"flex flex-column justify-center relative","data-testid":"horizontal-scroller-".concat(p),children:[(0,n.jsx)(E,{onTransitionEnd:()=>{this.shouldUpdateHeight(this.state.currentSlide,this.state.maxHeight,M)},moduleViewExtras:f,moduleLinkExtras:S,moduleContext:v,moduleName:p,firstSlideModuleViewsExtras:X,previousButton:!C&&!J&&(0,n.jsx)(o.ZP,{"aria-label":q,className:a()("absolute dn z-5 bg-white br-100 pa0 pointer",{"db-l":0!==this.state.currentSlide,"hidden-child":!d,"br-100 nav-control left-1":!I,"left-0":I,db:0!==this.state.currentSlide&&d}),"data-testid":"horizontal-scroller-previous",onLinkExtras:x,onLinkName:"horizontalScrollerPrevious",role:"button",style:{top:F||void 0,...b},onClick:()=>this.setTargetSlide(this.state.currentSlide-1,(()=>{var e,t;const s=this.state.currentSlide-1,n=this.state.slideMap[this.state.currentSlide].length===this.state.slideMap[s].length?this.state.slideMap[s].length-1:this.state.slideMap[this.state.currentSlide].length-1,r=this.state.slideMap[s][n];null===(e=w(r))||void 0===e||null===(t=e[0])||void 0===t||t.focus()}),!0),children:(0,n.jsx)(T,{name:"ChevronLeft",showSmallNavButtons:I,chevronPadding:e,chevronSize:N})}),nextButton:!C&&!J&&(0,n.jsx)(o.ZP,{"aria-label":_,className:a()("absolute dn z-5 bg-white br-100 pa0 pointer",{"db-l":this.state.currentSlide+1!==this.state.slideCount,"br-100 nav-control right-1":!I,"right-0":I,db:this.state.currentSlide+1!==this.state.slideCount&&d}),"data-testid":"horizontal-scroller-next",onLinkExtras:g,onLinkName:"horizontalScrollerNext",role:"button",style:{top:F||void 0,...b},onClick:()=>this.setTargetSlide(this.state.currentSlide+1,(()=>{const e=this.state.currentSlide+1;if(this.state.slideMap[e].length>0){const t=this.state.slideMap[e][0];setTimeout((()=>{var e,s;null===(e=w(t))||void 0===e||null===(s=e[0])||void 0===s||s.focus()}),100)}})),children:(0,n.jsx)(T,{name:"ChevronRight",showSmallNavButtons:I,chevronPadding:e,chevronSize:N})}),currentSlide:this.state.currentSlide,slideMap:this.state.slideMap,className:a()("list ma0 pl0 overflow-x-scroll hidesb hidesb-wk relative overflow-y-hidden ".concat(s),{"carousel-height-transition":M}),"data-testid":"carousel-container",containerRef:this.carouselContainer,style:{display:h?"flex":"grid",gridAutoFlow:"column",scrollSnapType:l&&!this.state.scrolling?"x mandatory":"",maxHeight:M?this.state.maxHeight:"fit-content",...W},onFocus:this.handleFocusIn,onBlur:this.handleFocusOut,onMouseOver:this.handleFocusIn,onMouseOut:this.handleFocusOut,slideSequence:H,...G,children:(0,n.jsx)(P,{classNameTile:i,inputRefs:Y,shouldAutoRotate:c,disableTransition:L,transitioning:this.state.transitioning,children:t})}),(J||c)&&(0,n.jsx)("div",{className:a()({dn:d}),children:this.state.slideCount>1&&(0,n.jsx)(m,{carouselRef:this.carouselContainer,count:this.state.slideCount,activeIndex:this.state.currentSlide,handleSlideClick:e=>{this.setTargetSlide(e)},handleRotationClick:this.state.isPaused?this.handlePlay:this.handlePause,isPaused:this.state.isPaused,onScrollEnd:this.handleScrollEnd,onScrollStart:this.handleScrollStart,povScrollbar:J,scrollbarContainerClassName:k,shouldAutoRotate:c,carouselControllerAriaHidden:j})})]})}constructor(e){if(super(e),!1===e.povScrollbar&&e.shouldAutoRotate)throw new Error("Error: `HorizontalScrollbar` can only have `shouldAutoRotate=true` when `povScrollbar` is not false.");this.state={currentSlide:0,isFocusPaused:!1,isPaused:!1,scrolling:!1,slideCount:0,slideMap:[],maxHeight:"fix-content",transitioning:!1,touched:!1,isAutoRotateReady:!1},this.carouselContainer=d.createRef(),this.withScrubber=d.createRef(),this.withScrubber.current=!1,this.inputRefs=[],this.hasAutoAdvanced=!1,this.rotationInterval=0,this.rotateTimeout=null,this.scrollCallback=(0,c.debounce)((()=>{this.calculateIndex()}),100),this.mountTime=0,this.rotationTimeLapse=4e3,this.skipAnimation=!1,this.calculatePageCount=this.calculatePageCount.bind(this),this.handlePause=this.handlePause.bind(this),this.handlePlay=this.handlePlay.bind(this),this.handleFocusIn=this.handleFocusIn.bind(this),this.handleFocusOut=this.handleFocusOut.bind(this),this.handleScrollEnd=this.handleScrollEnd.bind(this),this.handleScrollStart=this.handleScrollStart.bind(this),this.setTargetSlide=this.setTargetSlide.bind(this),this.nextSlide=this.nextSlide.bind(this),this.getSlideHeight=this.getSlideHeight.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this),this.handleTouchCancel=this.handleTouchCancel.bind(this),this.stopTransition=this.stopTransition.bind(this)}}var R=L}}]);