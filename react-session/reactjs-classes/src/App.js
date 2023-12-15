import Employee from "./Employee";
import Footer from "./Footer";
import Greet from "./Greet";
import Header from "./Header";
import MyResume from "./MyResume";
import ParentAge from "./ParentAge";
import ParentColor from "./ParentColor";
import Users from "./Users";
import EventHandling from "./EventHandling";

import FormHandling from "./FormHandling";
import EmployeeForm from "./EmployeeForm";

import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from "./Pages/Home"
import Aboutus from "./Pages/Aboutus"
import Contactus from "./Pages/Contactus"
import NavBar from "./Pages/NavBar";
import Courses from "./Pages/Courses";
import Counter from "./Pages/Counter";


function App() {
  return (
    <div>
      {/* <Header/> */}
      {/* <MyResume/> */}
      {/* <MyResume/> */}
      {/* <Employee/> */}
      {/* <Greet msg="good morning" name="sameer" sum={()=>sum()}/> */}
      {/* <Users/> */}
      {/* <Footer/> */}
      {/* <Parent/>
      <Careerx/>
      
   */}

   {/* <ParentAge/> */}
   {/* <ParentColor/> */}
   {/* <EventHandling/> */}

   {/* <Counter/> */}
   {/* <FormHandling/> */}
   {/* <EmployeeForm/> */}
   {/* bootstarp integration testing */}
   {/* <button className="btn btn-primary">Login</button>
   <button className="btn btn-danger">Logout</button> */}

     

      <BrowserRouter>
      {/* <ul>
      <li>
        <Link to="home">Home</Link>
        <Link to="aboutus">Aboutus</Link>
        <Link to="contactus">Contactus</Link>
      </li>
    </ul> */}
    <NavBar/>
      <Routes>
        <Route path="home" element={<Home/>}></Route>
        <Route path="aboutus" element={<Aboutus/>}></Route>
        <Route path="contactus" element={<Contactus/>}></Route>
        <Route path="courses" element={<Courses/>}></Route>
        <Route path="counterexample" element={<Counter/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
