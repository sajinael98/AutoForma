import{A as J}from"./AutoForm-sj98sMsr.js";import"./iframe-DJjTpFA-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoLUOrVx.js";import"./index-Dm25vUe4.js";const X={title:"AutoForm/03-Fields",component:J,tags:["autodocs"],parameters:{docs:{description:{component:`
This section demonstrates all built-in field types supported by AutoForm.

Each story focuses on a single field type and shows
the minimal configuration required to use it.
        `}}},argTypes:{onSubmit:{action:"submit"}}},e={parameters:{docs:{description:{story:"Basic text input field with validation support."},source:{code:`
<AutoForm
  schema={[
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Enter title",
      required: true,
    },
  ]}
/>
        `}}},args:{schema:[{name:"title",label:"Title",type:"text",placeholder:"Enter title",required:!0}]}},a={parameters:{docs:{description:{story:"Numeric input field for numbers only."},source:{code:`
<AutoForm
  schema={[
    {
      name: "quantity",
      label: "Quantity",
      type: "number",
    },
  ]}
/>
        `}}},args:{schema:[{name:"quantity",label:"Quantity",type:"number"}]}},n={parameters:{docs:{description:{story:"Boolean field rendered as a checkbox."},source:{code:`
<AutoForm
  schema={[
    {
      name: "published",
      label: "Published",
      type: "checkbox",
    },
  ]}
/>
        `}}},args:{schema:[{name:"published",label:"Published",type:"checkbox"}]}},t={parameters:{docs:{description:{story:"Boolean field rendered as a switch."},source:{code:`
<AutoForm
  schema={[
    {
      name: "enabled",
      label: "Enabled",
      type: "switch",
    },
  ]}
/>
        `}}},args:{schema:[{name:"enabled",label:"Enabled",type:"switch"}]}},s={parameters:{docs:{description:{story:"Date picker field."},source:{code:`
<AutoForm
  schema={[
    {
      name: "startDate",
      label: "Start Date",
      type: "date",
    },
  ]}
/>
        `}}},args:{schema:[{name:"startDate",label:"Start Date",type:"date"}]}},r={parameters:{docs:{description:{story:"Time picker field."},source:{code:`
<AutoForm
  schema={[
    {
      name: "startTime",
      label: "Start Time",
      type: "time",
    },
  ]}
/>
        `}}},args:{schema:[{name:"startTime",label:"Start Time",type:"time"}]}},o={parameters:{docs:{description:{story:"Combined date and time field."},source:{code:`
<AutoForm
  schema={[
    {
      name: "eventDate",
      label: "Event Date & Time",
      type: "datetime",
    },
  ]}
/>
        `}}},args:{schema:[{name:"eventDate",label:"Event Date & Time",type:"datetime"}]}},m={parameters:{docs:{description:{story:"Dropdown select field with predefined options."},source:{code:`
<AutoForm
  schema={[
    {
      name: "status",
      label: "Status",
      type: "select",
      data: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
    },
  ]}
/>
        `}}},args:{schema:[{name:"status",label:"Status",type:"select",data:[{label:"Draft",value:"draft"},{label:"Published",value:"published"}]}]}},c={parameters:{docs:{description:{story:"Tags input field for multiple string values."},source:{code:`
<AutoForm
  schema={[
    {
      name: "tags",
      label: "Tags",
      type: "tags",
    },
  ]}
/>
        `}}},args:{schema:[{name:"tags",label:"Tags",type:"tags"}]}},l={parameters:{docs:{description:{story:"Nested object field with its own internal schema."},source:{code:`
<AutoForm
  schema={[
    {
      name: "profile",
      label: "Profile",
      type: "object",
      fields: [
        { name: "firstName", label: "First Name", type: "text" },
        { name: "lastName", label: "Last Name", type: "text" },
      ],
    },
  ]}
/>
        `}}},args:{schema:[{name:"profile",label:"Profile",type:"object",fields:[{name:"firstName",label:"First Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"}]}]}},i={parameters:{docs:{description:{story:"Repeating array field with nested item schema."},source:{code:`
<AutoForm
  schema={[
    {
      name: "items",
      label: "Items",
      type: "array",
      fields: [
        { name: "name", label: "Item Name", type: "text" },
        { name: "price", label: "Price", type: "number" },
      ],
    },
  ]}
/>
        `}}},args:{schema:[{name:"items",label:"Items",type:"array",fields:[{name:"name",label:"Item Name",type:"text"},{name:"price",label:"Price",type:"number"}]}]}};var d,p,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Basic text input field with validation support."
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Enter title",
      required: true,
    },
  ]}
