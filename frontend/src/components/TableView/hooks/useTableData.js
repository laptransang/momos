import { useState, useEffect } from 'react';
import axios from 'axios';

function useTableData({ sorting }) {
   const [data, setData] = useState([]);
   const [isDataLoading, setIsDataLoading] = useState(true);

   const fetchNotionData = async ({ sorting }) => {
     try {
       setIsDataLoading(true);
       const response = await axios.post('http://localhost:8000/notion', {
         sorts: sorting.map((item) => ({
           property: item.id,
           direction: item.desc  ? 'descending' : 'ascending'
         }))
       })

       setData(response.data);
     } catch (e) {

     } finally {
       setIsDataLoading(false);
     }
   }

  useEffect(() => {
    fetchNotionData({ sorting });
  }, [sorting])

   return {
     data,
     isDataLoading
   }
}

export default useTableData
