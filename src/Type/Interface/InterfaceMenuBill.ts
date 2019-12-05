import {IBtn,IPaginationInfo} from '../Interface/Interface'
export interface IMenuBillInfo {
 
    openNum:number,
    collapseActiveKey:string[]|undefined;
    searchMenuName:string | undefined;
    searchParentId:string | undefined;
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
    form:IMenuBillForm;
    menuButtonTitle:string | undefined;
    menuButtonVisible:boolean;
    menuButtonId:string | undefined;
    menuCascader:[];
  }
  export interface IMenuBillForm {
    ID:string | undefined,
    Name:string | undefined,
    ParentId:string | undefined,
    Code:string | undefined,
    LinkAddress:string | undefined,
    Icon:string | undefined,
    Sort:number,
    CreateTime:string | undefined,
    CreateBy:string | undefined,
    UpdateTime:string | undefined,
    UpdateBy:string | undefined,
    IsAble:number,

  }
