import {
  createColumnHelper,
} from '@tanstack/react-table';
import TypeComponent from '../components/TableView/TypeComponent'

const columnHelper = createColumnHelper();

export const visibleColumns = [
  columnHelper.accessor('Name', {
    id: 'Name',
    header: () => 'Name',
    cell: (info) => <TypeComponent type={info.getValue().type} info={info} />,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('Status', {
    id: 'Status\'',
    header: () => 'Status',
    cell: (info) => <TypeComponent type={info.getValue().type} info={info} />,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('Files & media', {
    id: 'Files & media',
    header: () => <span>Files & media</span>,
    cell: (info) => <TypeComponent type={info.getValue().type} info={info} />,
    footer: (info) => info.column.id,
  })
];

console.log('visibleColumns', visibleColumns)