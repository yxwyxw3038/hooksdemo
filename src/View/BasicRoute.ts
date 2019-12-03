import Test from './Test/Test';
import { RouteConfig } from 'react-router-config';
import Login from './Login/Login';
const BasicRoute: RouteConfig[] = [
   
    {
      path: '/Test',
      // tslint:disable-next-line:object-literal-sort-keys
      component: Test,
    },
    {
      path: '/Login', // 缺省配置
      // tslint:disable-next-line:object-literal-sort-keys
      component: Login,
      exact: true,
    },
    {
      // tslint:disable-next-line:object-literal-sort-keys
      component: Login
    }
  ]
  

export default BasicRoute;
