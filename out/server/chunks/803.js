exports.id=803,exports.ids=[803],exports.modules={70876:(e,s,l)=>{Promise.resolve().then(l.t.bind(l,63642,23)),Promise.resolve().then(l.t.bind(l,87586,23)),Promise.resolve().then(l.t.bind(l,47838,23)),Promise.resolve().then(l.t.bind(l,58057,23)),Promise.resolve().then(l.t.bind(l,77741,23)),Promise.resolve().then(l.t.bind(l,13118,23))},93313:(e,s,l)=>{Promise.resolve().then(l.bind(l,8012))},47739:(e,s,l)=>{"use strict";l.d(s,{Z:()=>a});var t=l(97247);l(28964);let a=function({children:e,className:s}){return t.jsx("button",{className:`${s} py-[12px] px-3 rounded-lg bg-greenCostom text-white font-sans text-sm font-bold`,children:e})}},12235:(e,s,l)=>{"use strict";l.d(s,{Z:()=>a});var t=l(97247);l(28964);let a=function({children:e,className:s,style:l}){return t.jsx("p",{style:l,className:`${s} text-gray-400 text-sm font-sans`,children:e})}},8961:(e,s,l)=>{"use strict";l.d(s,{default:()=>g});var t=l(97247),a=l(28964),r=l(47739),i=l(34178),n=l(79906);let x=function(){(0,i.usePathname)();let[e,s]=(0,a.useState)(0);return t.jsx("ul",{className:"flex font-sans text-white m-0 hidden lg:flex",children:[{link:"/",label:"قوانین"},{link:"/",label:"استعلام مدرک"},{link:"/about",label:"درباره ما"},{link:"/",label:"مسئولیت اجتماعی"},{link:"/",label:"بلاگ"},{link:"/",label:"راهنمای استفاده دوره"},{link:"/",label:"مدرک بین المللی"}].map((e,l)=>t.jsx("li",{onClick:()=>s(l),className:"w-max mr-5",children:t.jsx(n.default,{href:e.link,className:"no-underline",children:t.jsx("span",{className:"text-white text-sm",children:e.label})})},l))})},c=function(){return t.jsx("img",{className:"w-[70px] h-[70px] rounded-full",src:"/images/logo.png",alt:""})};l(23824);var d=l(39215),o=l(98977),h=l(5660),m=l(61512),j=l(75087);function u({...e}){let[s,l]=(0,a.useState)(!1),i=()=>l(!1);return(0,t.jsxs)("div",{children:[t.jsx(o.Z,{onClick:()=>l(!0),className:"mx-4 bg-transparent border-none lg:hidden p-0",children:t.jsx(m.Z,{sx:{width:"35px",height:"35px"}})}),(0,t.jsxs)(h.Z,{show:s,onHide:i,...e,children:[t.jsx(h.Z.Header,{className:"bg-bgmain",children:t.jsx(j.Z,{sx:{color:"white"},onClick:i})}),(0,t.jsxs)(h.Z.Body,{className:"bg-bgmain text-white",children:[t.jsx("ul",{className:"grid gap-4 px-1",children:[{link:"/",label:"قوانین"},{link:"/",label:"استعلام مدرک"},{link:"/about",label:"درباره ما"},{link:"/",label:"مسئولیت اجتماعی"},{link:"/",label:"بلاگ"},{link:"/",label:"راهنمای استفاده دوره"},{link:"/",label:"مدرک بین المللی"}].map((e,s)=>t.jsx("li",{className:"w-max font-sans text-base",children:t.jsx(n.default,{href:e.link,className:"no-underline",children:t.jsx("span",{className:"text-white text-sm",children:e.label})})},s))}),t.jsx(r.Z,{className:"w-full mt-4",children:"ثبت نام/ ورود"})]})]})]})}function p(){return t.jsx(t.Fragment,{children:["end"].map((e,s)=>t.jsx(u,{placement:e,name:e},s))})}l(12235);let g=function(){let[e,s]=(0,a.useState)(0),[l,i]=(0,a.useState)(!0);return t.jsx("div",{className:`header w-full items-center sticky top-0 z-10 flex justify-center py-2 transition-transform duration-300 ${l?"translate-y-0":"-translate-y-full"}`,children:(0,t.jsxs)("div",{className:"max-w-[1160px] lg:w-full lg:w-[100%] flex justify-between items-center w-full px-3",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[t.jsx(c,{}),t.jsx(p,{name:"Menu",placement:"end"})]}),t.jsx(x,{}),(0,t.jsxs)("div",{className:"flex gap-3 items-center",children:[t.jsx(d.Z,{sx:{color:"white"}}),t.jsx(r.Z,{children:"ثبت نام/ورود"})]})]})})}},8012:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>h});var t=l(97247),a=l(247),r=l(59266),i=l(3928);let n=(0,r.UY)({category:i.Td,dataCategory:i.Yz}),x=(0,a.xC)({reducer:n});var c=l(92783),d=l(41755),o=l(23102);function h({children:e}){let s=new c.S;return t.jsx("html",{lang:"en",dir:"rtl",children:t.jsx("body",{className:" bg-bgmain",children:t.jsx(d.aH,{client:s,children:t.jsx(o.zt,{store:x,children:e})})})})}l(23824)},3928:(e,s,l)=>{"use strict";l.d(s,{Td:()=>n,Yz:()=>o,uA:()=>i});var t=l(247);let a=(0,t.oM)({name:"categoryId",initialState:{categoryId:null},reducers:{setCategoryId:(e,s)=>{e.categoryId=s.payload}}}),r=(0,t.oM)({name:"dataCategory",initialState:{dataCategory:[],loading:!1,error:null},reducers:{setDataCategory:(e,s)=>{e.dataCategory=s.payload},setLoading:(e,s)=>{e.loading=s.payload},setError:(e,s)=>{e.error=s.payload}}}),{setCategoryId:i}=a.actions,n=a.reducer,{setDataCategory:x,setLoading:c,setError:d}=r.actions,o=r.reducer},72617:(e,s,l)=>{"use strict";l.d(s,{Z:()=>a});var t=l(72051);l(26269);let a=function({children:e,className:s}){return t.jsx("button",{className:`${s} py-[12px] px-3 rounded-lg bg-greenCostom text-white font-sans text-sm font-bold`,children:e})}},66824:(e,s,l)=>{"use strict";l.d(s,{Z:()=>a});var t=l(72051);l(26269);let a=function({children:e,className:s,style:l}){return t.jsx("p",{style:l,className:`${s} text-gray-400 text-sm font-sans`,children:e})}},61827:(e,s,l)=>{"use strict";l.d(s,{Z:()=>a});var t=l(72051);l(26269);let a=function({children:e,className:s,style:l}){return t.jsx("h2",{style:l,className:`${s} text-2xl font-sans font-bold text-colortitle`,children:e})}},51391:(e,s,l)=>{"use strict";l.d(s,{Z:()=>t});let t=(0,l(45347).createProxy)(String.raw`/Users/puryahajian/Desktop/project/octavaz/src/app/components/template/Header.jsx#default`)},94405:(e,s,l)=>{"use strict";l.d(s,{Z:()=>p});var t=l(72051);l(26269);var a=l(61827),r=l(72617),i=l(15371),n=l(89879),x=l(72940),c=l(89670),d=l(86164),o=l(89722),h=l(80301);let m=function(){let e={color:"#9ca3af",width:"27px",height:"27px",display:"flex",justifyContent:"center",alignContent:"center",borderRadius:"8px",cursor:"pointer"},s={width:"20px",height:"20px",margin:"auto"};return(0,t.jsxs)("ul",{className:"flex mt-3 justify-between max-[990px]:justify-center max-[990px]:gap-3",children:[t.jsx("li",{style:e,children:t.jsx(i.Z,{style:s})}),t.jsx("li",{style:e,children:t.jsx(n.Z,{style:s})}),t.jsx("li",{style:e,children:t.jsx(x.Z,{style:s})}),t.jsx("li",{style:e,children:t.jsx(c.Z,{style:s})}),t.jsx("li",{style:e,children:t.jsx(d.Z,{style:s})}),t.jsx("li",{style:e,children:t.jsx(o.Z,{style:s})}),t.jsx("li",{style:e,children:t.jsx(h.Z,{style:s})})]})};var j=l(66824);let u=function(){let e={fontSize:"13px",color:"white"};return(0,t.jsxs)("div",{className:"flex w-full grid-cols-3 Tablet max-[30000px]:hidden max-[990px]:flex max-sm:grid-cols-1 max-sm:grid",children:[(0,t.jsxs)("ul",{className:"w-full mr-10 max-[990px]:mr-0 gap-2 grid h-max",children:[t.jsx("li",{children:t.jsx(a.Z,{style:e,children:"خانه"})}),t.jsx("li",{children:t.jsx(a.Z,{style:e,children:"دوره ها"})}),t.jsx("li",{children:t.jsx(a.Z,{style:e,children:"مسئولیت اجتماعی"})}),t.jsx("li",{children:t.jsx(a.Z,{style:e,children:"فرصت های شغلی"})}),t.jsx("li",{children:t.jsx(a.Z,{style:e,children:"قوانین"})}),t.jsx("li",{children:t.jsx(a.Z,{style:e,children:"راهنمای خرید دوره"})}),t.jsx("li",{children:t.jsx(a.Z,{style:e,children:"دوره های سازمانی"})}),t.jsx("li",{children:t.jsx("hr",{className:"w-36"})})]}),(0,t.jsxs)("ul",{className:"w-full grid gap-1 h-max",children:[t.jsx("li",{children:t.jsx(a.Z,{style:e,children:"استعلام مدرک"})}),t.jsx("li",{children:t.jsx(a.Z,{style:e,children:"بلاگ"})}),t.jsx("li",{children:t.jsx(a.Z,{style:e,children:"درباره ما"})}),t.jsx("li",{children:t.jsx(a.Z,{style:e,children:"مدرک بین المللی"})}),t.jsx("li",{children:t.jsx(a.Z,{style:e,children:"ثبت نام/ورود"})}),t.jsx("li",{children:t.jsx("hr",{className:"w-36"})})]}),t.jsx("div",{className:"w-full ",children:t.jsx(a.Z,{style:e,children:"سوالات متداول"})})]})},p=function(){let e={fontSize:"13px",color:"white"};return(0,t.jsxs)("div",{className:"bg-bgmain mt-20 px-4 py-16 !text-white",children:[(0,t.jsxs)("div",{className:" border-b border-b-gray-400 pb-4 max-w-[1120px] m-auto flex grid-cols-2 max-[990px]:grid max-[990px]:grid-cols-1 max-[990px]:pb-4  max-[990px]:gap-4",children:[(0,t.jsxs)("div",{className:"grid gap-2 max-[990px]:border-b max-[990px]:pb-3 border-b-gray-400 max-[990px]:gap-5",children:[t.jsx(a.Z,{className:"text-white",children:"INVERS"}),(0,t.jsxs)("div",{className:"max-[780px]:hidden",children:[(0,t.jsxs)(r.Z,{className:"w-full flex justify-center items-center gap-2 max-[990px]:w-max max-[990px]:!px-16 max-[990px]:py-4 ",children:["مرکز پشتیبانی",t.jsx("img",{src:"https://inverseschool.com/assets/images/markaz-poshtibani.png",alt:""})]}),t.jsx(m,{})]})]}),(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsxs)("div",{className:"flex w-full grid-cols-4 Desktop max-[990px]:hidden",children:[(0,t.jsxs)("div",{className:"w-full mr-10 max-[990px]:mr-0 grid gap-2",children:[t.jsx(a.Z,{style:e,children:"خانه"}),t.jsx(a.Z,{style:e,children:"دوره ها"}),t.jsx(a.Z,{style:e,children:"مسئولیت اجتماعی"}),t.jsx(a.Z,{style:e,children:"فرصت های شغلی"})]}),(0,t.jsxs)("div",{className:"w-full grid gap-2",children:[t.jsx(a.Z,{style:e,children:"قوانین"}),t.jsx(a.Z,{style:e,children:"راهنمای خرید دوره"}),t.jsx(a.Z,{style:e,children:"بلاگ"}),t.jsx(a.Z,{style:e,children:"درباره ما"})]}),(0,t.jsxs)("div",{className:"w-full grid gap-2",children:[t.jsx(a.Z,{style:e,children:"استعلام مدرک"}),t.jsx(a.Z,{style:e,children:"مدرک بین المللی"}),t.jsx(a.Z,{style:e,children:"ثبت نام/ورود"}),t.jsx(a.Z,{style:e,children:"دوره های سازمانی"})]}),t.jsx("div",{className:"w-full ",children:t.jsx(a.Z,{style:e,children:"سوالات متداول"})})]}),t.jsx(u,{})]})]}),(0,t.jsxs)("div",{className:"mobile grid gap-4 pt-4 max-[20000px]:hidden max-sm:grid",children:[(0,t.jsxs)(r.Z,{className:"w-full flex justify-center items-center gap-2",children:["مرکز پشتیبانی",t.jsx("img",{src:"https://inverseschool.com/assets/images/markaz-poshtibani.png",alt:""})]}),t.jsx(m,{})]}),t.jsx("div",{className:"max-w-[1120px] m-auto flex mt-4 justify-center",children:t.jsx(j.Z,{className:"max-sm:text-[9px]",children:"کلیه حقوق این سایت متعلق به آموزشگاه اکتاواز می باشد."})})]})}},36765:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>t});let t=(0,l(45347).createProxy)(String.raw`/Users/puryahajian/Desktop/project/octavaz/src/app/layout.js#default`)},73881:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>a});var t=l(54564);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},23824:()=>{}};