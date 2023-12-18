const TableItem = ({ task }) => {
  return (
    <tr>
      <td>{task?.name }</td>
      <td>{task?.status}</td>
    </tr>
  );
};

export default TableItem;
