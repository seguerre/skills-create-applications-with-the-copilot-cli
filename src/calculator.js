#!/usr/bin/env node

/**
 * JavaScript Calculator CLI
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * Usage: node calculator.js <number> <operator> <number> [<operator> <number> ...]
 * Examples:
 *   node calculator.js 10 + 5
 *   node calculator.js 20 - 8 + 3
 *   node calculator.js 4 * 5 / 2
 */

/**
 * Perform the calculation based on the operator
 * @param {number} a - First operand
 * @param {string} operator - The operation (+, -, *, /)
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
    default:
      throw new Error(`Invalid operator: ${operator}. Supported operators are: +, -, *, /`);
  }
}

module.exports = { calculate };

if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: calculator <number> <operator> <number> [<operator> <number> ...]');
    console.log('');
    console.log('Supported operations:');
    console.log('  + (addition)');
    console.log('  - (subtraction)');
    console.log('  * (multiplication)');
    console.log('  / (division)');
    console.log('');
    console.log('Examples:');
    console.log('  calculator 10 + 5');
    console.log('  calculator 20 - 8 + 3');
    console.log('  calculator 4 "*" 5 "/" 2');
    process.exit(1);
  }

  try {
    let result = parseFloat(args[0]);

    if (isNaN(result)) {
      throw new Error(`Invalid number: ${args[0]}`);
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

