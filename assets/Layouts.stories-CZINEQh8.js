import{A as u}from"./AutoForm-sj98sMsr.js";import"./iframe-DJjTpFA-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoLUOrVx.js";import"./index-Dm25vUe4.js";const h={title:"AutoForm/02-Layouts",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
This section demonstrates the different layout strategies
supported by AutoForm.

Layouts control how fields are arranged visually
without affecting form logic or validation.
        `}}},argTypes:{layout:{control:"select",options:["grid","vertical","horizontal"]},onSubmit:{action:"submit"}}},s=[{name:"firstName",type:"text",label:"First Name"},{name:"lastName",type:"text",label:"Last Name"},{name:"email",type:"text",label:"Email"}],e={parameters:{docs:{description:{story:`
Grid layout is the default layout.

Fields are arranged in a responsive grid
based on available space.
        `},source:{code:`
<AutoForm
  layout="grid"
  schema={[
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
  ]}
/>
        `}}},args:{layout:"grid",schema:s}},a={parameters:{docs:{description:{story:`
Vertical layout stacks fields vertically.

Useful for narrow layouts or mobile-first designs.
        `},source:{code:`
<AutoForm
  layout="vertical"
  schema={[
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
  ]}
/>
        `}}},args:{layout:"vertical",schema:s}},t={parameters:{docs:{description:{story:`
Horizontal layout places labels and inputs side by side.

Ideal for compact forms or settings pages.
        `},source:{code:`
<AutoForm
  layout="horizontal"
  schema={[
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
  ]}
/>
        `}}},args:{layout:"horizontal",schema:s}};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Grid layout is the default layout.

Fields are arranged in a responsive grid
based on available space.
        \`
      },
      source: {
        code: \`
<AutoForm
  layout="grid"
  schema={[
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
  ]}
/>
        \`
      }
    }
  },
  args: {
    layout: "grid",
    schema: baseSchema
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var l,m,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Vertical layout stacks fields vertically.

Useful for narrow layouts or mobile-first designs.
        \`
      },
      source: {
        code: \`
<AutoForm
  layout="vertical"
  schema={[
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
  ]}
/>
        \`
      }
    }
  },
  args: {
    layout: "vertical",
    schema: baseSchema
  }
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Horizontal layout places labels and inputs side by side.

Ideal for compact forms or settings pages.
        \`
      },
      source: {
        code: \`
<AutoForm
  layout="horizontal"
  schema={[
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
  ]}
/>
        \`
      }
    }
  },
  args: {
    layout: "horizontal",
    schema: baseSchema
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const x=["GridLayout","VerticalLayout","HorizontalLayout"];export{e as GridLayout,t as HorizontalLayout,a as VerticalLayout,x as __namedExportsOrder,h as default};
