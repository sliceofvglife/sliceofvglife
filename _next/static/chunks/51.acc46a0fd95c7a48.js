(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51],{1051:(e,t,s)=>{"use strict";s.r(t),s.d(t,{LG_COL:()=>v,XS_COL:()=>f,default:()=>b,getUnlockedComics:()=>N,unlockComic:()=>A,unlockComics:()=>C});var i=s(4848),r=s(6540),c=s(848),a=s(6871),n=s(1849),l=s(9753),o=s.n(l),d=s(6715),m=s(1106),h=s.n(m),p=s(3914),_=s(6188),u=s(5606);let g="1"===u.env.NEXT_PUBLIC_COMICS_UNLOCK_ALL,j="1"===u.env.NEXT_PUBLIC_ARCHIVE_COMICS_COUNT,x="1"===u.env.NEXT_PUBLIC_ARCHIVE_COMMENT_ICONS,f=12,v=8;function y(e){return`comic-${e.id}-unlocked`}function N(e){return e.map(e=>{let t=y(e);try{return"1"===localStorage.getItem(t)}catch(e){return console.error(e),!0}})}function A(e){try{localStorage.setItem(y(e),"1")}catch(e){console.error(e)}}function C(e){e.forEach(e=>A(e))}class I extends r.Component{static propTypes;constructor(e){super(e),this.state={input:""},this.onKeyUp=this.onKeyUp.bind(this),this.onTimeout=this.onTimeout.bind(this)}componentDidMount(){document.addEventListener("keyup",this.onKeyUp)}componentWillUnmount(){document.removeEventListener("keyup",this.onKeyUp),void 0!==this.state.timeoutId&&clearTimeout(this.state.timeoutId)}onKeyUp(e){void 0!==this.state.timeoutId&&clearTimeout(this.state.timeoutId);let t=this.state.input+e.code;t.includes("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRight")?(C(this.props.comics),alert("Vous avez d\xe9bloqu\xe9 tous les comics !"),this.onTimeout()):this.setState({input:t,timeoutId:window.setTimeout(this.onTimeout,500)})}onTimeout(){this.setState({input:""})}renderCategories(e){let t=t=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:o().icon,style:{backgroundImage:`url("${t.category.src}")`}}),(0,i.jsxs)("span",{className:o().title,children:[t.category.title,j?(0,i.jsx)("span",{children:`(${e.getCount(t)})`}):(0,i.jsx)(i.Fragment,{}),x&&this.props.comics.filter(e=>e.categoryIds.includes(t.category.id)).every(e=>""!==e.commentary)?(0,i.jsx)("span",{style:{marginLeft:"0.5em"},children:(0,i.jsx)(r.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(p.g,{className:o().commentary_icon,icon:_.Bep})})}):(0,i.jsx)(i.Fragment,{})]})]});return(0,i.jsx)("ul",{className:o().filters_list,children:e.categories.map(s=>(0,i.jsx)("li",{className:[o().item,e.isSelected(s)?o().selected:"",e.isDisabled(s)?o().disabled:""].join(" "),children:e.isDisabled(s)?(0,i.jsx)("div",{className:o().item_wrapper,children:t(s)}):(0,i.jsx)(h(),{className:o().item_wrapper,href:e.getHref(s),children:t(s)})},s.category.id))})}renderSeries(e){return this.renderCategories({categories:e.series.map(e=>({category:e.metadata,seriesIds:[e.metadata.id]})),isSelected:e.isSelected,isDisabled:e.isDisabled,getCount:e.getCount,getHref:e.getHref})}renderComics(e){let t=N(e);return(0,i.jsx)("ul",{className:o().comics_list,children:e.map((e,s)=>(0,i.jsx)("li",{className:o().item,children:(0,i.jsxs)(h(),{className:o().link,href:e.href,children:[(0,i.jsx)("div",{className:[o().icon,o().locked].join(" "),style:{...g||t[s]?{backgroundImage:`url("${e.src}")`}:{},aspectRatio:`${e.width}/${e.height}`},children:g||t[s]?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(r.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(p.g,{className:o().lock_icon,icon:_.DW4})})}),(0,i.jsx)("span",{className:o().title_wrapper,children:(0,i.jsxs)("span",{className:o().title,children:[g||t[s]?e.title:"???",x&&""!==e.commentary?(0,i.jsx)("span",{style:{marginLeft:"0.5em"},children:(0,i.jsx)(r.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(p.g,{className:o().commentary_icon,icon:_.Bep})})}):(0,i.jsx)(i.Fragment,{})]})})]})},e.id))})}renderPages(e){return(0,i.jsx)("ul",{className:o().pages_list,children:[...Array(e.numPages).keys()].map(e=>e+1).map(t=>(0,i.jsx)("li",{className:[o().page_item,e.currentPage===t?o().selected:""].join(" "),children:(0,i.jsx)(h(),{href:e.getHref(t),children:t})},t.toString()))})}render(){let{className:e,router:t}=this.props,{query:s}=t,r=this.props.series.find(e=>e.metadata.id===this.props.currentSeriesId),l=r?.categories?.find(e=>e.id===this.props.currentCategoryId),d=Number(s.page);Number.isNaN(d)&&(d=1);let m=this.props.comics.filter(e=>void 0===l||e.categoryIds.includes(l.id)),h=Math.max(Math.ceil(m.length/15),1);return m=m.slice((d-1)*15,15*d),(0,i.jsxs)(c.A,{className:[e||"",o().archive,"external_container"].join(" "),children:[(0,i.jsx)(a.A,{className:"justify-content-center",children:(0,i.jsxs)(n.A,{className:o().filters_col,xs:f,lg:v,children:[this.renderSeries({series:this.props.series,isSelected:e=>{let{category:t}=e;return t.id===r?.metadata?.id},isDisabled:()=>!1,getCount:()=>this.props.comics.length,getHref:e=>{let{category:t}=e;return`/archive${t.id===r?.metadata?.id?"":`/${t.id}`}`}}),...Object.values(Object.fromEntries(function(e,t){let s=new Map;return e.forEach(e=>{let i=t(e),r=s.get(i);r?r.push(e):s.set(i,[e])}),s}(Object.values(this.props.series.reduce((e,t)=>(t.categories.forEach(s=>{void 0===e[s.id]&&(e[s.id]={category:s,seriesIds:[]}),e[s.id].seriesIds.push(t.metadata.id)}),e),{})),e=>{let{category:t}=e;return t.row}))).map(e=>this.renderCategories({categories:e,isSelected:e=>{let{category:t}=e;return t.id===l?.id},isDisabled:e=>{let{seriesIds:t}=e;return void 0!==r&&!t.includes(r.metadata.id)},getCount:e=>{let{category:t}=e;return this.props.comics.filter(e=>e.categoryIds.includes(t.id)).length},getHref:e=>`/archive/${r?.metadata?.id??e.seriesIds[0]}${e.category.id===l?.id?"":`/${e.category.id}`}`}))]})}),(0,i.jsx)(a.A,{className:"justify-content-center",children:(0,i.jsx)(n.A,{xs:f,lg:v,children:this.renderComics(m)})}),(0,i.jsx)(a.A,{className:"justify-content-center",children:(0,i.jsx)(n.A,{className:o().pages_col,xs:f,lg:v,children:this.renderPages({numPages:h,currentPage:d,getHref:e=>({pathname:`/archive${void 0===r?"":`/${r.metadata.id}${void 0===l?"":`/${l.id}`}`}`,query:{page:e.toString()}})})})})]})}}I.propTypes={};let b=(0,d.withRouter)(I)},9753:e=>{e.exports={archive:"Archive_archive__cbfaC",selected:"Archive_selected__G04vY",icon:"Archive_icon__9dnQO",item:"Archive_item__26pu_",disabled:"Archive_disabled__KeEJf",filters_col:"Archive_filters_col__YqrT_",filters_list:"Archive_filters_list__7G4QR",item_wrapper:"Archive_item_wrapper__djda_",title:"Archive_title__OSZlL",comics_list:"Archive_comics_list__2M8Xx",title_wrapper:"Archive_title_wrapper__LOt2f",locked:"Archive_locked__1LcGT",lock_icon:"Archive_lock_icon__pe1zg",pages_col:"Archive_pages_col__Xm2hR",pages_list:"Archive_pages_list__rWv1H"}},6715:(e,t,s)=>{e.exports=s(8440)}}]);