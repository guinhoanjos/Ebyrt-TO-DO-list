import React, { useState } from 'react';
import PropTypes from 'prop-types';
import taskContext from './taskContext';

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState('isso eh um teste');

  const context = {
    tasks,
    setTasks,
  };

  return (
    <taskContext.Provider value={context}>
      {children}
    </taskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TaskProvider;
