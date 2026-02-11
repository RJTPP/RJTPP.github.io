import{j as e}from"./jsx-runtime.D_zvdyIk.js";import"./index.DYrVU9rO.js";import{S as s}from"./ScrollReveal.Dn8bP1Su.js";import{c as a}from"./createLucideIcon.DYItjaKc.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],h=a("github",l);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]],m=a("gitlab",p);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],g=a("globe",d);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],x=a("link",u);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],y=a("linkedin",f);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],b=a("mail",j),n={social:[{platform:"GitHub",url:"https://github.com/RJTPP",icon:"/icons/github.svg"},{platform:"GitLab",url:"https://gitlab.com/rjtpp",icon:"/icons/gitlab.svg",originalColor:!0},{platform:"Hugging Face",url:"https://huggingface.co/rjtpp",icon:"/icons/hf.svg",originalColor:!0},{platform:"LinkedIn",url:"https://www.linkedin.com/in/rjtpp/",icon:"/icons/linkedin.svg",originalColor:!0},{platform:"rjtpp.com",url:"https://rjtpp.com",icon:"website"}],heading:"Let's Connect!"},r=t=>{switch(t.toLowerCase()){case"github":return h;case"linkedin":return y;case"gitlab":return m;case"website":return g;default:return x}},k=t=>{if(t.icon){if(typeof t.icon=="string"){if(t.icon.startsWith("/")||t.icon.toLowerCase().startsWith("http"))return e.jsx("img",{src:t.icon,alt:`${t.platform} icon`,width:"20",height:"20",className:"w-5 h-5",loading:"lazy",style:{filter:t.originalColor?"none":"brightness(0) saturate(100%) invert(var(--icon-invert, 0.6))"}});const c=r(t.icon);return e.jsx(c,{className:"w-5 h-5"})}const i=t.icon;return e.jsx(i,{className:"w-5 h-5"})}const o=r(t.icon||t.platform);return e.jsx(o,{className:"w-5 h-5"})},L=()=>{const t=!!(n.description&&n.description.trim());return e.jsx("section",{id:"contact",className:"py-24 px-4",children:e.jsxs("div",{className:"container-compact text-center",children:[e.jsxs(s,{children:[e.jsx("h2",{className:"section-title-stylish mb-6",children:n.heading}),t&&e.jsx("p",{className:"text-xl mb-12 max-w-2xl mx-auto text-slate-600 dark:text-slate-300",children:n.description})]}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:[n.email&&e.jsxs("a",{href:`mailto:${n.email}`,className:"flex items-center gap-2 px-6 py-3 glass-card rounded-full hover:border-cyan-400 transition-all hover:scale-105",children:[e.jsx(b,{className:"w-5 h-5"}),e.jsx("span",{children:"Email"})]}),n.social.map(o=>e.jsxs("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-6 py-3 glass-card rounded-full hover:border-cyan-400 transition-all hover:scale-105",children:[k(o),e.jsx("span",{children:o.platform})]},o.platform))]})]})})};export{L as default};
