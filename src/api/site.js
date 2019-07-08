import {site} from './url';
import request from '../axios/request';

const requestSiteList = _ => {
  return request({
    url: site.list,
    method: 'get'
  });
};

export {requestSiteList};
