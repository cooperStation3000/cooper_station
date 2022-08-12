import { ApiReturn, HttpClient } from 'tsrpc';
import assert from 'assert';
import { serviceProto } from '../../src/shared/protocols/serviceProto';

describe('Api container', () => {
  let client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3000',
    logger: console
  });

  let res: ApiReturn<any>;
  afterEach(() => {
    assert(res.isSucc);
  });

  it('get List', async function () {
    res = await client.callApi('container/List', { size: 10, offset: 0 });
  });

  it('create Project', async () => {
    res = await client.callApi('project/Create', { projectName: 'test2', projectOwner: 'wyswill', repoUrl: 'asdfasd' });
  });

  it('update proejct', async () => {
    res = await client.callApi('project/Update', { id: 1, info: { projectName: 'test' } });
  });
});
