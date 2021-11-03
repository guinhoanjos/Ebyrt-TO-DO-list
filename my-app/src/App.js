import './App.css';
import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';
import TaskProvider from './provider/taskProvider';

function App() {
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

export default App;
