import { ApiCall, TsrpcErrorType } from 'tsrpc';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

type T_map = {
  [key: string]: () => string;
};

export default class ErrorHandler {
  constructor(private readonly e: PrismaClientKnownRequestError) {}

  private readonly codeMap: T_map = {
    P2002: () => `${JSON.stringify(this.e.meta)}  不满足唯一约束`,
    P2023: () => '外键约束错误',
    P2024: () => '约束错误',
    P2025: () => '数据库字段值不匹配'
  };

  public execute(call: ApiCall) {
    const msg = this.codeMap[this.e.code]();
    call.error(msg, { type: TsrpcErrorType.ServerError });
  }
}
