(()=>{"use strict";var e,n={995:(e,n,t)=>{var r=t(745),o=t(294),a=t(477),i=t(893);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){f(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d,p={model:new a.Group,grace:"Aglaea"},h=function(e,n){var t=n.type,r=n.payload;return{LOAD_MODEL:u(u({},e),{},{model:r}),SET_GRACE:u(u({},e),{},{grace:r})}[t]},g={loadModel:function(e){return{type:"LOAD_MODEL",payload:e}},setGrace:function(e){return{type:"SET_GRACE",payload:e}}},m=(0,o.createContext)(null),y=function(){return(0,o.useContext)(m)},b=function(e){var n=e.children,t=s((0,o.useReducer)(h,p),2),r=t[0],a=t[1];return(0,i.jsx)(m.Provider,{value:{state:r,dispatch:a,actions:g},children:n})},v=(0,o.createContext)(null),x=function(){return(0,o.useContext)(v)},w=function(e){var n=e.value,t=e.children;return(0,i.jsx)(v.Provider,{value:n,children:t})},j=t(804);const O=(0,j.vJ)(d||(A=["\n@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');\n  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\n  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,500&display=swap');\n  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');\n\n  @font-face {\n    font-family: Prospectus;\n    src: url(\"assets/fonts/Prospectus/Prospectus-SemiBold.otf\")\n  }\n\n  *,\n  *::before,\n  *::after {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n    font-smooth: always;\n  }\n\n  ::-webkit-scrollbar {\n    width: 0px;\n  }\n\n  :root {\n    --black: rgb(2,2,2);\n    --gray: rgb(22,24,25);\n    --blue: rgb(24,38,59);\n    --blue-on-light: rgb(41, 63, 96);\n    --green: rgb(39,72,62);\n    --bege: rgb(182, 129, 89);\n    --text: white;\n  }\n\n  body,\n  #root {\n    width: 100vw;\n    height: 100vh;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n  }\n\n  html, body, #root {\n    background-color: var(--gray);\n  }\n\n  h1, h2, p, span, li {\n    color: var(--text);\n    list-style: none;\n  }\n\n  h1 {\n    position: relative;\n    font-weight: 100;\n    font-family: Prospectus;\n    font-size: 50px;\n  }\n  h2 {\n    font-weight: 100;\n    font-size: 30px;\n    font-family: Prospectus;\n  }\n  p {\n    font-family: \"Inter\", sans-serif;\n    text-align: justify;\n    font-size: 14px;\n  }\n"],P||(P=A.slice(0)),d=Object.freeze(Object.defineProperties(A,{raw:{value:Object.freeze(P)}}))));var A,P,S,k;!function(e){e[e.LIGHT=0]="LIGHT",e[e.DARK=1]="DARK"}(S||(S={})),function(e){e[e.SWITCH_THEME=0]="SWITCH_THEME"}(k||(k={}));S.DARK,S.LIGHT;var E;const T=j.ZP.div(E||(E=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: var(--gray);\n"]))),C=function(e){var n=e.children;return(0,i.jsx)(T,{"data-layout":"",children:n})};var M=t(240),z=t(497),D=function(){var e=(0,o.useRef)(null);return(0,z.x)((function(n){var t,r=n.raycaster,o=n.mouse,a=n.camera;r.setFromCamera(o,a);var i=r.ray.direction.multiplyScalar(Math.min(Math.abs(o.x)+Math.abs(o.y)+4,5.5)).add(a.position);null===(t=e.current)||void 0===t||t.position.lerp(i,.05)})),(0,i.jsxs)("group",{children:[(0,i.jsx)("group",{scale:.12,children:(0,i.jsx)("primitive",{object:x().state.model.clone()})}),(0,i.jsx)("pointLight",{ref:e,args:["white",1,20,40],castShadow:!0}),(0,i.jsxs)("mesh",{children:[(0,i.jsx)("sphereGeometry",{args:[1.2]}),(0,i.jsx)("meshStandardMaterial",{color:"rgb(0,0,2)",roughness:.5,metalness:0,side:a.BackSide})]})]})};const G=function(){return(0,i.jsx)(M.Xz,{gl:{antialias:!1,powerPreference:"high-performance",stencil:!1,logarithmicDepthBuffer:!0,alpha:!1},camera:{fov:10},onCreated:function(e){var n=e.camera,t=e.gl,r=e.scene;n.position.set(0,0,5),n.lookAt(0,0,0),n.near=.1,n.far=15,t.setPixelRatio(.9*Math.min(devicePixelRatio,2)),r.background=new a.Color("rgb(2,2,2)")},children:(0,i.jsx)(w,{value:y(),children:(0,i.jsx)(D,{})})})};var I={Aglaea:{lookAt:new a.Vector3(-1.45568164297599,1.0444831403047026,-1.7386373643011563),camera:new a.Vector3(1.8248980868051587,1.8617581461110024,-.8331771490330537)},Thalia:{lookAt:new a.Vector3(-.948630257329178,1.2144656583626912,-2.3645079129428073),camera:new a.Vector3(-1.1302020853724541,1.231926905264657,1.6313307695014245)},Euphere:{lookAt:new a.Vector3(1.463857397681405,.7472196560156306,-2.899828167305814),camera:new a.Vector3(-1.8748439328218733,.3370746332716125,-.735375699356021)}};function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){H(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function H(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function L(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return Z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Z(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var V=function(){var e=x().state,n=e.model,t=e.grace,r=L((0,o.useState)({current:{camera:new a.Vector3,lookAt:new a.Vector3},target:I.Aglaea}),2),s=(r[0],r[1]);return(0,o.useEffect)((function(){return s((function(e){return _(_({},e),{},{target:I[t]})}))}),[t]),(0,z.x)((function(e){var n=e.camera;return s((function(e){if(JSON.stringify(e.current)===JSON.stringify(e.target))return e;var t=e.current,r=e.target;return t.camera.lerp(r.camera,.05),t.lookAt.lerp(r.lookAt,.05),n.position.copy(t.camera),n.lookAt(t.lookAt),e}))})),(0,i.jsxs)("group",{children:[(0,i.jsx)("group",{scale:1.5,children:(0,i.jsx)("primitive",{object:n,name:"model"})}),(0,i.jsx)("pointLight",{args:["white",2,30,30],position:[0,0,-2],castShadow:!0}),(0,i.jsx)("pointLight",{position:[-5,0,1],decay:20,castShadow:!0})]})};const B=function(){return(0,i.jsx)(M.Xz,{gl:{antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!0},onCreated:function(e){var n=e.camera,t=e.gl,r=e.scene;n.position.set(0,0,5),n.lookAt(0,0,0),n.near=.1,n.far=15,t.setPixelRatio(.9*Math.min(devicePixelRatio,2)),r.fog=new a.Fog("black",0,15)},children:(0,i.jsx)(w,{value:y(),children:(0,i.jsx)(V,{})})})};var N=t(217),U=t(854);var X,J,K,$;function q(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}const F=j.ZP.section(X||(X=q(["\n  background-color: var(--black);\n  min-height: 120vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"])));var W=j.ZP.nav(J||(J=q(['\n  z-index: 2;\n  & > ul {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    & > li {\n      position: relative;\n      margin-top: 10px;\n      padding: 10px 20px;\n      font-family: "Inter", sans-serif;\n      font-size: 11px;\n      letter-spacing: 3px;\n      &:hover::after,\n      &.ART::after {\n        display: block;\n        content: "";\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 25%;\n        height: 2px;\n        border-radius: 100vmax;\n        background-color: var(--text);\n        opacity: 0.9;\n      }\n    }\n  }\n  @media screen and (max-width: 700px) {\n    overflow: hidden;\n    height: 24px;\n    width: 15px;\n    border-top: 2px solid white;\n    border-bottom: 2px solid white;\n    border-radius: 50%;\n    align-self: flex-end;\n    margin-top: 15px;\n    margin-right: 15px;\n\n    &:hover,\n    &:focus,\n    &:active {\n      position: relative;\n      margin-top: 0px;\n      margin-right: 0px;\n      border: none;\n      width: 80vw;\n      min-height: 100vh;\n      transition: 0.5s;\n      background-color: white;\n      border-radius: 5px;\n      & > ul {\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        & > li {\n          color: black;\n          &::after {\n            background-color: black;\n          }\n        }\n      }\n    }\n  }\n']))),Y=j.ZP.div(K||(K=q(['\n  z-index: 2;\n  max-width: 600px;\n  color: white;\n  padding: 0 10px;\n  padding-bottom: 10vh;\n  & > h1 {\n    padding-bottom: 25px;\n    text-align: center;\n    letter-spacing: 15px;\n    &::after {\n      content: "";\n      display: block;\n      position: absolute;\n      left: 50%;\n      bottom: 0;\n      transform: translateX(-50%);\n      width: 40px;\n      height: 2px;\n      border-radius: 100vmax;\n      background-color: var(--text);\n    }\n  }\n  & > h2 {\n    text-align: center;\n    font-style: italic;\n    letter-spacing: 5px;\n  }\n  & > p {\n    padding-top: 30px;\n    background-image: linear-gradient(to top, black, transparent);\n  }\n']))),Q=j.ZP.div($||($=q(["\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n"]))),ee={nav:["ART","ABOUT","VISIT","SHOP","SEARCH"],title:["The","THREE GRACES"],info:"Antonio Canova' s statue The Three Graces is a Neoclassical sculpture,\n    in marble, of the mythological three Charites, daughters of Zeus –\n    identified on some engravings of the statue as, from left to right,\n    Euphrosyne, Aglaea and Thalia – who were said to represent\n    youth/beauty (Thalia), mirth (Euphrosyne), and elegance (Aglaea). The\n    Graces presided over banquets and gatherings, to delight the guests of\n    the gods."};const ne=function(){return(0,i.jsxs)(F,{children:[(0,i.jsx)(Q,{children:(0,i.jsx)(G,{})}),(0,i.jsx)(W,{children:(0,i.jsx)("ul",{children:ee.nav.map((function(e){return(0,i.jsx)("li",{className:e,children:e})}))})}),(0,i.jsxs)(Y,{children:[(0,i.jsx)("h2",{children:ee.title[0]}),(0,i.jsx)("h1",{children:ee.title[1]}),(0,i.jsx)("p",{children:ee.info})]})]})};var te,re,oe;function ae(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}const ie=j.ZP.section(te||(te=ae(["\n  min-height: 80vh;\n  width: 100vw;\n  background-color: var(--gray);\n  display: flex;\n  align-items: center;\n  & > div {\n    flex: 4.5;\n    height: 100%;\n    min-height: 300px;\n  }\n  @media screen and (max-width: 700px) {\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    min-height: 100vh;\n    & > aside {\n      width: 100%;\n      padding: 20px 40px;\n      & > p {\n        max-width: fit-content;\n      }\n    }\n    & > div {\n      width: 100%;\n      position: relative;\n      height: 50%;\n    }\n  }\n"])));var se=j.ZP.aside(re||(re=ae(['\n  position: relative;\n  flex: 5.5;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding-left: 75px;\n  padding-right: 20px;\n  gap: 24px;\n  z-index: 2;\n  & > ul {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: 25px;\n    & > li {\n      font-size: 30px;\n      padding-bottom: 18px;\n      font-family: "Yeseva One", cursive;\n      font-family: "Bodoni Moda", serif;\n      font-family: "Playfair Display", serif;\n      opacity: 0.3;\n      cursor: pointer;\n      &.active {\n        opacity: 1;\n      }\n    }\n    &::after {\n      display: block;\n      content: "";\n      width: 12%;\n      height: 2px;\n      border-radius: 100vmax;\n      background-color: white;\n      position: absolute;\n      bottom: 0;\n      transition: 0.5s;\n    }\n    &.Aglaea::after {\n      left: 0;\n    }\n    &.Thalia::after {\n      left: 47%;\n      transform: translateX(-50%);\n    }\n    &.Euphere::after {\n      width: 16%;\n      left: 100%;\n      transform: translateX(-100%);\n    }\n  }\n\n  & > p {\n    font-size: 12px;\n    line-height: 25px;\n    opacity: 0.6;\n    max-width: 440px;\n  }\n']))),le=j.ZP.button(oe||(oe=ae(["\n  background-color: transparent;\n  color: var(--text);\n  opacity: 0.4;\n  font-size: 12px;\n  padding-top: 10px;\n  cursor: pointer;\n"])));function ce(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return ue(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ue(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var fe={graces:{Aglaea:"Aglace is the Greek goddess of beauty, splendor, glory and magnificence. She is the youngest of the Charites according to Hesiod. Aglaea is one of three daughters of Zeus and either the Oceanid Eurynome, or of Eunomia, the goddess of good order and lawful conduct.",Thalia:"Thalia, in Greek religion, one of the nine Muses, patron of comedy; also, according to the Greek poet Hesiod, a Grace (one of a group of goddesses of fertility). She is the mother of the Corybantes, celebrants of the Great Mother of the Gods, Cybele, the father being Apollo, a god related to music and dance. In her hands she carried the comic mask and the shepherd’s staff.",Euphere:'Euphrosyne is a Goddess of Good Cheer, Joy and Mirth. Her name is the female version of a Greek word euphrosynos, which means "merriment". The Greek poet Pindar states that these goddesses were created to fill the world with pleasant moments and good will. Usually the Charites attended the goddess of beauty Aphrodite.'}};const de=function(){var e=y(),n=e.state,t=e.dispatch,r=e.actions,o=n.grace,a=function(e){var n=e.target;return t(r.setGrace(n.id))};return(0,i.jsxs)(ie,{children:[(0,i.jsxs)(se,{children:[(0,i.jsx)("ul",{className:o,children:Object.entries(fe.graces).map((function(e){var n=ce(e,1)[0];return(0,i.jsx)("li",{id:n,onClick:a,className:o===n?"active":"",children:n},n)}))}),(0,i.jsx)("p",{children:fe.graces[o]}),(0,i.jsx)(le,{type:"button",children:"READ MORE"})]}),(0,i.jsx)("div",{children:(0,i.jsx)(B,{})})]})};var pe=function(){return function(){var e=y(),n=e.dispatch,t=e.actions;(0,o.useEffect)((function(){(new N.E).setDRACOLoader((new U._).setDecoderPath("https://www.gstatic.com/draco/v1/decoders/").setDecoderConfig({type:"js"})).load("./assets/model/graces.glb",(function(e){var r=e.scene;r.traverse((function(e){e instanceof a.Mesh&&(e.matrixAutoUpdate=!1,e.castShadow=!1,e.receiveShadow=!1,e.material.dispose(),e.material=new a.MeshStandardMaterial({color:"white",roughness:1,metalness:.5}))})),r.position.set(-.2,-2.23,-1.9),n(t.loadModel(r))}))}),[])}(),(0,i.jsxs)(C,{children:[(0,i.jsx)(ne,{}),(0,i.jsx)(de,{})]})};(0,r.s)(document.querySelector("#root")).render((0,i.jsxs)(b,{children:[(0,i.jsx)(O,{}),(0,i.jsx)(pe,{})]}))}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return n[e](a,a.exports,r),a.exports}r.m=n,e=[],r.O=(n,t,o,a)=>{if(!t){var i=1/0;for(u=0;u<e.length;u++){for(var[t,o,a]=e[u],s=!0,l=0;l<t.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](t[l])))?t.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,o,a]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var o,a,[i,s,l]=t,c=0;if(i.some((n=>0!==e[n]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var u=l(r)}for(n&&n(t);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},t=self.webpackChunk_guhcalm_minimal_boilerplate=self.webpackChunk_guhcalm_minimal_boilerplate||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=r.O(void 0,[977],(()=>r(995)));o=r.O(o)})();