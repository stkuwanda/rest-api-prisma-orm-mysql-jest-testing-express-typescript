import { getErrorMessage } from '../utils/error-handling.util';

describe('getErrorMessage', () => {
  it('returns the message for Error instances', () => {
    expect(getErrorMessage(new Error('boom'))).toBe('boom');
  });

  it('returns the string when a string is provided', () => {
    expect(getErrorMessage('simple error')).toBe('simple error');
  });

  it('for a plain object with a message property returns the message', () => {
    const objWithMessage = { message: 'my message' };
    expect(getErrorMessage(objWithMessage)).toBe('my message');
  });

  it('returns Unknown error for null, undefined and non-string primitives', () => {
    expect(getErrorMessage(null)).toBe('Unknown error');
    expect(getErrorMessage(undefined)).toBe('Unknown error');
    expect(getErrorMessage(123)).toBe('Unknown error');
  });
});
