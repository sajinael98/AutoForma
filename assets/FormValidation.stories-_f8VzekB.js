import{j as d}from"./iframe-CK_zX8fh.js";import{A as g}from"./AutoForm-BPR0sNsg.js";import"./preload-helper-Dp1pzeXC.js";const N={title:"AutoForma/Form/Validation",tags:["autodocs"],parameters:{docs:{description:{component:`
### Validation (react-hook-form)

AutoForma uses **react-hook-form** for validation.

You can validate with:
- a custom \`resolver\` (no external libraries)
- field-level rules (if your renderers forward rules to \`register\`)

This page focuses on **resolver-based validation** with the correct signature.
        `}}}},p=(e,h,v)=>{const r={};!e.name||String(e.name).trim().length===0?r.name={type:"required",message:"Name is required"}:String(e.name).trim().length<3&&(r.name={type:"minLength",message:"Name must be at least 3 characters"});const a=e.age,s=typeof a=="number"?a:Number(a);return a==null||String(a).trim().length===0?r.age={type:"required",message:"Age is required"}:Number.isNaN(s)?r.age={type:"validate",message:"Age must be a number"}:s<18&&(r.age={type:"min",message:"Age must be at least 18"}),{values:Object.keys(r).length?{}:e,errors:r}},n={render:()=>d.jsx(g,{schema:[{type:"text",name:"name",label:"Name"},{type:"number",name:"age",label:"Age"}],resolver:p,values:async()=>({}),onSubmit:e=>console.log("submit",e)}),parameters:{docs:{description:{story:`
This story demonstrates validation using a **custom react-hook-form resolver**
with the correct signature:

\`(values, context, options) => ResolverResult\`

No external validation libraries are required.
        `},source:{code:`
import type { Resolver } from 'react-hook-form'

const basicResolver: Resolver<FormValues, any, FormValues> = (values, _context, _options) => {
  const errors: Record<string, any> = {}

  if (!values.name || String(values.name).trim().length === 0) {
    errors.name = { type: 'required', message: 'Name is required' }
  } else if (String(values.name).trim().length < 3) {
    errors.name = { type: 'minLength', message: 'Name must be at least 3 characters' }
  }

  const age = values.age
  const ageNum = typeof age === 'number' ? age : Number(age)

  if (age === undefined || age === null || String(age).trim().length === 0) {
    errors.age = { type: 'required', message: 'Age is required' }
  } else if (Number.isNaN(ageNum)) {
    errors.age = { type: 'validate', message: 'Age must be a number' }
  } else if (ageNum < 18) {
    errors.age = { type: 'min', message: 'Age must be at least 18' }
  }

  return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  }
}

<AutoForm
  schema={[
    { type: 'text', name: 'name', label: 'Name' },
    { type: 'number', name: 'age', label: 'Age' },
  ]}
  resolver={basicResolver}
/>
        `}}}},o={render:()=>null,parameters:{docs:{canvas:{hidden:!0},description:{story:`
## Using External Validation Libraries

AutoForma is built on top of **react-hook-form** and does **not**
enforce any specific validation library.

In addition to custom resolvers, you may integrate popular
validation libraries such as:

- **Zod**
- **Yup**
- **Superstruct**
- or any library that provides a compatible
  \`react-hook-form\` resolver

---

### How It Works

AutoForma simply forwards the \`resolver\` prop to **react-hook-form**.

This means:
- Validation is fully controlled by the consumer
- AutoForma remains UI- and validation-agnostic
- No additional abstraction or wrapping is required

---

### Design Philosophy

Validation is considered **application logic**, not a concern of the form
engine itself.

For this reason:
- AutoForma ships with **no built-in validation library**
- Consumers are free to choose the solution that best fits their needs
- Switching validation strategies does not affect the form schema

---

### Recommendation

- Use **field-level rules** or **custom resolvers** for simple cases
- Use **Zod or Yup** when schema-driven or cross-field validation
  becomes complex
        `}}}};var t,i,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <AutoForm schema={[{
    type: 'text',
    name: 'name',
    label: 'Name'
  }, {
    type: 'number',
    name: 'age',
    label: 'Age'
  }]} resolver={basicResolver} values={async () => ({})} onSubmit={values => console.log('submit', values)} />,
  parameters: {
    docs: {
      description: {
        story: \`
This story demonstrates validation using a **custom react-hook-form resolver**
with the correct signature:

\\\`(values, context, options) => ResolverResult\\\`

No external validation libraries are required.
        \`
      },
      source: {
        code: \`
import type { Resolver } from 'react-hook-form'

const basicResolver: Resolver<FormValues, any, FormValues> = (values, _context, _options) => {
  const errors: Record<string, any> = {}

  if (!values.name || String(values.name).trim().length === 0) {
    errors.name = { type: 'required', message: 'Name is required' }
  } else if (String(values.name).trim().length < 3) {
    errors.name = { type: 'minLength', message: 'Name must be at least 3 characters' }
  }

  const age = values.age
  const ageNum = typeof age === 'number' ? age : Number(age)

  if (age === undefined || age === null || String(age).trim().length === 0) {
    errors.age = { type: 'required', message: 'Age is required' }
  } else if (Number.isNaN(ageNum)) {
    errors.age = { type: 'validate', message: 'Age must be a number' }
  } else if (ageNum < 18) {
    errors.age = { type: 'min', message: 'Age must be at least 18' }
  }

  return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  }
}

<AutoForm
  schema={[
    { type: 'text', name: 'name', label: 'Name' },
    { type: 'number', name: 'age', label: 'Age' },
  ]}
  resolver={basicResolver}
/>
        \`
      }
    }
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,u,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => null,
  parameters: {
    docs: {
      canvas: {
        hidden: true
      },
      description: {
        story: \`
## Using External Validation Libraries

AutoForma is built on top of **react-hook-form** and does **not**
enforce any specific validation library.

In addition to custom resolvers, you may integrate popular
validation libraries such as:

- **Zod**
- **Yup**
- **Superstruct**
- or any library that provides a compatible
  \\\`react-hook-form\\\` resolver

---

### How It Works

AutoForma simply forwards the \\\`resolver\\\` prop to **react-hook-form**.

This means:
- Validation is fully controlled by the consumer
- AutoForma remains UI- and validation-agnostic
- No additional abstraction or wrapping is required

---

### Design Philosophy

Validation is considered **application logic**, not a concern of the form
engine itself.

For this reason:
- AutoForma ships with **no built-in validation library**
- Consumers are free to choose the solution that best fits their needs
- Switching validation strategies does not affect the form schema

---

### Recommendation

- Use **field-level rules** or **custom resolvers** for simple cases
- Use **Zod or Yup** when schema-driven or cross-field validation
  becomes complex
        \`
      }
    }
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const A=["ResolverValidation","ValidationWithExternalLibraries"];export{n as ResolverValidation,o as ValidationWithExternalLibraries,A as __namedExportsOrder,N as default};
