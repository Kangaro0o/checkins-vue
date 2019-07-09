import {log} from './url';
import request from '../axios/request';

const requestLogList = params => {
  return request({
    url: log.list,
    method: 'post',
    data: params
  })
};

export {requestLogList};
