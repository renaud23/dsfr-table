import type { Meta, StoryObj } from "@storybook/react-vite";

import { DataTable } from "@lib/table/DataTable";

import type { ColumnType } from "@lib/table/table";
import { DropFiles } from "@lib/dropFiles/DropFiles";
import { parseCsv } from "@lib/utils/parseCsv";
import { useState } from "react";

function Render() {
  const [data, setData] = useState<Array<Record<string, string>>>([]);
  const [columns, setColumns] = useState<ColumnType[]>([]);
  async function onDropFile(file?: File) {
    if (file) {
      setData([]);
      const rows = await parseCsv<Record<string, string>>(file);
      const [first] = rows;
      if (rows.length) {
        const cols: ColumnType[] = Object.keys(first).map((k) => ({
          property: k,
          header: <div>{k}</div>,
        }));
        setColumns(cols);
      }
      setData(rows);
    }
  }
  return (
    <>
      <DropFiles onDropFile={onDropFile} />
      <DataTable columns={columns} value={data}></DataTable>
    </>
  );
}

// const columns: ColumnType[] = [
//   { property: "id", header: <div>#</div> },
//   { property: "name", header: <div>Nom&nbsp;:</div> },
// ];

let data: Array<Record<string, string>> = [];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/DataTable",
  component: Render,
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
