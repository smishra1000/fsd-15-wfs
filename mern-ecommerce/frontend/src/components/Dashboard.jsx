
import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from './Navbar';
import Filters from './Filters';
import { useCart } from '../context/CartContext';
const data = [
  { id: 1, name: 'Smartphone 1', category: 'Smartphone', price: 15000, imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Smartphone 2', category: 'Smartphone', price: 20000, imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Smartphone 3', category: 'Smartphone', price: 18000, imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, name: 'TV 1', category: 'TV', price: 25000, imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, name: 'TV 2', category: 'TV', price: 30000, imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, name: 'TV 3', category: 'TV', price: 28000, imageUrl: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Laptop 1', category: 'Laptop', price: 40000, imageUrl: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Laptop 2', category: 'Laptop', price: 45000, imageUrl: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Laptop 3', category: 'Laptop', price: 42000, imageUrl: 'https://via.placeholder.com/150' },
]
const Dashboard = () => {
  // Dummy data for products
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [categories, setCategories] = useState(['All', 'Smartphone', 'TV', 'Laptop']);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [products, setProducts] = useState(data);
  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };
  const handlePriceChange = (range) => {
    setPriceRange(range);
    // Filter products based on price range
    const [minPrice, maxPrice] = range;
    const filtered = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    setFilteredProducts(filtered);
};

  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className="banner">
              <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="Ecommerce Shops Banner" style={{ width: '100%', height: '500px' }} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Filters categories={categories} onCategoryChange={handleCategoryChange} onPriceChange={handlePriceChange} />
          </Col>
          <Col md={8}>
            <ProductList products={filteredProducts} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const ProductCard = ({ product }) => {
  const { name, category, price, imageUrl } = product;
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Category: {category}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

const ProductList = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to our Ecommerce Dashboard!</h1>
      <p>Manage your products efficiently.</p>
      <div className="banner">
        <img src="ecommerce-banner.jpg" alt="Ecommerce Shops Banner" />
      </div>
    </div>
  );
};

export default Dashboard;