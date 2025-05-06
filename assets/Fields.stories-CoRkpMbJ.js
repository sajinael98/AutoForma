import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as B,G as m,a as v,B as J}from"./AutoForm-CEr4m2za.js";import"./index-D4lIrffr.js";import"./get-contrast-color-Db6nT3bs.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const _=[{type:"text",name:"firstName",label:"First Name",initialValue:"John"}],w=[{type:"number",name:"age",label:"Age",initialValue:30}],M=[{type:"select",name:"gender",label:"Gender",data:[{label:"Male",value:"male"},{label:"Female",value:"female"}],initialValue:"male"}],R=[{type:"check",name:"enabled",label:"Enabled",initialValue:!0}],q=[{type:"date",name:"birthDate",label:"Birth Date",initialValue:new Date}],z=[{type:"array",name:"tags",label:"Tags",fields:[{type:"text",name:"tag",label:"Tag"}]}],H=[{type:"object",name:"address",label:"Address",fields:[{type:"text",name:"street",label:"Street"},{type:"text",name:"city",label:"City"}]}],W={title:"components/Fields",component:B,tags:["autodocs"],args:{onSubmit:a=>alert(JSON.stringify(a,null,2)),container:(a,i,O)=>e.jsxs(e.Fragment,{children:[e.jsx(m,{children:a}),!O&&e.jsx(v,{justify:"flex-end",children:e.jsx(J,{onClick:i,children:"Submit"})})]}),fieldContainer:(a,i)=>e.jsx(m.Col,{span:{base:12,md:i.type==="object"?12:6},children:a})},argTypes:{onSubmit:{table:{disable:!0}},container:{table:{disable:!0}},fieldContainer:{table:{disable:!0}},schema:{description:"Array of field definitions used to render the form. Each item defines one input field.",control:!1}}},r={args:{schema:_}},s={args:{schema:w}},t={args:{schema:M}},c={args:{schema:R}},l={args:{schema:q}},n={args:{schema:z}},o={args:{schema:H}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    schema: textFieldSchema
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,b,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    schema: numberFieldSchema
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var F,S,y;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    schema: selectFieldSchema
  }
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,x,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    schema: checkFieldSchema
  }
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var A,C,k;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    schema: dateFieldSchema
  }
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var D,N,T;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    schema: arrayFieldSchema
  }
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var V,E,G;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    schema: objectFieldSchema
  }
}`,...(G=(E=o.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};const X=["TextField","NumberField","SelectField","CheckField","DateField","ArrayField","ObjectField"];export{n as ArrayField,c as CheckField,l as DateField,s as NumberField,o as ObjectField,t as SelectField,r as TextField,X as __namedExportsOrder,W as default};
