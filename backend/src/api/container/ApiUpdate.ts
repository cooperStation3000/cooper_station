import { ApiCall } from 'tsrpc';
import { ReqUpdate, ResUpdate } from '../../shared/protocols/container/PtlUpdate';
import ContainerDao from '../../DAO/container.dao';

export default async function (call: ApiCall<ReqUpdate, ResUpdate>) {
  const res = await ContainerDao.updateOne(call.req);
  await call.succ({
    message: '更新成功',
    data: res
  });
}
