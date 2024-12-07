(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[958],{3958:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r,i=s(467),c=s(4848),n=s(6540),a=s(848),o=s(6871),l=s(1849),d=s(4267),p=s(8732),h=s.n(p),m=s(1051);class _ extends(r=n.Component){render(){let{className:e}=this.props;return(0,c.jsx)(a.A,{className:[e||"",h().about,"external_container"].join(" "),children:(0,c.jsx)(o.A,{className:"justify-content-center",children:(0,c.jsx)(l.A,{className:h().text_wrapper,xs:m.XS_COL,lg:m.LG_COL,children:(0,c.jsx)(d.o,{children:this.props.text})})})})}constructor(e){super(e)}}(0,i._)(_,"propTypes",void 0),_.propTypes={};let u=_},1051:(e,t,s)=>{"use strict";s.r(t),s.d(t,{LG_COL:()=>C,XS_COL:()=>N,default:()=>L,getUnlockedComics:()=>w,unlockComic:()=>I,unlockComics:()=>S});var r,i=s(467),c=s(1893),n=s(5456),a=s(4848),o=s(6540),l=s(848),d=s(6871),p=s(1849),h=s(9753),m=s.n(h),_=s(6715),u=s(1106),g=s.n(u),x=s(3914),j=s(6188),v=s(5606);let f="1"===v.env.NEXT_PUBLIC_COMICS_UNLOCK_ALL,y="1"===v.env.NEXT_PUBLIC_ARCHIVE_COMICS_COUNT,A="1"===v.env.NEXT_PUBLIC_ARCHIVE_COMMENT_ICONS,N=12,C=8;function b(e){return"comic-".concat(e.id,"-unlocked")}function w(e){return e.map(e=>{let t=b(e);try{return"1"===localStorage.getItem(t)}catch(e){return console.error(e),!0}})}function I(e){try{localStorage.setItem(b(e),"1")}catch(e){console.error(e)}}function S(e){e.forEach(e=>I(e))}class k extends(r=o.Component){componentDidMount(){document.addEventListener("keyup",this.onKeyUp)}componentWillUnmount(){document.removeEventListener("keyup",this.onKeyUp),void 0!==this.state.timeoutId&&clearTimeout(this.state.timeoutId)}onKeyUp(e){void 0!==this.state.timeoutId&&clearTimeout(this.state.timeoutId);let t=this.state.input+e.code;t.includes("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRight")?(S(this.props.comics),alert("Vous avez d\xe9bloqu\xe9 tous les comics !"),this.onTimeout()):this.setState({input:t,timeoutId:window.setTimeout(this.onTimeout,500)})}onTimeout(){this.setState({input:""})}renderCategories(e){let t=t=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:m().icon,style:{backgroundImage:'url("'.concat(t.category.src,'")')}}),(0,a.jsxs)("span",{className:m().title,children:[t.category.title,y?(0,a.jsx)("span",{children:"(".concat(e.getCount(t),")")}):(0,a.jsx)(a.Fragment,{}),A&&this.props.comics.filter(e=>e.categoryIds.includes(t.category.id)).every(e=>""!==e.commentary)?(0,a.jsx)("span",{style:{marginLeft:"0.5em"},children:(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(x.g,{className:m().commentary_icon,icon:j.Bep})})}):(0,a.jsx)(a.Fragment,{})]})]});return(0,a.jsx)("ul",{className:m().filters_list,children:e.categories.map(s=>(0,a.jsx)("li",{className:[m().item,e.isSelected(s)?m().selected:"",e.isDisabled(s)?m().disabled:""].join(" "),children:e.isDisabled(s)?(0,a.jsx)("div",{className:m().item_wrapper,children:t(s)}):(0,a.jsx)(g(),{className:m().item_wrapper,href:e.getHref(s),children:t(s)})},s.category.id))})}renderSeries(e){return this.renderCategories({categories:e.series.map(e=>({category:e.metadata,seriesIds:[e.metadata.id]})),isSelected:e.isSelected,isDisabled:e.isDisabled,getCount:e.getCount,getHref:e.getHref})}renderComics(e){let t=w(e);return(0,a.jsx)("ul",{className:m().comics_list,children:e.map((e,s)=>(0,a.jsx)("li",{className:m().item,children:(0,a.jsxs)(g(),{className:m().link,href:e.href,children:[(0,a.jsx)("div",{className:[m().icon,m().locked].join(" "),style:(0,n._)((0,c._)({},f||t[s]?{backgroundImage:'url("'.concat(e.src,'")')}:{}),{aspectRatio:"".concat(e.width,"/").concat(e.height)}),children:f||t[s]?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(x.g,{className:m().lock_icon,icon:j.DW4})})}),(0,a.jsx)("span",{className:m().title_wrapper,children:(0,a.jsxs)("span",{className:m().title,children:[f||t[s]?e.title:"???",A&&""!==e.commentary?(0,a.jsx)("span",{style:{marginLeft:"0.5em"},children:(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(x.g,{className:m().commentary_icon,icon:j.Bep})})}):(0,a.jsx)(a.Fragment,{})]})})]})},e.id))})}renderPages(e){return(0,a.jsx)("ul",{className:m().pages_list,children:[...Array(e.numPages).keys()].map(e=>e+1).map(t=>(0,a.jsx)("li",{className:[m().page_item,e.currentPage===t?m().selected:""].join(" "),children:(0,a.jsx)(g(),{href:e.getHref(t),children:t})},t.toString()))})}render(){var e,t;let{className:s,router:r,currentCategoryId:i}=this.props,{query:c}=r,n=this.props.currentSeriesId?this.props.series.find(e=>e.metadata.id===this.props.currentSeriesId):void 0,o=null!==(t=this.props.currentSeriesId)&&void 0!==t?t:"all",h=null==n?void 0:null===(e=n.categories)||void 0===e?void 0:e.find(e=>e.id===i),_=Number(c.page);Number.isNaN(_)&&(_=1);let u=this.props.comics.filter(e=>void 0===h||e.categoryIds.includes(h.id)),g=Math.max(Math.ceil(u.length/15),1);return u=u.slice((_-1)*15,15*_),(0,a.jsxs)(l.A,{className:[s||"",m().archive,"external_container"].join(" "),children:[(0,a.jsx)(d.A,{className:"justify-content-center",children:(0,a.jsxs)(p.A,{className:m().filters_col,xs:N,lg:C,children:[this.renderSeries({series:this.props.series,isSelected:e=>{let{category:t}=e;return t.id===o},isDisabled:()=>!1,getCount:()=>this.props.comics.length,getHref:e=>{let{category:t}=e;return"/archive".concat(t.id===o?"":"/".concat(t.id))}}),...Object.values(Object.fromEntries(function(e,t){let s=new Map;return e.forEach(e=>{let r=t(e),i=s.get(r);i?i.push(e):s.set(r,[e])}),s}(Object.values(this.props.series.reduce((e,t)=>(t.categories.forEach(s=>{void 0===e[s.id]&&(e[s.id]={category:s,seriesIds:[]}),e[s.id].seriesIds.push(t.metadata.id)}),e),{})),e=>{let{category:t}=e;return t.row}))).map(e=>this.renderCategories({categories:e,isSelected:e=>{let{category:t}=e;return t.id===i},isDisabled:e=>{let{seriesIds:t}=e;return void 0!==n&&!t.includes(o)},getCount:e=>{let{category:t}=e;return this.props.comics.filter(e=>e.categoryIds.includes(t.id)).length},getHref:e=>"/archive".concat(e.category.id===i?void 0!==o&&"all"!==o?"/".concat(o):"":"/".concat(o,"/").concat(e.category.id))}))]})}),(0,a.jsx)(d.A,{className:"justify-content-center",children:(0,a.jsx)(p.A,{xs:N,lg:C,children:this.renderComics(u)})}),(0,a.jsx)(d.A,{className:"justify-content-center",children:(0,a.jsx)(p.A,{className:m().pages_col,xs:N,lg:C,children:this.renderPages({numPages:g,currentPage:_,getHref:e=>({pathname:"/archive".concat(this.props.currentSeriesId?"/".concat(this.props.currentSeriesId).concat(i?"/".concat(i):""):""),query:{page:e.toString()}})})})})]})}constructor(e){super(e),this.state={input:""},this.onKeyUp=this.onKeyUp.bind(this),this.onTimeout=this.onTimeout.bind(this)}}(0,i._)(k,"propTypes",void 0),k.propTypes={};let L=(0,_.withRouter)(k)},8732:e=>{e.exports={about:"About_about__gifCK",text_wrapper:"About_text_wrapper__ZYhgS"}},9753:e=>{e.exports={archive:"Archive_archive__cbfaC",selected:"Archive_selected__G04vY",icon:"Archive_icon__9dnQO",item:"Archive_item__26pu_",disabled:"Archive_disabled__KeEJf",filters_col:"Archive_filters_col__YqrT_",filters_list:"Archive_filters_list__7G4QR",item_wrapper:"Archive_item_wrapper__djda_",title:"Archive_title__OSZlL",comics_list:"Archive_comics_list__2M8Xx",title_wrapper:"Archive_title_wrapper__LOt2f",locked:"Archive_locked__1LcGT",lock_icon:"Archive_lock_icon__pe1zg",pages_col:"Archive_pages_col__Xm2hR",pages_list:"Archive_pages_list__rWv1H"}}}]);