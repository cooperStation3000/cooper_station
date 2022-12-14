import path from 'path';
import { Global } from './plugins/db';
import { HttpServer } from 'tsrpc';
import { serviceProto } from './shared/protocols/serviceProto';

// Create the Server
const server = new HttpServer(serviceProto, {
  port: 3000,
  // Remove this to use binary mode (remove from the client too)
  json: true
});

// Initialize before server start
async function init() {
  // Auto implement APIs
  await server.autoImplementApi(path.resolve(__dirname, 'api'));

  Global.initDocker();
  await Global.initDb();
}

// Entry function
async function main() {
  await init();
  await server.start();
}

main();
