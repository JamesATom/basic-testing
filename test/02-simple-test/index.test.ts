// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from '../../src/02-simple-test/index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 5, b: 2, action: Action.Subtract, expected: 3 },
    { a: 6, b: 2, action: Action.Subtract, expected: 4 },
    { a: 7, b: 2, action: Action.Subtract, expected: 5 },
    { a: 1, b: 3, action: Action.Multiply, expected: 3 },
    { a: 2, b: 2, action: Action.Multiply, expected: 4 },
    { a: 5, b: 1, action: Action.Multiply, expected: 5 },
    { a: 6, b: 2, action: Action.Divide, expected: 3 },
    { a: 8, b: 2, action: Action.Divide, expected: 4 },
    { a: 10, b: 2, action: Action.Divide, expected: 5 },
    { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
    { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
    { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
    { a: 1, b: 2, action: '%', expected: 1 },
    { a: 2, b: 2, action: '%', expected: 1 },
    { a: 3, b: 2, action: '%', expected: 1 },
    { a: 1, b: '2', action: Action.Divide, expected: 3 },
    { a: 2, b: '2', action: Action.Divide, expected: 4 },
    { a: 3, b: '2', action: Action.Divide, expected: 5 },
]; 

describe('simpleCalculator', () => {
    test.each(testCases)('Calculate $a $action $b should return $expected', ({a, b, action, expected}) => {
        // act
        const actual = simpleCalculator({a, b, action});
        // assert
        if (actual == null) {
            expect(actual).toBeNull();
        } else {
            expect(actual).toBe(expected);
        }
    });
});
