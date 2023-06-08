import{j as z}from"./jsx-runtime.7891fad5.js";import"./_commonjsHelpers.712cc82f.js";const o=({size:s="normal",color:C="primary",customColor:L,label:t,allCaps:v=!1,..._})=>z("span",{className:`label ${s} text-${C}`,style:{color:L},..._,children:v?t.toUpperCase():t});try{o.displayName="Label",o.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Label",props:{allCaps:{defaultValue:{value:"false"},description:"To UpperCase the label content",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"What color of text to use",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},customColor:{defaultValue:null,description:"Choose custom color of text",name:"customColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"How large should the label be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},label:{defaultValue:null,description:"Label content",name:"label",required:!0,type:{name:"string"}}}}}catch{}const q={title:"UI/Label",component:o,tags:["autodocs"],argTypes:{color:{control:"select"},customColor:{control:"color"}}},e={args:{label:"Label"}},a={args:{size:"h1",label:"Label",allCaps:!1,color:"secondary"}},r={args:{size:"h1",label:"Label",color:"tertiary"}},l={args:{size:"h2",label:"Label",allCaps:!0}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,i,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'h1',
    label: 'Label',
    allCaps: false,
    color: 'secondary'
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,b,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'h1',
    label: 'Label',
    color: 'tertiary'
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,g,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'h2',
    label: 'Label',
    allCaps: true
  }
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const V=["Primary","Secondary","Tertiary","AllCaps"];export{l as AllCaps,e as Primary,a as Secondary,r as Tertiary,V as __namedExportsOrder,q as default};
//# sourceMappingURL=Label.stories.cc0f7c56.js.map
