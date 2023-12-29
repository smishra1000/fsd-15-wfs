import logo from './logo.svg';
import './App.css';
import Resume from './Resume';
import Student from './Student';
import Counter from './Counter';
import Employee from './Employee';
import EmployeeWithClass from './EmployeeWithClass';
import Course from './Course';
import MyInput from './MyInput';
import Sum from './Sum';
import ParentIncome from './ParentIncome';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from "./Components/Home"
import AllHooks from './Components/AllHooks/AllHooks';

function App() {
  return (
    <div>
      {/* <Resume/> */}
      {/* <Student/> */}
      {/* <Counter/> */}
      {/* <Employee/>
      <EmployeeWithClass/> */}
      {/* <Course/> */}
      {/* <MyInput value="sameer mishra" placeholder="enter name"/>
      <MyInput value="test!@gmail.com" placeholder="enter email"/>
      <MyInput value="20" placeholder="enter age"/> */}
      {/* <Sum/> */}
      {/* <ParentIncome/> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/allhook" element={<AllHooks />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
