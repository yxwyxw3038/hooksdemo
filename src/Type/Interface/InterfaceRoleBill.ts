import {IBtn,IPaginationInfo} from '../Interface/Interface'
export interface IRoleBillInfo {
    openNum:number,
    collapseActiveKey:string[]|undefined;
    searchName:string | undefined,
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
    form:IRoleBillForm;
    dialogSetRoleAuthorizeTitle:string | undefined;
    dialogSetRoleAuthorizeVisible:boolean;
    dialogSetRoleAuthorizeId:string | undefined;
   
  }
  export interface IRoleBillForm {

    ID:string | undefined,
    Name:string | undefined,
    Description:string | undefined,
    CreateBy:string | undefined,
    CreateTime:string | undefined,
    UpdateBy:string | undefined,
    UpdateTime:string | undefined
  }
