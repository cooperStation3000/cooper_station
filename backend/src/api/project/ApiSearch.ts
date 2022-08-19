import { ApiCall } from 'tsrpc';
import ProjectDao from '../../DAO/project.dao';
import { ReqSearch, ResSearch } from '../../shared/protocols/project/PtlSearch';

export default async function (call: ApiCall<ReqSearch, ResSearch>) {
  const list = await ProjectDao.search(call.req);
  await call.succ({
    list: ProjectDao.convert(list),
    total: list.length
  });
}
