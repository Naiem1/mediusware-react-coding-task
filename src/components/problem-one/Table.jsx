import TableItem from './TableItem';

const Table = ({ todos}) => {
  return (
    <table className="table table-striped ">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo) => (
          <TableItem key={todo.id} task={todo} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
