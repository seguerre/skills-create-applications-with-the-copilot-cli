const { calculate, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition Operation', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should add two negative numbers: -5 + -3 = -8', () => {
      expect(calculate(-5, '+', -3)).toBe(-8);
    });

    test('should add a positive and negative number: 10 + -4 = 6', () => {
      expect(calculate(10, '+', -4)).toBe(6);
    });

    test('should add zero: 5 + 0 = 5', () => {
      expect(calculate(5, '+', 0)).toBe(5);
    });

    test('should add decimals: 2.5 + 3.5 = 6', () => {
      expect(calculate(2.5, '+', 3.5)).toBe(6);
    });

    test('should add large numbers: 1000000 + 2000000 = 3000000', () => {
      expect(calculate(1000000, '+', 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction Operation', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should subtract and get negative result: 4 - 10 = -6', () => {
      expect(calculate(4, '-', 10)).toBe(-6);
    });

    test('should subtract two negative numbers: -5 - -3 = -2', () => {
      expect(calculate(-5, '-', -3)).toBe(-2);
    });

    test('should subtract zero: 10 - 0 = 10', () => {
      expect(calculate(10, '-', 0)).toBe(10);
    });

    test('should subtract decimals: 10.5 - 3.2 = 7.3', () => {
      expect(calculate(10.5, '-', 3.2)).toBeCloseTo(7.3);
    });

    test('should subtract same numbers: 5 - 5 = 0', () => {
      expect(calculate(5, '-', 5)).toBe(0);
    });
  });

  describe('Multiplication Operation', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should multiply by zero: 45 * 0 = 0', () => {
      expect(calculate(45, '*', 0)).toBe(0);
    });

    test('should multiply by one: 45 * 1 = 45', () => {
      expect(calculate(45, '*', 1)).toBe(45);
    });

    test('should multiply two negative numbers: -5 * -3 = 15', () => {
      expect(calculate(-5, '*', -3)).toBe(15);
    });

    test('should multiply positive and negative: 5 * -3 = -15', () => {
      expect(calculate(5, '*', -3)).toBe(-15);
    });

    test('should multiply decimals: 2.5 * 4 = 10', () => {
      expect(calculate(2.5, '*', 4)).toBe(10);
    });

    test('should multiply large numbers: 1000 * 2000 = 2000000', () => {
      expect(calculate(1000, '*', 2000)).toBe(2000000);
    });
  });

  describe('Division Operation', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should divide and get decimal result: 10 / 4 = 2.5', () => {
      expect(calculate(10, '/', 4)).toBe(2.5);
    });

    test('should divide with remainder: 7 / 2 = 3.5', () => {
      expect(calculate(7, '/', 2)).toBe(3.5);
    });

    test('should divide two negative numbers: -10 / -2 = 5', () => {
      expect(calculate(-10, '/', -2)).toBe(5);
    });

    test('should divide positive by negative: 10 / -2 = -5', () => {
      expect(calculate(10, '/', -2)).toBe(-5);
    });

    test('should divide by one: 100 / 1 = 100', () => {
      expect(calculate(100, '/', 1)).toBe(100);
    });

    test('should divide zero by number: 0 / 5 = 0', () => {
      expect(calculate(0, '/', 5)).toBe(0);
    });

    test('should handle small decimals: 0.1 / 0.2 = 0.5', () => {
      expect(calculate(0.1, '/', 0.2)).toBeCloseTo(0.5);
    });
  });

  describe('Division by Zero - Edge Case', () => {
    test('should throw error when dividing by zero: 10 / 0', () => {
      expect(() => {
        calculate(10, '/', 0);
      }).toThrow('Division by zero is not allowed');
    });

    test('should throw error with negative dividend: -10 / 0', () => {
      expect(() => {
        calculate(-10, '/', 0);
      }).toThrow('Division by zero is not allowed');
    });

    test('should throw error with zero dividend: 0 / 0', () => {
      expect(() => {
        calculate(0, '/', 0);
      }).toThrow('Division by zero is not allowed');
    });
  });

  describe('Invalid Operator - Edge Case', () => {
    test('should throw error for invalid operator: 5 ^ 2', () => {
      expect(() => {
        calculate(5, '^', 2);
      }).toThrow('Invalid operator: ^');
    });

    test('should calculate modulo: 10 % 3 = 1', () => {
      expect(calculate(10, '%', 3)).toBe(1);
    });
  });

  describe('Modulo Operation', () => {
    test('should calculate modulo: 10 % 3 = 1', () => {
      expect(calculate(10, '%', 3)).toBe(1);
    });

    test('should calculate modulo with positive numbers: 20 % 7 = 6', () => {
      expect(calculate(20, '%', 7)).toBe(6);
    });

    test('should calculate modulo with zero result: 10 % 5 = 0', () => {
      expect(calculate(10, '%', 5)).toBe(0);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => {
        calculate(10, '%', 0);
      }).toThrow('Modulo by zero is not allowed');
    });
  });

  describe('Exponentiation Operation', () => {
    test('should calculate power: 2 ** 3 = 8', () => {
      expect(calculate(2, '**', 3)).toBe(8);
    });

    test('should calculate power with large result: 10 ** 2 = 100', () => {
      expect(calculate(10, '**', 2)).toBe(100);
    });

    test('should calculate power with zero exponent: 5 ** 0 = 1', () => {
      expect(calculate(5, '**', 0)).toBe(1);
    });

    test('should calculate power with negative exponent: 2 ** -1 = 0.5', () => {
      expect(calculate(2, '**', -1)).toBe(0.5);
    });

    test('should calculate power with decimal: 4 ** 0.5 = 2', () => {
      expect(calculate(4, '**', 0.5)).toBe(2);
    });
  });

  describe('Square Root Operation', () => {
    test('should calculate square root: sqrt(16) = 4', () => {
      expect(calculate(16, 'sqrt')).toBe(4);
    });

    test('should calculate square root: sqrt(25) = 5', () => {
      expect(calculate(25, 'sqrt')).toBe(5);
    });

    test('should calculate square root: sqrt(2) ≈ 1.414', () => {
      expect(calculate(2, 'sqrt')).toBeCloseTo(1.414, 3);
    });

    test('should calculate square root of zero: sqrt(0) = 0', () => {
      expect(calculate(0, 'sqrt')).toBe(0);
    });

    test('should throw error for square root of negative number', () => {
      expect(() => {
        calculate(-4, 'sqrt');
      }).toThrow('Cannot calculate square root of negative numbers');
    });
  });

  describe('Complex Calculations', () => {
    test('should handle sequential operations: (2 + 3) then result * 2', () => {
      const step1 = calculate(2, '+', 3);
      const step2 = calculate(step1, '*', 2);
      expect(step2).toBe(10);
    });

    test('should handle multiple operations: (20 / 5) then result + 3', () => {
      const step1 = calculate(20, '/', 5);
      const step2 = calculate(step1, '+', 3);
      expect(step2).toBe(7);
    });

    test('should handle mixed operations: (10 - 4) then result * 3 then result / 2', () => {
      const step1 = calculate(10, '-', 4);
      const step2 = calculate(step1, '*', 3);
      const step3 = calculate(step2, '/', 2);
      expect(step3).toBe(9);
    });
  });
});
