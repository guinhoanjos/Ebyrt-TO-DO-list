import React, { useContext, useState } from 'react';
import taskContext from '../provider/taskContext';

const INITIAL_STATE = { text: '', date: '', 'select-one': 'Pendente' };

function TaskInput() {
  const { tasks, setTasks } = useContext(taskContext);
  const [state, setState] = useState(INITIAL_STATE);

  function ChangeState(event) {
    const { type, value } = event.target;
    setState({ ...state, [type]: value });
    console.log(event.target.type);
    console.log(state);
  }

  function ChangeContext() {
    setTasks([...tasks, state]);
    console.log(tasks);
    setState(INITIAL_STATE);
  }
  return (
    <>
      <label htmlFor="task-input">
        <input
          type="text"
          placeholder="Digite sua tarefa"
          id="task-input"
          value={state.text}
          onChange={(event) => { ChangeState(event); }}
        />
      </label>
      <label htmlFor="status-input">
        Status
        <select
          onBlur={(event) => { console.log(event.target.value); }}
          onChange={(event) => { ChangeState(event); }}
        >
          <option value="Pendente">Pendente</option>
          <option value="Em Andamento">Em Andamento</option>
          <option value="Feito">Feito</option>
        </select>
      </label>
      <label htmlFor="date-input">
        Data pra conclusão
        <input
          type="date"
          id="date-input"
          onChange={(event) => { ChangeState(event); }}
        />
      </label>
      <button
        type="submit"
        value="Registrar"
        id="register-button"
        onClick={ChangeContext}
      >
        Registrar
      </button>

    </>
  );
}

export default TaskInput;
