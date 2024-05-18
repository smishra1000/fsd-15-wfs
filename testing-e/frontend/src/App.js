
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './components/Login'; // Assuming your login component file is Login.jsx
import Signup from './components/Signup'; // Assuming your signup component file is Signup.jsx
import Dashboard from './components/Dashboard'; // Assuming your dashboard component file is Dashboard.jsx
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
       <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </div>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
