import { ApiCall, TsrpcErrorType } from 'tsrpc';
import { DateFmt, getDate } from '../../plugins/date';
import { ReqCreate, ResCreate } from '../../shared/protocols/project/PtlCreate';
import ProjectDao from '../../DAO/project.dao';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import ErrorHandler from '../../plugins/errorHandler';

export default async function (call: ApiCall<ReqCreate, ResCreate>) {
  const create_time = getDate(DateFmt['YYYY-MM-DD HH:mm:ss']);
  try {
    await ProjectDao.createOne(Object.assign({}, call.req, { createTime: create_time, updateTime: create_time }));
    await call.succ({ message: '成功' });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      new ErrorHandler(e).execute(call);
    }
  }
}
