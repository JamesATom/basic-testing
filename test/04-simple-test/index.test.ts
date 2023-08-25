// Uncomment the code below and write your tests
import { getBankAccount } from '../../src/04-simple-test/index';
import lodash from 'lodash';

describe('BankAccount', () => {
    test('should create account with initial balance', () => {
        // arrange
        const expected = 3;
        // act
        const actual = getBankAccount(3);
        // assert
        expect(actual.getBalance()).toBe(expected);
    });
  
    test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
        // arrange
        const expected = new Error('Insufficient funds: cannot withdraw more than 3');
        // act
        const actual = getBankAccount(3);
        // assert
        expect(() => actual.withdraw(4)).toThrow(expected.message);
    });
  
    test('should throw error when transferring more than balance', () => {
        // arrange
        const exptected1 = new Error('Insufficient funds: cannot withdraw more than 3');
        const exptected2 = new Error('Transfer failed');
        const toAccount = getBankAccount(5);
        // act
        const actual = getBankAccount(3);
        // assert
        expect(() => actual.transfer(3, actual)).toThrow(exptected2.message);
        expect(() => actual.transfer(5, toAccount)).toThrow(exptected1.message);
    });
  
    test('should throw error when transferring to the same account', () => {
        // arrange
        const expected = new Error('Transfer failed');
        // act
        const actual = getBankAccount(3);
        // assert
        expect(() => actual.transfer(3, actual)).toThrow(expected.message); 
    });
  
    test('should deposit money', () => {
        // arrange
        const expected = 5;
        // act
        const actual = getBankAccount(3);
        // assert
        expect(actual.deposit(2).getBalance()).toBe(expected);
    });
  
    test('should withdraw money', () => {
        // arrange
        const expected = 3;
        // act
        const actual = getBankAccount(5);
        // assert
        expect(actual.withdraw(2).getBalance()).toBe(expected);
    });
  
    test('should transfer money', () => {
        // arrange
        const expected = 3;
        const toAccount = getBankAccount(1);
        // act
        const actual = getBankAccount(5);
        // assert
        expect(actual.transfer(2, toAccount).getBalance()).toBe(expected);
    });
  
    test('fetchBalance should return number in case if request did not failed', async () => {
        // arrange
        jest.spyOn(lodash, 'random').mockReturnValue(1);
        // act
        const actual = getBankAccount(3);
        const balance = await actual.fetchBalance();
        // assert
        expect(typeof balance).not.toBeNaN();
    });
  
    test('should set new balance if fetchBalance returned number', async () => {
        // arrange
        const actual = getBankAccount(3);
        jest.spyOn(actual, 'fetchBalance').mockImplementation(() => Promise.resolve(3));
        // act
        await actual.synchronizeBalance();
        // assert
        expect(actual.getBalance()).toBe(3);``
    });
  
    test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
        // arrange
        const error = new Error('Synchronization failed');
        const expected = getBankAccount(3);
        jest.spyOn(expected, 'fetchBalance').mockImplementation(() => Promise.resolve(null));
        // act
        const actual = expected.synchronizeBalance();
        // assert
        expect(actual).rejects.toThrow(error.message);
    });
  });