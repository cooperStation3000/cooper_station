import { ApiCall } from 'tsrpc';
import { ReqCreate, ResCreate } from '../../shared/protocols/container/PtlCreate';
import ContainerDao from '../../DAO/container.dao';

export default async function (call: ApiCall<ReqCreate, ResCreate>) {
  await ContainerDao.createOne(call.req);
  await call.succ({ message: '创建成功' });
}
