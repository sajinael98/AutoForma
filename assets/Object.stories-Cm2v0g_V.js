import{j as i}from"./iframe-CK_zX8fh.js";import{A as m}from"./AutoForm-BPR0sNsg.js";import"./preload-helper-Dp1pzeXC.js";const u={title:"AutoForma/Fields/Containers/Object",tags:["autodocs"],parameters:{docs:{canvas:{hidden:!0},description:{component:`
### Object Field

The \`object\` field type in AutoForma is a **container field**, not an input.

It is used to group related fields into a structured and nested schema.
The object field itself does not represent a value directly, but rather
defines a logical boundary for its child fields.
        `}}}},e={render:()=>i.jsx(m,{schema:[{type:"object",name:"address",label:"Address",fields:[{type:"text",name:"street",label:"Street"},{type:"text",name:"city",label:"City"},{type:"text",name:"country",label:"Country"}]}],values:async()=>({address:{street:"Main St",city:"Chicago",country:"USA"}}),onSubmit:t=>console.log(t)}),parameters:{docs:{description:{story:`
A basic object field used to group related fields under a single logical entity.
        `},source:{code:`
<AutoForm
  schema={[
    {
      type: 'object',
      name: 'address',
      label: 'Address',
      fields: [
        {
          type: 'text',
          name: 'street',
          label: 'Street',
        },
        {
          type: 'text',
          name: 'city',
          label: 'City',
        },
        {
          type: 'text',
          name: 'country',
          label: 'Country',
        },
      ],
    },
  ]}
  values={async () => ({
    address: {
      street: 'Main St',
      city: 'Chicago',
      country: 'USA',
    },
  })}
  onSubmit={(values) => console.log(values)}
/>
        `}}}},n={render:()=>i.jsx(m,{schema:[{type:"object",name:"company",label:"Company",fields:[{type:"text",name:"name",label:"Company Name"},{type:"object",name:"contact",label:"Contact Info",fields:[{type:"text",name:"email",label:"Email"},{type:"text",name:"phone",label:"Phone"}]}]}],values:async()=>({}),onSubmit:t=>console.log(t)}),parameters:{docs:{description:{story:`
Object fields can be nested to represent structured and hierarchical data
such as entities with embedded sub-objects.
        `},source:{code:`
<AutoForm
  schema={[
    {
      type: 'object',
      name: 'company',
      label: 'Company',
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'Company Name',
        },
        {
          type: 'object',
          name: 'contact',
          label: 'Contact Info',
          fields: [
            {
              type: 'text',
              name: 'email',
              label: 'Email',
            },
            {
              type: 'text',
              name: 'phone',
              label: 'Phone',
            },
          ],
        },
      ],
    },
  ]}
  values={async () => ({})}
  onSubmit={(values) => console.log(values)}
/>
        `}}}};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'object',
    name: 'address',
    label: 'Address',
    fields: [{
      type: 'text',
      name: 'street',
      label: 'Street'
    }, {
      type: 'text',
      name: 'city',
      label: 'City'
    }, {
      type: 'text',
      name: 'country',
      label: 'Country'
    }]
  }]} values={async () => ({
    address: {
      street: 'Main St',
      city: 'Chicago',
      country: 'USA'
    }
  })} onSubmit={values => console.log(values)} />,
  parameters: {
    docs: {
      description: {
        story: \`
A basic object field used to group related fields under a single logical entity.
        \`
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      type: 'object',
      name: 'address',
      label: 'Address',
      fields: [
        {
          type: 'text',
          name: 'street',
          label: 'Street',
        },
        {
          type: 'text',
          name: 'city',
          label: 'City',
        },
        {
          type: 'text',
          name: 'country',
          label: 'Country',
        },
      ],
    },
  ]}
  values={async () => ({
    address: {
      street: 'Main St',
      city: 'Chicago',
      country: 'USA',
    },
  })}
  onSubmit={(values) => console.log(values)}
/>
        \`
      }
    }
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var l,c,r;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'object',
    name: 'company',
    label: 'Company',
    fields: [{
      type: 'text',
      name: 'name',
      label: 'Company Name'
    }, {
      type: 'object',
      name: 'contact',
      label: 'Contact Info',
      fields: [{
        type: 'text',
        name: 'email',
        label: 'Email'
      }, {
        type: 'text',
        name: 'phone',
        label: 'Phone'
      }]
    }]
  }]} values={async () => ({})} onSubmit={values => console.log(values)} />,
  parameters: {
    docs: {
      description: {
        story: \`
Object fields can be nested to represent structured and hierarchical data
such as entities with embedded sub-objects.
        \`
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      type: 'object',
      name: 'company',
      label: 'Company',
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'Company Name',
        },
        {
          type: 'object',
          name: 'contact',
          label: 'Contact Info',
          fields: [
            {
              type: 'text',
              name: 'email',
              label: 'Email',
            },
            {
              type: 'text',
              name: 'phone',
              label: 'Phone',
            },
          ],
        },
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
}`,...(r=(c=n.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};const b=["BasicObject","NestedObject"];export{e as BasicObject,n as NestedObject,b as __namedExportsOrder,u as default};
