import{j as i}from"./iframe-DJjTpFA-.js";import{A as a}from"./AutoForm-sj98sMsr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoLUOrVx.js";import"./index-Dm25vUe4.js";const f={title:"AutoForm/09-CustomFieldType",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
This section demonstrates how to add a custom field type to AutoForm.

AutoForm allows you to extend the supported field types
by providing custom renderers without modifying the core library.
        `}}},argTypes:{onSubmit:{action:"submit"}}},l=[{name:"color",label:"Color",type:"color",initialValue:"#ff0000"}],o={parameters:{docs:{description:{story:`
This story shows how to register and use a custom field type.

In this example, a new \`color\` field type is added using
a native HTML color input.
        `},source:{code:`
<AutoForm
  schema={[
    {
      name: "color",
      label: "Color",
      type: "color",
      initialValue: "#ff0000",
    },
  ]}
  uiConfig={{
    customTypeRenderers: {
      color: ({ field, form }) => (
        <input
          type="color"
          {...form.getInputProps(field.name)}
        />
      ),
    },
  }}
  onSubmit={(values) => {
    console.log(values);
  }}
/>
        `}}},args:{schema:l,uiConfig:{customTypeRenderers:{color:({field:r,form:s})=>i.jsx("input",{type:"color",...s.getInputProps(r.name)})}}}};var e,n,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
This story shows how to register and use a custom field type.

In this example, a new \\\`color\\\` field type is added using
a native HTML color input.
        \`
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "color",
      label: "Color",
      type: "color",
      initialValue: "#ff0000",
    },
  ]}
  uiConfig={{
    customTypeRenderers: {
      color: ({ field, form }) => (
        <input
          type="color"
          {...form.getInputProps(field.name)}
        />
      ),
    },
  }}
  onSubmit={(values) => {
    console.log(values);
  }}
/>
        \`
      }
    }
  },
  args: {
    schema,
    uiConfig: {
      customTypeRenderers: {
        color: ({
          field,
          form
        }) => <input type="color" {...form.getInputProps(field.name)} />
      }
    }
  }
}`,...(t=(n=o.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const y=["CustomColorField"];export{o as CustomColorField,y as __namedExportsOrder,f as default};
