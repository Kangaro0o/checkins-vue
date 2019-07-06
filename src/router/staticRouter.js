import Login from '../pages/login/Login'
import Register from '../pages/login/Register'
import Base from '../pages/layout/Base'
import CreateTask from '../pages/task/CreateTask'

const staticRouter = [
  {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  }, {
    path: '/',
    redirect: '/task/create'
  }, {
    name: 'create checkin task',
    path: '/task',
    component: Base,
    children: [{
      path: 'create',
      component: CreateTask
    }]
  }
];

export default staticRouter;
