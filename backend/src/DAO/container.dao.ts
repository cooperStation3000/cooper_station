import { contaienr } from '@prisma/client';
import { T_container } from '../shared/DTO/dto';

export default class ContainerDao {
  static convert(data: contaienr[]): T_container[] {
    return [];
  }
}

