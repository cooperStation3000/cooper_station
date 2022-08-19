import { T_project_item } from '../../DTO/dto';
import { BaseListRequest, BaseListResponse } from '../base';

export interface ReqSearch extends BaseListRequest {
  searchWord: string;
}

export interface ResSearch extends BaseListResponse {
  list: T_project_item[];
}
