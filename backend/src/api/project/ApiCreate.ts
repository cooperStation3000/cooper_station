import { Global } from './../../plugins/db';
import { ApiCall } from 'tsrpc';
import { ReqCreate, ResCreate } from '../../shared/protocols/project/PtlCreate';

export default async function (call: ApiCall<ReqCreate, ResCreate>) {
  const { projectName, projectOwner } = call.req;
  const res = await Global.prisma.project.create({ data: { project_name: projectName, project_owner: projectOwner } });
  call.succ(res);
}
