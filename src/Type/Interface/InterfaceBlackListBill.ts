import {IBtn,IPaginationInfo} from '../Interface/Interface'
export interface IBlackListBillInfo {
 
    openNum:number,
    collapseActiveKey:string[]|undefined;
    searchAddress:string | undefined;
    searchCreateTime:string[];
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
    form:IBlackListBillForm;
  }
  export interface IBlackListBillForm {
    Id:number,
    Address:string | undefined,
    Port:string | undefined,
    IsAble:string | undefined,
    Notes:string | undefined,
    CreateTime:string | undefined
  }
