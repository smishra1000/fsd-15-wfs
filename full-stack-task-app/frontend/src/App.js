import logo from './logo.svg';
import './App.css';
import TaskList from './pages/TaskList';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import NavBar from './pages/NavBar';
import CreateTask from './pages/CreateTask';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PrivateRoutes from './pages/PrivateRoutes';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
        <Route element={<PrivateRoutes/>}>
            <Route path="/" element={<Dashboard/>}>
            <Route path="/tasks" element={<TaskList/>}></Route>
            <Route path="/create-task" element={<CreateTask/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
        </Route>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
