import{j as e}from"./iframe-CK_zX8fh.js";import{A as y}from"./AutoForm-BPR0sNsg.js";import"./preload-helper-Dp1pzeXC.js";const c=({fieldSchema:n,register:r})=>e.jsxs("div",{style:{border:"1px dashed #999",padding:12},children:[e.jsxs("label",{style:{display:"block",marginBottom:4},children:[n.label," (custom by type)"]}),e.jsx("input",{...r,placeholder:"Rendered by type"})]}),p=({fieldSchema:n,register:r})=>e.jsxs("div",{style:{border:"1px solid #4c6ef5",padding:12},children:[e.jsxs("label",{style:{display:"block",marginBottom:4},children:[n.label," (custom by name)"]}),e.jsx("input",{...r,placeholder:"Rendered by name"})]}),x={title:"AutoForma/Form/Customization",tags:["autodocs"],parameters:{docs:{canvas:{hidden:!0},description:{component:`
### Form Customization

AutoForma allows customizing how fields are rendered using \`uiConfig\`.

Customization can be applied:
- **by field type** → affects all fields of that type
- **by field name** → affects a specific field only
        `}}}},t={render:()=>e.jsx(y,{schema:[{type:"text",name:"firstName",label:"First Name"},{type:"text",name:"lastName",label:"Last Name"},{type:"number",name:"age",label:"Age (default renderer)"}],uiConfig:{renderersByType:{text:c}},values:async()=>({}),onSubmit:n=>console.log(n)}),parameters:{docs:{description:{story:`
This example customizes rendering **by field type**.

All fields with type \`text\` will use the same custom renderer.
Other field types remain unaffected.
        `},source:{code:`
const TextRendererByType = ({ fieldSchema, register }) => {
  return (
    <div style={{ border: '1px dashed #999', padding: 12 }}>
      <label style={{ display: 'block', marginBottom: 4 }}>
        {fieldSchema.label} (custom by type)
      </label>
      <input {...register} placeholder="Rendered by type" />
    </div>
  )
}

<AutoForm
  schema={[
    { type: 'text', name: 'firstName', label: 'First Name' },
    { type: 'text', name: 'lastName', label: 'Last Name' },
    { type: 'number', name: 'age', label: 'Age' },
  ]}
  uiConfig={{
    renderersByType: {
      text: TextRendererByType,
    },
  }}
/>
        `}}}},a={render:()=>e.jsx(y,{schema:[{type:"text",name:"username",label:"Username"},{type:"text",name:"email",label:"Email (default renderer)"}],uiConfig:{renderersByName:{username:p}},values:async()=>({}),onSubmit:n=>console.log(n)}),parameters:{docs:{description:{story:`
This example customizes rendering **by field name**.

Only the \`username\` field is affected.
Other fields with the same type continue using the default renderer.
        `},source:{code:`
const TextRendererByName = ({ fieldSchema, register }) => {
  return (
    <div style={{ border: '1px solid #4c6ef5', padding: 12 }}>
      <label style={{ display: 'block', marginBottom: 4 }}>
        {fieldSchema.label} (custom by name)
      </label>
      <input {...register} placeholder="Rendered by name" />
    </div>
  )
}

<AutoForm
  schema={[
    { type: 'text', name: 'username', label: 'Username' },
    { type: 'text', name: 'email', label: 'Email' },
  ]}
  uiConfig={{
    renderersByName: {
      username: TextRendererByName,
    },
  }}
/>
        `}}}};var s,l,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'text',
    name: 'firstName',
    label: 'First Name'
  }, {
    type: 'text',
    name: 'lastName',
    label: 'Last Name'
  }, {
    type: 'number',
    name: 'age',
    label: 'Age (default renderer)'
  }]} uiConfig={{
    renderersByType: {
      text: TextRendererByType
    }
  }} values={async () => ({})} onSubmit={values => console.log(values)} />,
  parameters: {
    docs: {
      description: {
        story: \`
This example customizes rendering **by field type**.

All fields with type \\\`text\\\` will use the same custom renderer.
Other field types remain unaffected.
        \`
      },
      source: {
        code: \`
const TextRendererByType = ({ fieldSchema, register }) => {
  return (
    <div style={{ border: '1px dashed #999', padding: 12 }}>
      <label style={{ display: 'block', marginBottom: 4 }}>
        {fieldSchema.label} (custom by type)
      </label>
      <input {...register} placeholder="Rendered by type" />
    </div>
  )
}

<AutoForm
  schema={[
    { type: 'text', name: 'firstName', label: 'First Name' },
    { type: 'text', name: 'lastName', label: 'Last Name' },
    { type: 'number', name: 'age', label: 'Age' },
  ]}
  uiConfig={{
    renderersByType: {
      text: TextRendererByType,
    },
  }}
/>
        \`
      }
    }
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var i,d,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'text',
    name: 'username',
    label: 'Username'
  }, {
    type: 'text',
    name: 'email',
    label: 'Email (default renderer)'
  }]} uiConfig={{
    renderersByName: {
      username: TextRendererByName
    }
  }} values={async () => ({})} onSubmit={values => console.log(values)} />,
  parameters: {
    docs: {
      description: {
        story: \`
This example customizes rendering **by field name**.

Only the \\\`username\\\` field is affected.
Other fields with the same type continue using the default renderer.
        \`
      },
      source: {
        code: \`
const TextRendererByName = ({ fieldSchema, register }) => {
  return (
    <div style={{ border: '1px solid #4c6ef5', padding: 12 }}>
      <label style={{ display: 'block', marginBottom: 4 }}>
        {fieldSchema.label} (custom by name)
      </label>
      <input {...register} placeholder="Rendered by name" />
    </div>
  )
}

<AutoForm
  schema={[
    { type: 'text', name: 'username', label: 'Username' },
    { type: 'text', name: 'email', label: 'Email' },
  ]}
  uiConfig={{
    renderersByName: {
      username: TextRendererByName,
    },
  }}
/>
        \`
      }
    }
  }
}`,...(o=(d=a.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const g=["CustomizeByType","CustomizeByName"];export{a as CustomizeByName,t as CustomizeByType,g as __namedExportsOrder,x as default};
