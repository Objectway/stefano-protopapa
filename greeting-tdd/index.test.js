
const mod = require('./index');
/*
test('Should greet my name', () => {
    expect(mod.greet('Mario')).toBe('Hello, Mario!');
});

test('Should greet my name null', () => {
    expect(mod.greet()).toBe('Hello, my friend!');
});

test('Should greet my name to uppercase', () => {
    expect(mod.greet('MARIO')).toBe('HELLO, MARIO!');
});

test('Should greet two name', () => {
    expect(mod.greet(['Mario', 'Luca'])).toBe('Hello, Mario and Luca!');
});

test('Should greet two name to uppercase', () => {
    expect(mod.greet(['MARIO', 'LUCA'])).toBe('HELLO, MARIO AND LUCA!');
});
*/

jest.spyOn(console, 'log');

test("Fizz", () => {
  mod.greet();
  expect(console.log.mock.calls[12][0]).toBe("Fizz");
});

test("Buzz", () => {
    expect(console.log.mock.calls[20][0]).toBe("Buzz");
  });

test("FizzBuzz", () => {
    expect(console.log.mock.calls[15][0]).toBe("FizzBuzz");
});

test("Number", () => {
    expect(console.log.mock.calls[2][0]).toBe(2);
});

afterEach(() => {
  jest.clearAllMocks();
});

