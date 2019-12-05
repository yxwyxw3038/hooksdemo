import {IBtn,IPaginationInfo} from '../Interface/Interface'
export interface IDeptBillInfo {
 
    openNum:number,
    collapseActiveKey:string[]|undefined;
    searchDepartmentName:string | undefined;
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
    form:IDeptBillForm;
    deptCascader:[];
  }
  export interface IDeptBillForm {
    ID:string | undefined,
    Name:string | undefined,
    ParentId:string | undefined,
    Sort:number,
    CreateTime:string | undefined,
    CreateBy:string | undefined,
    UpdateTime:string | undefined,
    UpdateBy:string | undefined,
    IsAble:number
  }
