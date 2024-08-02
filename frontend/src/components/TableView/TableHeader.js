import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { flexRender } from '@tanstack/react-table';

const TableHeader = ({ header }) => {
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useSortable({
      id: header.column.id,
    });

  const style = {
    position: "relative",
    opacity: isDragging ? 0.8 : 1,
    transform: CSS.Translate.toString(transform), // translate instead of transform to avoid squishing
    transition: "width transform 0.2s ease-in-out",
    whiteSpace: "nowrap",
    width: header.column.getSize(),
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <th
      colSpan={header.colSpan}
      ref={setNodeRef}
      className="th td cell-padding"
      style={style}
    >
      <div className="flex justify-between"
        onClick={header.column.getToggleSortingHandler()}
      >
        {flexRender(
          header.column.columnDef.header,
          header.getContext()
        )}
        {{
          asc: " ↑",
          desc: " ↓",
        }[header.column.getIsSorted()] ?? null}
        <button {...attributes} {...listeners} className="drag-handle">
          ⛚
        </button>
      </div>
      <div
        onMouseDown={header.getResizeHandler()}
        onTouchStart={header.getResizeHandler()}
        className={`resizer ${
          header.column.getIsResizing() ? "isResizing" : ""
        }`}
      />
    </th>
  );
};

export default TableHeader;