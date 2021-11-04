import { useContext } from 'react';
import taskContext from '../provider/taskContext';
import BodyTable from './BodyTable';

function TaskTable() {
  const { tasks } = useContext(taskContext);
  return (
    <table>
      <thead>
        <th>Tarefa</th>
        <th>data</th>
      </thead>
      {
        tasks ? <BodyTable /> : null
      }
    </table>
  );
}

export default TaskTable;
