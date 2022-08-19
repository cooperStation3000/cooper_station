import { HttpClient } from 'tsrpc-browser';
import { serviceProto } from '../shared/protocols/serviceProto';
import { createDiscreteApi } from 'naive-ui';

// Create Client
const client = new HttpClient(serviceProto, {
  server: 'http://127.0.0.1:3000',
  json: true,
  logger: console
});
client.flows.preApiReturnFlow.push(v => {
  if (v.return.err) {
    const { type, message } = v.return.err;
    const note = createDiscreteApi(['notification']).notification;
    note.error({
      title: type,
      content: message,
      duration: 4000
    });
  }
  return v;
});
export default client;
