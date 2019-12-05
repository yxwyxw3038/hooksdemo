import {initBtnList,initDateTime,initIPaginationInfo} from '../Init/Init';
import { IBillNoBillForm, IBillNoBillInfo } from '../Interface/InterfaceBillNoBill';
export const initBillNoBillForm:IBillNoBillForm={
    ID:'',
    // tslint:disable-next-line:object-literal-sort-keys
    Code:'',
    CodeName:'',
    CurrentId:0,
    CurrentBillNo:'',
    CurrentTime:'',
    MaskInfo:'yyyyMM',
    EndLength:4,
    CreateTime:'',
    CreateBy:'',
    UpdateTime:'',
    UpdateBy:''
}
export const initBillNoBillInfo:IBillNoBillInfo={
    openNum:0,
    // tslint:disable-next-line:object-literal-sort-keys
    collapseActiveKey:undefined,
    searchCode:"",
    searchCodeName:"",
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
    form:initBillNoBillForm,
 
}
