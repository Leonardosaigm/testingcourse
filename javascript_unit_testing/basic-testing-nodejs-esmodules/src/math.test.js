import { expect, it } from 'vitest'
import { add } from './math';

it('should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2];
    
    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
    expect(result).toBe(expectedResult);
});

it('should yield Nan if a least one invalid number is provided', () => {
    const inputs = ['invalid', 1];

    const result = add(inputs);
    expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
    const numbers = ['1', '2'];

    const result = add(numbers);

    const expectedResult = numbers.reduce((prevValue, currentValue) => +prevValue + +currentValue, 0);

    expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
});

it('should throw an error if no values are provided', () => {
    const resultFunction = () => {
        add();
    };
    expect(resultFunction).toThrow();
})

it('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;

    const resultFunction = () => {
        add(num1, num2);
    };

    expect(resultFunction).toThrow(/is not iterable/);
})

