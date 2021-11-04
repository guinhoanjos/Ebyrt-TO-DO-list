import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskTable from '../components/TaskTable';
import TaskProvider from '../provider/taskProvider';

function Home() {
  return (
    <div>
      <h1>to do list</h1>
      <TaskProvider>
        <TaskInput />
        <TaskTable />
      </TaskProvider>
    </div>
  );
}

export default Home;
