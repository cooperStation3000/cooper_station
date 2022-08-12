import { ApiCall } from 'tsrpc';
import { DateFmt, getDate } from '../../plugins/date';
import { ReqCreate, ResCreate } from '../../shared/protocols/project/PtlCreate';
import ProjectDao from '../../DAO/project.dao';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import ErrorHandler from '../../plugins/errorHandler';

export default async function (call: ApiCall<ReqCreate, ResCreate>) {
  try {
    await ProjectDao.createOne(Object.assign({}, call.req));
    await call.succ({ message: '成功' });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      new ErrorHandler(e).execute(call);
    }
  }
}
