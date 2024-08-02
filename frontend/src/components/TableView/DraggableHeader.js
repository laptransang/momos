import { Draggable } from 'react-beautiful-dnd';

import { TableViewCell } from './styled'

const DraggableHeader = ({ id, index, children }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <TableViewCell
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>ABC</div>
        </TableViewCell>
      )}
    </Draggable>
  );
};

export default DraggableHeader;