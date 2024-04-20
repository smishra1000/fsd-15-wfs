import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';

const PriceRangeFilter = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(30000);

  const handleMinPriceChange = (e) => {
    const value = parseInt(e.target.value);
    setMinPrice(value);
    onPriceChange([value, maxPrice]);
  };

  const handleMaxPriceChange = (e) => {
    const value = parseInt(e.target.value);
    setMaxPrice(value);
    onPriceChange([minPrice, value]);
  };

  return (
    <Col md={12}>
      <div style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', padding: '20px', borderRadius: '10px' }}>
        <h2>Price Range Filter</h2>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Min Price: ${minPrice}</Form.Label>
          <Form.Control type="range" value={minPrice} onChange={handleMinPriceChange} min={0} max={30000} />
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Max Price: ${maxPrice}</Form.Label>
          <Form.Control type="range" value={maxPrice} onChange={handleMaxPriceChange} min={0} max={30000} />
        </Form.Group>
      </div>
    </Col>
  );
};

export default PriceRangeFilter;
