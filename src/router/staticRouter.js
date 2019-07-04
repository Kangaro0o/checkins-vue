import Login from '../pages/login/Login'
import Register from '../pages/login/Register'

const staticRouter = [
  {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  }
];

export default staticRouter;
