(()=>{"use strict";var e,n={570:(e,n,t)=>{var r,o=t(745),i=t(804);const a=(0,i.vJ)(r||(s=["\n@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');\n  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\n  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,500&display=swap');\n  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');\n\n  @font-face {\n    font-family: Prospectus;\n    src: url(\"assets/fonts/Prospectus/Prospectus-SemiBold.otf\")\n  }\n\n  *,\n  *::before,\n  *::after {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n    font-smooth: always;\n  }\n\n  ::-webkit-scrollbar {\n    width: 0px;\n  }\n\n  :root {\n    --black: rgb(2,2,2);\n    --gray: rgb(22,24,25);\n    --blue: rgb(24,38,59);\n    --blue-on-light: rgb(41, 63, 96);\n    --green: rgb(39,72,62);\n    --bege: rgb(182, 129, 89);\n    --text: white;\n  }\n\n  body,\n  #root {\n    width: 100vw;\n    height: 100vh;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n  }\n\n  html, body, #root {\n    background-color: var(--gray);\n  }\n\n  h1, h2, p, span, li {\n    color: var(--text);\n    list-style: none;\n  }\n\n  h1 {\n    position: relative;\n    font-weight: 100;\n    font-family: Prospectus;\n    font-size: 50px;\n  }\n  h2 {\n    font-weight: 100;\n    font-size: 30px;\n    font-family: Prospectus;\n  }\n  p {\n    font-family: \"Inter\", sans-serif;\n    text-align: justify;\n    font-size: 14px;\n  }\n"],l||(l=s.slice(0)),r=Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(l)}}))));var s,l,c,u;!function(e){e[e.LIGHT=0]="LIGHT",e[e.DARK=1]="DARK"}(c||(c={})),function(e){e[e.SWITCH_THEME=0]="SWITCH_THEME"}(u||(u={}));c.DARK,c.LIGHT;var d;const f=i.ZP.div(d||(d=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: var(--gray);\n"])));var h=t(893);const p=function(e){var n=e.children;return(0,h.jsx)(f,{"data-layout":"",children:n})};var g=t(294),m=t(240),y=t(497),b=t(477),x=t(217),v=t(854);function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const O=function(){var e=w((0,g.useState)(new b.Group),2),n=e[0],t=e[1];return(0,g.useEffect)((function(){(new x.E).setDRACOLoader((new v._).setDecoderPath("/draco/").setDecoderConfig({type:"js"})).load("./assets/model/scene.gltf",(function(e){var n=e.scene;n.traverse((function(e){!1!==e.isMesh&&(e.castShadow=!1,e.receiveShadow=!1,e.material=new b.MeshPhysicalMaterial({color:"white",roughness:1}))})),t(n)}))}),[]),{model:n}};var S=new b.MeshStandardMaterial({color:"rgb(0,0,2)",roughness:.5,metalness:0,side:b.BackSide}),A=function(){var e=O().model,n=(0,g.useRef)(),t=(0,g.useRef)();return(0,y.x)((function(e){var t,r=e.raycaster,o=e.mouse,i=e.camera;r.setFromCamera(o,i);var a=r.ray.direction.multiplyScalar(Math.min(2*Math.abs(o.x)+4,5.5)).add(i.position);null===(t=n.current)||void 0===t||t.position.lerp(a,.2)})),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("group",{ref:t,scale:.12,children:(0,h.jsx)("primitive",{object:e,scale:".1",position:[-3.5,-10.5,0]})}),(0,h.jsx)("pointLight",{ref:n,args:["white",2,20,30],castShadow:!0,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024}),(0,h.jsx)("mesh",{material:S,children:(0,h.jsx)("sphereGeometry",{args:[1.2]})})]})},k=function(){var e=(0,y.w)(),n=e.scene,t=e.camera,r=e.gl;return(0,g.useEffect)((function(){t.position.set(0,0,5),t.lookAt(0,0,0),r.outputEncoding=b.sRGBEncoding,r.toneMapping=b.ACESFilmicToneMapping,r.toneMappingExposure=1,r.setPixelRatio(devicePixelRatio),r.shadowMap.enabled=!0,n.fog=new b.Fog("black",0,10)}),[]),(0,h.jsx)(A,{})};const P=function(){return(0,h.jsx)(g.Suspense,{children:(0,h.jsx)(m.Xz,{gl:{antialias:!0},camera:{fov:10},children:(0,h.jsx)(k,{})})})};function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){M(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function M(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var G={Aglaea:{lookAt:new b.Vector3(-1.45568164297599,1.0444831403047026,-1.7386373643011563),camera:new b.Vector3(1.8248980868051587,1.8617581461110024,-.8331771490330537)},Thalia:{lookAt:new b.Vector3(-.948630257329178,1.2144656583626912,-2.3645079129428073),camera:new b.Vector3(-1.1302020853724541,1.231926905264657,1.6313307695014245)},Euphere:{lookAt:new b.Vector3(1.463857397681405,.7472196560156306,-2.899828167305814),camera:new b.Vector3(-1.8748439328218733,.3370746332716125,-.735375699356021)}},I=function(e){var n=e.data,t=O().model,r=(0,g.useRef)(),o=z((0,g.useState)({current:{camera:new b.Vector3(0,0,5),lookAt:new b.Vector3},target:G.Euphere}),2),i=o[0],a=o[1];return(0,g.useEffect)((function(){a((function(e){return T(T({},e),{},{target:G[n]})}))}),[n]),(0,y.x)((function(e){var n=e.camera;a((function(e){return JSON.stringify(e.current)===JSON.stringify(e.target)||(e.current.camera.lerp(e.target.camera,.05),e.current.lookAt.lerp(e.target.lookAt,.05)),e})),n.position.copy(i.current.camera),n.lookAt(i.current.lookAt)})),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("group",{ref:r,scale:1.5,children:(0,h.jsx)("primitive",{object:t,scale:".1",position:[-3.5,-10.5,0],name:"model"})}),(0,h.jsx)("pointLight",{args:["white",2,30,30],position:[0,0,-2],castShadow:!0,"shadow-mapSize-width":2048,"shadow-mapSize-height":2048}),(0,h.jsx)("pointLight",{position:[-5,0,1],decay:20,castShadow:!0,"shadow-mapSize-width":2048,"shadow-mapSize-height":2048})]})},R=function(e){var n=e.data,t=(0,y.w)(),r=t.scene,o=t.camera,i=t.gl;return(0,g.useEffect)((function(){o.near=0,i.outputEncoding=b.sRGBEncoding,i.toneMapping=b.ACESFilmicToneMapping,i.toneMappingExposure=1,i.setPixelRatio(devicePixelRatio),i.shadowMap.enabled=!0,r.fog=new b.Fog("black",0,10)}),[]),(0,h.jsx)(I,{data:n})};const D=function(e){var n=e.data;return(0,h.jsx)(g.Suspense,{children:(0,h.jsx)(m.Xz,{gl:{antialias:!0},children:(0,h.jsx)(R,{data:n})})})};var H,_,Z,V;function F(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}const B=i.ZP.section(H||(H=F(["\n  background-color: var(--black);\n  min-height: 120vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"])));var L=i.ZP.nav(_||(_=F(['\n  z-index: 2;\n  & > ul {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    & > li {\n      position: relative;\n      margin-top: 10px;\n      padding: 10px 20px;\n      font-family: "Inter", sans-serif;\n      font-size: 11px;\n      letter-spacing: 3px;\n      &:hover::after,\n      &.ART::after {\n        display: block;\n        content: "";\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 25%;\n        height: 2px;\n        border-radius: 100vmax;\n        background-color: var(--text);\n        opacity: 0.9;\n      }\n    }\n  }\n  @media screen and (max-width: 700px) {\n    overflow: hidden;\n    height: 24px;\n    width: 15px;\n    border-left: 6px solid white;\n    border-right: 6px solid white;\n    border-radius: 5px;\n    align-self: flex-end;\n    margin-top: 15px;\n    margin-right: 15px;\n\n    &:hover,\n    &:focus,\n    &:active {\n      position: relative;\n      margin-top: 0px;\n      margin-right: 0px;\n      border: none;\n      width: 80vw;\n      min-height: 100vh;\n      transition: 0.5s;\n      background-color: white;\n      & > ul {\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        & > li {\n          color: black;\n          &::after {\n            background-color: black;\n          }\n        }\n      }\n    }\n  }\n']))),N=i.ZP.div(Z||(Z=F(['\n  z-index: 2;\n  max-width: 600px;\n  color: white;\n  padding: 0 10px;\n  padding-bottom: 10vh;\n  & > h1 {\n    padding-bottom: 25px;\n    text-align: center;\n    letter-spacing: 15px;\n    &::after {\n      content: "";\n      display: block;\n      position: absolute;\n      left: 50%;\n      bottom: 0;\n      transform: translateX(-50%);\n      width: 40px;\n      height: 2px;\n      border-radius: 100vmax;\n      background-color: var(--text);\n    }\n  }\n  & > h2 {\n    text-align: center;\n    font-style: italic;\n    letter-spacing: 5px;\n  }\n  & > p {\n    padding-top: 30px;\n    background-image: linear-gradient(to top, black, transparent);\n  }\n']))),X=i.ZP.div(V||(V=F(["\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n"]))),U={nav:["ART","ABOUT","VISIT","SHOP","SEARCH"],title:["The","THREE GRACES"],info:"Antonio Canova' s statue The Three Graces is a Neoclassical sculpture,\n    in marble, of the mythological three Charites, daughters of Zeus –\n    identified on some engravings of the statue as, from left to right,\n    Euphrosyne, Aglaea and Thalia – who were said to represent\n    youth/beauty (Thalia), mirth (Euphrosyne), and elegance (Aglaea). The\n    Graces presided over banquets and gatherings, to delight the guests of\n    the gods."};const J=function(){return(0,h.jsxs)(B,{children:[(0,h.jsx)(X,{children:(0,h.jsx)(P,{})}),(0,h.jsx)(L,{children:(0,h.jsx)("ul",{children:U.nav.map((function(e){return(0,h.jsx)("li",{className:e,children:e})}))})}),(0,h.jsxs)(N,{children:[(0,h.jsx)("h2",{children:U.title[0]}),(0,h.jsx)("h1",{children:U.title[1]}),(0,h.jsx)("p",{children:U.info})]})]})};var K,$,q;function W(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}const Y=i.ZP.section(K||(K=W(["\n  min-height: 80vh;\n  width: 100vw;\n  background-color: var(--gray);\n  display: flex;\n  align-items: center;\n  & > div {\n    flex: 4.5;\n    height: 100%;\n    min-height: 300px;\n  }\n  @media screen and (max-width: 700px) {\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    min-height: 100vh;\n    & > aside {\n      width: 100%;\n      padding: 20px 40px;\n      & > p {\n        max-width: fit-content;\n      }\n    }\n    & > div {\n      width: 100%;\n      position: relative;\n      height: 50%;\n    }\n  }\n"])));var Q=i.ZP.aside($||($=W(['\n  position: relative;\n  flex: 5.5;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding-left: 75px;\n  padding-right: 20px;\n  gap: 24px;\n  z-index: 2;\n  & > ul {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: 25px;\n    & > li {\n      font-size: 30px;\n      padding-bottom: 18px;\n      font-family: "Yeseva One", cursive;\n      font-family: "Bodoni Moda", serif;\n      font-family: "Playfair Display", serif;\n      opacity: 0.3;\n      cursor: pointer;\n      &.active {\n        opacity: 1;\n      }\n    }\n    &::after {\n      display: block;\n      content: "";\n      width: 12%;\n      height: 2px;\n      border-radius: 100vmax;\n      background-color: white;\n      position: absolute;\n      bottom: 0;\n      transition: 0.5s;\n    }\n    &.Aglaea::after {\n      left: 0;\n    }\n    &.Thalia::after {\n      left: 47%;\n      transform: translateX(-50%);\n    }\n    &.Euphere::after {\n      width: 16%;\n      left: 100%;\n      transform: translateX(-100%);\n    }\n  }\n\n  & > p {\n    font-size: 12px;\n    line-height: 25px;\n    opacity: 0.6;\n    max-width: 440px;\n  }\n']))),ee=i.ZP.button(q||(q=W(["\n  background-color: transparent;\n  color: var(--text);\n  opacity: 0.4;\n  font-size: 12px;\n  padding-top: 10px;\n  cursor: pointer;\n"])));function ne(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return te(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return te(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var re={graces:{Aglaea:"Aglace is the Greek goddess of beauty, splendor, glory and magnificence. She is the youngest of the Charites according to Hesiod. Aglaea is one of three daughters of Zeus and either the Oceanid Eurynome, or of Eunomia, the goddess of good order and lawful conduct.",Thalia:"Thalia, in Greek religion, one of the nine Muses, patron of comedy; also, according to the Greek poet Hesiod, a Grace (one of a group of goddesses of fertility). She is the mother of the Corybantes, celebrants of the Great Mother of the Gods, Cybele, the father being Apollo, a god related to music and dance. In her hands she carried the comic mask and the shepherd’s staff.",Euphere:'Euphrosyne is a Goddess of Good Cheer, Joy and Mirth. Her name is the female version of a Greek word euphrosynos, which means "merriment". The Greek poet Pindar states that these goddesses were created to fill the world with pleasant moments and good will. Usually the Charites attended the goddess of beauty Aphrodite.'}};const oe=function(){var e=ne((0,g.useState)("Aglaea"),2),n=e[0],t=e[1],r=function(e){var n=e.target;return t(n.id)};return(0,h.jsxs)(Y,{children:[(0,h.jsxs)(Q,{children:[(0,h.jsx)("ul",{className:n,children:Object.entries(re.graces).map((function(e){var t=ne(e,1)[0];return(0,h.jsx)("li",{id:t,onClick:r,className:n===t?"active":"",children:t},t)}))}),(0,h.jsx)("p",{children:re.graces[n]}),(0,h.jsx)(ee,{type:"button",children:"READ MORE"})]}),(0,h.jsx)("div",{children:(0,h.jsx)(D,{data:n})})]})};var ie=function(){return(0,h.jsxs)(p,{children:[(0,h.jsx)(J,{}),(0,h.jsx)(oe,{})]})};(0,o.s)(document.querySelector("#root")).render((0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{}),(0,h.jsx)(ie,{})]}))}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=(n,t,o,i)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,o,i]=e[u],s=!0,l=0;l<t.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](t[l])))?t.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,o,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var o,i,[a,s,l]=t,c=0;if(a.some((n=>0!==e[n]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var u=l(r)}for(n&&n(t);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},t=self.webpackChunk_guhcalm_minimal_boilerplate=self.webpackChunk_guhcalm_minimal_boilerplate||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=r.O(void 0,[977],(()=>r(570)));o=r.O(o)})();