import{A as t}from"./AutoForm-sj98sMsr.js";import"./iframe-DJjTpFA-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoLUOrVx.js";import"./index-Dm25vUe4.js";const u={title:"AutoForm/08-DynamicSchema",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
This section demonstrates dynamic schema updates in AutoForm.

AutoForm allows you to modify field definitions at runtime
based on current form values, without recreating the form.
        `}}},argTypes:{onSubmit:{action:"submit"}}},e={parameters:{docs:{description:{story:`
This story shows how to dynamically control field visibility and validation.

When the "Has Company?" checkbox is checked:
- the "Company Name" field becomes visible
- the field is marked as required

The schema update logic is driven by current form values.
        `},source:{code:`
<AutoForm
  schema={[
    {
      name: "hasCompany",
      label: "Has Company?",
      type: "checkbox",
    },
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      visible: false,
    },
  ]}
  updateFieldSchema={{
    companyName: (path, fieldSchema, formValues) => {
      if (formValues.hasCompany) {
        return {
          ...fieldSchema,
          visible: true,
          required: true,
        };
      }
      return fieldSchema;
    },
  }}
  onSubmit={(values) => {
    console.log(values);
  }}
/>
        `}}},args:{schema:[{name:"hasCompany",label:"Has Company?",type:"checkbox"},{name:"companyName",label:"Company Name",type:"text",visible:!1}],updateFieldSchema:{companyName:(s,a,i)=>i.hasCompany?{...a,visible:!0,required:!0}:a}}};var n,o,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
This story shows how to dynamically control field visibility and validation.

When the "Has Company?" checkbox is checked:
- the "Company Name" field becomes visible
- the field is marked as required

The schema update logic is driven by current form values.
        \`
      },
      source: {
        code: \`
<AutoForm
  schema={[
    {
      name: "hasCompany",
      label: "Has Company?",
      type: "checkbox",
    },
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      visible: false,
    },
  ]}
  updateFieldSchema={{
    companyName: (path, fieldSchema, formValues) => {
      if (formValues.hasCompany) {
        return {
          ...fieldSchema,
          visible: true,
          required: true,
        };
      }
      return fieldSchema;
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
      name: "hasCompany",
      label: "Has Company?",
      type: "checkbox"
    }, {
      name: "companyName",
      label: "Company Name",
      type: "text",
      visible: false
    }],
    updateFieldSchema: {
      companyName: (path, fieldSchema, formValues) => {
        if (formValues.hasCompany) {
          return {
            ...fieldSchema,
            visible: true,
            required: true
          };
        }
        return fieldSchema;
      }
    }
  }
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const h=["ToggleFieldVisibility"];export{e as ToggleFieldVisibility,h as __namedExportsOrder,u as default};
