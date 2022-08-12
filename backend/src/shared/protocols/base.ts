export interface BaseRequest {

}

export interface BaseResponse {
  message: string;
  data?: any;
}

export interface BaseConf {

}

export interface BaseListRequest {
  size: number;
  offset: number;
}


export interface BaseListResponse {
  list: any[];
  total: number;
}
