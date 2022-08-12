import { T_project_item } from '../../DTO/dto';
import { BaseResponse } from '../base';

export type ReqCreate = Pick<T_project_item, 'projectName' | 'projectOwner' | 'repoUrl'>

export interface ResCreate extends BaseResponse {}

