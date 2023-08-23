// Uncomment the code below and write your tests
import { simpleCalculator, Action } from '../../src/01-simple-test/index';
import { describe, test, expect } from '@jest/globals';

describe('simpleCalculator tests', () => {
	test('should add two numbers', () => {
      // arrange
      const expected = 4;
      // act
      const actual = simpleCalculator({ a: 2, b: 2, action: Action.Add });
      // assert 
      expect(actual).toBe(expected);
	});

	test('should subtract two numbers', () => {
		// arrange
        const expected = 5;
        // act
        const actual = simpleCalculator({ a: 15, b: 10, action: Action.Subtract });
        // assert 
        expect(actual).toBe(expected);
	});

	test('should multiply two numbers', () => {
		// arrange
        const expected = 12;
        // act
        const actual = simpleCalculator({ a: 3, b: 4, action: Action.Multiply });
        // assert
        expect(actual).toBe(expected);
	});

	test('should divide two numbers', () => {
		// arrange
        const expected = 3;
        // act
        const actual = simpleCalculator({ a: 12, b: 4, action: Action.Divide });
        // assert
        expect(actual).toBe(expected);
	});

	test('should exponentiate two numbers', () => {
		// arrange
        const expected = 8;
        // act
        const actual = simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate });
        // assert
        expect(actual).toBe(expected);
	});

	test('should return null for invalid action', () => {
        // act
        const actual = simpleCalculator({ a: 3, b: 3, action: '%' });
        // assert
        expect(actual).toBeNull();
	});

	test('should return null for invalid arguments', () => {
        // act
        const actual = simpleCalculator({ a: 3, b: '3', action: Action.Multiply });
        // assert
        expect(actual).toBeNull();
	});
});
