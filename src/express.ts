/* eslint-disable no-unused-vars */
import 'express';
import { JwtPayload } from 'jsonwebtoken';

// Extend Express Request interface to include auth property
// Make sure to use 'declare global' to augment global types
declare global {
  namespace Express {
    interface Request {
      auth?: {
        payload: JwtPayload | string;
        token: string;
      };
    }
  }
}

export {};
