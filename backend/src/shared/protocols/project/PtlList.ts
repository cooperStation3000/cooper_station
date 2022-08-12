import { BaseListRequest, BaseListResponse } from '../base';
import { T_project_item } from '../../DTO/dto';

export interface ReqList extends BaseListRequest {

}

export interface ResList extends BaseListResponse {
  list: T_project_item[];
}
