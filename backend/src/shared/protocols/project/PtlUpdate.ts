import { BaseRequest, BaseResponse } from '../base';
import { T_project_item } from '../../DTO/Project';

export interface ReqUpdate extends BaseRequest {
  id: number;
  info: Pick<T_project_item, 'projectName' | 'projectOwner'>;
}

export interface ResUpdate extends BaseResponse {

}
