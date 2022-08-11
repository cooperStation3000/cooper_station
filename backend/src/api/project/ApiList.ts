import { ApiCall } from 'tsrpc';
import { ReqList, ResList } from '../../shared/protocols/project/PtlList';
import { Global } from '../../plugins/db';
import ProjectDao from '../../DAO/project.dao';

export default async function (call: ApiCall<ReqList, ResList>) {
  const { offset = 0, size = 10 } = call.req;
  const [list, total] = await Promise.all([
    Global.prisma.project.findMany({ take: size, skip: offset, where: { isDel: false } }),
    Global.prisma.project.count({ where: { isDel: false } })
  ]);
  await call.succ({ list: ProjectDao.convert(list), total });
}
