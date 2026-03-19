#!/usr/bin/env node

/**
 * JavaScript Calculator CLI
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (**)
 * - Square Root (sqrt)
 * 
 * Usage: node calculator.js <number> <operator> <number> [<operator> <number> ...]
 * Examples:
 *   node calculator.js 10 + 5
 *   node calculator.js 20 - 8 + 3
 *   node calculator.js 4 "*" 5 "/" 2
 *   node calculator.js 10 % 3
 *   node calculator.js 2 "**" 3
 *   node calculator.js sqrt 16
 */

/**
 * Calculate modulo (remainder)
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} The remainder of a divided by b
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Calculate power (exponentiation)
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculate square root
 * @param {number} n - The number to find the square root of
 * @returns {number} The square root of n
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative numbers');
  }
  return Math.sqrt(n);
}

/**
 * Perform the calculation based on the operator
 * @param {number} a - First operand
 * @param {string} operator - The operation (+, -, *, /, %, **, sqrt)
 * @param {number} b - Second operand
 * @returns {number} The result of the operation
 */
function calculate(a, operator, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return a / b;
    case '%':
      return modulo(a, b);
    case '**':
      return power(a, b);
    case 'sqrt':
      return squareRoot(a);
    default:
      throw new Error(`Invalid operator: ${operator}. Supported operators are: +, -, *, /, %, **, sqrt`);
  }
}

module.exports = { calculate, modulo, power, squareRoot };

if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: calculator <number> <operator> <number> [<operator> <number> ...]');
    console.log('       calculator sqrt <number>');
    console.log('');
    console.log('Supported operations:');
    console.log('  + (addition)');
    console.log('  - (subtraction)');
    console.log('  * (multiplication)');
    console.log('  / (division)');
    console.log('  % (modulo)');
    console.log('  ** (exponentiation)');
    console.log('  sqrt (square root)');
    console.log('');
    console.log('Examples:');
    console.log('  calculator 10 + 5');
    console.log('  calculator 20 - 8 + 3');
    console.log('  calculator 4 "*" 5 "/" 2');
    console.log('  calculator 10 % 3');
    console.log('  calculator 2 "**" 3');
    console.log('  calculator sqrt 16');
    process.exit(1);
  }

  try {
    const firstArg = args[0];
    
    // Handle unary operations like sqrt
    if (firstArg === 'sqrt') {
      if (args.length < 2) {
        throw new Error('sqrt requires a number argument');
      }
      const num = parseFloat(args[1]);
      if (isNaN(num)) {
        throw new Error(`Invalid number: ${args[1]}`);
      }
      const result = squareRoot(num);
      console.log(result);
      process.exit(0);
    }
    
    let result = parseFloat(firstArg);

    if (isNaN(result)) {
      throw new Error(`Invalid number: ${firstArg}`);
    }

    for (let i = 1; i < args.length; i += 2) {
      const operator = args[i];
      const nextNum = parseFloat(args[i + 1]);

      if (isNaN(nextNum)) {
        throw new Error(`Invalid number: ${args[i + 1]}`);
      }

      result = calculate(result, operator, nextNum);
    }

    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

