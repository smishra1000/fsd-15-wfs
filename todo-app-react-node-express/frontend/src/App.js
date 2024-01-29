import logo from './logo.svg';
import './App.css';
import CreateToDo from './components/CreateToDo';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="container">
        <CreateToDo/>
        <ToDoList/>
    </div>
  );
}

export default App;
