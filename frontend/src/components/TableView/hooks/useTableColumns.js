import { useState, useEffect } from 'react';
import {
  createColumnHelper,
} from '@tanstack/react-table';
import TypeComponent from '../TypeComponent'
import axios from 'axios';

const columnHelper = createColumnHelper();

function useTableColumns() {
  const [columns, setColumns] = useState([]);
  const [isColumnsLoading, setIsColumnsLoading] = useState(true);

  const fetchNotionFields = async () => {
    try {
      setIsColumnsLoading(true);
      const response = await axios.get('http://localhost:8000/notion-fields')

      const arrayData = Object.keys(response.data).map(key => {
        const item = response.data[key]

        return {
          ...columnHelper.accessor(item.name, {
            id: item.name,
            disableSortBy: true,
            header: () => item.name,
            cell: (info) => <TypeComponent type={info.getValue().type} info={info} />,
            footer: (info) => info.column.id,
          })
        }
      });

      // console.log('data =', data)

      setColumns(arrayData);
    } catch (e) {
      console.error(e)
    } finally {
      setIsColumnsLoading(false);
    }
  }

  useEffect(() => {
    fetchNotionFields();
  }, [])

  return {
    columns,
    isColumnsLoading
  }
}

export default useTableColumns
