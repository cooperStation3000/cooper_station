import _ from 'lodash';
import dayjs from 'dayjs';
import { DateFmt } from '../plugins/date';

export default class BaseDao {
  public static convert<db, dto>(data: db[]): dto[] {
    return data.map(ele => {
      // @ts-ignore
      const newVal: dto = {};
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
}
