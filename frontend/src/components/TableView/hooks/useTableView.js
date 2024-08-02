import {useEffect, useState} from 'react';
import {getCoreRowModel, getSortedRowModel, useReactTable} from '@tanstack/react-table';
import {arrayMove} from '@dnd-kit/sortable';

function useTableView({ data, columns, sorting, setSorting }) {
  const [columnOrder, setColumnOrder] = useState([]);

  useEffect(() => {
    setColumnOrder(columns.map((c) => c.id));
  }, [columns]);

  const table = useReactTable({
    data,
    columns,
    manualSorting: true,
    state: { sorting, columnOrder },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnOrderChange: setColumnOrder,
    columnResizeMode: "onChange",
  });

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setColumnOrder((columnOrder) => {
        const oldIndex = columnOrder.indexOf(active.id);
        const newIndex = columnOrder.indexOf(over.id);
        return arrayMove(columnOrder, oldIndex, newIndex); //this is just a splice util
      });
    }
  }

  return {
    table,
    columnOrder,
    handleDragEnd
  }
}

export default useTableView;
