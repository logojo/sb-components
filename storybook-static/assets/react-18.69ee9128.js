import{j as c,r as a}from"./jsx-runtime.7891fad5.js";import{r as m}from"./index.bf963875.js";var n={},s=m.exports;n.createRoot=s.createRoot,n.hydrateRoot=s.hydrateRoot;var o=new Map,R=({callback:e,children:t})=>{let r=a.exports.useRef();return a.exports.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},l=async(e,t)=>{let r=await d(t);return new Promise(u=>{r.render(c(R,{callback:()=>u(null),children:e}))})},f=(e,t)=>{let r=o.get(e);r&&(r.unmount(),o.delete(e))},d=async e=>{let t=o.get(e);return t||(t=n.createRoot(e),o.set(e,t)),t};export{l as r,f as u};
//# sourceMappingURL=react-18.69ee9128.js.map
