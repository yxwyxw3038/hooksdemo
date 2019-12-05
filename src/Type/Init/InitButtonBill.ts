import {initBtnList,initDateTime,initIPaginationInfo} from '../Init/Init';
import { IButtonBillForm, IButtonBillInfo } from '../Interface/InterfaceButtonBill';
export const initButtonBillForm:IButtonBillForm={
         ID:'',
         Name:'',
         // tslint:disable-next-line:object-literal-sort-keys
         Code:'',
         Icon:'',
         Description:'',
         Sort:0,
         CreateTime:'',
         CreateBy:'',
         UpdateTime:'',
         UpdateBy:'',
         IsAble:1
}
export const initButtonBillInfo:IButtonBillInfo={
    openNum:0,
    // tslint:disable-next-line:object-literal-sort-keys
    collapseActiveKey:undefined,
    searchName:"",
    searchCode:"",
    searchUpdateTime:initDateTime,
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
    form:initButtonBillForm,
 
}
