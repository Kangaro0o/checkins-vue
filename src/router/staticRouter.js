import Login from '../pages/login/Login';
import Register from '../pages/login/Register';
import Base from '../pages/layout/Base';
import TaskLayout from '../pages/task/TaskLayout';
import Logger from '../pages/log/Logger';
import Profile from '../pages/user/Profile';


const staticRouter = [
  {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  }, {
    path: '/',
    redirect: '/task'
  }, {
    name: 'checkin task',
    path: '/',
    component: Base,
    children: [{
      path: 'task',
      component: TaskLayout
    }]
  }, {
    name: 'task log',
    path: '/',
    component: Base,
    children: [{
      path: 'log',
      component: Logger
    }]
  }, {
    name: 'profile',
    path: '/',
    component: Base,
    children: [{
      path: 'profile',
      component: Profile
    }]
  }
];

export default staticRouter;
