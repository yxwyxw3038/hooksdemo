import {IBtn,IPaginationInfo, ITreeData} from '../Interface/Interface'
export interface IParameterBillInfo {
    openNum:number,
    searchParentId:string | undefined,
    loading:boolean;
    paginationInfo:IPaginationInfo,
    btnList:IBtn[],
    data:any,
    selectedRowKeys:string[],
    selectedRows:any,
    selectedKeys:string[],
    parameterStr:string | undefined;
    dialogEditOrNew:number;
    dialogEditTitle:string | undefined;
    dialogEditVisible:boolean;
    form:IParameterBillForm;
    treeData:ITreeData[];
   
  }
  export interface IParameterBillForm {

    ID:string | undefined,
    Code:string | undefined,
    Name:string | undefined,
    ParentId:string | undefined,
    CreateBy:string | undefined,
    CreateTime:string | undefined,
    UpdateBy:string | undefined,
    UpdateTime:string | undefined,
    Sort:number,
    IsAble:number
  }
