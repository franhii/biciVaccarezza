(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[61,64],{19:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function a(e,t){return c(e)&&t in e}},20:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a);t.a=e=>{let t,{label:n,screenReaderLabel:a,wrapperElement:r,wrapperProps:l={}}=e;const o=null!=n,i=null!=a;return!o&&i?(t=r||"span",l={...l,className:s()(l.className,"screen-reader-text")},Object(c.createElement)(t,l,a)):(t=r||c.Fragment,o&&i&&n!==a?Object(c.createElement)(t,l,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},a)):Object(c.createElement)(t,l,n))}},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n(106);var c=n(47);const a=()=>c.m>1},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(49),a=n(19);const s=e=>Object(c.a)(e)?JSON.parse(e)||{}:Object(a.a)(e)?e:{}},256:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(119),a=n(203),s=n(19),r=n(204);const l=e=>{if(!Object(a.a)())return{className:"",style:{}};const t=Object(s.a)(e)?e:{},n=Object(r.a)(t.style);return Object(c.__experimentalUseBorderProps)({...t,style:n})}},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(119),a=n(203),s=n(19),r=n(204);const l=e=>{if(!Object(a.a)())return{className:"",style:{}};const t=Object(s.a)(e)?e:{},n=Object(r.a)(t.style);return Object(c.__experimentalUseColorProps)({...t,style:n})}},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(19),a=n(204);const s=e=>{const t=Object(c.a)(e)?e:{},n=Object(a.a)(t.style),s=Object(c.a)(n.typography)?n.typography:{};return{style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:s.fontSize,lineHeight:s.lineHeight,fontWeight:s.fontWeight,textTransform:s.textTransform,fontFamily:t.fontFamily}}}},305:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(119),a=n(203),s=n(19),r=n(204);const l=e=>{if(!Object(a.a)()||"function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const t=Object(s.a)(e)?e:{},n=Object(r.a)(t.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...t,style:n})}},309:function(e,t){},327:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n(4),r=n.n(s),l=n(20),o=n(46),i=n(256),u=n(275),b=n(276),d=n(305),m=n(123);n(309),t.default=Object(m.withProductDataContext)(e=>{const{className:t,align:n}=e,{parentClassName:s}=Object(o.useInnerBlockLayoutContext)(),{product:m}=Object(o.useProductDataContext)(),p=Object(i.a)(e),O=Object(u.a)(e),f=Object(b.a)(e),j=Object(d.a)(e);if(!m.id||!m.on_sale)return null;const g="string"==typeof n?"wc-block-components-product-sale-badge--align-"+n:"";return Object(c.createElement)("div",{className:r()("wc-block-components-product-sale-badge",t,g,{[s+"__product-onsale"]:s},O.className,p.className),style:{...O.style,...p.style,...f.style,...j.style}},Object(c.createElement)(l.a,{label:Object(a.__)("Sale","woocommerce"),screenReaderLabel:Object(a.__)("Product on sale","woocommerce")}))})},355:function(e,t){},450:function(e,t,n){"use strict";n.r(t);var c=n(123),a=n(12),s=n.n(a),r=n(0),l=n(1),o=n(4),i=n.n(o),u=n(2),b=n(46),d=n(276),m=n(256),p=n(305),O=n(59),f=n(327);n(355);const j=()=>Object(r.createElement)("img",{src:u.PLACEHOLDER_IMG_SRC,alt:"",width:500,height:500}),g=e=>{let{image:t,loaded:n,showFullSize:c,fallbackAlt:a}=e;const{thumbnail:l,src:o,srcset:i,sizes:u,alt:b}=t||{},d={alt:b||a,hidden:!n,src:l,...c&&{src:o,srcSet:i,sizes:u}};return Object(r.createElement)(r.Fragment,null,d.src&&Object(r.createElement)("img",s()({"data-testid":"product-image"},d)),!t&&Object(r.createElement)(j,null))};var y=Object(c.withProductDataContext)(e=>{const{className:t,imageSizing:n="full-size",showProductLink:c=!0,showSaleBadge:a,saleBadgeAlign:s="right"}=e,{parentClassName:o}=Object(b.useInnerBlockLayoutContext)(),{product:u,isLoading:y}=Object(b.useProductDataContext)(),{dispatchStoreEvent:h}=Object(O.a)(),w=Object(d.a)(e),_=Object(m.a)(e),k=Object(p.a)(e);if(!u.id)return Object(r.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[o+"__product-image"]:o},_.className),style:{...w.style,..._.style,...k.style}},Object(r.createElement)(j,null));const E=!!u.images.length,S=E?u.images[0]:null,N=c?"a":r.Fragment,v=Object(l.sprintf)(
/* translators: %s is referring to the product name */
Object(l.__)("Link to %s","woocommerce"),u.name),x={href:u.permalink,...!E&&{"aria-label":v},onClick:()=>{h("product-view-link",{product:u})}};return Object(r.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[o+"__product-image"]:o},_.className),style:{...w.style,..._.style,...k.style}},Object(r.createElement)(N,c&&x,!!a&&Object(r.createElement)(f.default,{align:s,product:u}),Object(r.createElement)(g,{fallbackAlt:u.name,image:S,loaded:!y,showFullSize:"cropped"!==n})))});t.default=Object(c.withFilteredAttributes)({showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0},isDescendentOfQueryLoop:{type:"boolean",default:!1}})(y)}}]);