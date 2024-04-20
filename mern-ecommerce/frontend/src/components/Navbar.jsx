import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const NavBar = () => {
  const { cartCount } = useCart();
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">MyShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Products</Nav.Link>
      </Nav>
      <Nav className="ml-auto"> {/* Added ml-auto class */}
        <Nav.Link href="#logout">
          <FaSignOutAlt /> Logout
        </Nav.Link>
        <Nav.Link onClick={handleCartClick}>
          <FaShoppingCart /> Cart {cartCount}
          {showCart && <Cart />}
        </Nav.Link>
        <Nav.Link href="#favorites">
          <FaHeart /> Favorites
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  
  );
};

export default NavBar