import Mock from 'mockjs';

export default {
  mockData() {
    Mock.mock('/api/login', {
      'isOk': 'ok',
      'result': 'login success',
      'code': 100000
    });
    Mock.mock('/api/site/list', {
      'isOk': 'ok',
      'result': [{
        sid: 1,
        name: '网易云音乐',
        url: 'https://music.163.com/#/download?type=sem&market=baidupz201901'
      }, {
        sid: 2,
        name: '百度贴吧',
        url: 'https://tieba.baidu.com/index.html'
      }, {
        sid: 3,
        name: '淘宝',
        url: 'https://www.taobao.com'
      }],
      'code': 10000
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
