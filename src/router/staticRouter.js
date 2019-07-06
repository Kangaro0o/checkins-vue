import Login from '../pages/login/Login'
import Register from '../pages/login/Register'
import Base from '../pages/layout/Base'
import TaskLayout from '../pages/task/TaskLayout'

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
    name: 'create checkin task',
    path: '/',
    component: Base,
    children: [{
      path: 'task',
      component: TaskLayout
    }]
  }
];

export default staticRouter;
