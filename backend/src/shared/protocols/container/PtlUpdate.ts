import { T_container } from '../../DTO/dto';
import { BaseRequest, BaseResponse } from '../base';

export interface ReqUpdate extends BaseRequest {
  id: number;
  info: Partial<Pick<T_container, 'tag' | 'port' | 'nginxUrl'>>;
}

export interface ResUpdate extends BaseResponse {}
