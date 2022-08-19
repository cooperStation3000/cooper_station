import { T_project_item } from './dto';
export type T_porject_create = Pick<T_project_item, 'projectName' | 'projectOwner' | 'repoUrl'>;
