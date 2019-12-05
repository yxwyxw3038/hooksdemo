import {initBtnList,initDateTime,initIPaginationInfo, initMenuCascader} from '../Init/Init';
import {IDeptBillForm,IDeptBillInfo} from '../Interface/InterfaceDeptBill';
export const initDeptBillForm:IDeptBillForm={
    ID:"",
    // tslint:disable-next-line:object-literal-sort-keys
    Name:'',
    ParentId:"0",
    Sort: 1,
    // tslint:disable-next-line:object-literal-sort-keys
    CreateTime:'',
    CreateBy:'',
    UpdateTime:'',
    UpdateBy:'',
    IsAble:1
}
export const initDeptBillInfo:IDeptBillInfo={
    openNum:0,
    // tslint:disable-next-line:object-literal-sort-keys
    collapseActiveKey:undefined,
    searchDepartmentName:"",
    searchParentId:"",
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
    form:initDeptBillForm,
    deptCascader:initMenuCascader
}
