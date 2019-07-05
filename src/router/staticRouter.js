import Login from '../pages/login/Login'
import Register from '../pages/login/Register'
import Base from '../pages/layout/Base'

const staticRouter = [
  {
    path: '/',
    component: Base
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  }
];

export default staticRouter;
