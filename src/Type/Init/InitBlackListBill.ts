import {initBtnList,initDateTime,initIPaginationInfo} from '../Init/Init';
import { IBlackListBillForm, IBlackListBillInfo } from '../Interface/InterfaceBlackListBill';
export const initBlackListBillForm:IBlackListBillForm={
    Id:0,
    // tslint:disable-next-line:object-literal-sort-keys
    Address:'',
    Port:'',
    CreateTime:'',
    Notes:'',
    IsAble:''
}
export const initBlackListBillInfo:IBlackListBillInfo={
    openNum:0,
    // tslint:disable-next-line:object-literal-sort-keys
    collapseActiveKey:undefined,
    searchAddress:"",
    searchCreateTime:initDateTime,
    // tslint:disable-next-line:object-literal-sort-keys
    loading:false,
    paginationInfo:initIPaginationInfo,
    btnList:initBtnList,
    data:[],
    selectedRowKeys:[],
    selectedRows:[],
    parameterStr:"",
    dialogEditOrNew:3,
    dialogEditTitle:"",
    dialogEditVisible:false,
    form:initBlackListBillForm,
 
}
