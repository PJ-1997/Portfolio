(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4/wA":function(e,t,o){e.exports=o.p+"static/qfScreenshots-fd46f6edb7b063ad2cccf23230c1c24e.png"},"4THp":function(e,t,o){e.exports=o.p+"static/snScreenshots-9a5f786a669ca473e859b54c2adf781a.png"},NnIR:function(e,t,o){e.exports=o.p+"static/qfPopup-6af500583dfc09f1f315aae0f9ab042b.jpg"},RXBc:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),r=o.n(n),a=o("Bl7J"),i=o("vrFN"),s=o("Wbzz");o("V+eJ"),o("KKXr"),o("XfO3"),o("HEwt"),o("a1Th"),o("h7Nl"),o("Btvt"),o("rE2o"),o("ioFf"),o("rGqo"),o("LK8F"),o("/SS/"),o("hHhE"),o("91GP"),o("HAE/");function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,t,o,n,r){var a=r.offsetX,i=r.offsetY,s=n?8:0,c=o.split(" "),l=e.top+e.height/2,p=e.left+e.width/2,u=t.height,f=t.width,m=l-u/2,d=p-f/2,g="",h="0%",v="0%";switch(c[0]){case"top":m-=u/2+e.height/2+s,g="rotate(45deg)",h="100%",v="50%";break;case"bottom":m+=u/2+e.height/2+s,g="rotate(225deg)",v="50%";break;case"left":d-=f/2+e.width/2+s,g=" rotate(-45deg)",v="100%",h="50%";break;case"right":d+=f/2+e.width/2+s,g="rotate(135deg)",h="50%"}switch(c[1]){case"top":m=e.top,h="".concat(e.height/2,"px");break;case"bottom":m=e.top-u+e.height,h="".concat(u-e.height/2,"px");break;case"left":d=e.left,v="".concat(e.width/2,"px");break;case"right":d=e.left-f+e.width,v="".concat(f-e.width/2,"px")}return{top:m="top"===c[0]?m-i:m+i,left:d="left"===c[0]?d-a:d+a,transform:g,arrowLeft:v,arrowTop:h}}var h={popupContent:{tooltip:{position:"absolute",zIndex:"2",width:"200px",background:"rgb(255, 255, 255)",border:"1px solid rgb(187, 187, 187)",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 3px",padding:"5px"},modal:{position:"relative",background:"rgb(255, 255, 255)",width:"50%",margin:"auto",border:"1px solid rgb(187, 187, 187)",padding:"5px"}},popupArrow:{height:"10px",width:"10px",position:"absolute",background:"rgb(255, 255, 255)",transform:"rotate(45deg)",margin:"-5px",zIndex:"-1",boxShadow:"rgba(0, 0, 0, 0.2) 1px 1px 1px"},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0"},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",background:"rgba(0, 0, 0,0.5)",display:"flex",zIndex:"999"}}},v=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom","center center"],y=function(e){function t(e){var o,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=u(t).call(this,e),o=!a||"object"!=typeof a&&"function"!=typeof a?m(n):a,l(m(o),"repositionOnResize",(function(){o.setPosition()})),l(m(o),"onEscape",(function(e){"Escape"===e.key&&o.closePopup()})),l(m(o),"lockScroll",(function(){var e=o.props.lockScroll;o.state.modal&&e&&(document.getElementsByTagName("body")[0].style.overflow="hidden")})),l(m(o),"resetScroll",(function(){var e=o.props.lockScroll;o.state.modal&&e&&(document.getElementsByTagName("body")[0].style.overflow="auto")})),l(m(o),"togglePopup",(function(e){e.persist(),o.state.isOpen?o.closePopup(e):o.openPopup(e)})),l(m(o),"openPopup",(function(e){var t=o.props,n=t.disabled,r=t.onOpen;o.state.isOpen||n||(r(e),o.setState({isOpen:!0},(function(){o.setPosition(),o.lockScroll()})))})),l(m(o),"closePopup",(function(e){var t=o.props.onClose;o.state.isOpen&&(t(e),o.setState({isOpen:!1},(function(){o.resetScroll()})))})),l(m(o),"onMouseEnter",(function(){clearTimeout(o.timeOut);var e=o.props.mouseEnterDelay;o.timeOut=setTimeout((function(){return o.openPopup()}),e)})),l(m(o),"onMouseLeave",(function(){clearTimeout(o.timeOut);var e=o.props.mouseLeaveDelay;o.timeOut=setTimeout((function(){return o.closePopup()}),e)})),l(m(o),"getTooltipBoundary",(function(){var e=o.props.keepTooltipInside,t={top:0,left:0,width:window.innerWidth,height:window.innerHeight};"string"==typeof e&&(t=document.querySelector(e).getBoundingClientRect());return t})),l(m(o),"setPosition",(function(){var e=o.state,t=e.modal,n=e.isOpen;if(!t&&n){var r=o.props,a=r.arrow,i=r.position,s=r.offsetX,c=r.offsetY,l=r.keepTooltipInside,p=r.arrowStyle,u=r.className,f=o.HelperEl.getBoundingClientRect(),m=o.TriggerEl.getBoundingClientRect(),h=o.ContentEl.getBoundingClientRect(),y=o.getTooltipBoundary(),E=Array.isArray(i)?i:[i];(l||Array.isArray(i))&&(E=[].concat(d(E),v));var b=function(e,t,o,n,r,a){for(var i,s=r.offsetX,c=r.offsetY,l=0;l<o.length;){var p={top:(i=g(e,t,o[l],n,{offsetX:s,offsetY:c})).top,left:i.left,width:t.width,height:t.height};if(!(p.top<=a.top||p.left<=a.left||p.top+p.height>=a.top+a.height||p.left+p.width>=a.left+a.width))break;l++}return i}(m,h,E,a,{offsetX:s,offsetY:c},y);o.ContentEl.style.top="".concat(b.top-f.top,"px"),o.ContentEl.style.left="".concat(b.left-f.left,"px"),a&&(o.ArrowEl.style.transform=b.transform,o.ArrowEl.style["-ms-transform"]=b.transform,o.ArrowEl.style["-webkit-transform"]=b.transform,o.ArrowEl.style.top=p.top||b.arrowTop,o.ArrowEl.style.left=p.left||b.arrowLeft,o.ArrowEl.classList.add("popup-arrow"),""!==u&&o.ArrowEl.classList.add("".concat(u,"-arrow"))),"static"!==window.getComputedStyle(o.TriggerEl,null).getPropertyValue("position")&&""!==window.getComputedStyle(o.TriggerEl,null).getPropertyValue("position")||(o.TriggerEl.style.position="relative")}})),l(m(o),"addWarperAction",(function(){var e=o.props,t=e.contentStyle,n=e.className,r=e.on,a=o.state.modal,i=a?h.popupContent.modal:h.popupContent.tooltip,s={className:"popup-content ".concat(""!==n?"".concat(n,"-content"):""),style:Object.assign({},i,t),ref:o.setContentRef,onClick:function(e){e.stopPropagation()}};return!a&&r.indexOf("hover")>=0&&(s.onMouseEnter=o.onMouseEnter,s.onMouseLeave=o.onMouseLeave),s})),l(m(o),"renderTrigger",(function(){for(var e={key:"T",ref:o.setTriggerRef},t=o.props,n=t.on,a=t.trigger,i=o.state.isOpen,s=Array.isArray(n)?n:[n],c=0,l=s.length;c<l;c++)switch(s[c]){case"click":e.onClick=o.togglePopup;break;case"hover":e.onMouseEnter=o.onMouseEnter,e.onMouseLeave=o.onMouseLeave;break;case"focus":e.onFocus=o.onMouseEnter}return"function"==typeof a?!!a&&r.a.cloneElement(a(i),e):!!a&&r.a.cloneElement(a,e)})),l(m(o),"renderContent",(function(){var e=o.props,t=e.arrow,n=e.arrowStyle,a=e.children,i=o.state,s=i.modal,c=i.isOpen;return r.a.createElement("div",p({},o.addWarperAction(),{key:"C"}),t&&!s&&r.a.createElement("div",{ref:o.setArrowRef,style:Object.assign({},h.popupArrow,n)}),"function"==typeof a?a(o.closePopup,c):a)})),o.setTriggerRef=function(e){return o.TriggerEl=e},o.setContentRef=function(e){return o.ContentEl=e},o.setArrowRef=function(e){return o.ArrowEl=e},o.setHelperRef=function(e){return o.HelperEl=e},o.timeOut=0;var i=e.open,s=e.modal,c=e.defaultOpen,f=e.trigger;return o.state={isOpen:i||c,modal:!!s||!f},o}var o,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),o=t,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.closeOnEscape,o=e.defaultOpen,n=e.repositionOnResize;o&&this.setPosition(),t&&window.addEventListener("keyup",this.onEscape),n&&window.addEventListener("resize",this.repositionOnResize)}},{key:"componentDidUpdate",value:function(e){var t=this.props,o=t.open,n=t.disabled,r=this.state.isOpen;e.open!==o&&(o?this.openPopup():this.closePopup(void 0,!0)),e.disabled!==n&&n&&r&&this.closePopup()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeOut);var e=this.props,t=e.closeOnEscape,o=e.repositionOnResize;t&&window.removeEventListener("keyup",this.onEscape),o&&window.removeEventListener("resize",this.repositionOnResize),this.resetScroll()}},{key:"render",value:function(){var e=this.props,t=e.overlayStyle,o=e.closeOnDocumentClick,n=e.className,a=e.on,i=(e.trigger,this.state),s=i.modal,c=i.isOpen,l=c&&!(a.indexOf("hover")>=0),p=s?h.overlay.modal:h.overlay.tooltip;return[this.renderTrigger(),c&&r.a.createElement("div",{key:"H",style:{position:"absolute",top:"0px",left:"0px"},ref:this.setHelperRef}),l&&r.a.createElement("div",{key:"O",className:"popup-overlay ".concat(""!==n?"".concat(n,"-overlay"):""),style:Object.assign({},p,t),onClick:o?this.closePopup:void 0},s&&this.renderContent()),c&&!s&&this.renderContent()]}}])&&c(o.prototype,n),a&&c(o,a),t}(r.a.PureComponent);l(y,"defaultProps",{trigger:null,onOpen:function(){},onClose:function(){},defaultOpen:!1,open:!1,disabled:!1,closeOnDocumentClick:!0,repositionOnResize:!0,closeOnEscape:!0,on:["click"],contentStyle:{},arrowStyle:{},overlayStyle:{},className:"",position:"bottom center",modal:!1,lockScroll:!1,arrow:!0,offsetX:0,offsetY:0,mouseEnterDelay:100,mouseLeaveDelay:100,keepTooltipInside:!1});var E=y,b={width:"60%",minWidth:"350px",maxWidth:"960px"};var w=function(e){var t=e.title,o=e.popimage,n=e.triggerElement;return r.a.createElement(E,{contentStyle:b,trigger:n,modal:!0},(function(e){return r.a.createElement("div",{className:"modal"},r.a.createElement("a",{className:"close",onClick:e}," × "),r.a.createElement("div",{className:"header"},t),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:o}))))}))},k=o("NnIR"),O=o.n(k),N=o("ddNJ"),x=o.n(N),P=o("4/wA"),j=o.n(P),S=o("4THp"),C=o.n(S),T=o("T4Et"),A=o.n(T),R=o("zdOe"),L=o.n(R);t.default=function(){return r.a.createElement(a.a,null,r.a.createElement("body",{className:"body"},r.a.createElement("div",{style:{marginBottom:"2rem"}}," "),r.a.createElement("div",{className:"introduction"},r.a.createElement("div",{className:"w-container"},r.a.createElement("h1",{className:"header"},"Pedro Molina"),r.a.createElement("div",{className:"description"},"Product Designer with experience in developing applications from the ground up."),r.a.createElement("div",{className:"icons"},r.a.createElement("div",{className:"iconContainter"},r.a.createElement("a",{href:"https://www.linkedin.com/in/pedro-molina-465441165/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"imgPic",src:L.a,alt:"Linkedin"}))),r.a.createElement("div",{className:"iconContainter"},r.a.createElement("a",{href:"https://github.com/PJ-1997",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"imgPic",src:A.a,alt:"Github"})))))),r.a.createElement("div",{style:{paddingBottom:20}}," "),r.a.createElement("div",{className:"layout-spacer-top"}),r.a.createElement("div",{id:"Projects",className:"projects"},r.a.createElement("div",{className:"project w-container"},r.a.createElement("div",{className:"projectimagebg"},r.a.createElement(w,{title:"Stock Notify",popimage:x.a,triggerElement:r.a.createElement("img",{className:"projectimage w-inline-block pointer",src:C.a,alt:"Stock Notify"})})),r.a.createElement("div",{className:"projectinfo"},r.a.createElement("div",{className:"projecttitle"},"Stock Notify"),r.a.createElement("div",{className:"projectdates"},"Nov 2018 - Feb 2019"),r.a.createElement("div",{className:"projectdescription"},"Sends notifications on stock prices. The user can favorite stocks to the homescreen and the user interface is also built programmatically."),r.a.createElement(s.Link,{to:"/stocknotifycase",className:"linkcasestudy"},"View Case Study")))),r.a.createElement("div",{style:{marginBottom:"100px"}}," "),r.a.createElement("div",{id:"Projects",className:"projects"},r.a.createElement("div",{className:"project w-container"},r.a.createElement("div",{className:"projectimagebg"},r.a.createElement(w,{title:"Quick Formula",popimage:O.a,triggerElement:r.a.createElement("img",{className:"projectimage w-inline-block pointer",src:j.a,alt:"Quick Formula"})})),r.a.createElement("div",{className:"projectinfo"},r.a.createElement("div",{className:"projecttitle"},"Quick Formula"),r.a.createElement("div",{className:"projectdates"},"Oct 2017 - Jan 2018"),r.a.createElement("div",{className:"projectdescription"},"Calculates math and science formulas. The user can favoirte most used formulas to the homescreen. User interface is built programmatically."),r.a.createElement(s.Link,{to:"/stocknotifycase",className:"linkcasestudy"},"View Case Study")))),r.a.createElement(i.a,{title:"Pedro Molina"})),r.a.createElement("div",{style:{marginBottom:"2rem"}}," "))}},T4Et:function(e,t,o){e.exports=o.p+"static/githubLogo-8cbd5483a6e849d6aa55354a89f28a4f.png"},ddNJ:function(e,t,o){e.exports=o.p+"static/snPopup-9ed06728f2f66467f8317d79bc3094c2.jpg"},zdOe:function(e,t,o){e.exports=o.p+"static/linkedinLogo-362976123831f02f8383c177af77e8d7.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-e8a029e6d0a8a9d61243.js.map