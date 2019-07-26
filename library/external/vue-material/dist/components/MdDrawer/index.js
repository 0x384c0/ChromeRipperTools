/*!
 * vue-material v1.0.0-beta-10.2
 * Made with <3 by marcosmoura 2019
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=528)})({0:function(e,t){e.exports=function(e,t,n,r,i,o){var a,s,u,l,c,d=e=e||{},f=typeof e.default;return"object"!==f&&"function"!==f||(a=e,d=e.default),s="function"==typeof d?d.options:d,t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId=i),o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},s._ssrRegister=u):r&&(u=r),u&&(l=s.functional,c=l?s.render:s.beforeCreate,l?(s._injectStyles=u,s.render=function(e,t){return u.call(t),c(e,t)}):s.beforeCreate=c?[].concat(c,u):[u]),{esModule:a,exports:d,options:s}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,a,s;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=o.default.enabled,t=o.default.getThemeName,n=o.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,s.default)(t,e)},i=n(4),o=r(i),a=n(6),s=r(a)},10:function(e,t,n){(function(t){var r,i,o,a,s,u=n(14),l="undefined"==typeof window?t:window,c=["moz","webkit"],d="AnimationFrame",f=l["request"+d],m=l["cancel"+d]||l["cancelRequest"+d];for(r=0;!f&&r<c.length;r++)f=l[c[r]+"Request"+d],m=l[c[r]+"Cancel"+d]||l[c[r]+"CancelRequest"+d];f&&m||(i=0,o=0,a=[],s=1e3/60,f=function(e){if(0===a.length){var t=u(),n=Math.max(0,s-(t-i));i=n+t,setTimeout((function(){var e,t=a.slice(0);for(a.length=0,e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(i)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return a.push({handle:++o,callback:e,cancelled:!1}),o},m=function(e){for(var t=0;t<a.length;t++)a[t].handle===e&&(a[t].cancelled=!0)}),e.exports=function(e){return f.call(l,e)},e.exports.cancel=function(){m.apply(l,arguments)},e.exports.polyfill=function(e){e||(e=l),e.requestAnimationFrame=f,e.cancelAnimationFrame=m}}).call(t,n(12))},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdSwipeable:Boolean,mdSwipeThreshold:{type:Number,default:150},mdSwipeRestraint:{type:Number,default:100},mdSwipeTime:{type:Number,default:300}},data:function(){return{swipeStart:!1,swipeStartTime:null,swiped:null,touchPosition:{startX:0,startY:0}}},computed:{getSwipeElement:function(){return this.mdSwipeElement||window}},methods:{handleTouchStart:function(e){this.touchPosition.startX=e.touches[0].screenX,this.touchPosition.startY=e.touches[0].screenY,this.swipeStartTime=new Date,this.swipeStart=!0},handleTouchMove:function(e){var t,n,r,i;this.swipeStart&&(t=e.touches[0].screenX,n=e.touches[0].screenY,r=t-this.touchPosition.startX,i=n-this.touchPosition.startY,new Date-this.swipeStartTime<=this.mdSwipeTime&&(Math.abs(r)>=this.mdSwipeThreshold&&Math.abs(i)<=this.mdSwipeRestraint?this.swiped=r<0?"left":"right":Math.abs(i)>=this.mdSwipeThreshold&&Math.abs(r)<=this.mdSwipeRestraint&&(this.swiped=i<0?"up":"down")))},handleTouchEnd:function(){this.touchPosition={startX:0,startY:0},this.swiped=null,this.swipeStart=!1}},mounted:function(){this.mdSwipeable&&(this.getSwipeElement.addEventListener("touchstart",this.handleTouchStart,!1),this.getSwipeElement.addEventListener("touchend",this.handleTouchEnd,!1),this.getSwipeElement.addEventListener("touchmove",this.handleTouchMove,!1))},beforeDestroy:function(){this.mdSwipeable&&(this.getSwipeElement.removeEventListener("touchstart",this.handleTouchStart,!1),this.getSwipeElement.removeEventListener("touchend",this.handleTouchEnd,!1),this.getSwipeElement.removeEventListener("touchmove",this.handleTouchMove,!1))}}},12:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},14:function(e,t,n){(function(t){(function(){var n,r,i,o,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},o=n(),s=1e9*t.uptime(),a=o-s):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(t,n(15))},15:function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function i(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function o(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){m&&h&&(m=!1,h.length?f=h.concat(f):p=-1,f.length&&s())}function s(){var e,t;if(!m){for(e=i(a),m=!0,t=f.length;t;){for(h=f,f=[];++p<t;)h&&h[p].run();p=-1,t=f.length}h=null,m=!1,o(e)}}function u(e,t){this.fun=e,this.array=t}function l(){}var c,d,f,m,h,p,v=e.exports={};!(function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}})(),f=[],m=!1,p=-1,v.nextTick=function(e){var t,n=Array(arguments.length-1);if(arguments.length>1)for(t=1;t<arguments.length;t++)n[t-1]=arguments[t];f.push(new u(e,n)),1!==f.length||m||i(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=l,v.addListener=l,v.once=l,v.off=l,v.removeListener=l,v.removeAllListeners=l,v.emit=l,v.prependListener=l,v.prependOnceListener=l,v.listeners=function(e){return[]},v.binding=function(e){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw Error("process.chdir is not supported")},v.umask=function(){return 0}},161:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,a,s,u,l,c,d,f;Object.defineProperty(t,"__esModule",{value:!0}),i=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),a=r(o),s=n(58),u=r(s),l=n(8),c=r(l),d=n(104),f=r(d),t.default=new a.default({name:"MdDrawer",mixins:[f.default],components:{MdOverlay:u.default},props:{mdRight:Boolean,mdPermanent:i({type:String},(0,c.default)("md-permanent",["full","clipped","card"])),mdPersistent:i({type:String},(0,c.default)("md-persistent",["mini","full"])),mdActive:Boolean,mdFixed:Boolean},watch:{mdActive:function(e){e?this.$emit("md-opened"):this.$emit("md-closed")},swiped:function(e){"right"!==e&&"left"!==e||this.$emit("update:mdActive","right"===e)}},computed:{drawerClasses:function(){var e={"md-left":!this.mdRight,"md-right":this.mdRight,"md-temporary":this.isTemporary,"md-persistent":this.mdPersistent,"md-permanent":this.mdPermanent,"md-active":this.mdActive,"md-fixed":this.mdFixed};return this.mdPermanent&&(e["md-permanent-"+this.mdPermanent]=!0),this.mdPersistent&&(e["md-persistent-"+this.mdPersistent]=!0),e},isTemporary:function(){return!this.mdPermanent&&!this.mdPersistent},mode:function(){return this.mdPersistent?"persistent":this.mdPermanent?"permanent":"temporary"},submode:function(){return this.mdPersistent?this.mdPersistent:this.mdPermanent?this.mdPermanent:void 0},mdSwipeElement:function(){return this.$el.parentNode}},methods:{closeDrawer:function(){this.$emit("update:mdActive",!1)}}})},2:function(t,n){t.exports=e},27:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,a,s;Object.defineProperty(t,"__esModule",{value:!0}),i=n(2),o=r(i),a=n(10),s=r(a),t.default={name:"MdPortal",abstract:!0,props:{mdAttachToParent:Boolean,mdTarget:{type:null,validator:function(e){return!!(HTMLElement&&e&&e instanceof HTMLElement)||(o.default.util.warn("The md-target-el prop is invalid. You should pass a valid HTMLElement.",this),!1)}}},data:function(){return{leaveTimeout:null,originalParentEl:null}},computed:{transitionName:function(){var e,t,n=this._vnode.componentOptions.children[0];if(n){if(e=n.data.transition)return e.name;if(t=n.componentOptions.propsData.name)return t}return"v"},leaveClass:function(){return this.transitionName+"-leave"},leaveActiveClass:function(){return this.transitionName+"-leave-active"},leaveToClass:function(){return this.transitionName+"-leave-to"}},watch:{mdTarget:function(e,t){this.changeParentEl(e),t&&this.$forceUpdate()}},methods:{getTransitionDuration:function(e){var t=window.getComputedStyle(e).transitionDuration,n=parseFloat(t,10),r=t.match(/m?s/);return r&&(r=r[0]),"s"===r?1e3*n:"ms"===r?n:0},killGhostElement:function(e){e.parentNode&&(this.changeParentEl(this.originalParentEl),this.$options._parentElm=this.originalParentEl,e.parentNode.removeChild(e))},initDestroy:function(e){var t=this,n=this.$el;e&&this.$el.nodeType===Node.COMMENT_NODE&&(n=this.$vnode.elm),n.classList.add(this.leaveClass),n.classList.add(this.leaveActiveClass),this.$nextTick().then((function(){n.classList.add(t.leaveToClass),clearTimeout(t.leaveTimeout),t.leaveTimeout=setTimeout((function(){t.destroyElement(n)}),t.getTransitionDuration(n))}))},destroyElement:function(e){var t=this;(0,s.default)((function(){e.classList.remove(t.leaveClass),e.classList.remove(t.leaveActiveClass),e.classList.remove(t.leaveToClass),t.$emit("md-destroy"),t.killGhostElement(e)}))},changeParentEl:function(e){e&&e.appendChild(this.$el)}},mounted:function(){this.originalParentEl||(this.originalParentEl=this.$el.parentNode,this.$emit("md-initial-parent",this.$el.parentNode)),this.mdAttachToParent&&this.$el.parentNode.parentNode?this.changeParentEl(this.$el.parentNode.parentNode):document&&this.changeParentEl(this.mdTarget||document.body)},beforeDestroy:function(){this.$el.classList?this.initDestroy():this.killGhostElement(this.$el)},render:function(e){var t=this.$slots.default;if(t&&t[0])return t[0]}}},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,a,s,u;Object.defineProperty(t,"__esModule",{value:!0}),n(7),i=n(5),o=r(i),a=n(4),s=r(a),u=function(){var e=new o.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"yyyy-MM-dd",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return s.default.metaColors},set:function(e){s.default.metaColors=e}},theme:{get:function(){return s.default.theme},set:function(e){s.default.theme=e}},enabled:{get:function(){return s.default.enabled},set:function(e){s.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=u(),e.prototype.$material=e.material)}},366:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i,o,a,s;Object.defineProperty(t,"__esModule",{value:!0}),i=n(3),o=r(i),a=n(367),s=r(a),t.default=function(e){(0,o.default)(e),e.component(s.default.name,s.default)}},367:function(e,t,n){"use strict";function r(e){n(368)}var i,o,a,s,u,l,c,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),i=n(161),o=n.n(i);for(a in i)"default"!==a&&(function(e){n.d(t,e,(function(){return i[e]}))})(a);s=n(369),u=n(0),l=!1,c=r,d=null,f=null,m=u(o.a,s.a,l,c,d,f),t.default=m.exports},368:function(e,t){},369:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-drawer",class:[e.$mdActiveTheme,e.drawerClasses]},[e._t("default"),e._v(" "),e.mdFixed?n("md-overlay",{attrs:{"md-active":e.mdActive},on:{click:e.closeDrawer}}):n("md-overlay",{attrs:{"md-active":e.mdActive,"md-attach-to-parent":""},on:{click:e.closeDrawer}})],2)},i=[],o={render:r,staticRenderFns:i};t.a=o},4:function(e,t,n){"use strict";var r,i,o,a,s;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),o=null,a=null,s=null,t.default=new i.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var i=r.mdTheme,o=r.$parent;return i&&i!==t?i:e(o)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){o&&o.setAttribute("content",e)},setThemeColors:function(e){a&&a.setAttribute("content",e)},setMaskColors:function(e){s&&s.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;o=document.querySelector('[name="msapplication-TileColor"]'),a=document.querySelector('[name="theme-color"]'),s=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},5:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return i.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),i=(function(e){return e&&e.__esModule?e:{default:e}})(r)},528:function(e,t,n){e.exports=n(366)},55:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(27),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdOverlay",components:{MdPortal:i.default},props:{mdActive:Boolean,mdAttachToParent:Boolean,mdFixed:Boolean},computed:{overlayClasses:function(){return{"md-fixed":this.mdFixed}}}}},58:function(e,t,n){"use strict";function r(e){n(94)}var i,o,a,s,u,l,c,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),i=n(55),o=n.n(i);for(a in i)"default"!==a&&(function(e){n.d(t,e,(function(){return i[e]}))})(a);s=n(95),u=n(0),l=!1,c=r,d=null,f=null,m=u(o.a,s.a,l,c,d,f),t.default=m.exports},6:function(e,t,n){!(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){return!!e&&"object"==typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||n(e)}function n(e){return e.$$typeof===d}function r(e){return Array.isArray(e)?[]:{}}function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?u(r(e),e,t):e}function o(e,t,n){return e.concat(t).map((function(e){return i(e,n)}))}function a(e,t){if(!t.customMerge)return u;var n=t.customMerge(e);return"function"==typeof n?n:u}function s(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=i(e[t],n)})),Object.keys(t).forEach((function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=a(o,n)(e[o],t[o],n):r[o]=i(t[o],n)})),r}function u(e,t,n){var r,a,u;return n=n||{},n.arrayMerge=n.arrayMerge||o,n.isMergeableObject=n.isMergeableObject||l,r=Array.isArray(t),a=Array.isArray(e),u=r===a,u?r?n.arrayMerge(e,t,n):s(e,t,n):i(t,n)}var l=function(n){return e(n)&&!t(n)},c="function"==typeof Symbol&&Symbol.for,d=c?Symbol.for("react.element"):60103;return u.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return u(e,n,t)}),{})},u}))},7:function(e,t){},8:function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),i=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=function(e,t){return{validator:function(n){return!!t.includes(n)||(i.default.util.warn("The "+e+" prop is invalid. Given value: "+n+". Available options: "+t.join(", ")+".",void 0),!1)}}}},94:function(e,t){},95:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-portal",{attrs:{"md-attach-to-parent":e.mdAttachToParent}},[n("transition",{attrs:{name:"md-overlay"}},[e.mdActive?n("div",e._g({staticClass:"md-overlay",class:e.overlayClasses},e.$listeners)):e._e()])],1)},i=[],o={render:r,staticRenderFns:i};t.a=o}})}));