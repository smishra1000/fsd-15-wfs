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
import UsersCrud from './Components/AllHooks/UsersCrud';
import UserCreateForm from './Components/AllHooks/UserCreateForm';
import ContactList from './Components/contacts-app/ContactList';
import CounterUsingRedux from './Components/CounterUsingRedux';
import ContactsUsingRedux from './Components/ContactsUsingRedux';

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
          <Route path="/userscrud" element={<UsersCrud />}></Route>
          <Route path="/createuser" element={<UserCreateForm />}></Route>
          <Route path="/contactlist" element={<ContactList />}></Route>
          <Route path="/counterusingredux" element={<CounterUsingRedux />}></Route>
          <Route path="/contactsusingredux" element={<ContactsUsingRedux />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
