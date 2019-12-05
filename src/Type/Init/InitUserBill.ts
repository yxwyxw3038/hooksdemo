import {initBtnList,initDateTime,initIPaginationInfo} from '../Init/Init';
import {IUserBillForm,IUserBillInfo} from '../Interface/InterfaceUserBill';
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
export const initUserBillInfo:IUserBillInfo=
{
    openNum:0,
    // tslint:disable-next-line:object-literal-sort-keys
    collapseActiveKey:undefined,
    searchAccountName:"",
    searchRealName:"",
    // tslint:disable-next-line:object-literal-sort-keys
    searchIsAble:"",
    searchIfChangePwd:"",
    searchUpdateTime:initDateTime,
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
    form:initUserBillForm,
    dialogSetUserRoleTitle:"",
    dialogSetUserRoleVisible:false,
    dialogSetUserDeptTitle:"",
    dialogSetUserDeptVisible:false,
    userRoleId:"-1"
}