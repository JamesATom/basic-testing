// Uncomment the code below and write your tests
import { generateLinkedList } from '../../src/08-simple-test/index';

describe('generateLinkedList', () => {
    // Check match by expect(...).toStrictEqual(...)
    test('should generate linked list from values 1', () => {
        // arrange
        const expected = generateLinkedList([1]);
        // act
        const actual = generateLinkedList([1]);
        // assert
        expect(actual).toStrictEqual(expected);
    });

    // Check match by comparison with snapshot
    test('should generate linked list from values 2', () => {
        // arrange
        const elements = [1, 2];
        // act
        const actual = generateLinkedList(elements);
        // assert
        expect(actual).toMatchSnapshot();
    });
});