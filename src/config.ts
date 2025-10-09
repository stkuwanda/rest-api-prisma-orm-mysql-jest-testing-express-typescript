// src/config.ts
const config = {
  port: parseInt(process.env.PORT || '3000'),
  env: process.env.NODE_ENV || 'development',
  debug: process.env.APP_DEBUG === 'true',
  appSecret: process.env.APP_SECRET || 'defaultsecret',
};

export default config;
