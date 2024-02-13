import logo from './logo.svg';
import './App.css';
import TaskList from './pages/TaskList';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import NavBar from './pages/NavBar';
import CreateTask from './pages/CreateTask';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="tasks" element={<TaskList/>}></Route>
        <Route path="create-task" element={<CreateTask/>}></Route>
        <Route path="/" element={<TaskList/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
