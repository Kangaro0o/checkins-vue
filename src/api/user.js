import {user} from './url';
import request from '../axios/request'

const requestLogin = params => {
  return request({
    url: user.login,
    method: 'post',
    data: params
  });
};

const requestUserInfo = params => {
  return request({
    url: user.info,
    method: 'post',
    data: params
  });
};

export {requestLogin, requestUserInfo};
