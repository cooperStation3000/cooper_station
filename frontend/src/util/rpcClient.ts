import { HttpClient } from 'tsrpc-browser';
import { serviceProto } from '../shared/protocols/serviceProto';

// Create Client
const client = new HttpClient(serviceProto, {
  server: 'http://127.0.0.1:3000',
  json: true,
  logger: console
});
client.flows.preApiReturnFlow.push(v => {
  if (v.return.err) {
    const { type, message } = v.return.err;
    //TODO: 将错误进行弹窗提示
    // console.error(`${type}:${message}`);
  }
  return v;
});
export default client;
