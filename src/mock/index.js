import Mock from 'mockjs';

export default {
  mockData() {
    Mock.mock('/api/login', {
      'isOk': 'ok',
      'result': 'login success',
      'code': 100000
    });

    // 任务清单
    Mock.mock('/api/task/list', {
      'isOk': 'ok',
      'code': 10000,
      'result': [{
        name: 'task1',
        site_name: '网易云音乐',
        username: '260@qq.com',
        check_time: '8:00',
        is_work: true
      }, {
        name: 'task2',
        site_name: '百度贴吧',
        username: '2601@qq.com',
        check_time: '9:00',
        is_work: false
      }, {
        name: 'task3',
        site_name: '淘宝',
        username: '渐渐的想起你',
        check_time: '8:00',
        is_work: true
      }],
    });
  }
}
