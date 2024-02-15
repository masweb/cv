import{L as W,g as z,M as G,N as P,r as k,o as V,K as I,O as se,P as N,Q as le,R as J,S as ae,T as U,U as ne,V as re,G as R,c as A,F as oe,W as ce,d as de,t as H,v as q,x as K,y as ue,_ as ve,z as me}from"./entry.C8n2DY04.js";const O=new WeakMap;function fe(e){if(O.has(e))return O.get(e);const i={...e};return i.render?i.render=(s,l,t,a,u,o)=>{var c;if(a.mounted$??s.mounted$){const n=(c=e.render)==null?void 0:c.bind(s)(s,l,t,a,u,o);return n.children===null||typeof n.children=="string"?W(n):z(n)}else{const n=G(s._.vnode.el??null)??["<div></div>"];return P(n.join(""),n.length)}}:i.template&&(i.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),i.setup=(s,l)=>{var c;const t=I(),a={...t.attrs},u=pe(t);for(const n in a)delete t.attrs[n];const o=k(!1);return V(()=>{Object.assign(t.attrs,a),t.vnode.dirs=u,o.value=!0}),Promise.resolve(((c=e.setup)==null?void 0:c.call(e,s,l))||{}).then(n=>typeof n!="function"?(n=n||{},n.mounted$=o,n):(...f)=>{if(o.value){const d=n(...f);return d.children===null||typeof d.children=="string"?W(d):z(d)}else{const d=G((t==null?void 0:t.vnode.el)??null)??["<div></div>"];return P(d.join(""),d.length)}})},O.set(e,i),i}function pe(e){if(!e||!e.vnode.dirs)return null;const i=e.vnode.dirs;return e.vnode.dirs=null,i}function Q(e){return ne()?(re(e),!0):!1}function x(e){return typeof e=="function"?e():N(e)}const he=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ge=Object.prototype.toString,be=e=>ge.call(e)==="[object Object]",Y=()=>{};function ye(e,i){function s(...l){return new Promise((t,a)=>{Promise.resolve(e(()=>i.apply(this,l),{fn:i,thisArg:this,args:l})).then(t).catch(a)})}return s}const X=e=>e();function we(e=X){const i=k(!0);function s(){i.value=!1}function l(){i.value=!0}const t=(...a)=>{i.value&&e(...a)};return{isActive:J(i),pause:s,resume:l,eventFilter:t}}function Se(e){return e||I()}function _e(...e){if(e.length!==1)return le(...e);const i=e[0];return typeof i=="function"?J(ae(()=>({get:i,set:Y}))):k(i)}function Ce(e,i,s={}){const{eventFilter:l=X,...t}=s;return R(e,ye(l,i),t)}function ke(e,i,s={}){const{eventFilter:l,...t}=s,{eventFilter:a,pause:u,resume:o,isActive:c}=we(l);return{stop:Ce(e,i,{...t,eventFilter:a}),pause:u,resume:o,isActive:c}}function Z(e,i=!0,s){Se()?V(e,s):i?e():U(e)}function De(e=!1,i={}){const{truthyValue:s=!0,falsyValue:l=!1}=i,t=se(e),a=k(e);function u(o){if(arguments.length)return a.value=o,a.value;{const c=x(s);return a.value=a.value===c?x(l):c,a.value}}return t?u:[a,u]}function ee(e){var i;const s=x(e);return(i=s==null?void 0:s.$el)!=null?i:s}const M=he?window:void 0;function B(...e){let i,s,l,t;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,l,t]=e,i=M):[i,s,l,t]=e,!i)return Y;Array.isArray(s)||(s=[s]),Array.isArray(l)||(l=[l]);const a=[],u=()=>{a.forEach(f=>f()),a.length=0},o=(f,d,w,h)=>(f.addEventListener(d,w,h),()=>f.removeEventListener(d,w,h)),c=R(()=>[ee(i),x(t)],([f,d])=>{if(u(),!f)return;const w=be(d)?{...d}:d;a.push(...s.flatMap(h=>l.map(g=>o(f,h,g,w))))},{immediate:!0,flush:"post"}),n=()=>{c(),u()};return Q(n),n}function Ae(){const e=k(!1);return I()&&V(()=>{e.value=!0}),e}function xe(e){const i=Ae();return A(()=>(i.value,!!e()))}function Me(e,i={}){const{window:s=M}=i,l=xe(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let t;const a=k(!1),u=n=>{a.value=n.matches},o=()=>{t&&("removeEventListener"in t?t.removeEventListener("change",u):t.removeListener(u))},c=oe(()=>{l.value&&(o(),t=s.matchMedia(x(e)),"addEventListener"in t?t.addEventListener("change",u):t.addListener(u),a.value=t.matches)});return Q(()=>{c(),o(),t=void 0}),a}const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__",je=Ee();function Ee(){return T in F||(F[T]=F[T]||{}),F[T]}function ie(e,i){return je[e]||i}function Le(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Fe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},$="vueuse-storage";function Te(e,i,s,l={}){var t;const{flush:a="pre",deep:u=!0,listenToStorageChanges:o=!0,writeDefaults:c=!0,mergeDefaults:n=!1,shallow:f,window:d=M,eventFilter:w,onError:h=r=>{console.error(r)},initOnMounted:g}=l,p=(f?ce:k)(typeof i=="function"?i():i);if(!s)try{s=ie("getDefaultStorage",()=>{var r;return(r=M)==null?void 0:r.localStorage})()}catch(r){h(r)}if(!s)return p;const y=x(i),j=Le(y),S=(t=l.serializer)!=null?t:Fe[j],{pause:E,resume:m}=ke(p,()=>_(p.value),{flush:a,deep:u,eventFilter:w});return d&&o&&Z(()=>{B(d,"storage",b),B(d,$,D),g&&b()}),g||b(),p;function _(r){try{if(r==null)s.removeItem(e);else{const v=S.write(r),C=s.getItem(e);C!==v&&(s.setItem(e,v),d&&d.dispatchEvent(new CustomEvent($,{detail:{key:e,oldValue:C,newValue:v,storageArea:s}})))}}catch(v){h(v)}}function L(r){const v=r?r.newValue:s.getItem(e);if(v==null)return c&&y!=null&&s.setItem(e,S.write(y)),y;if(!r&&n){const C=S.read(v);return typeof n=="function"?n(C,y):j==="object"&&!Array.isArray(C)?{...y,...C}:C}else return typeof v!="string"?v:S.read(v)}function D(r){b(r.detail)}function b(r){if(!(r&&r.storageArea!==s)){if(r&&r.key==null){p.value=y;return}if(!(r&&r.key!==e)){E();try{(r==null?void 0:r.newValue)!==S.write(p.value)&&(p.value=L(r))}catch(v){h(v)}finally{r?U(m):m()}}}}}function te(e){return Me("(prefers-color-scheme: dark)",e)}function Oe(e={}){const{selector:i="html",attribute:s="class",initialValue:l="auto",window:t=M,storage:a,storageKey:u="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:c,emitAuto:n,disableTransition:f=!0}=e,d={auto:"",light:"light",dark:"dark",...e.modes||{}},w=te({window:t}),h=A(()=>w.value?"dark":"light"),g=c||(u==null?_e(l):Te(u,l,a,{window:t,listenToStorageChanges:o})),p=A(()=>g.value==="auto"?h.value:g.value),y=ie("updateHTMLAttrs",(m,_,L)=>{const D=typeof m=="string"?t==null?void 0:t.document.querySelector(m):ee(m);if(!D)return;let b;if(f&&(b=t.document.createElement("style"),b.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),t.document.head.appendChild(b)),_==="class"){const r=L.split(/\s/g);Object.values(d).flatMap(v=>(v||"").split(/\s/g)).filter(Boolean).forEach(v=>{r.includes(v)?D.classList.add(v):D.classList.remove(v)})}else D.setAttribute(_,L);f&&(t.getComputedStyle(b).opacity,document.head.removeChild(b))});function j(m){var _;y(i,s,(_=d[m])!=null?_:m)}function S(m){e.onChanged?e.onChanged(m,j):j(m)}R(p,S,{flush:"post",immediate:!0}),Z(()=>S(p.value));const E=A({get(){return n?g.value:p.value},set(m){g.value=m}});try{return Object.assign(E,{store:g,system:h,state:p})}catch{return E}}function Pe(e={}){const{valueDark:i="dark",valueLight:s="",window:l=M}=e,t=Oe({...e,onChanged:(o,c)=>{var n;e.onChanged?(n=e.onChanged)==null||n.call(e,o==="dark",c,o):c(o)},modes:{dark:i,light:s}}),a=A(()=>t.system?t.system.value:te({window:l}).value?"dark":"light");return A({get(){return t.value==="dark"},set(o){const c=o?"dark":"light";a.value===c?t.value="auto":t.value=c}})}const Ne=K("i",{"inline-block":"","align-middle":"",i:"dark:carbon-moon carbon-sun"},null,-1),Ve={class:"ml-2"},Ie=de({__name:"Dark.client",setup(e){const i=Pe(),s=De(i);return(l,t)=>(H(),q("button",{class:"dark",onClick:t[0]||(t[0]=a=>N(s)())},[Ne,K("span",Ve,ue(N(i)?"Dark":"Light"),1)]))}}),Re=""+globalThis.__publicAssetsURL("pic.jpeg"),We=fe(Ie),ze={},Ge=P('<div class="page"><div class="clearfix"><div class="sm-col sm-col-6 mb3 person"><img class="rounded" src="'+Re+'" height="335"><div class="signs"><div class="name mt2">Guillermo Valentín Sánchez</div><div class="job mt1">Desarrollador front end. Diseñador gráfico.</div><p class="job">Santa Pola / Alicante • Edad: 14/02/73</p></div></div><div class="sm-col sm-col-6"><p class="text">Desde el año 1992 he trabajado en entornos de edición y publicidad. Entusiasta de las tecnologías y desarrollo de software, autodidacta, codificando profesionalmente desde 2012.</p><p class="text">Desarrollo de grandes proyectos, apps nocode, experto en Vue, Typescript y nuxt.</p><p class="text">Usabilidad, interfaces gráficas, WYSIWYG, multiidioma.</p><p class="text">Desarrollo de aplicaciones completas, backend en PHP o Typescript.</p><p class="text">Comercio elecrónico, backoffices personalizados, aplicaciones de móviles y de escritorio.</p></div></div><div class="clearfix"><div class="sm-col sm-col-6 mb3 mt3"><div class="flex items-start mb1"><h2 class="self-center">Formación</h2><div class="line"></div></div><p><b>Centro de estudios de informática superior Alicante.</b></p><p>Programador de gestión - Analista programador 1990 – 1992. </p><div class="flex items-start mb1 mt3"><h2 class="self-center">Inglés</h2><div class="line"></div></div><p>Leer y escribir, no hablo ni entiendo fácilemte. </p></div><div class="sm-col sm-col-6 mb3"><div class="flex items-start mb1 mt3"><h2 class="self-center">Autodidacta</h2><div class="line"></div></div><p>Mi formación se basa en el seguimiento, testeo y aprendizage mediante artículos, cursos, libros, etc... de todas las tecnologías susceptibles de mejorar la eficiencia en el desarrollo de software.</p></div></div><div class="clearfix"><div class="sm-col sm-col-12 mb1"><div class="flex items-start mb1"><h2 class="self-center">Experiencia</h2><div class="line"></div></div></div></div><div class="clearfix"><div class="sm-col sm-col-4"><div class="mb2"><h3>Bmotion </h3><div>Desarrollo aplicaciones nocode</div><div><small>may.2022 • Actualidad • Madrid (remoto)</small></div></div><div class="mb2"><h3>Indexeo Marketing</h3><div>Desarrollo web, mantenimiento</div><div><small>ene.2021 • mayo 2022 • Ibi (remoto)</small></div></div><div class="mb2"><h3>Freelance</h3><div>Desarrollo web, diseño gráfico/web</div><div><small>ene.2020 • ene.2021 • Santa Pola</small></div></div><div class="mb2"><h3>NovoSpain</h3><div>Desarrollo web, diseño gráfico</div><div><small>nov.2016 • ene.2020 • Elche</small></div></div></div><div class="sm-col sm-col-4"><div class="mb2"><h3>3dids.com</h3><div>Desarrollo front-end</div><div><small>mar.2016 • nov.2016 • Alicante</small></div></div><div class="mb2"><h3>Fractal Internet Consultancy</h3><div>Desarrollo web y diseño gráfico/web</div><div><small>jun.2012 • oct.2015 • Madrid (remoto)</small></div></div><div class="mb2"><h3>Baluarte Comunicación, S.L.</h3><div>Desarrollo web y diseño gráfico</div><div><small>may.2009 • nov.2012 • Santa Pola</small></div></div><div class="mb2"><h3>MASA International</h3><div>Diseñador Gráfico (encargado dept.)</div><div><small>jun.2005 • sept.2008 • Torrevieja</small></div></div></div><div class="sm-col sm-col-4"><div class="mb2"><h3>Imprenta Hnos. Rastoll</h3><div>Diseñador Gráfico, artefinalista</div><div><small>dic.2003 • oct.2005 • Santa Pola</small></div></div><div class="mb2"><h3>Cartel Rotulación, S.L.</h3><div>Diseño para exteriores, rotulación e impresión</div><div><small>feb.2000 • abr.2003 • Alicante</small></div></div><div class="mb2"><h3>Rusan Copy, S.L (CopyFlash)</h3><div>Diseño para exteriores, rotulación e impresión</div><div><small>ene.1993 • ene.2000 • Alicante</small></div></div></div></div><div class="clearfix"><div class="sm-col sm-col-12 mb1 mt3"><div class="flex items-start mb3"><h2 class="self-center">Habilidades</h2><div class="line"></div></div></div></div><div class="clearfix"><div class="sm-col sm-col-6"><h3 class="self-center mb1">Front end</h3><ul class="list-reset"><li>• Código mantenible y legible, convenciones de código.</li><li>• Internacionalización.</li><li>• Persistencia de datos.</li><li>• Autenticación basadas en token o sesión.</li><li>• Manejo y conversión de fechas.</li><li>• Creación programática y previsualización de PDF.</li><li>• Conexión con APIs.</li><li>• Carruseles, galerías, modal y sliders responsive.</li><li>• Tooltips, notificaciones, arrastrar y soltar ...</li><li>• Calendario interactivo.</li><li>• Validación en vivo.</li><li>• Index DB, local/session storage.</li><li>• Recepción de datos del servidor (socket.io).</li><li>• Marcado semántico.</li><li>• Web components.</li><li>• Web App.</li><li>• Cookies.</li><li>• Canvas.</li><li>• Audio y video en la web.</li></ul></div><div class="sm-col sm-col-6"><ul class="list-reset"><li>• Pre-procesadores.</li><li>• Desarrollo responsive, mobile first.</li><li>• Frameworks: Bootstrap, Fundation, Pure, UI-Kit, Skeleton...</li><li>• Tipografía web.</li><li>• Gráficos vectoriales (svg).</li><li>• Animaciones CSS.</li><li>• Javascript orientado a objetos.</li><li>• Javascript asíncrono.</li><li>• Solicitud/Respuestas http.</li><li>• Estructuras de datos Json.</li><li>• TypeScript.</li><li>• Aplicación modular por componentes.</li><li>• Arquitectura hexagonal.</li><li>• WebPack, flujo de trabajo webpack, vite...</li><li>• Framework Vue (preferido).</li><li>• Nuxt.</li><li>• Motores de plantillas (pug, blade, liquid.. ).</li><li>• Gestión de estado / arquitectura flux.</li><li>• Fundamentos de UX.</li><li>• Prototipos UI.</li><li>• Flutter , Electron, App híbrida, Cordova, Ionic. App nativo.</li></ul></div></div><div class="clearfix"><div class="sm-col sm-col-6 mt3"><h3 class="self-center mb1">Back end</h3><ul class="list-reset"><li>• Creación, diseño y optimización de bases de datos relacionales MySql, MariaDB...</li><li>• Migraciones y generación de datos de prueba.</li><li>• ORM Eloquent y Lucid</li><li>• Paginación y pre-proceso de información e imágenes.</li><li>• Uso de clientes http.</li><li>• Creación de APIs con autenticación.</li><li>• Gestión de sesión.</li><li>• Validación desde el servidor.</li></ul></div><div class="sm-col sm-col-6"><ul class="list-reset"><li>• Login y registro seguro.</li><li>• Gestión de ficheros desde el servidor.</li><li>• Envío de correos automatizados.</li><li>• Creación de tareas periódicas.</li><li>• Caché en disco o memoria.</li><li>• Manejo de eventos y colas</li><li>• Uso de linea de comandos Linux</li><li>• Gestión de dependencias con Composer.</li><li>• Testing http, unitarios, de navegador...</li><li>• Git, Github, Docker, IA para programar... </li></ul></div></div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div><div class="mb5"> </div></div>',1);function Be(e,i){const s=We;return H(),q("div",null,[me(s),Ge])}const Je=ve(ze,[["render",Be]]);export{Je as default};
