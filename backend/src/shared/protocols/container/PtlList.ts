import { BaseListRequest, BaseListResponse } from '../base';
import { T_container } from '../../DTO/dto';

export interface ReqList extends BaseListRequest {

}

export interface ResList extends BaseListResponse {
  list: T_container[];
}
