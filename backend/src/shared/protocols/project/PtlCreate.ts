import { T_project_item } from '../../DTO/Project';
import { BaseResponse } from '../base';

export type ReqCreate = Pick<T_project_item, 'projectName' | 'projectOwner'>

export interface ResCreate extends BaseResponse {}

