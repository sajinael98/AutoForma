import{j as i}from"./iframe-CK_zX8fh.js";import{A as d}from"./AutoForm-BPR0sNsg.js";import"./preload-helper-Dp1pzeXC.js";const p={title:"AutoForma/Fields/Containers/Array",tags:["autodocs"],parameters:{docs:{canvas:{hidden:!0},description:{component:`
### Array Field

The \`array\` field type in AutoForma is a **container field**, not an input.

It is used to represent a **repeatable group of fields**, allowing the user
to enter multiple items with the same structure.

The array field itself does not render a value directly.
Instead, it defines a schema for its child fields.
        `}}}},e={render:()=>i.jsx(d,{schema:[{type:"array",name:"items",label:"Items",fields:[{type:"text",name:"name",label:"Item Name"},{type:"number",name:"quantity",label:"Quantity"}]}],values:async()=>({items:[{name:"Apple",quantity:2}]}),onSubmit:a=>console.log(a)}),parameters:{docs:{description:{story:`
A basic array field that allows repeating a group of fields.
Each item in the array follows the same schema.
        `},source:{code:`
<AutoForm
  schema={[
    {
      type: 'array',
      name: 'items',
      label: 'Items',
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'Item Name',
        },
        {
          type: 'number',
          name: 'quantity',
          label: 'Quantity',
        },
      ],
    },
  ]}
  values={async () => ({
    items: [{ name: 'Apple', quantity: 2 }],
  })}
  onSubmit={(values) => console.log(values)}
/>
        `}}}},n={render:()=>i.jsx(d,{schema:[{type:"array",name:"orders",label:"Orders",fields:[{type:"text",name:"orderNo",label:"Order Number"},{type:"array",name:"lines",label:"Order Lines",fields:[{type:"text",name:"product",label:"Product"},{type:"number",name:"qty",label:"Qty"}]}]}],values:async()=>({}),onSubmit:a=>console.log(a)}),parameters:{docs:{description:{story:`
Array fields can be nested to represent complex and hierarchical data
structures such as orders with line items.
        `},source:{code:`
<AutoForm
  schema={[
    {
      type: 'array',
      name: 'orders',
      label: 'Orders',
      fields: [
        {
          type: 'text',
          name: 'orderNo',
          label: 'Order Number',
        },
        {
          type: 'array',
          name: 'lines',
          label: 'Order Lines',
          fields: [
            {
              type: 'text',
              name: 'product',
              label: 'Product',
            },
            {
              type: 'number',
              name: 'qty',
              label: 'Qty',
            },
          ],
        },
      ],
    },
  ]}
  values={async () => ({})}
  onSubmit={(values) => console.log(values)}
/>
        `}}}};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'array',
    name: 'items',
    label: 'Items',
    fields: [{
      type: 'text',
      name: 'name',
      label: 'Item Name'
    }, {
      type: 'number',
      name: 'quantity',
      label: 'Quantity'
    }]
  }]} values={async () => ({
    items: [{
      name: 'Apple',
      quantity: 2
    }]
  })} onSubmit={values => console.log(values)} />,
  parameters: {
    docs: {
      description: {
        story: \`
A basic array field that allows repeating a group of fields.
Each item in the array follows the same schema.
        \`
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      type: 'array',
      name: 'items',
      label: 'Items',
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'Item Name',
        },
        {
          type: 'number',
          name: 'quantity',
          label: 'Quantity',
        },
      ],
    },
  ]}
  values={async () => ({
    items: [{ name: 'Apple', quantity: 2 }],
  })}
  onSubmit={(values) => console.log(values)}
/>
        \`
      }
    }
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var l,o,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'array',
    name: 'orders',
    label: 'Orders',
    fields: [{
      type: 'text',
      name: 'orderNo',
      label: 'Order Number'
    }, {
      type: 'array',
      name: 'lines',
      label: 'Order Lines',
      fields: [{
        type: 'text',
        name: 'product',
        label: 'Product'
      }, {
        type: 'number',
        name: 'qty',
        label: 'Qty'
      }]
    }]
  }]} values={async () => ({})} onSubmit={values => console.log(values)} />,
  parameters: {
    docs: {
      description: {
        story: \`
Array fields can be nested to represent complex and hierarchical data
structures such as orders with line items.
        \`
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      type: 'array',
      name: 'orders',
      label: 'Orders',
      fields: [
        {
          type: 'text',
          name: 'orderNo',
          label: 'Order Number',
        },
        {
          type: 'array',
          name: 'lines',
          label: 'Order Lines',
          fields: [
            {
              type: 'text',
              name: 'product',
              label: 'Product',
            },
            {
              type: 'number',
              name: 'qty',
              label: 'Qty',
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
}`,...(m=(o=n.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const b=["BasicArray","NestedArray"];export{e as BasicArray,n as NestedArray,b as __namedExportsOrder,p as default};
