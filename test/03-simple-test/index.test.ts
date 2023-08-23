// Uncomment the code below and write your tests
import { 
    throwError, throwCustomError, resolveValue, 
    MyAwesomeError, rejectCustomError } 
    from '../../src/03-simple-test/index';

describe('resolveValue', () => {
    test('should resolve provided value', async () => {
        // arrange
        const expected = 3;
        // act
        const actual = resolveValue(3);
        // assert
        expect(actual).resolves.toBe(expected);
    });
});
  
  describe('throwError', () => {
    test('should throw error with provided message', () => {
        // arrange
        const expected = 'Unknown Error';
        // act
        const actual = () => throwError('Unknown Error');
        // assert
        expect(actual).toThrow(expected);
    });
  
    test('should throw error with default message if message is not provided', () => {
        // arrange
        const expected = 'Oops!';
        // act
        const actual = () => throwError();
        // assert
        expect(actual).toThrow(expected);
    });
});
  
  describe('throwCustomError', () => {
    test('should throw custom error', () => {
        // arrange
        const error = new Error('This is my awesome custom error!');
        // act
        const actual = () => throwCustomError();
        // assert 
        expect(actual).toThrow(error.message); 
    });
});
  
  describe('rejectCustomError', () => {
    test('should reject custom error', async () => {
        // arrange
        const error = new Error('This is my awesome custom error!');
        // act
        const actual = rejectCustomError();
        // assert
        expect(actual).rejects.toThrow(error.message);
    });
});
  