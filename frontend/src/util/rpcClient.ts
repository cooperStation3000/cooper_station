import { HttpClient } from 'tsrpc-browser';
import { serviceProto } from '../shared/protocols/serviceProto';

// Create Client
export const client = new HttpClient(serviceProto, {
  server: 'http://127.0.0.1:3000',
  json: true,
  logger: console
});
