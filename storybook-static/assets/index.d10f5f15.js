import{e as r,j as u}from"./jsx-runtime.7891fad5.js";const s=r.createContext({});function l(t){return n;function n(o){const e=i(o.components);return u(t,{...o,allComponents:e})}}function i(t){const n=r.useContext(s);return r.useMemo(()=>typeof t=="function"?t(n):{...n,...t},[n,t])}const a={};function C({components:t,children:n,disableParentContext:o}){let e;return o?e=typeof t=="function"?t({}):t||a:e=i(t),u(s.Provider,{value:e,children:n})}export{s as M,C as a,i as u,l as w};
//# sourceMappingURL=index.d10f5f15.js.map
