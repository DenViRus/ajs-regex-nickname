import { Validator } from '../app.js';

test('check username', () => {
  const user = new Validator();
  const received = user.validateUsername('Andrew-98-app');
  const expected = true;

  expect(received).toBe(expected);
});

test('check username', () => {
  const user = new Validator();
  const received = user.validateUsername('ManMan20name');
  const expected = true;

  expect(received).toBe(expected);
});

test('check username', () => {
  const user = new Validator();
  const received = user.validateUsername('rock_in_thousand');
  const expected = true;

  expect(received).toBe(expected);
});

test('check username, num', () => {
  const user = new Validator();
  const received = user.validateUsername('8936-852-12-78');
  const expected = false;

  expect(received).toBe(expected);
});

test('check username, start-num', () => {
  const user = new Validator();
  const received = user.validateUsername('98_ISRAEL');
  const expected = false;

  expect(received).toBe(expected);
});

test('check username, end-num', () => {
  const user = new Validator();
  const received = user.validateUsername('lion-33');
  const expected = false;

  expect(received).toBe(expected);
});

test('check username, start *', () => {
  const user = new Validator();
  const received = user.validateUsername('*Mike1995');
  const expected = false;

  expect(received).toBe(expected);
});

test('check username, end _', () => {
  const user = new Validator();
  const received = user.validateUsername('Rob_Robber_');
  const expected = false;

  expect(received).toBe(expected);
});

test('check username, num > 4', () => {
  const user = new Validator();
  const received = user.validateUsername('Hi20102001Jack');
  const expected = false;

  expect(received).toBe(expected);
});

test('check username, #', () => {
  const user = new Validator();
  const received = user.validateUsername('##ORM##');
  const expected = false;

  expect(received).toBe(expected);
});

test('check username, @', () => {
  const user = new Validator();
  const received = user.validateUsername('cat@kot');
  const expected = false;

  expect(received).toBe(expected);
});
