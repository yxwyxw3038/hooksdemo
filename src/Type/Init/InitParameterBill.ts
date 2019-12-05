import {initBtnList,initIPaginationInfo, initTreeData} from '../Init/Init';
import { IParameterBillForm, IParameterBillInfo } from '../Interface/InterfaceParameterBill';
export const initParameterBillForm:IParameterBillForm={
    ID:'',
    // tslint:disable-next-line:object-literal-sort-keys
    Code:'',
    Name:'',
    ParentId:'',
    CreateTime:'',
    CreateBy:'',
    UpdateTime:'',
    UpdateBy:'',
    Sort:1,
    IsAble:0,
}
export const initParameterBillInfo:IParameterBillInfo=
{
    openNum:0,
    searchParentId:"",
    // tslint:disable-next-line:object-literal-sort-keys
    loading:false,
    paginationInfo:initIPaginationInfo,
    btnList:initBtnList,
    data:[],
    selectedRowKeys:[],
    selectedRows:[],
    selectedKeys:[],
    parameterStr:"",
    dialogEditOrNew:3,
    dialogEditTitle:"",
    dialogEditVisible:false,
    form:initParameterBillForm,
    treeData:initTreeData
   
}