import {describe, test, expect} from 'jest'
describe('Hello World Test', () => {
  test('The test suite should run successfully', () => {
    console.log('Hello, World!');
    expect(true).toBe(true);
  });
});