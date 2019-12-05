import {IBtn,IPaginationInfo} from '../Interface/Interface'
export interface IButtonBillInfo {
 
    openNum:number,
    collapseActiveKey:string[]|undefined;
    searchName:string | undefined;
    searchCode:string | undefined;
    searchUpdateTime:string[];
    loading:boolean;
    paginationInfo:IPaginationInfo;
    btnList:IBtn[]
    data:any,
    selectedRowKeys:string[],
    selectedRows:any,
    parameterStr:string | undefined;
    dialogEditOrNew:number;
    dialogEditTitle:string | undefined;
    dialogEditVisible:boolean;
    form:IButtonBillForm;
  }
  export interface IButtonBillForm {
    ID:string | undefined,
    Name:string | undefined,
    Code:string | undefined,
    Icon:string | undefined,
    Description:string | undefined,
    Sort:number,
    CreateTime:string | undefined,
    CreateBy:string | undefined,
    UpdateTime:string | undefined,
    UpdateBy:string | undefined,
    IsAble:number
  }
