import { ApiCall } from "tsrpc";
import { ReqUpdate, ResUpdate } from "../../shared/protocols/project/PtlUpdate";

export default async function (call: ApiCall<ReqUpdate, ResUpdate>) {
    // TODO
    call.error('API Not Implemented');
}