import { useContext } from 'react';
import taskContext from '../provider/taskContext';

function BodyTable() {
  const { tasks } = useContext(taskContext);

  function deleteTask(event) {
    console.log(event.target.dataset.indextask);
  }
  return (
    <tbody>
      {
        tasks.map((task, index) => (
          <tr key={`${Math.random()}`}>
            <td>{task.text}</td>
            <td>{task['select-one']}</td>
            <td>{task.date}</td>
            <td>
              <button
                data-indexTask={index}
                type="button"
                onClick={(event) => deleteTask(event)}
              >
                &#10006;
              </button>

            </td>
          </tr>
        ))
      }
    </tbody>
  );
}

export default BodyTable;
