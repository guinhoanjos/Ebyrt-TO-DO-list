import { useContext } from 'react';
import taskContext from '../provider/taskContext';

function TaskInput() {
  return (
    <>
      <label htmlFor="task-input">
        <input type="text" placeholder="Digite sua tarefa" id="task-input" />
      </label>
      <label htmlFor="date-input">
        Data pra conclusão
        <input type="date" id="date-input" />
      </label>

    </>
  );
}

export default TaskInput;
