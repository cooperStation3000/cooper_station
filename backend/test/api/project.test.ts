import { HttpClient } from 'tsrpc';
import { serviceProto } from '../../src/shared/protocols/serviceProto';
import assert from 'assert';

describe('Api Project', () => {

  let client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
  });

  it('get List', async function () {
    const res = await client.callApi('project/List', { size: 10, offset: 0 });
    assert(res.isSucc)
  });

});
