import { ILogBillInfo } from '../Interface/InterfaceLogBill';
import { initBtnList, initIPaginationInfo0, initOptions } from './Init';

export const initLogBillInfo:ILogBillInfo={
    openNum:0,
    // tslint:disable-next-line:object-literal-sort-keys
    collapseActiveKey:undefined,
    logOpt:initOptions,
    searchLogTextName:'',
    loading:false,
    paginationInfo:initIPaginationInfo0,
    btnList:initBtnList,
    data:[],
    currentData:[],
    selectedRowKeys:[],
    selectedRows:[],
    parameterStr:""

 
}
