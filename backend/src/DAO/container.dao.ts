import BaseDao from './base.dao';
import { T_container_create, T_container_find_one, T_container_update_one } from '../shared/DTO/container.dto';
import { Global } from '../plugins/db';

export default class ContainerDao extends BaseDao {
  static async createOne(data: T_container_create) {
    await Global.prisma.contaienr.create({ data });
  }

  static async findOne(data: T_container_find_one) {
    return await Global.prisma.contaienr.findFirst({
      where: {
        ...data,
        isDel: false
      }
    });
  }

  static async updateOne(data: T_container_update_one) {
    return await Global.prisma.contaienr.update({
      where: { id: data.id },
      data: data.info
    });
  }
}
