import {IBtn,IPaginationInfo} from '../Interface/Interface'
export interface IUserBillInfo {
    openNum:number,
    collapseActiveKey:string[]|undefined;
    searchAccountName:string | undefined,
    searchRealName:string | undefined,
    searchIsAble:string | undefined,
    searchIfChangePwd:string | undefined,
    searchUpdateTime:string[];
    loading:boolean;
    paginationInfo:IPaginationInfo,
    btnList:IBtn[],
    data:any,
    selectedRowKeys:string[],
    selectedRows:any,
    parameterStr:string | undefined;
    dialogEditOrNew:number;
    dialogEditTitle:string | undefined;
    dialogEditVisible:boolean;
    form:IUserBillForm;
    dialogSetUserRoleTitle:string | undefined;
    dialogSetUserRoleVisible:boolean;
    dialogSetUserDeptTitle:string | undefined;
    dialogSetUserDeptVisible:boolean;
    userRoleId:string | undefined;
   
  }
  export interface IUserBillForm {

    ID:number,
    AccountName:string | undefined,
    Password:string | undefined,
    RealName:string | undefined,
    MobilePhone:string | undefined,
    Email:string | undefined,
    Description:string | undefined,
    CreateBy:string | undefined,
    CreateTime:string | undefined,
    UpdateBy:string | undefined,
    UpdateTime:string | undefined,
    IsAble:number,
    IfChangePwd:number
  }
