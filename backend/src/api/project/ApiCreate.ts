import { ApiCall } from 'tsrpc';
import { ReqCreate, ResCreate } from '../../shared/protocols/project/PtlCreate';
import ProjectDao from '../../DAO/project.dao';


export default async function (call: ApiCall<ReqCreate, ResCreate>) {
  await ProjectDao.createOne(Object.assign({}, call.req));
  await call.succ({ message: '成功' });
}
