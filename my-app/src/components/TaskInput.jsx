import { useContext, useState } from 'react';
import taskContext from '../provider/taskContext';

function TaskInput() {
  const { tasks, setTasks } = useContext(taskContext);
  const [state, setState] = useState();

  function ChangeState(event) {
    const { type, value } = event.target;
    setState({ ...state, [type]: value });
    console.log(event.target.type);
    console.log(state);
  }
  function ChangeContext() {
    setTasks([...tasks, state]);
    console.log(tasks);
  }
  return (
    <>
      <label htmlFor="task-input">
        <input
          type="text"
          placeholder="Digite sua tarefa"
          id="task-input"
          onChange={(event) => { ChangeState(event); }}
        />
      </label>
      <label htmlFor="date-input">
        Data pra conclusão
        <input
          type="date"
          id="date-input"
          onChange={(event) => { ChangeState(event); }}
        />
      </label>
      <label htmlFor="register=button">
        <input
          type="button"
          value="Registrar"
          id="register-button"
          onClick={ChangeContext}
        />
      </label>

    </>
  );
}

export default TaskInput;
