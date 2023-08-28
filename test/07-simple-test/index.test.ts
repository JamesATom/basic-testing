// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from '../../src/07-simple-test/index'; 

// jest.mock('../../src/07-simple-test/index', () => {
//     const originalModule = jest.requireActual<typeof import('../../src/07-simple-test/index')>('../../src/07-simple-test/index');

//     return {
//         ...originalModule,
        
//     };
// });

const relativePath = '/users';

describe('throttledGetDataFromApi', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test('should create instance with provided base url', async () => {
        // arrange
        jest.spyOn(axios, 'create');
        // act
        await throttledGetDataFromApi(relativePath);
        jest.advanceTimersByTime(5000);
        // assert
        expect(axios.create).toBeCalledWith({baseURL: 'https://jsonplaceholder.typicode.com'});
    });
  
    test('should perform request to correct provided url', async () => {
        // arrange
        jest.spyOn(axios.Axios.prototype, 'get');
        // act
        await throttledGetDataFromApi(relativePath);
        jest.advanceTimersByTime(5000);
        // assert
        expect(axios.Axios.prototype.get).toBeCalledWith(relativePath);
    });
  
    test('should return response data', async () => {
        // arrange
        jest.spyOn(axios.Axios.prototype, 'get').mockReturnValue(Promise.resolve({data: 'Hello World'}));
        // act
        const actual = await throttledGetDataFromApi(relativePath);
        jest.runAllTimers();
        // assert 
        expect(actual).toBe('Hello World');
    });
});