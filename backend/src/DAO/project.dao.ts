import { T_porject_create } from './../shared/DTO/project.dto';
import { T_project_item } from '../shared/DTO/dto';
import { ReqCreate } from '../shared/protocols/project/PtlCreate';
import { Global } from '../plugins/db';
import BaseDao from './base.dao';
import { ReqSearch } from '../shared/protocols/project/PtlSearch';

type T_UPDATE = Partial<Pick<T_project_item, 'projectName' | 'projectOwner' | 'isDel'>>;

export default class ProjectDao extends BaseDao {
  static findOne(id?: number, projectName?: string) {
    const db = Global.prisma.project;
    return db.findFirst({
      where: { id, isDel: false, projectName }
    });
  }

  static async createOne({ projectName, projectOwner, repoUrl }: ReqCreate) {
    return await Global.prisma.project.create({
      data: { projectName, projectOwner, repoUrl }
    });
  }

  static async updateOne(data: { id: number } & T_UPDATE) {
    const db = Global.prisma.project;
    return await db.update({
      where: { id: data.id },
      data: { projectName: data.projectName, isDel: data.isDel, projectOwner: data.projectOwner }
    });
  }

  static async search(data: ReqSearch) {
    const db = Global.prisma.project;
    return await db.findMany({
      where: {
        OR: [{ projectName: { contains: data.searchWord } }, { projectOwner: { equals: data.searchWord } }, { repoUrl: { equals: data.searchWord } }],
        isDel: false
      },
      orderBy: { updateTime: 'desc' },
      take: data.size,
      skip: data.offset
    });
  }
}
