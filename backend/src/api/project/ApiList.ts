import { ApiCall } from 'tsrpc';
import { ReqList, ResList } from '../../shared/protocols/project/PtlList';

export default async function (call: ApiCall<ReqList, ResList>) {

  call.succ({
    list: [{ id: 1231, projectOwner: 'asdfa', projectName: 'asdfa', createTime: 'qe', updateTime: 'asdfa', isDel: false }],
    total: 1
  });

}
