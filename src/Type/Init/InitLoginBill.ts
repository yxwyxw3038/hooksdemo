import { ILoginBillInfo } from '../Interface/InterfaceLoginBill';
import {initBtnList,initDateTime,initIPaginationInfo} from './Init';

export const initLoginBillInfo:ILoginBillInfo={
    openNum:0,
    // tslint:disable-next-line:object-literal-sort-keys
    collapseActiveKey:undefined,
    searchToken:"",
    searchLoginOutTime:initDateTime,
    searchCreateTime:initDateTime,
    searchUpdateTime:initDateTime,
    searchAccountName:"",
    searchRealName:"",
    searchIsLoginOut:'',

    // tslint:disable-next-line:object-literal-sort-keys
    loading:false,
    paginationInfo:initIPaginationInfo,
    btnList:initBtnList,
    data:[],
    selectedRowKeys:[],
    selectedRows:[],
    parameterStr:""

 
}
