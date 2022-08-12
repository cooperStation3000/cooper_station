import { BaseResponse } from '../base';
import { T_container } from '../../DTO/dto';

export interface ReqCreate extends Pick<T_container, 'projectId' | 'tag' | 'port' | 'nginxUrl'> {}

export interface ResCreate extends BaseResponse {}
