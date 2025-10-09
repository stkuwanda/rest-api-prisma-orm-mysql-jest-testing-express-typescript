import CustomError from './CustomError';
import { ErrorCode } from './types';

export default class AuthenticationError extends CustomError<ErrorCode> {}
