import type { Meta, StoryObj } from "@storybook/react-vite";

import { DataTable } from "@lib/table/DataTable";

import type { ColumnType } from "@lib/table/table";

const data = [
  { id: "1", name: "Renaud" },
  { id: "2", name: "Stéphanie" },
  { id: "3", name: "Joseph" },
];

const columns: ColumnType[] = [
  { property: "id", header: <div>#</div> },
  { property: "name", header: <div>Nom&nbsp;:</div> },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/DataTable",
  component: () => (
    <>
      <h1>yop!</h1>
      <DataTable columns={columns} value={data}></DataTable>
    </>
  ),
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {},
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};

// export const Secondary: Story = {
//   args: {
//     label: "Button",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {

//     label: "Button",
//   },
// };
