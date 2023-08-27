// Uncomment the code below and write your tests
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '../../src/06-simple-test/index';
import path from 'node:path';
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';

const globTimeout = 1000;

describe('doStuffByTimeout', () => {
    beforeAll(() => {
      	jest.useFakeTimers();
    });
  
    afterAll(() => {
      	jest.useRealTimers();
    });
  
    test('should set timeout with provided callback and timeout', () => {
      	// arrange
		jest.spyOn(global, 'setTimeout');
		const callback = jest.fn();
		// act
		doStuffByTimeout(callback, globTimeout);
		// assert
		expect(setTimeout).toHaveBeenCalledWith(callback, globTimeout);
    });
  
    test('should call callback only after timeout', () => {
      	// arrange
		jest.spyOn(global, 'setTimeout');
		const callback = jest.fn();
		// act
		doStuffByTimeout(callback, globTimeout);
		// assert
		expect(callback).not.toBeCalled();
		jest.runAllTimers();
		expect(callback).toHaveBeenCalled();
    });
});
  
  describe('doStuffByInterval', () => {
    beforeAll(() => {
      	jest.useFakeTimers();
    });
  
    afterAll(() => {
      	jest.useRealTimers();
    });
  
    test('should set interval with provided callback and timeout', () => {
      	// arrange
		jest.spyOn(global, 'setInterval');
		const callback = jest.fn();
		// act
		doStuffByInterval(callback, globTimeout);
		// assert
		expect(setInterval).toHaveBeenCalledWith(callback, globTimeout);
    });
  
    test('should call callback multiple times after multiple intervals', () => {
      	// arrange
		jest.spyOn(global, 'setInterval');
		const callback = jest.fn();
		// act
		doStuffByInterval(callback, globTimeout);
		// assert
		expect(callback).not.toBeCalled();
		jest.advanceTimersByTime(5000);
		expect(callback).toHaveBeenCalledTimes(5);
    });
});
  
  describe('readFileAsynchronously', () => {
    test('should call join with pathToFile', async () => {
      	// arrange
		jest.spyOn(path, 'join');
		// act
		await readFileAsynchronously('index.ts');
		// assert
		expect(path.join).toHaveBeenCalledWith(expect.anything(), 'index.ts');
    });
  
    test('should return null if file does not exist', async () => {
      	// arrange
		jest.spyOn(fs, 'existsSync').mockReturnValue(false);
		// act
		const actual = await readFileAsynchronously('index.ts');
		// assert
		expect(actual).toBeNull();
    });
  
    test('should return file content if file exists', async () => {
      	// arrange
		jest.spyOn(fs, 'existsSync').mockReturnValue(true);
		jest.spyOn(fsPromises, 'readFile').mockReturnValue(Promise.resolve('File content'));
		// act
		const actual = await readFileAsynchronously('index.ts');
		// assert
		expect(actual).toBe('File content');
    });
});