/>
        \`
      }
    }
  },
  args: {
    schema: [{
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Enter title",
      required: true
    }] as FieldSchema[]
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,h,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Numeric input field for numbers only."
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "quantity",
      label: "Quantity",
      type: "number",
    },
  ]}
/>
        \`
      }
    }
  },
  args: {
    schema: [{
      name: "quantity",
      label: "Quantity",
      type: "number"
    }] as FieldSchema[]
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,g,F;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Boolean field rendered as a checkbox."
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "published",
      label: "Published",
      type: "checkbox",
    },
  ]}
/>
        \`
      }
    }
  },
  args: {
    schema: [{
      name: "published",
      label: "Published",
      type: "checkbox"
    }] as FieldSchema[]
  }
}`,...(F=(g=n.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var S,T,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Boolean field rendered as a switch."
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "enabled",
      label: "Enabled",
      type: "switch",
    },
  ]}
/>
        \`
      }
    }
  },
  args: {
    schema: [{
      name: "enabled",
      label: "Enabled",
      type: "switch"
    }] as FieldSchema[]
  }
}`,...(x=(T=t.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var A,D,N;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Date picker field."
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "startDate",
      label: "Start Date",
      type: "date",
    },
  ]}
/>
        \`
      }
    }
  },
  args: {
    schema: [{
      name: "startDate",
      label: "Start Date",
      type: "date"
    }] as FieldSchema[]
  }
}`,...(N=(D=s.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var w,v,P;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Time picker field."
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "startTime",
      label: "Start Time",
      type: "time",
    },
  ]}
/>
        \`
      }
    }
  },
  args: {
    schema: [{
      name: "startTime",
      label: "Start Time",
      type: "time"
    }] as FieldSchema[]
  }
}`,...(P=(v=r.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var E,k,q;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Combined date and time field."
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "eventDate",
      label: "Event Date & Time",
      type: "datetime",
    },
  ]}
/>
        \`
      }
    }
  },
  args: {
    schema: [{
      name: "eventDate",
      label: "Event Date & Time",
      type: "datetime"
    }] as FieldSchema[]
  }
}`,...(q=(k=o.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var j,I,B;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Dropdown select field with predefined options."
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "status",
      label: "Status",
      type: "select",
      data: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
    },
  ]}
/>
        \`
      }
    }
  },
  args: {
    schema: [{
      name: "status",
      label: "Status",
      type: "select",
      data: [{
        label: "Draft",
        value: "draft"
      }, {
        label: "Published",
        value: "published"
      }]
    }] as FieldSchema[]
  }
}`,...(B=(I=m.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var C,L,Q;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Tags input field for multiple string values."
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "tags",
      label: "Tags",
      type: "tags",
    },
  ]}
/>
        \`
      }
    }
  },
  args: {
    schema: [{
      name: "tags",
      label: "Tags",
      type: "tags"
    }] as FieldSchema[]
  }
}`,...(Q=(L=c.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var O,R,_;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Nested object field with its own internal schema."
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "profile",
      label: "Profile",
      type: "object",
      fields: [
        { name: "firstName", label: "First Name", type: "text" },
        { name: "lastName", label: "Last Name", type: "text" },
      ],
    },
  ]}
/>
        \`
      }
    }
  },
  args: {
    schema: [{
      name: "profile",
      label: "Profile",
      type: "object",
      fields: [{
        name: "firstName",
        label: "First Name",
        type: "text"
      }, {
        name: "lastName",
        label: "Last Name",
        type: "text"
      }]
    }] as FieldSchema[]
  }
}`,...(_=(R=l.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var z,G,H;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Repeating array field with nested item schema."
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "items",
      label: "Items",
      type: "array",
      fields: [
        { name: "name", label: "Item Name", type: "text" },
        { name: "price", label: "Price", type: "number" },
      ],
    },
  ]}
/>
        \`
      }
    }
  },
  args: {
    schema: [{
      name: "items",
      label: "Items",
      type: "array",
      fields: [{
        name: "name",
        label: "Item Name",
        type: "text"
      }, {
        name: "price",
        label: "Price",
        type: "number"
      }]
    }] as FieldSchema[]
  }
}`,...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const Y=["Text","Number","Checkbox","Switch","Date","Time","DateTime","Select","Tags","ObjectField","ArrayField"];export{i as ArrayField,n as Checkbox,s as Date,o as DateTime,a as Number,l as ObjectField,m as Select,t as Switch,c as Tags,e as Text,r as Time,Y as __namedExportsOrder,X as default};
