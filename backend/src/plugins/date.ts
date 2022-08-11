import dayjs from 'dayjs';

export enum DateFmt {
  'YYYY-MM-DD' = 'YYYY-MM-DD',
  'YYYY-MM-DD HH:mm:ss' = 'YYYY-MM-DD HH:mm:ss'
}

export function getDate(fmt: DateFmt = DateFmt['YYYY-MM-DD']) {
  return dayjs().format(fmt);
}

