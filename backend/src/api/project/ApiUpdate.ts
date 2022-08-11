import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ApiCall, TsrpcErrorType } from 'tsrpc';
import ProjectDao from '../../DAO/project.dao';
import ErrorHandler from '../../plugins/errorHandler';
import { ReqUpdate, ResUpdate } from '../../shared/protocols/project/PtlUpdate';

export default async function (call: ApiCall<ReqUpdate, ResUpdate>) {
  try {
    const project = await ProjectDao.findOne(call.req.id);
    if (!project) {
      call.error('项目未找到', { type: TsrpcErrorType.ServerError });
    }
    await ProjectDao.updateOne({ id: call.req.id, ...call.req.info });
    call.succ({ message: '更新成功' });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      new ErrorHandler(error).execute(call);
    }
  }
}
