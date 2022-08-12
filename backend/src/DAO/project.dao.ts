import { Nullable } from '../plugins/typeTool';
import { project } from '@prisma/client';
import _ from 'lodash';
import { T_project_item } from '../shared/DTO/Project';
import { ReqCreate } from '../shared/protocols/project/PtlCreate';
import { Global } from '../plugins/db';
import { DateFmt, getDate } from '../plugins/date';
import dayjs from 'dayjs';

type T_UPDATE = Nullable<Pick<T_project_item, 'projectName' | 'projectOwner' | 'isDel'>>;

export default class ProjectDao {
  static convert(data: project[]): T_project_item[] {
    return data.map(ele => {
      const newVal: T_project_item = {
        id: 0,
        isDel: false,
        projectName: '',
        projectOwner: '',
        repo_url: '',
        createTime: '',
        updateTime: ''
      };
      Object.keys(ele).forEach((key: string) => {
        const newK = _.camelCase(key);
        // @ts-ignore
        newVal[newK] = ele[key] === null ? '' : ele[key];
        if (newK === 'createTime' || newK === 'updateTime') {
          // @ts-ignore
          newVal[newK] = dayjs(newVal[newK]).format(DateFmt['YYYY-MM-DD HH:mm:ss']);
        }
      });
      return newVal;
    });
  }

  static findOne(id?: number, projectName?: string) {
    const db = Global.prisma.project;
    return db.findFirst({
      where: { id, isDel: false, projectName }
    });
  }

  static async createOne({ projectName, projectOwner }: ReqCreate) {
    return await Global.prisma.project.create({
      data: { projectName, projectOwner }
    });
  }

  static async updateOne(data: { id: number } & T_UPDATE) {
    const db = Global.prisma.project;
    return await db.update({
      where: { id: data.id },
      data: { projectName: data.projectName, isDel: data.isDel, projectOwner: data.projectOwner }
    });
  }
}
