import{j as o}from"./iframe-CK_zX8fh.js";import{A as s}from"./AutoForm-BPR0sNsg.js";import"./preload-helper-Dp1pzeXC.js";const A={title:"AutoForma/Fields/Input",tags:["autodocs"],parameters:{docs:{canvas:{hidden:!0},description:{component:`
### Input Field

AutoForma provides a declarative way to define input fields using a schema-based API.

Input fields can be rendered as basic inputs, marked as read-only, configured
with static options, or dynamically controlled based on the form state.

---

### Supported Input Field Types

The following field types are supported out of the box:

- \`text\`
- \`number\`
- \`checkbox\`
- \`select\`
- \`date\`
- \`datetime-local\`
- \`time\`
- \`array\`
- \`object\`

This list represents the default field types shipped with AutoForma.
The consuming application may extend, restrict, or override these types
based on its own requirements.
        `}}}},n={render:()=>o.jsx(s,{schema:[{type:"number",name:"value",label:"Input (number)"}],values:async()=>({}),onSubmit:e=>console.log(e)}),parameters:{docs:{description:{story:"Basic input field using AutoForma."},source:{code:`
<AutoForm
  schema={[
    {
      type: 'number',
      name: 'value',
      label: 'Input (number)',
    },
  ]}
  values={async () => ({})}
  onSubmit={(values) => console.log(values)}
/>
        `}}}},a={render:()=>o.jsx(s,{schema:[{type:"number",name:"value",label:"Input (number)",readonly:!0}],values:async()=>({value:100}),readonly:!0,onSubmit:e=>console.log(e)}),parameters:{docs:{description:{story:"Read-only input, commonly used in view or details pages."},source:{code:`
<AutoForm
  schema={[
    {
      type: 'number',
      name: 'value',
      label: 'Input (number)',
      readonly: true,
    },
  ]}
  values={async () => ({ value: 100 })}
  readonly
  onSubmit={(values) => console.log(values)}
/>
        `}}}},t={render:()=>o.jsx(s,{schema:[{type:"select",name:"value",label:"Select Input",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}]}],values:async()=>({}),onSubmit:e=>console.log(e)}),parameters:{docs:{description:{story:"Select field with static options."},source:{code:`
<AutoForm
  schema={[
    {
      type: 'select',
      name: 'value',
      label: 'Select Input',
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ],
    },
  ]}
  values={async () => ({})}
  onSubmit={(values) => console.log(values)}
/>
        `}}}},l={render:()=>o.jsx(s,{schema:[{type:"text",name:"value2",label:"Controller Field"},{type:"text",name:"value",label:"Dependent Field",dependsOn:["value2"]}],values:async()=>({}),updateFieldSchema:{value:(e,r,g)=>g.value2?{...r,visible:!0}:{...r,visible:!1}},onSubmit:e=>console.log(e)}),parameters:{docs:{description:{story:`
This example demonstrates a dependent input field.

Using \`updateFieldSchema\`, the field schema can be dynamically modified
at runtime based on the current form state.

The returned object replaces the field schema for the current render cycle.
This mechanism is intentionally generic and can be constrained or extended
by the consuming application as needed.
        `},source:{code:`
<AutoForm
  schema={[
    {
      type: 'text',
      name: 'value2',
      label: 'Controller Field',
    },
    {
      type: 'text',
      name: 'value',
      label: 'Dependent Field',
      dependsOn: ['value2'],
    },
  ]}
  values={async () => ({})}
  updateFieldSchema={{
    value: (path, fieldSchema, values) => {
      if (!values.value2) {
        return {
          ...fieldSchema,
          visible: false,
        }
      }

      return {
        ...fieldSchema,
        visible: true,
      }
    },
  }}
  onSubmit={(values) => console.log(values)}
/>
        `}}}};var u,i,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'number',
    name: 'value',
    label: 'Input (number)'
  }]} values={async () => ({})} onSubmit={values => console.log(values)} />,
  parameters: {
    docs: {
      description: {
        story: 'Basic input field using AutoForma.'
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      type: 'number',
      name: 'value',
      label: 'Input (number)',
    },
  ]}
  values={async () => ({})}
  onSubmit={(values) => console.log(values)}
/>
        \`
      }
    }
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'number',
    name: 'value',
    label: 'Input (number)',
    readonly: true
  }]} values={async () => ({
    value: 100
  })} readonly onSubmit={values => console.log(values)} />,
  parameters: {
    docs: {
      description: {
        story: 'Read-only input, commonly used in view or details pages.'
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      type: 'number',
      name: 'value',
      label: 'Input (number)',
      readonly: true,
    },
  ]}
  values={async () => ({ value: 100 })}
  readonly
  onSubmit={(values) => console.log(values)}
/>
        \`
      }
    }
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,b,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'select',
    name: 'value',
    label: 'Select Input',
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }]
  }]} values={async () => ({})} onSubmit={values => console.log(values)} />,
  parameters: {
    docs: {
      description: {
        story: 'Select field with static options.'
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      type: 'select',
      name: 'value',
      label: 'Select Input',
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ],
    },
  ]}
  values={async () => ({})}
  onSubmit={(values) => console.log(values)}
/>
        \`
      }
    }
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,f,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'text',
    name: 'value2',
    label: 'Controller Field'
  }, {
    type: 'text',
    name: 'value',
    label: 'Dependent Field',
    dependsOn: ['value2']
  }]} values={async () => ({})} updateFieldSchema={{
    value: (path, fieldSchema, values) => {
      if (!values.value2) {
        return {
          ...fieldSchema,
          visible: false
        };
      }
      return {
        ...fieldSchema,
        visible: true
      };
    }
  }} onSubmit={values => console.log(values)} />,
  parameters: {
    docs: {
      description: {
        story: \`
This example demonstrates a dependent input field.

Using \\\`updateFieldSchema\\\`, the field schema can be dynamically modified
at runtime based on the current form state.

The returned object replaces the field schema for the current render cycle.
This mechanism is intentionally generic and can be constrained or extended
by the consuming application as needed.
        \`
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      type: 'text',
      name: 'value2',
      label: 'Controller Field',
    },
    {
      type: 'text',
      name: 'value',
      label: 'Dependent Field',
      dependsOn: ['value2'],
    },
  ]}
  values={async () => ({})}
  updateFieldSchema={{
    value: (path, fieldSchema, values) => {
      if (!values.value2) {
        return {
          ...fieldSchema,
          visible: false,
        }
      }

      return {
        ...fieldSchema,
        visible: true,
      }
    },
  }}
  onSubmit={(values) => console.log(values)}
/>
        \`
      }
    }
  }
}`,...(S=(f=l.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const O=["DefaultInput","ReadonlyInput","SelectInput","DependentInput"];export{n as DefaultInput,l as DependentInput,a as ReadonlyInput,t as SelectInput,O as __namedExportsOrder,A as default};
