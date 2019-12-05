import {IUserBillForm} from '../Interface/InterfaceUserBill';
import { IUserInfoBill } from '../Interface/InterfaceUserInfoBill';
export const initUserBillForm:IUserBillForm={
          ID:0,
          // tslint:disable-next-line:object-literal-sort-keys
          AccountName:'',
          Password:"",
          RealName:'',
          MobilePhone:'',
          Email:'',
          Description:'',
          CreateBy:'',
          CreateTime:'',
          UpdateBy:'',
          UpdateTime:'',
          IsAble:1,
          IfChangePwd:0
}
export const initUserInfoBill:IUserInfoBill=
{
    openNum:0,
    // tslint:disable-next-line:object-literal-sort-keys
    loading:false,
    // tslint:disable-next-line:object-literal-sort-keys
    formTemp:{...initUserBillForm},
    form:{...initUserBillForm},
  
}