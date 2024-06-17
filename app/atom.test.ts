// use relative imports for jest tests

import { getResult } from './atoms';
import '@testing-library/jest-dom';

describe('Results', () => {
  test('should return Invalid Item for Empty String', () => { 
    // Arrange
    const item = '';

    // Act
    const actual = getResult(item);

    // Assert
    expect(actual).toBe('Invalid Item');
   })

   test('should return Invalid Item for a non-numeric value', () => { 
    // Arrange
    const item = 'A';

    // Act
    const actual = getResult(item);

    // Assert
    expect(actual).toBe('Invalid Item');
   })   

   test('should return FizzBuzz for a number divisible by 3 and 5', () => { 
    // Arrange
    const item = '15';

    // Act
    const actual = getResult(item);

    // Assert
    expect(actual).toBe('FizzBuzz');
   })   

   test('should return Fizz for a number divisible by 3', () => { 
    // Arrange
    const item = '3';

    // Act
    const actual = getResult(item);

    // Assert
    expect(actual).toBe('Fizz');
   })   

   test('should return Buzz for a number divisible by 5', () => { 
    // Arrange
    const item = '5';

    // Act
    const actual = getResult(item);

    // Assert
    expect(actual).toBe('Buzz');
   })   

   test('should return An Empty String for a number not divisible by 3 or 5', () => { 
    // Arrange
    const item = '11';

    // Act
    const actual = getResult(item);

    // Assert
    expect(actual).toBe('');
   })      
});