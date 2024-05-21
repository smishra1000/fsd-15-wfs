const { add, subtract, multiply } = require('../src/math');

describe('Math Module', () => {
  describe('add function', () => {
    it('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should return a negative number when subtracting a larger number from a smaller number', () => {
      expect(add(-2, 3)).toBe(1);
    });
  });

  describe('subtract function', () => {
    it('should subtract two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should return a negative number when subtracting a smaller number from a larger number', () => {
      expect(subtract(2, 5)).toBe(-3);
    });
  });

  describe('multiply function', () => {
    it('should multiply two numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should return zero when multiplying by zero', () => {
      expect(multiply(2, 0)).toBe(0);
    });
  });
});