import jwt from 'jsonwebtoken';
import config from './config';

const payload = { sub: '234e4567-e89b-12d3-a456-426614174000' }; // Example user ID

const token = jwt.sign(payload, config.appSecret, {
  expiresIn: '1h',
  issuer: 'task-manager-app',
});

console.log('Generated JWT Token:', token);
