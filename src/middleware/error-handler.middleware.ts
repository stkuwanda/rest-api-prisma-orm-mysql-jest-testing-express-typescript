import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from 'express-oauth2-jwt-bearer';
import { getErrorMessage } from '../utils/error-handling.util';
import config from '../config';
import CustomError from '../errors/CustomError';

// Centralized error handling middleware
export default function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent || config.debug) {
    return next(err);
  }

  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      error: {
        message: err.message,
        code: err.code,
      },
    });
  }

  res.status(500).json({
    error: {
      message:
        getErrorMessage(err) || 'An error occurred. View logs for details.',
    },
  });
}
