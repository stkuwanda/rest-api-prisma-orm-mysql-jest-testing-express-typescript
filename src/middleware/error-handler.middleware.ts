import { NextFunction, Request, Response } from 'express';
import { getErrorMessage } from '../utils/error-handling.util';
import config from '../config';

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

  res.status(500).json({
    error: {
      message:
        getErrorMessage(err) || 'An error occurred. View logs for details.',
    },
  });
}
