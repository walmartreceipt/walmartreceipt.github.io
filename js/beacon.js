var _bcq=_bcq||[];!function(t){"use strict";t.options=t.options||{},t.options.bh=t.options.bh,t.utils=t.utils||{},t.batchUtils=t.batchUtils||{},t.qmUtils=t.qmUtils||{},t.commands=t.commands||{},t.handlers=t.handlers||{},t.mappingsExecuter=t.mappingsExecuter||{},t.store=t.store||{},t.utils.log=function(n){},t.utils.warn=function(n){try{console.warn?console.warn(n):console.log(n)}catch(n){}},t.utils.error=function(n){try{console.error?console.error(n):console.log(n)}catch(n){}},t.utils.urlSerialize=function(n){function o(n){return void 0===n?"":encodeURIComponent(n)}var t,i=[];for(t in n)n.hasOwnProperty(t)&&i.push(o(t)+"="+o(n[t]));return i.join("&")},t.utils.getPageViewId=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var o=16*Math.random()|0;return("x"===n?o:3&o|8).toString(16)})},t.utils.loadScript=function(n,o){var t=document.createElement("script");t.type="text/javascript",t.src=n,t.async="async","function"==typeof o&&(t.onload=o),document.head.appendChild(t)},t.utils.merge=function(){var n,o=1;if(!arguments[0])return arguments[0];for(;o<arguments.length;o++)for(n in arguments[o])arguments[o].hasOwnProperty(n)&&(arguments[0][n]=arguments[o][n]);return arguments[0]},function(){var n,o;if(Array.isArray(t.queue))for(n=0;n<t.queue.length;n++)o=t.queue[n],Array.isArray(o)&&o[0]&&"_setOptions"===o[0]&&t.utils.merge(t.options,o[1])}(),t.page_view_id=t.page_view_id||t.utils.getPageViewId();var n,o,i,e="_bcq_override_",s="rum.js";t.domain="https://"+(t.options.bd?t.options.bd:t.options.bh)+"/";try{for(n in o=window&&window.sessionStorage)"string"==typeof n&&0<=n.indexOf(e)&&(t.options[n.replace(e,"")]=sessionStorage[n]);for(n in o=0<="".indexOf(e)?"".split("&"):[])"string"==typeof o[n]&&0<=o[n].indexOf(e)&&(i=o[n].split("="),t.options[i[0].replace(e,"")]=i[1],window.sessionStorage.setItem(i[0],i[1]))}catch(n){}t.options.domain=t.options.domain||t.domain,t.options.nossl&&(t.domain=t.domain.replace("https://","http://")),t.options.apiq&&(t.apiq=[]),"debug"===t.options.mode&&(t.utils.log=function(n){try{console.log(n)}catch(n){}},s="rum.debug.js",t.utils.log("Analytics library running on debug mode.")),s+="?"+t.utils.urlSerialize({bh:t.options.bh}),t.utils.loadScript(t.domain+s)}(_bcq={queue:_bcq,pendingPtnsmappingsQueue:[],isPtnsMappingsLoaded:!1,batchIntervalFuns:{},push:function(){"use strict";var n,o=arguments.length;for(n=0;n<o;n++)this.queue.push(arguments[n])}});