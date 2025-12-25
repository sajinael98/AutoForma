import{A as m}from"./AutoForm-sj98sMsr.js";import"./iframe-DJjTpFA-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoLUOrVx.js";import"./index-Dm25vUe4.js";const v={title:"AutoForm/05-Validation",component:m,tags:["autodocs"],parameters:{docs:{description:{component:`
Validation in AutoForm is powered by Mantine Form.

AutoForm does not introduce a custom validation layer.
Instead, it delegates validation entirely to Mantine's useForm.

If you already know how Mantine Form validation works,
you already know how validation works in AutoForm.
        `}}},argTypes:{onSubmit:{action:"submit"}}},e={parameters:{docs:{description:{story:`
This story demonstrates required fields validation.

Fields marked as \`required: true\` will be automatically validated
before form submission.
        `},source:{code:`
<AutoForm
  schema={[
    {
      name: "email",
      label: "Email",
      type: "text",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "text",
      required: true,
    },
  ]}
  onSubmit={(values) => {
    console.log(values);
  }}
/>
        `}}},args:{schema:[{name:"email",label:"Email",type:"text",required:!0},{name:"password",label:"Password",type:"text",required:!0}]}},a={parameters:{docs:{description:{story:`
This example shows how initial values and custom validation
work together in AutoForm.

Validation rules are defined using Mantine Form's validation API.
        `},source:{code:`
<AutoForm
  schema={[
    { name: "name", label: "Name", type: "text", required: true },
    { name: "age", label: "Age", type: "number" },
  ]}
  initialValues={() => ({
    name: "Saji",
  })}
  validate={{
    age: (value) =>
      value < 18 ? "must be older than 18" : null,
  }}
  onSubmit={(values) => {
    console.log(values);
  }}
/>
        `}}},args:{schema:[{name:"name",label:"Name",type:"text",required:!0},{name:"age",label:"Age",type:"number"}],initialValues:()=>({name:"Saji"}),validate:{age:l=>l<18?"must be older than 18":null}}};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
This story demonstrates required fields validation.

Fields marked as \\\`required: true\\\` will be automatically validated
before form submission.
        \`
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "email",
      label: "Email",
      type: "text",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "text",
      required: true,
    },
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
      name: "email",
      label: "Email",
      type: "text",
      required: true
    }, {
      name: "password",
      label: "Password",
      type: "text",
      required: true
    }] as FieldSchema[]
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var o,i,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
This example shows how initial values and custom validation
work together in AutoForm.

Validation rules are defined using Mantine Form's validation API.
        \`
      },
      source: {
        code: \`
<AutoForm
  schema={[
    { name: "name", label: "Name", type: "text", required: true },
    { name: "age", label: "Age", type: "number" },
  ]}
  initialValues={() => ({
    name: "Saji",
  })}
  validate={{
    age: (value) =>
      value < 18 ? "must be older than 18" : null,
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
      name: "name",
      label: "Name",
      type: "text",
      required: true
    }, {
      name: "age",
      label: "Age",
      type: "number"
    }],
    initialValues: () => ({
      name: "Saji"
    }),
    validate: {
      age: value => value < 18 ? "must be older than 18" : null
    }
  }
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const y=["RequiredFields","InitialValuesWithValidation"];export{a as InitialValuesWithValidation,e as RequiredFields,y as __namedExportsOrder,v as default};
