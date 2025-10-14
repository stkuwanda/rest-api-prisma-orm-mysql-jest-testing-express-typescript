import { createServer } from './server';
import config from './config';

const server = createServer();

server.listen(config.port, () => {
  console.log(`api server is running on http://localhost:${config.port}...`);
});
