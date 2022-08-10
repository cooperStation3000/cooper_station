import { BaseListRequest } from '../base';
import { T_project_item } from '../../DTO/Project';

export interface ReqList extends BaseListRequest {

}

export interface ResList {
  list: T_project_item[];
  total: number;
}
