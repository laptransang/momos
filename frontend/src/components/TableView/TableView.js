import {
  DndContext,
  MouseSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import TableHeader from "./TableHeader";
import TableCell from "./TableCell";
import {useTableView, useTableData, useTableColumns} from './hooks';
import {useState} from 'react';

const TableView = () => {
  const [ sorting, setSorting ] = useState([]);
  const { columns} = useTableColumns()
  const { data} = useTableData({ sorting })
  const { table, columnOrder, handleDragEnd } = useTableView({ data, columns, sorting, setSorting });

  const sensors = useSensors(useSensor(MouseSensor, {}));

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <DndContext
        collisionDetection={closestCenter}
        modifiers={[restrictToHorizontalAxis]}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <table className="table responsiveTable">
          <thead className="th">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              <SortableContext
                items={columnOrder}
                strategy={horizontalListSortingStrategy}
              >
                {headerGroup.headers.map((header) => (
                  <TableHeader key={header.id} header={header} />
                ))}
              </SortableContext>
            </tr>
          ))}
          </thead>
          <tbody>
          {
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <SortableContext
                    key={cell.id}
                    items={columnOrder}
                    strategy={horizontalListSortingStrategy}
                  >
                    <TableCell
                      key={cell.id}
                      cell={cell}
                      header={cell.column.columnDef.header}
                    />
                  </SortableContext>
                ))}
              </tr>
            ))
          }
          </tbody>
        </table>
      </DndContext>
    </div>
  );
};

export default TableView;