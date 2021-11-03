import { useContext } from 'react';
import taskContext from '../provider/taskContext';

function TaskTable() {
  const { tasks } = useContext(taskContext);
  return (
    <li>
      <ol>{tasks}</ol>
      <ol>{tasks}</ol>
      <ol>{tasks}</ol>
    </li>
  );
}

export default TaskTable;
