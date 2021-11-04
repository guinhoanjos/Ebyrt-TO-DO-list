import { useContext } from 'react';
import taskContext from '../provider/taskContext';

function BodyTable() {
  const { tasks } = useContext(taskContext);
  return (
    <tbody>
      {
        tasks.map((task) => (
          <tr key={`${Math.random()}`}>
            <td>{task.text}</td>
            <td>{task.date}</td>
          </tr>
        ))
      }
    </tbody>
  );
}

export default BodyTable;
