import { project } from '@prisma/client';
import _ from 'lodash';
import { T_project_item } from '../shared/DTO/Project';
import { ReqCreate } from '../shared/protocols/project/PtlCreate';
import { Global } from '../plugins/db';

export default class ProjectDao {
  static convert(data: project[]): T_project_item[] {
    return data.map(ele => {
      const newVal: T_project_item = {
        createTime: '',
        id: 0,
        isDel: false,
        projectName: '',
        projectOwner: '',
        updateTime: ''
      };
      Object.keys(ele).forEach((key: string) => {
        // @ts-ignore
        newVal[_.camelCase(key)] = ele[key] === null ? '' : ele[key];
      });
      return newVal;
    });
  }

  static findOne(id?: number, projectName?: string) {
    const db = Global.prisma.project;
    return db.findFirst({
      where: { id, isDel: false, project_name: projectName }
    });
  }

  static async createOne({
    projectName,
    projectOwner,
    updateTime,
    createTime
  }: ReqCreate & { createTime: string; updateTime: string }) {
    return await Global.prisma.project.create({
      data: { project_name: projectName, project_owner: projectOwner, create_time: createTime, update_time: updateTime }
    });
  }

  static async updateOne(data: Pick<T_project_item, 'projectName' | 'projectOwner' | 'isDel' | 'id'>) {
    const db = Global.prisma.project;
    return await db.update({
      where: { id: data.id },
      data: { project_name: data.projectName, isDel: data.isDel, project_owner: data.projectOwner }
    });
  }
}
