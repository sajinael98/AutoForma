import{j as r}from"./iframe-DJjTpFA-.js";import{A as a,T as l}from"./AutoForm-sj98sMsr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoLUOrVx.js";import"./index-Dm25vUe4.js";const f={title:"AutoForm/07-CustomizeField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
This section demonstrates how to customize the UI of an existing field type.

Unlike custom field types, this approach keeps the same field type
but overrides its visual representation.
        `}}},argTypes:{onSubmit:{action:"submit"}}},e={parameters:{docs:{description:{story:"\nThis story customizes the default `text` field renderer.\n\nThe field type remains `text`, but its UI is replaced\nwith a fully customized Mantine `TextInput`.\n        "},source:{code:`
<AutoForm
  schema={[
    {
      name: "username",
      label: "Username",
      type: "text",
    },
  ]}
  uiConfig={{
    customFieldTypeRenderers: {
      text: ({ field, form }) => (
        <TextInput
          label={field.label}
          {...form.getInputProps(field.name)}
          size="xl"
          variant="filled"
          c="orange"
          placeholder="customized textfield"
        />
      ),
    },
  }}
  onSubmit={(values) => {
    console.log(values);
  }}
/>
        `}}},args:{schema:[{name:"username",label:"Username",type:"text"}],uiConfig:{customFieldTypeRenderers:{text:({field:t,form:i})=>r.jsx(l,{label:t.label,...i.getInputProps(t.name),size:"xl",variant:"filled",c:"orange",placeholder:"customized textfield"})}}}};var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
This story customizes the default \\\`text\\\` field renderer.

The field type remains \\\`text\\\`, but its UI is replaced
with a fully customized Mantine \\\`TextInput\\\`.
        \`
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "username",
      label: "Username",
      type: "text",
    },
  ]}
  uiConfig={{
    customFieldTypeRenderers: {
      text: ({ field, form }) => (
        <TextInput
          label={field.label}
          {...form.getInputProps(field.name)}
          size="xl"
          variant="filled"
          c="orange"
          placeholder="customized textfield"
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
    schema: [{
      name: "username",
      label: "Username",
      type: "text"
    }],
    uiConfig: {
      customFieldTypeRenderers: {
        text: ({
          field,
          form
        }) => <TextInput label={field.label} {...form.getInputProps(field.name)} size="xl" variant="filled" c="orange" placeholder="customized textfield" />
      }
    }
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const x=["CustomizeTextField"];export{e as CustomizeTextField,x as __namedExportsOrder,f as default};
