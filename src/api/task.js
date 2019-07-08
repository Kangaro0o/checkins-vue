import {task} from './url'
import request from '../axios/request'

const requestTaskList = params => {
  return request({
    url: task.list,
    method: 'post',
    data: params
  });
};

export {requestTaskList};
