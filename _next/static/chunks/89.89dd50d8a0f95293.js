"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{5182:(e,t,n)=>{function r(e){return`data-rr-ui-${e}`}function a(e){return`rrUi${e}`}n.d(t,{sE:()=>r,y:()=>a})},1406:(e,t,n)=>{n.d(t,{A:()=>o,u:()=>a});let r=n(6540).createContext(null),a=(e,t=null)=>null!=e?String(e):t||null,o=r},6389:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6540);let a=function(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e},[e]),t}},2883:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540),a=n(6389);function o(e){let t=(0,a.A)(e);return(0,r.useCallback)(function(...e){return t.current&&t.current(...e)},[t])}},7494:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540);let a=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,o="undefined"!=typeof document||a?r.useLayoutEffect:r.useEffect},1216:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540);let a=e=>e&&"function"!=typeof e?t=>{e.current=t}:e,o=function(e,t){return(0,r.useMemo)(()=>(function(e,t){let n=a(e),r=a(t);return e=>{n&&n(e),r&&r(e)}})(e,t),[e,t])}},8348:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6540);function a(){let e=(0,r.useRef)(!0),t=(0,r.useRef)(()=>e.current);return(0,r.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}},1539:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6540);function a(e){let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{t.current=e}),t.current}},5003:(e,t,n)=>{n.d(t,{A:()=>a});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},311:e=>{e.exports=function(e,t,n,r,a,o,i,l){if(!e){var s;if(void 0===t)s=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,l],c=0;(s=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},733:(e,t,n)=>{n.d(t,{A:()=>D});var r=n(6942),a=n.n(r),o=n(6540),i=n(9752),l=n(5003),s=n(1216);let u=o.createContext(null);u.displayName="NavContext";var c=n(1406);let d=o.createContext(null);var f=n(5182),p=n(2883),m=n(4848);let v=["as","disabled"];function h({tagName:e,disabled:t,href:n,target:r,rel:a,role:o,onClick:i,tabIndex:l=0,type:s}){e||(e=null!=n||null!=r||null!=a?"a":"button");let u={tagName:e};if("button"===e)return[{type:s||"button",disabled:t},u];let c=r=>{var a;if(!t&&("a"!==e||(a=n)&&"#"!==a.trim())||r.preventDefault(),t){r.stopPropagation();return}null==i||i(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:l,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},u]}let g=o.forwardRef((e,t)=>{let{as:n,disabled:r}=e,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,v),[o,{tagName:i}]=h(Object.assign({tagName:n,disabled:r},a));return(0,m.jsx)(i,Object.assign({},a,o,{ref:t}))});g.displayName="Button";let x=["as","active","eventKey"];function E({key:e,onClick:t,active:n,id:r,role:a,disabled:i}){let l=(0,o.useContext)(c.A),s=(0,o.useContext)(u),m=(0,o.useContext)(d),v=n,h={role:a};if(s){a||"tablist"!==s.role||(h.role="tab");let t=s.getControllerId(null!=e?e:null),o=s.getControlledId(null!=e?e:null);h[(0,f.sE)("event-key")]=e,h.id=t||r,((v=null==n&&null!=e?s.activeKey===e:n)||!(null!=m&&m.unmountOnExit)&&!(null!=m&&m.mountOnEnter))&&(h["aria-controls"]=o)}return"tab"===h.role&&(h["aria-selected"]=v,v||(h.tabIndex=-1),i&&(h.tabIndex=-1,h["aria-disabled"]=!0)),h.onClick=(0,p.A)(n=>{i||(null==t||t(n),null!=e&&l&&!n.isPropagationStopped()&&l(e,n))}),[h,{isActive:v}]}let b=o.forwardRef((e,t)=>{let{as:n=g,active:r,eventKey:a}=e,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,x),[i,l]=E(Object.assign({key:(0,c.u)(a,o.href),active:r},o));return i[(0,f.sE)("active")]=l.isActive,(0,m.jsx)(n,Object.assign({},o,i,{ref:t}))});b.displayName="NavItem";let y=["as","onSelect","activeKey","role","onKeyDown"],C=()=>{},w=(0,f.sE)("event-key"),N=o.forwardRef((e,t)=>{let n,r,{as:a="div",onSelect:i,activeKey:p,role:v,onKeyDown:h}=e,g=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,y),x=function(){let[,e]=(0,o.useReducer)(e=>e+1,0);return e}(),E=(0,o.useRef)(!1),b=(0,o.useContext)(c.A),N=(0,o.useContext)(d);N&&(v=v||"tablist",p=N.activeKey,n=N.getControlledId,r=N.getControllerId);let O=(0,o.useRef)(null),R=e=>{let t=O.current;if(!t)return null;let n=(0,l.A)(t,`[${w}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;let a=n.indexOf(r);if(-1===a)return null;let o=a+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},k=(e,t)=>{null!=e&&(null==i||i(e,t),null==b||b(e,t))};(0,o.useEffect)(()=>{if(O.current&&E.current){let e=O.current.querySelector(`[${w}][aria-selected=true]`);null==e||e.focus()}E.current=!1});let j=(0,s.A)(t,O);return(0,m.jsx)(c.A.Provider,{value:k,children:(0,m.jsx)(u.Provider,{value:{role:v,activeKey:(0,c.u)(p),getControlledId:n||C,getControllerId:r||C},children:(0,m.jsx)(a,Object.assign({},g,{onKeyDown:e=>{let t;if(null==h||h(e),N){switch(e.key){case"ArrowLeft":case"ArrowUp":t=R(-1);break;case"ArrowRight":case"ArrowDown":t=R(1);break;default:return}t&&(e.preventDefault(),k(t.dataset[(0,f.y)("EventKey")]||null,e),E.current=!0,x())}},ref:j,role:v}))})})});N.displayName="Nav";let O=Object.assign(N,{Item:b});var R=n(4623),k=n(5874);let j=o.createContext(null);j.displayName="CardHeaderContext";let A=o.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:o="div",...i}=e;return r=(0,R.oU)(r,"nav-item"),(0,m.jsx)(o,{ref:t,className:a()(n,r),...i})});A.displayName="NavItem",n(6389),n(8348),n(1539),n(7494),new WeakMap;let T=["onKeyDown"],S=o.forwardRef((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,T),[a]=h(Object.assign({tagName:"a"},r)),o=(0,p.A)(e=>{a.onKeyDown(e),null==n||n(e)});return function(e){return!e||"#"===e.trim()}(r.href)||"button"===r.role?(0,m.jsx)("a",Object.assign({ref:t},r,a,{onKeyDown:o})):(0,m.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n}))});S.displayName="Anchor";let L=o.forwardRef((e,t)=>{let{bsPrefix:n,className:r,as:o=S,active:i,eventKey:l,disabled:s=!1,...u}=e;n=(0,R.oU)(n,"nav-link");let[d,f]=E({key:(0,c.u)(l,u.href),active:i,disabled:s,...u});return(0,m.jsx)(o,{...u,...d,ref:t,disabled:s,className:a()(r,n,s&&"disabled",f.isActive&&"active")})});L.displayName="NavLink";let $=o.forwardRef((e,t)=>{let n,r;let{as:l="div",bsPrefix:s,variant:u,fill:c=!1,justify:d=!1,navbar:f,navbarScroll:p,className:v,activeKey:h,...g}=(0,i.Zw)(e,{activeKey:"onSelect"}),x=(0,R.oU)(s,"nav"),E=!1,b=(0,o.useContext)(k.A),y=(0,o.useContext)(j);return b?(n=b.bsPrefix,E=null==f||f):y&&({cardHeaderBsPrefix:r}=y),(0,m.jsx)(O,{as:l,ref:t,activeKey:h,className:a()(v,{[x]:!E,[`${n}-nav`]:E,[`${n}-nav-scroll`]:E&&p,[`${r}-${u}`]:!!r,[`${x}-${u}`]:!!u,[`${x}-fill`]:c,[`${x}-justified`]:d}),...g})});$.displayName="Nav";let D=Object.assign($,{Item:A,Link:L})},949:(e,t,n)=>{let r,a;n.d(t,{A:()=>eJ});var o=n(6942),i=n.n(o),l=n(6540),s=n(1406),u=n(9752),c=n(4623),d=n(4848);let f=l.forwardRef((e,t)=>{let{bsPrefix:n,className:r,as:a,...o}=e;n=(0,c.oU)(n,"navbar-brand");let l=a||(o.href?"a":"span");return(0,d.jsx)(l,{...o,ref:t,className:i()(r,n)})});function p(e){return e&&e.ownerDocument||document}f.displayName="NavbarBrand";var m=/([A-Z])/g,v=/^ms-/;function h(e){return e.replace(m,"-$1").toLowerCase().replace(v,"-ms-")}var g=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;let x=function(e,t){var n,r="",a="";if("string"==typeof t)return e.style.getPropertyValue(h(t))||((n=p(e))&&n.defaultView||window).getComputedStyle(e,void 0).getPropertyValue(h(t));Object.keys(t).forEach(function(n){var o=t[n];o||0===o?n&&g.test(n)?a+=n+"("+o+") ":r+=h(n)+": "+o+";":e.style.removeProperty(h(n))}),a&&(r+="transform: "+a+";"),e.style.cssText+=";"+r};var E=n(8587);function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var y=n(961);let C={disabled:!1},w=l.createContext(null);var N="unmounted",O="exited",R="entering",k="entered",j="exiting",A=function(e){function t(t,n){r=e.call(this,t,n)||this;var r,a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=O,r.appearStatus=R):a=k:a=t.unmountOnExit||t.mountOnEnter?N:O,r.state={status:a},r.nextCallback=null,r}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,b(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===N?{status:O}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==R&&n!==k&&(t=R):(n===R||n===k)&&(t=j)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===R){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:y.findDOMNode(this);n&&n.scrollTop}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===O&&this.setState({status:N})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[y.findDOMNode(this),r],o=a[0],i=a[1],l=this.getTimeouts(),s=r?l.appear:l.enter;if(!e&&!n||C.disabled){this.safeSetState({status:k},function(){t.props.onEntered(o)});return}this.props.onEnter(o,i),this.safeSetState({status:R},function(){t.props.onEntering(o,i),t.onTransitionEnd(s,function(){t.safeSetState({status:k},function(){t.props.onEntered(o,i)})})})},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:y.findDOMNode(this);if(!t||C.disabled){this.safeSetState({status:O},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:j},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:O},function(){e.props.onExited(r)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:y.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===N)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,E.A)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.createElement(w.Provider,{value:null},"function"==typeof n?n(e,r):l.cloneElement(l.Children.only(n),r))},t}(l.Component);function T(){}function S(e){if(!e||"function"==typeof e)return null;let{major:t}=function(){let e=l.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}();return t>=19?e.props.ref:e.ref}A.contextType=w,A.propTypes={},A.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:T,onEntering:T,onEntered:T,onExit:T,onExiting:T,onExited:T},A.UNMOUNTED=N,A.EXITED=O,A.ENTERING=R,A.ENTERED=k,A.EXITING=j;let L=!!("undefined"!=typeof window&&window.document&&window.document.createElement);var $=!1,D=!1;try{var M={get passive(){return $=!0},get once(){return D=$=!0}};L&&(window.addEventListener("test",M,M),window.removeEventListener("test",M,!0))}catch(e){}let P=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!D){var a=r.once,o=r.capture,i=n;!D&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,$?r:o)}e.addEventListener(t,n,r)},I=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)},B=function(e,t,n,r){return P(e,t,n,r),function(){I(e,t,n,r)}};function _(e,t){let n=x(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function U(e,t){var n,r,a,o,i,l,s,u,c,d,f,p;let m=_(e,"transitionDuration"),v=_(e,"transitionDelay"),h=(n=e,r=n=>{n.target===e&&(h(),t(n))},null==(a=m+v)&&(l=-1===(i=x(n,"transitionDuration")||"").indexOf("ms")?1e3:1,a=parseFloat(i)*l||0),f=(u=!1,c=setTimeout(function(){u||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(n,"transitionend",!0)},a+5),d=B(n,"transitionend",function(){u=!0},{once:!0}),function(){clearTimeout(c),d()}),p=B(n,"transitionend",r),function(){f(),p()})}let F=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(e=>null!=e).reduce((e,t)=>{if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}},null)};function K(e){e.offsetHeight}let W=e=>e&&"function"!=typeof e?t=>{e.current=t}:e,H=l.forwardRef((e,t)=>{let{onEnter:n,onEntering:r,onEntered:a,onExit:o,onExiting:i,onExited:s,addEndListener:u,children:c,childRef:f,...p}=e,m=(0,l.useRef)(null),v=function(e,t){return(0,l.useMemo)(()=>(function(e,t){let n=W(e),r=W(t);return e=>{n&&n(e),r&&r(e)}})(e,t),[e,t])}(m,f),h=e=>{v(function(e){return e&&"setState"in e?y.findDOMNode(e):null!=e?e:null}(e))},g=e=>t=>{e&&m.current&&e(m.current,t)},x=(0,l.useCallback)(g(n),[n]),E=(0,l.useCallback)(g(r),[r]),b=(0,l.useCallback)(g(a),[a]),C=(0,l.useCallback)(g(o),[o]),w=(0,l.useCallback)(g(i),[i]),N=(0,l.useCallback)(g(s),[s]),O=(0,l.useCallback)(g(u),[u]);return(0,d.jsx)(A,{ref:t,...p,onEnter:x,onEntered:b,onEntering:E,onExit:C,onExited:N,onExiting:w,addEndListener:O,nodeRef:m,children:"function"==typeof c?(e,t)=>c(e,{...t,ref:h}):l.cloneElement(c,{ref:h})})}),V={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function G(e,t){let n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=V[e];return n+parseInt(x(t,r[0]),10)+parseInt(x(t,r[1]),10)}let X={[O]:"collapse",[j]:"collapsing",[R]:"collapsing",[k]:"collapse show"},Y=l.forwardRef((e,t)=>{let{onEnter:n,onEntering:r,onEntered:a,onExit:o,onExiting:s,className:u,children:c,dimension:f="height",in:p=!1,timeout:m=300,mountOnEnter:v=!1,unmountOnExit:h=!1,appear:g=!1,getDimensionValue:x=G,...E}=e,b="function"==typeof f?f():f,y=(0,l.useMemo)(()=>F(e=>{e.style[b]="0"},n),[b,n]),C=(0,l.useMemo)(()=>F(e=>{let t=`scroll${b[0].toUpperCase()}${b.slice(1)}`;e.style[b]=`${e[t]}px`},r),[b,r]),w=(0,l.useMemo)(()=>F(e=>{e.style[b]=null},a),[b,a]),N=(0,l.useMemo)(()=>F(e=>{e.style[b]=`${x(b,e)}px`,K(e)},o),[o,x,b]),O=(0,l.useMemo)(()=>F(e=>{e.style[b]=null},s),[b,s]);return(0,d.jsx)(H,{ref:t,addEndListener:U,...E,"aria-expanded":E.role?p:null,onEnter:y,onEntering:C,onEntered:w,onExit:N,onExiting:O,childRef:S(c),in:p,timeout:m,mountOnEnter:v,unmountOnExit:h,appear:g,children:(e,t)=>l.cloneElement(c,{...t,className:i()(u,c.props.className,X[e],"width"===b&&"collapse-horizontal")})})});var Z=n(5874);let q=l.forwardRef((e,t)=>{let{children:n,bsPrefix:r,...a}=e;r=(0,c.oU)(r,"navbar-collapse");let o=(0,l.useContext)(Z.A);return(0,d.jsx)(Y,{in:!!(o&&o.expanded),...a,children:(0,d.jsx)("div",{ref:t,className:r,children:n})})});q.displayName="NavbarCollapse";let z=function(e){let t=(0,l.useRef)(e);return(0,l.useEffect)(()=>{t.current=e},[e]),t};function J(e){let t=z(e);return(0,l.useCallback)(function(...e){return t.current&&t.current(...e)},[t])}let Q=l.forwardRef((e,t)=>{let{bsPrefix:n,className:r,children:a,label:o="Toggle navigation",as:s="button",onClick:u,...f}=e;n=(0,c.oU)(n,"navbar-toggler");let{onToggle:p,expanded:m}=(0,l.useContext)(Z.A)||{},v=J(e=>{u&&u(e),p&&p()});return"button"===s&&(f.type="button"),(0,d.jsx)(s,{...f,ref:t,onClick:v,"aria-label":o,className:i()(r,n,!m&&"collapsed"),children:a||(0,d.jsx)("span",{className:`${n}-icon`})})});Q.displayName="NavbarToggle";let ee=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,et="undefined"!=typeof document||ee?l.useLayoutEffect:l.useEffect,en=new WeakMap,er=(e,t)=>{if(!e||!t)return;let n=en.get(t)||new Map;en.set(t,n);let r=n.get(e);return r||((r=t.matchMedia(e)).refCount=0,n.set(r.media,r)),r},ea=function(e){let t=Object.keys(e);function n(e,t){return e===t?t:e?`${e} and ${t}`:t}return function(r,a,o){let i;return"object"==typeof r?(i=r,o=a,a=!0):i={[r]:a=a||!0},function(e,t="undefined"==typeof window?void 0:window){let n=er(e,t),[r,a]=(0,l.useState)(()=>!!n&&n.matches);return et(()=>{let n=er(e,t);if(!n)return a(!1);let r=en.get(t),o=()=>{a(n.matches)};return n.refCount++,n.addListener(o),o(),()=>{n.removeListener(o),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}},[e]),r}((0,l.useMemo)(()=>Object.entries(i).reduce((r,[a,o])=>{if("up"===o||!0===o){let t;r=n(r,("number"==typeof(t=e[a])&&(t=`${t}px`),`(min-width: ${t})`))}if("down"===o||!0===o){let o;r=n(r,(o="number"==typeof(o=e[t[Math.min(t.indexOf(a)+1,t.length-1)]])?`${o-.2}px`:`calc(${o} - 0.2px)`,`(max-width: ${o})`))}return r},""),[JSON.stringify(i)]),o)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function eo(e){void 0===e&&(e=p());try{var t=e.activeElement;if(!t||!t.nodeName)return null;return t}catch(t){return e.body}}function ei(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var el=n(8348),es=n(1539),eu=n(2883);let ec=(0,n(5182).sE)("modal-open");class ed{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){return Math.abs(e.defaultView.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){let t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(x(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(ec,""),x(r,t)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){let t=this.getElement();t.removeAttribute(ec),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return -1!==t||(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state))),t}remove(e){let t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}let ef=ed,ep=(0,l.createContext)(L?window:void 0);function em(){return(0,l.useContext)(ep)}ep.Provider;let ev=(e,t)=>L?null==e?(t||p()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect))?e:null:null;var eh=n(1216),eg=n(7494);let ex=function({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:a}){let o=(0,l.useRef)(null),i=(0,l.useRef)(t),s=(0,eu.A)(n);(0,l.useEffect)(()=>{t?i.current=!0:s(o.current)},[t,s]);let u=(0,eh.A)(o,e.ref),c=(0,l.cloneElement)(e,{ref:u});return t?c:a||!i.current&&r?null:c},eE=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"],eb=["component"],ey=l.forwardRef((e,t)=>{let{component:n}=e,r=function(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:a,onExiting:o,onExited:i,addEndListener:s,children:u}=e,c=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,eE),d=(0,l.useRef)(null),f=(0,eh.A)(d,S(u)),p=e=>t=>{e&&d.current&&e(d.current,t)},m=(0,l.useCallback)(p(t),[t]),v=(0,l.useCallback)(p(n),[n]),h=(0,l.useCallback)(p(r),[r]),g=(0,l.useCallback)(p(a),[a]),x=(0,l.useCallback)(p(o),[o]),E=(0,l.useCallback)(p(i),[i]),b=(0,l.useCallback)(p(s),[s]);return Object.assign({},c,{nodeRef:d},t&&{onEnter:m},n&&{onEntering:v},r&&{onEntered:h},a&&{onExit:g},o&&{onExiting:x},i&&{onExited:E},s&&{addEndListener:b},{children:"function"==typeof u?(e,t)=>u(e,Object.assign({},t,{ref:f})):(0,l.cloneElement)(u,{ref:f})})}(function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,eb));return(0,d.jsx)(n,Object.assign({ref:t},r))});function eC({children:e,in:t,onExited:n,onEntered:r,transition:a}){let[o,i]=(0,l.useState)(!t);t&&o&&i(!1);let s=function({in:e,onTransition:t}){let n=(0,l.useRef)(null),r=(0,l.useRef)(!0),a=(0,eu.A)(t);return(0,eg.A)(()=>{if(!n.current)return;let t=!1;return a({in:e,element:n.current,initial:r.current,isStale:()=>t}),()=>{t=!0}},[e,a]),(0,eg.A)(()=>(r.current=!1,()=>{r.current=!0}),[]),n}({in:!!t,onTransition:e=>{Promise.resolve(a(e)).then(()=>{e.isStale()||(e.in?null==r||r(e.element,e.initial):(i(!0),null==n||n(e.element)))},t=>{throw e.in||i(!0),t})}}),u=(0,eh.A)(s,e.ref);return o&&!t?null:(0,l.cloneElement)(e,{ref:u})}function ew(e,t,n){return e?(0,d.jsx)(ey,Object.assign({},n,{component:e})):t?(0,d.jsx)(eC,Object.assign({},n,{transition:t})):(0,d.jsx)(ex,Object.assign({},n))}let eN=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"],eO=(0,l.forwardRef)((e,t)=>{let{show:n=!1,role:a="dialog",className:o,style:i,children:s,backdrop:u=!0,keyboard:c=!0,onBackdropClick:f,onEscapeKeyDown:p,transition:m,runTransition:v,backdropTransition:h,runBackdropTransition:g,autoFocus:x=!0,enforceFocus:E=!0,restoreFocus:b=!0,restoreFocusOptions:C,renderDialog:w,renderBackdrop:N=e=>(0,d.jsx)("div",Object.assign({},e)),manager:O,container:R,onShow:k,onHide:j=()=>{},onExit:A,onExited:T,onExiting:S,onEnter:$,onEntering:D,onEntered:M}=e,P=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,eN),I=em(),_=function(e,t){let n=em(),[r,a]=(0,l.useState)(()=>ev(e,null==n?void 0:n.document));if(!r){let t=ev(e);t&&a(t)}return(0,l.useEffect)(()=>{},[void 0,r]),(0,l.useEffect)(()=>{let t=ev(e);t!==r&&a(t)},[e,r]),r}(R),U=function(e){let t=em(),n=e||(r||(r=new ef({ownerDocument:null==t?void 0:t.document})),r),a=(0,l.useRef)({dialog:null,backdrop:null});return Object.assign(a.current,{add:()=>n.add(a.current),remove:()=>n.remove(a.current),isTopModal:()=>n.isTopModal(a.current),setDialogRef:(0,l.useCallback)(e=>{a.current.dialog=e},[]),setBackdropRef:(0,l.useCallback)(e=>{a.current.backdrop=e},[])})}(O),F=(0,el.A)(),K=(0,es.A)(n),[W,H]=(0,l.useState)(!n),V=(0,l.useRef)(null);(0,l.useImperativeHandle)(t,()=>U,[U]),L&&!K&&n&&(V.current=eo(null==I?void 0:I.document)),n&&W&&H(!1);let G=(0,eu.A)(()=>{if(U.add(),J.current=B(document,"keydown",q),z.current=B(document,"focus",()=>setTimeout(Y),!0),k&&k(),x){var e,t;let n=eo(null!=(e=null==(t=U.dialog)?void 0:t.ownerDocument)?e:null==I?void 0:I.document);U.dialog&&n&&!ei(U.dialog,n)&&(V.current=n,U.dialog.focus())}}),X=(0,eu.A)(()=>{if(U.remove(),null==J.current||J.current(),null==z.current||z.current(),b){var e;null==(e=V.current)||null==e.focus||e.focus(C),V.current=null}});(0,l.useEffect)(()=>{n&&_&&G()},[n,_,G]),(0,l.useEffect)(()=>{W&&X()},[W,X]),function(e){let t=function(e){let t=(0,l.useRef)(e);return t.current=e,t}(e);(0,l.useEffect)(()=>()=>t.current(),[])}(()=>{X()});let Y=(0,eu.A)(()=>{if(!E||!F()||!U.isTopModal())return;let e=eo(null==I?void 0:I.document);U.dialog&&e&&!ei(U.dialog,e)&&U.dialog.focus()}),Z=(0,eu.A)(e=>{e.target===e.currentTarget&&(null==f||f(e),!0===u&&j())}),q=(0,eu.A)(e=>{c&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&U.isTopModal()&&(null==p||p(e),e.defaultPrevented||j())}),z=(0,l.useRef)(),J=(0,l.useRef)();if(!_)return null;let Q=Object.assign({role:a,ref:U.setDialogRef,"aria-modal":"dialog"===a||void 0},P,{style:i,className:o,tabIndex:-1}),ee=w?w(Q):(0,d.jsx)("div",Object.assign({},Q,{children:l.cloneElement(s,{role:"document"})}));ee=ew(m,v,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:A,onExiting:S,onExited:(...e)=>{H(!0),null==T||T(...e)},onEnter:$,onEntering:D,onEntered:M,children:ee});let et=null;return u&&(et=ew(h,g,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:et=N({ref:U.setBackdropRef,onClick:Z})})),(0,d.jsx)(d.Fragment,{children:y.createPortal((0,d.jsxs)(d.Fragment,{children:[et,ee]}),_)})});eO.displayName="Modal";let eR=Object.assign(eO,{Manager:ef}),ek={[R]:"show",[k]:"show"},ej=l.forwardRef((e,t)=>{let{className:n,children:r,transitionClasses:a={},onEnter:o,...s}=e,u={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},c=(0,l.useCallback)((e,t)=>{K(e),null==o||o(e,t)},[o]);return(0,d.jsx)(H,{ref:t,addEndListener:U,...u,onEnter:c,childRef:S(r),children:(e,t)=>l.cloneElement(r,{...t,className:i()("fade",n,r.props.className,ek[e],a[e])})})});ej.displayName="Fade";let eA=l.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:a="div",...o}=e;return r=(0,c.oU)(r,"offcanvas-body"),(0,d.jsx)(a,{ref:t,className:i()(n,r),...o})});eA.displayName="OffcanvasBody";let eT={[R]:"show",[k]:"show"},eS=l.forwardRef((e,t)=>{let{bsPrefix:n,className:r,children:a,in:o=!1,mountOnEnter:s=!1,unmountOnExit:u=!1,appear:f=!1,...p}=e;return n=(0,c.oU)(n,"offcanvas"),(0,d.jsx)(H,{ref:t,addEndListener:U,in:o,mountOnEnter:s,unmountOnExit:u,appear:f,...p,childRef:S(a),children:(e,t)=>l.cloneElement(a,{...t,className:i()(r,a.props.className,(e===R||e===j)&&`${n}-toggling`,eT[e])})})});eS.displayName="OffcanvasToggling";let eL=l.createContext({onHide(){}});var e$=n(5556),eD=n.n(e$);let eM={"aria-label":eD().string,onClick:eD().func,variant:eD().oneOf(["white"])},eP=l.forwardRef((e,t)=>{let{className:n,variant:r,"aria-label":a="Close",...o}=e;return(0,d.jsx)("button",{ref:t,type:"button",className:i()("btn-close",r&&`btn-close-${r}`,n),"aria-label":a,...o})});eP.displayName="CloseButton",eP.propTypes=eM;let eI=l.forwardRef((e,t)=>{let{closeLabel:n="Close",closeVariant:r,closeButton:a=!1,onHide:o,children:i,...s}=e,u=(0,l.useContext)(eL),c=J(()=>{null==u||u.onHide(),null==o||o()});return(0,d.jsxs)("div",{ref:t,...s,children:[i,a&&(0,d.jsx)(eP,{"aria-label":n,variant:r,onClick:c})]})}),eB=l.forwardRef((e,t)=>{let{bsPrefix:n,className:r,closeLabel:a="Close",closeButton:o=!1,...l}=e;return n=(0,c.oU)(n,"offcanvas-header"),(0,d.jsx)(eI,{ref:t,...l,className:i()(r,n),closeLabel:a,closeButton:o})});eB.displayName="OffcanvasHeader";let e_=l.forwardRef((e,t)=>(0,d.jsx)("div",{...e,ref:t,className:i()(e.className,"h5")})),eU=l.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:a=e_,...o}=e;return r=(0,c.oU)(r,"offcanvas-title"),(0,d.jsx)(a,{ref:t,className:i()(n,r),...o})});eU.displayName="OffcanvasTitle";var eF=n(5003);function eK(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}let eW={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class eH extends ef{adjustAndStore(e,t,n){let r=t.style[e];t.dataset[e]=r,x(t,{[e]:`${parseFloat(x(t,e))+n}px`})}restore(e,t){let n=t.dataset[e];void 0!==n&&(delete t.dataset[e],x(t,{[e]:n}))}setContainerStyle(e){var t,n;super.setContainerStyle(e);let r=this.getElement();if(n="modal-open",(t=r).classList?t.classList.add(n):(t.classList?n&&t.classList.contains(n):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+n+" "))||("string"==typeof t.className?t.className=t.className+" "+n:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+n)),!e.scrollBarWidth)return;let a=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";(0,eF.A)(r,eW.FIXED_CONTENT).forEach(t=>this.adjustAndStore(a,t,e.scrollBarWidth)),(0,eF.A)(r,eW.STICKY_CONTENT).forEach(t=>this.adjustAndStore(o,t,-e.scrollBarWidth)),(0,eF.A)(r,eW.NAVBAR_TOGGLER).forEach(t=>this.adjustAndStore(o,t,e.scrollBarWidth))}removeContainerStyle(e){var t;super.removeContainerStyle(e);let n=this.getElement();t="modal-open",n.classList?n.classList.remove(t):"string"==typeof n.className?n.className=eK(n.className,t):n.setAttribute("class",eK(n.className&&n.className.baseVal||"",t));let r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";(0,eF.A)(n,eW.FIXED_CONTENT).forEach(e=>this.restore(r,e)),(0,eF.A)(n,eW.STICKY_CONTENT).forEach(e=>this.restore(a,e)),(0,eF.A)(n,eW.NAVBAR_TOGGLER).forEach(e=>this.restore(a,e))}}function eV(e){return(0,d.jsx)(eS,{...e})}function eG(e){return(0,d.jsx)(ej,{...e})}let eX=l.forwardRef((e,t)=>{let{bsPrefix:n,className:r,children:o,"aria-labelledby":s,placement:u="start",responsive:f,show:p=!1,backdrop:m=!0,keyboard:v=!0,scroll:h=!1,onEscapeKeyDown:g,onShow:x,onHide:E,container:b,autoFocus:y=!0,enforceFocus:C=!0,restoreFocus:w=!0,restoreFocusOptions:N,onEntered:O,onExit:R,onExiting:k,onEnter:j,onEntering:A,onExited:T,backdropClassName:S,manager:L,renderStaticNode:$=!1,...D}=e,M=(0,l.useRef)();n=(0,c.oU)(n,"offcanvas");let[P,I]=(0,l.useState)(!1),B=J(E),_=ea(f||"xs","up");(0,l.useEffect)(()=>{I(f?p&&!_:p)},[p,f,_]);let U=(0,l.useMemo)(()=>({onHide:B}),[B]),F=(0,l.useCallback)(e=>(0,d.jsx)("div",{...e,className:i()(`${n}-backdrop`,S)}),[S,n]),K=e=>(0,d.jsx)("div",{...e,...D,className:i()(r,f?`${n}-${f}`:n,`${n}-${u}`),"aria-labelledby":s,children:o});return(0,d.jsxs)(d.Fragment,{children:[!P&&(f||$)&&K({}),(0,d.jsx)(eL.Provider,{value:U,children:(0,d.jsx)(eR,{show:P,ref:t,backdrop:m,container:b,keyboard:v,autoFocus:y,enforceFocus:C&&!h,restoreFocus:w,restoreFocusOptions:N,onEscapeKeyDown:g,onShow:x,onHide:B,onEnter:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&(e.style.visibility="visible"),null==j||j(e,...n)},onEntering:A,onEntered:O,onExit:R,onExiting:k,onExited:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&(e.style.visibility=""),null==T||T(...n)},manager:L||(h?(M.current||(M.current=new eH({handleContainerOverflow:!1})),M.current):(a||(a=new eH(void 0)),a)),transition:eV,backdropTransition:eG,renderBackdrop:F,renderDialog:K})})]})});eX.displayName="Offcanvas";let eY=Object.assign(eX,{Body:eA,Header:eB,Title:eU}),eZ=l.forwardRef((e,t)=>{let{onHide:n,...r}=e,a=(0,l.useContext)(Z.A),o=J(()=>{null==a||null==a.onToggle||a.onToggle(),null==n||n()});return(0,d.jsx)(eY,{ref:t,show:!!(null!=a&&a.expanded),...r,renderStaticNode:!0,onHide:o})});eZ.displayName="NavbarOffcanvas";let eq=l.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:a="span",...o}=e;return r=(0,c.oU)(r,"navbar-text"),(0,d.jsx)(a,{ref:t,className:i()(n,r),...o})});eq.displayName="NavbarText";let ez=l.forwardRef((e,t)=>{let{bsPrefix:n,expand:r=!0,variant:a="light",bg:o,fixed:f,sticky:p,className:m,as:v="nav",expanded:h,onToggle:g,onSelect:x,collapseOnSelect:E=!1,...b}=(0,u.Zw)(e,{expanded:"onToggle"}),y=(0,c.oU)(n,"navbar"),C=(0,l.useCallback)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];null==x||x(...t),E&&h&&(null==g||g(!1))},[x,E,h,g]);void 0===b.role&&"nav"!==v&&(b.role="navigation");let w=`${y}-expand`;"string"==typeof r&&(w=`${w}-${r}`);let N=(0,l.useMemo)(()=>({onToggle:()=>null==g?void 0:g(!h),bsPrefix:y,expanded:!!h,expand:r}),[y,h,r,g]);return(0,d.jsx)(Z.A.Provider,{value:N,children:(0,d.jsx)(s.A.Provider,{value:C,children:(0,d.jsx)(v,{ref:t,...b,className:i()(m,y,r&&w,a&&`${y}-${a}`,o&&`bg-${o}`,p&&`sticky-${p}`,f&&`fixed-${f}`)})})})});ez.displayName="Navbar";let eJ=Object.assign(ez,{Brand:f,Collapse:q,Offcanvas:eZ,Text:eq,Toggle:Q})},5874:(e,t,n)=>{n.d(t,{A:()=>a});let r=n(6540).createContext(null);r.displayName="NavbarContext";let a=r},9752:(e,t,n)=>{n.d(t,{Zw:()=>s});var r=n(8168),a=n(8587),o=n(6540);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function s(e,t){return Object.keys(t).reduce(function(n,s){var u,c,d,f,p,m,v,h,g=n[i(s)],x=n[s],E=(0,a.A)(n,[i(s),s].map(l)),b=t[s],y=(u=e[b],c=(0,o.useRef)(void 0!==x),f=(d=(0,o.useState)(g))[0],p=d[1],m=void 0!==x,v=c.current,c.current=m,!m&&v&&f!==g&&p(g),[m?x:f,(0,o.useCallback)(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];u&&u.apply(void 0,[e].concat(n)),p(e)},[u])]),C=y[0],w=y[1];return(0,r.A)({},E,((h={})[s]=C,h[b]=w,h))},e)}n(311)}}]);