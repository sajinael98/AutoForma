import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/tiptap/styles.css";

import ReactDOM from "react-dom/client";
import AutoForm from "./components/AutoForm/AutoForm";
import { FieldSchema } from "./fields/types";

interface DemoFormValues {
  fullName: string;
  email: string;
  age: number;
  subscribe: boolean;
  birthDate: string | null;
  appointment: string | null;
  contacts: { type: string; value: string }[];
  gender: string;
  bio: string;
}

const schema: FieldSchema[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    placeholder: "Enter your age",
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    placeholder: "Select your gender",
    data: [
      { label: "Male", value: "M" },
      { label: "Female", value: "F" },
      { label: "Prefer not to say", value: "N" },
    ],
  },
  {
    name: "subscribe",
    label: "Subscribe to newsletter",
    type: "checkbox",
    description: "Receive updates by email",
  },
  {
    name: "birthDate",
    label: "Birth Date",
    type: "date",
    placeholder: "Pick your birth date",
  },
  {
    name: "appointment",
    label: "Appointment",
    type: "datetime",
    placeholder: "Select date and time",
  },
  {
    name: "contacts",
    label: "Contacts",
    type: "array",
    fields: [
      {
        name: "type",
        label: "Contact Type",
        type: "select",
        data: [
          { label: "Email", value: "email" },
          { label: "Phone", value: "phone" },
        ],
      },
      {
        name: "value",
        label: "Contact Value",
        type: "text",
      },
    ],
  },
  {
    name: "bio",
    label: "Bio",
    type: "text",
    placeholder: "Tell us about yourself",
  },
];

const App = () => {
  return (
    <AutoForm<DemoFormValues>
      layout="grid"
      schema={schema}
      updateFieldSchema={{
        gender: (field, values) => {
          if (values.age && values.age < 18) {
            return {
              ...field,
              data: [{ label: "Prefer not to say", value: "N" }],
            };
          }
          return field;
        },
        appointment: (field, values) => {
          return {
            ...field,
            disabled: !values.birthDate,
          };
        },
        contacts: (field, values) => {
          return {
            ...field,
            visible: values.subscribe === true,
          };
        },
        bio: (field, values) => {
          if (values.gender === "M") {
            return {
              ...field,
              placeholder: "Tell us about yourself (he/him)...",
            };
          } else if (values.gender === "F") {
            return {
              ...field,
              placeholder: "Tell us about yourself (she/her)...",
            };
          }
          return field;
        },
      }}
      validate={{
        fullName: (value) => {
          if (!value || value.trim().length === 0) {
            return "Full name is required";
          }
          return null;
        },
        age: (value) => {
          if (value < 0 || value > 120) {
            return "Please enter a valid age";
          }
          return null;
        },
      }}
      values={{
        fullName: "John Doe",
        email: "john.doe@example.com",
        age: 28,
        subscribe: true,
        birthDate: "1997-05-14",
        appointment: "2025-10-15T14:30:00",
        gender: "M",
        bio: "",
        contacts: [],
      }}
      customRenderers={{
        age: (field, form) => <input {...form.getInputProps(field.name)} />,
      }}
      onSubmit={(values) => alert(JSON.stringify(values))}
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <App />
  </MantineProvider>
);
