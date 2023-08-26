// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from '../../src/05-simple-test/index';

jest.mock('../../src/05-simple-test/index', () => {
    const originalModule = jest.requireActual<typeof import('../../src/05-simple-test/index')>('../../src/05-simple-test/index');

    return {
        ...originalModule,
        mockOne: jest.fn(),
        mockTwo: jest.fn(),
        mockThree: jest.fn(),
    };
});
  
describe('partial mocking', () => {
    afterAll(() => {
        jest.unmock('../../src/05-simple-test/index');
    });
  
    test('mockOne, mockTwo, mockThree should not log into console', () => {
        // arrange
        const actual = jest.spyOn(global.console, 'log').mockImplementation(() => {});
        // act
        mockOne();
        mockTwo();
        mockThree();
        // assert
        expect(actual).not.toHaveBeenCalled();
        // end
        actual.mockRestore();
    });
  
    test('unmockedFunction should log into console', () => {
        // arrange
        const actual = jest.spyOn(global.console, 'log');
        // act
        unmockedFunction();
        // assert
        expect(actual).toHaveBeenCalledWith('I am not mocked');
        // end
        actual.mockRestore();
    });
});