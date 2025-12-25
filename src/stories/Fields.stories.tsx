import AutoForm from "@/components/AutoForm/AutoForm";
import { FieldSchema } from "@/fields/types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AutoForm> = {
  title: "AutoForm/03-Fields",
  component: AutoForm,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
This section demonstrates all built-in field types supported by AutoForm.

Each story focuses on a single field type and shows
the minimal configuration required to use it.
        `,
      },
    },
  },
  argTypes: {
    onSubmit: { action: "submit" },
  },
};

export default meta;

type Story = StoryObj<typeof AutoForm>;

export const Text: Story = {
  parameters: {
    docs: {
      description: {
        story: "Basic text input field with validation support.",
      },
      source: {
        code: `
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
        `,
      },
    },
  },
  args: {
    schema: [
      {
        name: "title",
        label: "Title",
        type: "text",
        placeholder: "Enter title",
        required: true,
      },
    ] as FieldSchema[],
  },
};

export const Number: Story = {
  parameters: {
    docs: {
      description: {
        story: "Numeric input field for numbers only.",
      },
      source: {
        code: `
<AutoForm
  schema={[
    {
      name: "quantity",
      label: "Quantity",
      type: "number",
    },
  ]}
/>
        `,
      },
    },
  },
  args: {
    schema: [
      {
        name: "quantity",
        label: "Quantity",
        type: "number",
      },
    ] as FieldSchema[],
  },
};

export const Checkbox: Story = {
  parameters: {
    docs: {
      description: {
        story: "Boolean field rendered as a checkbox.",
      },
      source: {
        code: `
<AutoForm
  schema={[
    {
      name: "published",
      label: "Published",
      type: "checkbox",
    },
  ]}
/>
        `,
      },
    },
  },
  args: {
    schema: [
      {
        name: "published",
        label: "Published",
        type: "checkbox",
      },
    ] as FieldSchema[],
  },
};

export const Switch: Story = {
  parameters: {
    docs: {
      description: {
        story: "Boolean field rendered as a switch.",
      },
      source: {
        code: `
<AutoForm
  schema={[
    {
      name: "enabled",
      label: "Enabled",
      type: "switch",
    },
  ]}
/>
        `,
      },
    },
  },
  args: {
    schema: [
      {
        name: "enabled",
        label: "Enabled",
        type: "switch",
      },
    ] as FieldSchema[],
  },
};

export const Date: Story = {
  parameters: {
    docs: {
      description: {
        story: "Date picker field.",
      },
      source: {
        code: `
<AutoForm
  schema={[
    {
      name: "startDate",
      label: "Start Date",
      type: "date",
    },
  ]}
/>
        `,
      },
    },
  },
  args: {
    schema: [
      {
        name: "startDate",
        label: "Start Date",
        type: "date",
      },
    ] as FieldSchema[],
  },
};

export const Time: Story = {
  parameters: {
    docs: {
      description: {
        story: "Time picker field.",
      },
      source: {
        code: `
<AutoForm
  schema={[
    {
      name: "startTime",
      label: "Start Time",
      type: "time",
    },
  ]}
/>
        `,
      },
    },
  },
  args: {
    schema: [
      {
        name: "startTime",
        label: "Start Time",
        type: "time",
      },
    ] as FieldSchema[],
  },
};

export const DateTime: Story = {
  parameters: {
    docs: {
      description: {
        story: "Combined date and time field.",
      },
      source: {
        code: `
<AutoForm
  schema={[
    {
      name: "eventDate",
      label: "Event Date & Time",
      type: "datetime",
    },
  ]}
/>
        `,
      },
    },
  },
  args: {
    schema: [
      {
        name: "eventDate",
        label: "Event Date & Time",
        type: "datetime",
      },
    ] as FieldSchema[],
  },
};

export const Select: Story = {
  parameters: {
    docs: {
      description: {
        story: "Dropdown select field with predefined options.",
      },
      source: {
        code: `
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
        `,
      },
    },
  },
  args: {
    schema: [
      {
        name: "status",
        label: "Status",
        type: "select",
        data: [
          { label: "Draft", value: "draft" },
          { label: "Published", value: "published" },
        ],
      },
    ] as FieldSchema[],
  },
};

export const Tags: Story = {
  parameters: {
    docs: {
      description: {
        story: "Tags input field for multiple string values.",
      },
      source: {
        code: `
<AutoForm
  schema={[
    {
      name: "tags",
      label: "Tags",
      type: "tags",
    },
  ]}
/>
        `,
      },
    },
  },
  args: {
    schema: [
      {
        name: "tags",
        label: "Tags",
        type: "tags",
      },
    ] as FieldSchema[],
  },
};

export const ObjectField: Story = {
  parameters: {
    docs: {
      description: {
        story: "Nested object field with its own internal schema.",
      },
      source: {
        code: `
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
        `,
      },
    },
  },
  args: {
    schema: [
      {
        name: "profile",
        label: "Profile",
        type: "object",
        fields: [
          {
            name: "firstName",
            label: "First Name",
            type: "text",
          },
          {
            name: "lastName",
            label: "Last Name",
            type: "text",
          },
        ],
      },
    ] as FieldSchema[],
  },
};

export const ArrayField: Story = {
  parameters: {
    docs: {
      description: {
        story: "Repeating array field with nested item schema.",
      },
      source: {
        code: `
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
        `,
      },
    },
  },
  args: {
    schema: [
      {
        name: "items",
        label: "Items",
        type: "array",
        fields: [
          {
            name: "name",
            label: "Item Name",
            type: "text",
          },
          {
            name: "price",
            label: "Price",
            type: "number",
          },
        ],
      },
    ] as FieldSchema[],
  },
};
