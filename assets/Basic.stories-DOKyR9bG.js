import{A as t}from"./AutoForm-sj98sMsr.js";import"./iframe-DJjTpFA-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoLUOrVx.js";import"./index-Dm25vUe4.js";const l={title:"AutoForm/01-Basic",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
This section introduces the most basic usage of AutoForm.

AutoForm builds forms dynamically from a schema definition
and manages form state and submission automatically.
        `}}},argTypes:{onSubmit:{action:"submit"}}},e={parameters:{docs:{description:{story:`
Minimal AutoForm example.

This story demonstrates:
- how to define a minimal form schema
- how required fields are handled
- the default form submission behavior

Use this pattern as a starting point for building any form with AutoForm.
        `},source:{code:`
<AutoForm
  schema={[
    { name: "name", label: "Name", type: "text", required: true },
    { name: "age", label: "Age", type: "number" },
  ]}
  onSubmit={(values) => {
    console.log(values);
  }}
/>
        `}}},args:{schema:[{name:"name",label:"Name",type:"text",required:!0},{name:"age",label:"Age",type:"number"}]}};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Minimal AutoForm example.

This story demonstrates:
- how to define a minimal form schema
- how required fields are handled
- the default form submission behavior

Use this pattern as a starting point for building any form with AutoForm.
        \`
      },
      source: {
        code: \`
<AutoForm
  schema={[
    { name: "name", label: "Name", type: "text", required: true },
    { name: "age", label: "Age", type: "number" },
  ]}
  onSubmit={(values) => {
    console.log(values);
  }}
/>
        \`
      }
    }
  },
  args: {
    schema: [{
      name: "name",
      label: "Name",
      type: "text",
      required: true
    }, {
      name: "age",
      label: "Age",
      type: "number"
    }]
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const d=["Minimal"];export{e as Minimal,d as __namedExportsOrder,l as default};
