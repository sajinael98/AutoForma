import{A as i}from"./AutoForm-sj98sMsr.js";import"./iframe-DJjTpFA-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoLUOrVx.js";import"./index-Dm25vUe4.js";const c={title:"AutoForm/04-ReadOnly",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
This section demonstrates how to render a form in read-only mode.

When a form is marked as read-only, all fields are displayed
but cannot be edited by the user.
        `}}},argTypes:{onSubmit:{action:"submit"}}},r=[{name:"name",label:"Name",type:"text"},{name:"email",label:"Email",type:"text"}],e={parameters:{docs:{description:{story:`
This story renders the form in read-only mode.

All fields are populated using initial values
and user input is disabled.
        `},source:{code:`
<AutoForm
  schema={[
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
  ]}
  readOnly
  initialValues={() => ({
    name: "Saji",
    email: "saji@mail.com",
  })}
/>
        `}}},args:{schema:r,readOnly:!0,initialValues:()=>({name:"Saji",email:"saji@mail.com"})}};var a,n,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
This story renders the form in read-only mode.

All fields are populated using initial values
and user input is disabled.
        \`
      },
      source: {
        code: \`
<AutoForm
  schema={[
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
  ]}
  readOnly
  initialValues={() => ({
    name: "Saji",
    email: "saji@mail.com",
  })}
/>
        \`
      }
    }
  },
  args: {
    schema,
    readOnly: true,
    initialValues: () => ({
      name: "Saji",
      email: "saji@mail.com"
    })
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const p=["ReadOnlyForm"];export{e as ReadOnlyForm,p as __namedExportsOrder,c as default};
