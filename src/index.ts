import { createServer } from './server';

const server = createServer();

server.listen(3000, () => {
  console.log('api server is running on http://localhost:3000...');
});
