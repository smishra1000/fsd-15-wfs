import React, { useState } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import PriceRangeFilter from './PriceRangeFilter';

const Filters = ({ categories, onCategoryChange, onPriceChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onCategoryChange(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    // Implement color filter logic here
  };

  return (
    <Col md={12}>
      <div style={styles.filterContainer}>
        <h2>Filters</h2>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="All">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Color</Form.Label>
          <Form.Control as="select" value={selectedColor} onChange={handleColorChange}>
            <option value="All">All</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </Form.Control>
        </Form.Group>
        <PriceRangeFilter onPriceChange={onPriceChange} />
        <Button variant="primary">Apply Filters</Button>
      </div>
    </Col>
  );
};

const styles = {
  filterContainer: {
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
  },
};

export default Filters;
