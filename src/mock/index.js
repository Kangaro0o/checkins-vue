import Mock from 'mockjs';

export default {
  mockData() {
    Mock.mock('/api/login', {
      'isOk': 'ok',
      'result': 'login success',
      'code': 100000
    });
  }
}
