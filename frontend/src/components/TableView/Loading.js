function Loading({ columns }) {
  const skeletonRows = Array.from({ length: 10 }, (_, index) => index);

  return (
    <>
      {skeletonRows.map((row) => (
        <tr key={row}>
          {columns?.map((column) => (
            <td key={column.id} className="td cell-padding">
              <div className="skeleton">...</div>
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}

export default Loading;
