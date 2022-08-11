import { T_project_item } from './../../DTO/Project';
import { BaseRequest, BaseResponse } from '../base';
export interface ReqUpdate extends BaseRequest {
  id: number;
  info: Partial<Pick<T_project_item, 'projectName' | 'projectOwner' | 'isDel'>>;
}

export interface ResUpdate extends BaseResponse {}
