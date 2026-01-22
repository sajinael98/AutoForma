import{j as n,r as k}from"./iframe-CK_zX8fh.js";import{A as a}from"./AutoForm-BPR0sNsg.js";import"./preload-helper-Dp1pzeXC.js";const B={title:"AutoForma/Form",tags:["autodocs"],parameters:{docs:{canvas:{hidden:!0},description:{component:`
### Form

The Form component is the orchestrator in AutoForma.

It is responsible for:
- rendering fields from a schema
- managing form state
- handling lifecycle callbacks
- applying dynamic behaviors
- exposing an imperative API via refs

Form stories focus on **usage scenarios**, while the API section below
documents all supported properties.
        `}}}},o={render:()=>null,parameters:{docs:{canvas:{hidden:!0},description:{story:`
## Form Props API

---

### \`schema\` (required)
Defines the structure of the form.

- Type: \`Schema\`
- Description: Declarative list of field definitions.

---

### \`onSubmit\` (required)
Called when the form is submitted successfully.

- Type: \`(values: FormValues) => void\`

---

### \`values\`
Provides initial values for the form.

- Type: \`() => FormValues | Promise<FormValues>\`
- Can be synchronous or asynchronous.

---

### \`layout\`
Controls the form layout.

- Type: \`'vertical' | 'horizontal' | 'custom'\`

---

### \`readonly\`
Renders the entire form in read-only mode.

- Type: \`boolean\`

---

### \`hideSubmit\`
Hides the submit button.

- Type: \`boolean\`
- Useful for filters and live-update forms.

---

### \`uiConfig\`
Customizes how fields are rendered.

- Type: \`UiConfig\`
- Supports overriding renderers by **field type** or **field name**.

---

### \`updateFieldSchema\`
Allows modifying field schemas at runtime.

- Type: \`UpdateFieldSchema\`
- Receives \`path\`, \`fieldSchema\`, and current \`values\`.

---

### \`onValuesChange\`
Triggered whenever form values change.

- Type: \`(values: FormValues) => void\`

---

### \`onDirtyChange\`
Triggered when the dirty state changes.

- Type: \`(isDirty: boolean) => void\`

---

### \`onFieldChange\`
Field-level change handlers.

- Type: \`Record<string, (path, value, values) => void>\`
- Mapped by field name.

---

### \`resolver\`
Validation resolver integration.

- Type: \`Resolver\`
- Enables integration with libraries like Zod or Yup.

---

## Form Ref API

---

### \`submit()\`
Programmatically submits the form.

---

### \`setValue(name, value)\`
Sets a field value programmatically.

---

### \`getValues()\`
Returns current form values.

---

### \`reset(values)\`
Resets the form with new values.
        `}}}},s={render:()=>n.jsx(a,{schema:[{type:"text",name:"name",label:"Name"},{type:"number",name:"age",label:"Age"}],values:async()=>({}),onSubmit:e=>console.log(e)})},t={render:()=>n.jsx(a,{schema:[{type:"text",name:"name",label:"Name"},{type:"number",name:"age",label:"Age"}],values:async()=>({name:"John",age:30}),onSubmit:e=>console.log(e)})},l={render:()=>n.jsx(a,{schema:[{type:"text",name:"name",label:"Name"},{type:"number",name:"age",label:"Age"}],values:async()=>({name:"Readonly User",age:40}),readonly:!0,onSubmit:()=>{}})},i={render:()=>n.jsx(a,{schema:[{type:"text",name:"search",label:"Search"}],hideSubmit:!0,values:async()=>({}),onSubmit:()=>{}})},m={render:()=>n.jsx(a,{schema:[{type:"text",name:"name",label:"Name"}],values:async()=>({}),onValuesChange:e=>console.log("values",e),onDirtyChange:e=>console.log("dirty",e),onSubmit:e=>console.log(e)})},u={render:()=>n.jsx(a,{schema:[{type:"checkbox",name:"enabled",label:"Enable extra field"},{type:"text",name:"extra",label:"Extra Field",dependsOn:["enabled"]}],values:async()=>({}),updateFieldSchema:{extra:(e,r,W)=>({...r,visible:W.enabled===!0})},onSubmit:e=>console.log(e)})},c={render:()=>{const e=k.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>{var r;return(r=e.current)==null?void 0:r.submit()},children:"Submit Programmatically"}),n.jsx(a,{ref:e,schema:[{type:"text",name:"name",label:"Name"}],values:async()=>({}),onSubmit:r=>console.log(r)})]})}};var d,p,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => null,
  parameters: {
    docs: {
      canvas: {
        hidden: true
      },
      description: {
        story: \`
## Form Props API

---

### \\\`schema\\\` (required)
Defines the structure of the form.

- Type: \\\`Schema\\\`
- Description: Declarative list of field definitions.

---

### \\\`onSubmit\\\` (required)
Called when the form is submitted successfully.

- Type: \\\`(values: FormValues) => void\\\`

---

### \\\`values\\\`
Provides initial values for the form.

- Type: \\\`() => FormValues | Promise<FormValues>\\\`
- Can be synchronous or asynchronous.

---

### \\\`layout\\\`
Controls the form layout.

- Type: \\\`'vertical' | 'horizontal' | 'custom'\\\`

---

### \\\`readonly\\\`
Renders the entire form in read-only mode.

- Type: \\\`boolean\\\`

---

### \\\`hideSubmit\\\`
Hides the submit button.

- Type: \\\`boolean\\\`
- Useful for filters and live-update forms.

---

### \\\`uiConfig\\\`
Customizes how fields are rendered.

- Type: \\\`UiConfig\\\`
- Supports overriding renderers by **field type** or **field name**.

---

### \\\`updateFieldSchema\\\`
Allows modifying field schemas at runtime.

- Type: \\\`UpdateFieldSchema\\\`
- Receives \\\`path\\\`, \\\`fieldSchema\\\`, and current \\\`values\\\`.

---

### \\\`onValuesChange\\\`
Triggered whenever form values change.

- Type: \\\`(values: FormValues) => void\\\`

---

### \\\`onDirtyChange\\\`
Triggered when the dirty state changes.

- Type: \\\`(isDirty: boolean) => void\\\`

---

### \\\`onFieldChange\\\`
Field-level change handlers.

- Type: \\\`Record<string, (path, value, values) => void>\\\`
- Mapped by field name.

---

### \\\`resolver\\\`
Validation resolver integration.

- Type: \\\`Resolver\\\`
- Enables integration with libraries like Zod or Yup.

---

## Form Ref API

---

### \\\`submit()\\\`
Programmatically submits the form.

---

### \\\`setValue(name, value)\\\`
Sets a field value programmatically.

---

### \\\`getValues()\\\`
Returns current form values.

---

### \\\`reset(values)\\\`
Resets the form with new values.
        \`
      }
    }
  }
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var y,b,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'text',
    name: 'name',
    label: 'Name'
  }, {
    type: 'number',
    name: 'age',
    label: 'Age'
  }]} values={async () => ({})} onSubmit={values => console.log(values)} />
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,f,F;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'text',
    name: 'name',
    label: 'Name'
  }, {
    type: 'number',
    name: 'age',
    label: 'Age'
  }]} values={async () => ({
    name: 'John',
    age: 30
  })} onSubmit={values => console.log(values)} />
}`,...(F=(f=t.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var S,x,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'text',
    name: 'name',
    label: 'Name'
  }, {
    type: 'number',
    name: 'age',
    label: 'Age'
  }]} values={async () => ({
    name: 'Readonly User',
    age: 40
  })} readonly onSubmit={() => {}} />
}`,...(T=(x=l.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var A,C,R;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'text',
    name: 'search',
    label: 'Search'
  }]} hideSubmit values={async () => ({})} onSubmit={() => {}} />
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var V,w,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'text',
    name: 'name',
    label: 'Name'
  }]} values={async () => ({})} onValuesChange={values => console.log('values', values)} onDirtyChange={dirty => console.log('dirty', dirty)} onSubmit={values => console.log(values)} />
}`,...(P=(w=m.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var D,j,N;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'checkbox',
    name: 'enabled',
    label: 'Enable extra field'
  }, {
    type: 'text',
    name: 'extra',
    label: 'Extra Field',
    dependsOn: ['enabled']
  }]} values={async () => ({})} updateFieldSchema={{
    extra: (path, fieldSchema, values) => ({
      ...fieldSchema,
      visible: values.enabled === true
    })
  }} onSubmit={values => console.log(values)} />
}`,...(N=(j=u.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var E,I,U;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<FormRef>(null);
    return <>\r
        <button onClick={() => ref.current?.submit()}>Submit Programmatically</button>\r
\r
        <AutoForm ref={ref} schema={[{
        type: 'text',
        name: 'name',
        label: 'Name'
      }]} values={async () => ({})} onSubmit={values => console.log(values)} />\r
      </>;
  }
}`,...(U=(I=c.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const H=["FormPropsDocumentation","BasicForm","FormWithInitialValues","ReadonlyForm","FormWithoutSubmit","FormWithLifecycle","DynamicForm","FormWithRef"];export{s as BasicForm,u as DynamicForm,o as FormPropsDocumentation,t as FormWithInitialValues,m as FormWithLifecycle,c as FormWithRef,i as FormWithoutSubmit,l as ReadonlyForm,H as __namedExportsOrder,B as default};
