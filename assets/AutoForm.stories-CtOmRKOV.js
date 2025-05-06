import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{u as Be,m as Ee,f as T,b as w,c as He,d as j,e as ee,U as Ge,g as ze,h as Me,i as oe,j as we,k as ne,l as Ue,n as Le,S as We,o as ce,A as Se,G as S,a as Te,B as z,F as Re,p as qe,q as Je,M as Ye,T as Xe}from"./AutoForm-CEr4m2za.js";import{u as Qe,r as U,j as X}from"./get-contrast-color-Db6nT3bs.js";import{r as de}from"./index-D4lIrffr.js";import{r as Ze}from"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";function ue(e,n){return o=>{if(typeof o!="string"||o.trim().length===0)throw new Error(n);return`${e}-${o}`}}function Z(e,n){let o=e;for(;(o=o.parentElement)&&!o.matches(n););return o}function Ke(e,n,o){for(let r=e-1;r>=0;r-=1)if(!n[r].disabled)return r;if(o){for(let r=n.length-1;r>-1;r-=1)if(!n[r].disabled)return r}return e}function eo(e,n,o){for(let r=e+1;r<n.length;r+=1)if(!n[r].disabled)return r;if(o){for(let r=0;r<n.length;r+=1)if(!n[r].disabled)return r}return e}function oo(e,n,o){return Z(e,o)===Z(n,o)}function no({parentSelector:e,siblingSelector:n,onKeyDown:o,loop:r=!0,activateOnFocus:c=!1,dir:l="rtl",orientation:m}){return i=>{var b;o==null||o(i);const a=Array.from(((b=Z(i.currentTarget,e))==null?void 0:b.querySelectorAll(n))||[]).filter(f=>oo(i.currentTarget,f,e)),d=a.findIndex(f=>i.currentTarget===f),s=eo(d,a,r),h=Ke(d,a,r);switch(i.key){case"ArrowRight":break;case"ArrowLeft":break;case"ArrowUp":{i.stopPropagation(),i.preventDefault(),a[h].focus(),c&&a[h].click();break}case"ArrowDown":{i.stopPropagation(),i.preventDefault(),a[s].focus(),c&&a[s].click();break}case"Home":{i.stopPropagation(),i.preventDefault(),!a[0].disabled&&a[0].focus();break}case"End":{i.stopPropagation(),i.preventDefault();const f=a.length-1;!a[f].disabled&&a[f].focus();break}}}}function Ie(e,n){return Array.isArray(e)?[...e].reduce((o,r)=>({...o,...Ie(r,n)}),{}):typeof e=="function"?e(n):e??{}}function to(e){if(!e||typeof e=="string")return 0;const n=e/36;return Math.round((4+15*n**.25+n/5)*10)}function Q(e){return e!=null&&e.current?e.current.scrollHeight:"auto"}const F=typeof window<"u"&&window.requestAnimationFrame;function ro({transitionDuration:e,transitionTimingFunction:n="ease",onTransitionEnd:o=()=>{},opened:r}){const c=de.useRef(null),l=0,m={display:"none",height:0,overflow:"hidden"},[i,a]=de.useState(r?{}:m),d=u=>{Ze.flushSync(()=>a(u))},s=u=>{d(y=>({...y,...u}))};function h(u){const y=e||to(u);return{transition:`height ${y}ms ${n}, opacity ${y}ms ${n}`}}Be(()=>{typeof F=="function"&&F(r?()=>{s({willChange:"height",display:"block",overflow:"hidden"}),F(()=>{const u=Q(c);s({...h(u),height:u})})}:()=>{const u=Q(c);s({...h(u),willChange:"height",height:u}),F(()=>s({height:l,overflow:"hidden"}))})},[r]);const b=u=>{if(!(u.target!==c.current||u.propertyName!=="height"))if(r){const y=Q(c);y===i.height?d({}):s({height:y}),o()}else i.height===l&&(d(m),o())};function f({style:u={},refKey:y="ref",...p}={}){const x=p[y];return{"aria-hidden":!r,...p,[y]:Ee(c,x),onTransitionEnd:b,style:{boxSizing:"border-box",...u,...i}}}return f}const ao={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},Pe=T((e,n)=>{const{children:o,in:r,transitionDuration:c,transitionTimingFunction:l,style:m,onTransitionEnd:i,animateOpacity:a,...d}=w("Collapse",ao,e),s=Qe(),h=He(),f=(s.respectReducedMotion?h:!1)?0:c,u=ro({opened:r,transitionDuration:f,transitionTimingFunction:l,onTransitionEnd:i});return f===0?r?t.jsx(j,{...d,children:o}):null:t.jsx(j,{...u({style:{opacity:r||!a?1:0,transition:a?`opacity ${f}ms ${l}`:"none",...Ie(m,s)},ref:n,...d}),children:o})});Pe.displayName="@mantine/core/Collapse";const[io,te]=ee("Accordion component was not found in the tree"),[so,Ne]=ee("Accordion.Item component was not found in the tree");var V={root:"m_9bdbb667",panel:"m_df78851f",content:"m_4ba554d4",itemTitle:"m_8fa820a0",control:"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b",label:"m_df3ffa0f",chevron:"m_3f35ae96",icon:"m_9bd771fe",item:"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"};const lo={},re=T((e,n)=>{const{classNames:o,className:r,style:c,styles:l,vars:m,chevron:i,icon:a,onClick:d,onKeyDown:s,children:h,disabled:b,mod:f,...u}=w("AccordionControl",lo,e),{value:y}=Ne(),p=te(),x=p.isItemActive(y),$=typeof p.order=="number",D=`h${p.order}`,P=t.jsxs(Ge,{...u,...p.getStyles("control",{className:r,classNames:o,style:c,styles:l,variant:p.variant}),unstyled:p.unstyled,mod:["accordion-control",{active:x,"chevron-position":p.chevronPosition,disabled:b},f],ref:n,onClick:I=>{d==null||d(I),p.onChange(y)},type:"button",disabled:b,"aria-expanded":x,"aria-controls":p.getRegionId(y),id:p.getControlId(y),onKeyDown:no({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:p.loop,orientation:"vertical",onKeyDown:s}),children:[t.jsx(j,{component:"span",mod:{rotate:!p.disableChevronRotation&&x,position:p.chevronPosition},...p.getStyles("chevron",{classNames:o,styles:l}),children:i||p.chevron}),t.jsx("span",{...p.getStyles("label",{classNames:o,styles:l}),children:h}),a&&t.jsx(j,{component:"span",mod:{"chevron-position":p.chevronPosition},...p.getStyles("icon",{classNames:o,styles:l}),children:a})]});return $?t.jsx(D,{...p.getStyles("itemTitle",{classNames:o,styles:l}),children:P}):P});re.displayName="@mantine/core/AccordionControl";re.classes=V;const co={},ae=T((e,n)=>{const{classNames:o,className:r,style:c,styles:l,vars:m,value:i,mod:a,...d}=w("AccordionItem",co,e),s=te();return t.jsx(so,{value:{value:i},children:t.jsx(j,{ref:n,mod:[{active:s.isItemActive(i)},a],...s.getStyles("item",{className:r,classNames:o,styles:l,style:c,variant:s.variant}),...d})})});ae.displayName="@mantine/core/AccordionItem";ae.classes=V;const uo={},ie=T((e,n)=>{const{classNames:o,className:r,style:c,styles:l,vars:m,children:i,...a}=w("AccordionPanel",uo,e),{value:d}=Ne(),s=te();return t.jsx(Pe,{ref:n,...s.getStyles("panel",{className:r,classNames:o,style:c,styles:l}),...a,in:s.isItemActive(d),transitionDuration:s.transitionDuration??200,role:"region",id:s.getRegionId(d),"aria-labelledby":s.getControlId(d),children:t.jsx("div",{...s.getStyles("content",{classNames:o,styles:l}),children:i})})});ie.displayName="@mantine/core/AccordionPanel";ie.classes=V;const mo={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:t.jsx(we,{})},ho=ne((e,{transitionDuration:n,chevronSize:o,radius:r})=>({root:{"--accordion-transition-duration":n===void 0?void 0:`${n}ms`,"--accordion-chevron-size":o===void 0?void 0:U(o),"--accordion-radius":r===void 0?void 0:Ue(r)}}));function v(e){const n=w("Accordion",mo,e),{classNames:o,className:r,style:c,styles:l,unstyled:m,vars:i,children:a,multiple:d,value:s,defaultValue:h,onChange:b,id:f,loop:u,transitionDuration:y,disableChevronRotation:p,chevronPosition:x,chevronSize:$,order:D,chevron:P,variant:I,radius:L,...W}=n,N=ze(f),[C,q]=Me({value:s,defaultValue:h,finalValue:d?[]:null,onChange:b}),J=A=>Array.isArray(C)?C.includes(A):A===C,Y=A=>{const $e=Array.isArray(C)?C.includes(A)?C.filter(De=>De!==A):[...C,A]:A===C?null:A;q($e)},O=oe({name:"Accordion",classes:V,props:n,className:r,style:c,classNames:o,styles:l,unstyled:m,vars:i,varsResolver:ho});return t.jsx(io,{value:{isItemActive:J,onChange:Y,getControlId:ue(`${N}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:ue(`${N}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:y,disableChevronRotation:p,chevronPosition:x,order:D,chevron:P,loop:u,getStyles:O,variant:I,unstyled:m},children:t.jsx(j,{...O("root"),id:N,...W,variant:I,"data-accordion":!0,children:a})})}const fo=e=>e;v.extend=fo;v.withProps=Le(v);v.classes=V;v.displayName="@mantine/core/Accordion";v.Item=ae;v.Panel=ie;v.Control=re;v.Chevron=we;const[po,bo]=ee("Table component was not found in the tree");var k={table:"m_b23fa0ef",th:"m_4e7aa4f3",tr:"m_4e7aa4fd",td:"m_4e7aa4ef",tbody:"m_b2404537",thead:"m_b242d975",caption:"m_9e5a3ac7",scrollContainer:"m_a100c15",scrollContainerInner:"m_62259741"};function go(e,n){if(!n)return;const o={};return n.columnBorder&&e.withColumnBorders&&(o["data-with-column-border"]=!0),n.rowBorder&&e.withRowBorders&&(o["data-with-row-border"]=!0),n.striped&&e.striped&&(o["data-striped"]=e.striped),n.highlightOnHover&&e.highlightOnHover&&(o["data-hover"]=!0),n.captionSide&&e.captionSide&&(o["data-side"]=e.captionSide),n.stickyHeader&&e.stickyHeader&&(o["data-sticky"]=!0),o}function R(e,n){const o=`Table${e.charAt(0).toUpperCase()}${e.slice(1)}`,r=T((c,l)=>{const m=w(o,{},c),{classNames:i,className:a,style:d,styles:s,...h}=m,b=bo();return t.jsx(j,{component:e,ref:l,...go(b,n),...b.getStyles(e,{className:a,classNames:i,style:d,styles:s,props:m}),...h})});return r.displayName=`@mantine/core/${o}`,r.classes=k,r}const K=R("th",{columnBorder:!0}),Oe=R("td",{columnBorder:!0}),M=R("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),Fe=R("thead",{stickyHeader:!0}),_e=R("tbody"),Ve=R("tfoot"),ke=R("caption",{captionSide:!0});function se({data:e}){return t.jsxs(t.Fragment,{children:[e.caption&&t.jsx(ke,{children:e.caption}),e.head&&t.jsx(Fe,{children:t.jsx(M,{children:e.head.map((n,o)=>t.jsx(K,{children:n},o))})}),e.body&&t.jsx(_e,{children:e.body.map((n,o)=>t.jsx(M,{children:n.map((r,c)=>t.jsx(Oe,{children:r},c))},o))}),e.foot&&t.jsx(Ve,{children:t.jsx(M,{children:e.foot.map((n,o)=>t.jsx(K,{children:n},o))})})]})}se.displayName="@mantine/core/TableDataRenderer";const yo={type:"scrollarea"},vo=ne((e,{minWidth:n,maxHeight:o,type:r})=>({scrollContainer:{"--table-min-width":U(n),"--table-max-height":U(o),"--table-overflow":r==="native"?"auto":void 0}})),le=T((e,n)=>{const o=w("TableScrollContainer",yo,e),{classNames:r,className:c,style:l,styles:m,unstyled:i,vars:a,children:d,minWidth:s,maxHeight:h,type:b,...f}=o,u=oe({name:"TableScrollContainer",classes:k,props:o,className:c,style:l,classNames:r,styles:m,unstyled:i,vars:a,varsResolver:vo,rootSelector:"scrollContainer"});return t.jsx(j,{component:b==="scrollarea"?We:"div",...b==="scrollarea"?h?{offsetScrollbars:"xy"}:{offsetScrollbars:"x"}:{},ref:n,...u("scrollContainer"),...f,children:t.jsx("div",{...u("scrollContainerInner"),children:d})})});le.classes=k;le.displayName="@mantine/core/TableScrollContainer";const xo={withRowBorders:!0,verticalSpacing:7},Co=ne((e,{layout:n,captionSide:o,horizontalSpacing:r,verticalSpacing:c,borderColor:l,stripedColor:m,highlightOnHoverColor:i,striped:a,highlightOnHover:d,stickyHeaderOffset:s,stickyHeader:h})=>({table:{"--table-layout":n,"--table-caption-side":o,"--table-horizontal-spacing":ce(r),"--table-vertical-spacing":ce(c),"--table-border-color":l?X(l,e):void 0,"--table-striped-color":a&&m?X(m,e):void 0,"--table-highlight-on-hover-color":d&&i?X(i,e):void 0,"--table-sticky-header-offset":h?U(s):void 0}})),g=T((e,n)=>{const o=w("Table",xo,e),{classNames:r,className:c,style:l,styles:m,unstyled:i,vars:a,horizontalSpacing:d,verticalSpacing:s,captionSide:h,stripedColor:b,highlightOnHoverColor:f,striped:u,highlightOnHover:y,withColumnBorders:p,withRowBorders:x,withTableBorder:$,borderColor:D,layout:P,variant:I,data:L,children:W,stickyHeader:N,stickyHeaderOffset:C,mod:q,tabularNums:J,...Y}=o,O=oe({name:"Table",props:o,className:c,style:l,classes:k,classNames:r,styles:m,unstyled:i,rootSelector:"table",vars:a,varsResolver:Co});return t.jsx(po,{value:{getStyles:O,stickyHeader:N,striped:u===!0?"odd":u||void 0,highlightOnHover:y,withColumnBorders:p,withRowBorders:x,captionSide:h||"bottom"},children:t.jsx(j,{component:"table",variant:I,ref:n,mod:[{"data-with-table-border":$,"data-tabular-nums":J},q],...O("table"),...Y,children:W||!!L&&t.jsx(se,{data:L})})})});g.classes=k;g.displayName="@mantine/core/Table";g.Td=Oe;g.Th=K;g.Tr=M;g.Thead=Fe;g.Tbody=_e;g.Tfoot=Ve;g.Caption=ke;g.ScrollContainer=le;g.DataRenderer=se;const _=[{type:"check",label:"Enabled",name:"enabled",initialValue:!0},{type:"object",name:"personalInformation",label:"Personal Information",fields:[{type:"text",name:"firstName",label:"First Name",initialValue:"Saji"},{type:"text",name:"lastName",label:"Last Name",initialValue:"Nael"},{type:"select",name:"gender",label:"Gender",data:[{label:"Male",value:"male"},{label:"Female",value:"female"}],initialValue:"male"}]},{type:"object",name:"accountInformation",label:"Account Information",fields:[{type:"text",name:"username",label:"Username",initialValue:"saji-nael"},{type:"text",name:"email",label:"Email",initialValue:"saji.nael.98@gmail.com"},{type:"date",name:"dateOfJoin",label:"Date Of Join",initialValue:new Date}]},{type:"object",name:"contactInformation",label:"Contact Information",fields:[{type:"array",name:"phones",label:"Phones",fields:[{type:"text",name:"phoneNo",label:"Phone NO"}]}]}],jo=[..._.slice(0,3),{..._[3],fields:[{..._[3].fields[0],required:!0}]}],No={title:"components/AutoForm",component:Se,tags:["autodocs"],args:{onSubmit:e=>alert(JSON.stringify(e,null,2)),schema:_,container:(e,n,o)=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:e}),!o&&t.jsx(Te,{justify:"flex-end",children:t.jsx(z,{onClick:n,children:"Submit"})})]}),fieldContainer:(e,n)=>t.jsx(S.Col,{span:{base:12,md:n.type==="object"?12:6},children:e})},argTypes:{values:{description:"Initial form values. Useful for editing or setting default values.",control:!1},schema:{description:"Array of field definitions used to render the form. Each item defines one input field.",control:!1},onSubmit:{description:"Function called with form values when the form is submitted.",control:!1},container:{description:"Function that receives the rendered form and the onSubmit handler. Used to wrap the form with layout and controls.",control:!1},fieldContainer:{description:"Optional function to wrap each individual field with custom layout or styling.",control:!1},customRender:{description:"Optional custom render function to override the default field rendering based on field type.",control:!1},validate:{description:"Optional validation logic. Receives values and returns an object with field errors or nulls.",control:!1},readOnly:{description:"If true, all fields will be rendered in read-only mode.",control:{type:"boolean"}},onFieldChange:{description:"Optional function triggered on field change. You can return modified values dynamically.",control:!1}},parameters:{docs:{description:{component:`
### 📄 AutoForm

\`AutoForm\` is a dynamic, schema-driven form component designed for full control and customization.

---

### 🧩 AutoFormProps Overview

| Prop             | Type                                                                 | Description |
|------------------|----------------------------------------------------------------------|-------------|
| \`schema\`         | \`FieldSchema[]\`                                                      | Array of field definitions |
| \`onSubmit\`       | \`(values: Record<string, any>) => void\`                             | Called when form is submitted |
| \`values\`         | \`Record<string, any>\`                                                | Initial values |
| \`readOnly\`       | \`true?\`                                                              | Makes the form non-editable |
| \`validate\`       | \`FormValidateInput<Record<string, any>>\`                            | Optional validation function |
| \`onFieldChange\`  | \`(name, value, values) => Record<string, any>\`                       | Callback when a field changes |
| \`container\`      | \`(formNode, onSubmit, readOnly) => React.ReactNode\`                  | Customize the outer layout of the form |
| \`fieldContainer\` | \`(fieldNode, fieldSchema) => React.ReactNode\`                       | Customize how each field is rendered |
| \`customRender\`   | \`(field, value, error, onChange, values, options, readOnly) => JSX\` | Advanced per-field rendering |

---

### 🧱 Layout Customization

#### 🔲 \`container\`

Use the \`container\` prop to wrap the full form, including layout, submit buttons, etc.

#### 🔳 \`fieldContainer\`

With \`fieldContainer\`, you can wrap **each field** with your own layout:

\`\`\`tsx
fieldContainer: (field, fieldSchema) => (
  <Grid.Col span={{ base: 12, md: fieldSchema.type === 'object' ? 12 : 6 }}>
    {field}
  </Grid.Col>
)
\`\`\`

This allows **full control per field** — spacing, layout, responsiveness, etc.

---

### 🧠 Advanced Rendering with \`customRender\`

\`customRender\` gives you full control over how a field is rendered.

#### 📦 Example

\`\`\`tsx
customRender: (field, objValue, error, onObjChange, formValues, options, readOnly) => {
  if (field.type === 'object') {
    return (
      <Accordion defaultValue={field.name}>
        <Accordion.Item value={field.name}>
          <Accordion.Control>{field.label}</Accordion.Control>
          <Accordion.Panel>
            <Grid>
              {field.fields?.map((childField) => {
                function onChange(name: string, value: any) {
                  objValue[name] = value;
                  onObjChange(field.name, objValue);
                }

                if (childField.name === 'phones') {
                  return (
                    <CustomPhoneList
                      key={childField.name}
                      field={childField}
                      value={objValue[childField.name]}
                      onChange={onChange}
                      error={error}
                      formValues={formValues}
                      options={options}
                      readOnly={readOnly}
                    />
                  );
                }

                return (
                  <Grid.Col key={childField.name} span={6}>
                    <FieldRender
                      field={childField}
                      formValues={formValues}
                      value={objValue[childField.name]}
                      onChange={onChange}
                      readOnly={readOnly}
                    />
                  </Grid.Col>
                );
              })}
            </Grid>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  }
  return null;
}
\`\`\`

You can use this to:
- Nest fields inside custom layouts
- Open modals, drawers, or complex editors
- Show/hide fields dynamically
- Render fields as fully custom components

---
        `}}}},B={},E={args:{readOnly:!0}},H={args:{schema:jo,validate:{contactInformation:{phones:{phoneNo:e=>/^(059|056)\d{7}$/.test(e)?null:"Invalid phone number. It must be exactly 10 digits long and start with '059' or '056'."}}}}},G={args:{schema:_,customRender:(e,n,o,r,c,l,m)=>{var i;return e.type==="object"?t.jsx(S.Col,{span:12,children:t.jsx(v,{defaultValue:e.name,variant:"contained",children:t.jsxs(v.Item,{value:e.name,children:[t.jsx(v.Control,{children:e.label}),t.jsx(v.Panel,{children:t.jsx(S,{children:(i=e.fields)==null?void 0:i.map(a=>{const d=(s,h)=>{n[s]=h,r(a.name,n)};return a.name==="phones"?t.jsx(Ao,{error:o,field:a,formValues:c,onChange:d,value:n[a.name],options:l,readOnly:m},a.name):t.jsx(S.Col,{span:{base:12,md:a.type==="object"?12:6},children:t.jsx(Re,{field:a,formValues:c,value:n[a.name],error:void 0,readOnly:m,onChange:d})},a.name)})})})]})})}):null}}},Ao=e=>{const[n,{open:o,close:r}]=qe(!1),{error:c,field:l,formValues:m,onChange:i,value:a,options:d,readOnly:s}=e,h=Je(l.name,i,a);return t.jsx(t.Fragment,{children:t.jsx(Re,{field:l,formValues:m,onChange:i,value:a,error:c,readOnly:s,customRender:()=>t.jsxs(t.Fragment,{children:[t.jsx(Ye,{title:"Add Phone",onClose:r,opened:n,children:t.jsx(Se,{schema:l.fields,fieldContainer:(b,f)=>t.jsx(S.Col,{span:{base:12,md:f.type==="object"?12:6},children:b}),container:(b,f,u)=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:b}),!u&&t.jsx(Te,{justify:"flex-end",children:t.jsx(z,{onClick:f,children:"Submit"})})]}),onSubmit:b=>{h==null||h.addElement(b),r()}})}),t.jsx(z,{onClick:o,mb:"md",children:"Add Phone"}),a.length>0?t.jsxs(g,{withColumnBorders:!0,withRowBorders:!0,withTableBorder:!0,striped:!0,children:[t.jsx(g.Thead,{children:t.jsxs(g.Tr,{children:[t.jsx(g.Th,{children:"Phone NO."}),t.jsx(g.Th,{children:"Action"})]})}),t.jsx(g.Tbody,{children:a.map((b,f)=>t.jsxs(g.Tr,{children:[t.jsx(g.Td,{children:b.phoneNo}),t.jsx(g.Td,{children:t.jsx(z,{variant:"light",size:"xs",color:"red",onClick:()=>h.removeElement(f),children:"Delete"})})]},f))})]}):t.jsx(Xe,{children:"No phones are inserted"})]})})})};var me,he,fe;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:"{}",...(fe=(he=B.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var pe,be,ge;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...(ge=(be=E.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ye,ve,xe;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    schema: schemaWithValidation,
    validate: {
      contactInformation: {
        phones: {
          phoneNo: (value: string) => {
            const regex = /^(059|056)\\d{7}$/;
            return regex.test(value) ? null : "Invalid phone number. It must be exactly 10 digits long and start with '059' or '056'.";
          }
        }
      }
    }
  }
}`,...(xe=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Ce,je,Ae;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    schema,
    customRender: (field, objValue, error, onObjChange, formValues, options, readOnly) => {
      if (field.type === 'object') {
        return <Grid.Col span={12}>\r
            <Accordion defaultValue={field.name} variant="contained">\r
              <Accordion.Item value={field.name}>\r
                <Accordion.Control>{field.label}</Accordion.Control>\r
                <Accordion.Panel>\r
                  <Grid>\r
                    {field.fields?.map(field => {
                    const onChange = (name: string, value: any) => {
                      objValue[name] = value;
                      onObjChange(field.name, objValue);
                    };
                    if (field.name === 'phones') {
                      return <CustomPhoneList key={field.name} error={error} field={field} formValues={formValues} onChange={onChange} value={objValue[field.name]} options={options} readOnly={readOnly} />;
                    }
                    return <Grid.Col key={field.name} span={{
                      base: 12,
                      md: field.type === 'object' ? 12 : 6
                    }}>\r
                          <FieldRender field={field} formValues={formValues} value={objValue[field.name]} error={undefined} readOnly={readOnly} onChange={onChange} />\r
                        </Grid.Col>;
                  })}\r
                  </Grid>\r
                </Accordion.Panel>\r
              </Accordion.Item>\r
            </Accordion>\r
          </Grid.Col>;
      }
      return null;
    }
  }
}`,...(Ae=(je=G.parameters)==null?void 0:je.docs)==null?void 0:Ae.source}}};const Oo=["Standard","ReadOnly","FormValidation","CustomizedForm"];export{G as CustomizedForm,H as FormValidation,E as ReadOnly,B as Standard,Oo as __namedExportsOrder,No as default};
