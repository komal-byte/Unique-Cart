(()=>{"use strict";var e,o={557:(e,o,t)=>{const l=window.wp.blocks,a=window.wp.element,n=window.wp.i18n,r=window.wp.components,s=window.wp.serverSideRender;var d=t.n(s);const i=window.wp.blockEditor,c=window.wp.data,w=(e,o)=>{const t=[];if(e&&t.push({value:"",label:(0,n.sprintf)((0,n.__)("Select a %s","easy-digital-downloads"),EDDBlocks.download_label_singular)}),o||"template"===o){let e=(0,n.sprintf)((0,n.__)("Current %s","easy-digital-downloads"),EDDBlocks.download_label_singular);"template"!==o&&(e=wp.data.select("core/editor").getCurrentPostAttribute("title")),t.push({value:o,label:e})}const l=(0,c.useSelect)((e=>{let t={per_page:-1};return o&&(t.exclude=o),e("core").getEntityRecords("postType","download",t)}));return(0,c.useSelect)((e=>e("core/data").isResolving("core","getEntityRecords",["postType","download"])))||l&&l.map((e=>{let{id:o,title:l}=e;t.push({value:o,label:l.raw})})),t};function u(){return u=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},u.apply(this,arguments)}const p=JSON.parse('{"u2":"edd/buy-button","qv":"button"}'),h={button:(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,a.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"})),cart:(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,a.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})),products:(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,a.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})),"yes-alt":(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,a.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"})),download:(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"edd-blocks__icon-downloads"},(0,a.createElement)("path",{fillRule:"evenodd",d:"M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z",clipRule:"evenodd"})),unlock:(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,a.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})),"editor-table":(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,a.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"})),money:(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,a.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"})),id:(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,a.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"})),category:(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,a.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"})),"admin-links":(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,a.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"})),money:(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,a.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))};var m;(0,l.registerBlockType)(p.u2,{icon:(m=p.qv,h[m]),edit:function(e){let{attributes:o,setAttributes:t}=e;if(!EDDBlocks.has_published_downloads)return(0,a.createElement)("div",u({className:"edd-downloads--wrap"},(0,i.useBlockProps)()),(0,a.createElement)(r.Placeholder,{icon:"download",label:EDDBlocks.has_draft_downloads&&(0,n.sprintf)((0,n.__)("No Published %s Found","easy-digital-downloads"),EDDBlocks.download_label_plural)||(0,n.sprintf)((0,n.__)("No %s Found","easy-digital-downloads"),EDDBlocks.download_label_plural)},(0,a.createElement)("div",{className:"edd-downloads--actions"},(0,a.createElement)("a",{href:EDDBlocks.new_download_link,className:"components-button edd-downloads--primary",target:"_blank"}," ",EDDBlocks.has_draft_downloads&&(0,n.sprintf)((0,n.__)("Create a New %s","easy-digital-downloads"),EDDBlocks.download_label_singular)||(0,n.sprintf)((0,n.__)("Create Your First %s","easy-digital-downloads"),EDDBlocks.download_label_singular)),EDDBlocks.has_draft_downloads&&(0,a.createElement)("a",{href:EDDBlocks.view_downloads_link,className:"components-button edd-downloads--secondary",target:"_blank"},(0,n.sprintf)((0,n.__)("View All %s","easy-digital-downloads"),EDDBlocks.download_label_plural)))));const l=e=>o=>t({[e]:o}),s=wp.data.select("core/editor").getCurrentPostType();if(!o.download_id&&s&&"download"!==s)return(0,a.createElement)("div",(0,i.useBlockProps)(),(0,a.createElement)(r.Placeholder,{icon:"download",label:(0,n.sprintf)((0,n.__)("Select a %s:","easy-digital-downloads"),EDDBlocks.download_label_singular)},(0,a.createElement)(r.SelectControl,{label:(0,n.sprintf)((0,n.__)("Published %s","easy-digital-downloads"),EDDBlocks.download_label_plural),options:w(!0),onChange:l("download_id")})));let c=!1;return o.download_id||"download"!==s?s||(c="template"):(c=wp.data.select("core/editor").getCurrentPostId(),o.download_id=c),(0,a.createElement)("div",(0,i.useBlockProps)(),(0,a.createElement)(i.InspectorControls,null,(0,a.createElement)(r.PanelBody,{title:(0,n.__)("Settings","easy-digital-downloads")},(0,a.createElement)(r.SelectControl,{label:(0,n.sprintf)((0,n.__)("Select a %s","easy-digital-downloads"),EDDBlocks.download_label_singular),value:o.download_id,options:w(!1,c),onChange:l("download_id")}),(0,a.createElement)(r.ToggleControl,{label:(0,n.__)("Show Price","easy-digital-downloads"),checked:!!o.show_price,onChange:l("show_price")}),!!EDDBlocks.supports_buy_now&&(0,a.createElement)(r.ToggleControl,{label:(0,n.__)("Buy Now","easy-digital-downloads"),checked:!!o.direct,onChange:l("direct"),help:(0,n.__)("Enable Buy Now to process a download order without going through the full checkout.","easy-digital-downloads")}))),(0,a.createElement)(r.Disabled,null,(0,a.createElement)(d(),{block:"edd/buy-button",attributes:{...o}})))}})}},t={};function l(e){var a=t[e];if(void 0!==a)return a.exports;var n=t[e]={exports:{}};return o[e](n,n.exports,l),n.exports}l.m=o,e=[],l.O=(o,t,a,n)=>{if(!t){var r=1/0;for(c=0;c<e.length;c++){t=e[c][0],a=e[c][1],n=e[c][2];for(var s=!0,d=0;d<t.length;d++)(!1&n||r>=n)&&Object.keys(l.O).every((e=>l.O[e](t[d])))?t.splice(d--,1):(s=!1,n<r&&(r=n));if(s){e.splice(c--,1);var i=a();void 0!==i&&(o=i)}}return o}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,a,n]},l.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return l.d(o,{a:o}),o},l.d=(e,o)=>{for(var t in o)l.o(o,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},l.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={167:0,200:0};l.O.j=o=>0===e[o];var o=(o,t)=>{var a,n,r=t[0],s=t[1],d=t[2],i=0;if(r.some((o=>0!==e[o]))){for(a in s)l.o(s,a)&&(l.m[a]=s[a]);if(d)var c=d(l)}for(o&&o(t);i<r.length;i++)n=r[i],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(c)},t=self.webpackChunkedd_blocks=self.webpackChunkedd_blocks||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var a=l.O(void 0,[200],(()=>l(557)));a=l.O(a)})();