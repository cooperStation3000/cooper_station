import { BaseRequest, BaseResponse } from '../base';
export interface ReqUpdate extends BaseRequest {
  id: number;
  info: {
    projectName?: string;
    projectOwner?: string;
    isDel?: boolean;
  };
}

export interface ResUpdate extends BaseResponse {}
