import Test from './Test/Test';
import { RouteConfig } from 'react-router-config';
const BasicRoute: RouteConfig[] = [
   
    {
      path: '/Test',
      // tslint:disable-next-line:object-literal-sort-keys
      component: Test,
    },
    {
      path: '/', // 缺省配置
      // tslint:disable-next-line:object-literal-sort-keys
      component: Test,
      exact: true,
    },
    {
      // tslint:disable-next-line:object-literal-sort-keys
      component: Test
    }
  ]
  

export default BasicRoute;
