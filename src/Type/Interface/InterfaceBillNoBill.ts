import {IBtn,IPaginationInfo} from '../Interface/Interface'
export interface IBillNoBillInfo {
 
    openNum:number,
    collapseActiveKey:string[]|undefined;
    searchCode:string | undefined;
    searchCodeName:string | undefined;
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
    form:IBillNoBillForm;
  }
  export interface IBillNoBillForm {
    ID:string | undefined,
    Code:string | undefined,
    CodeName:string | undefined,
    CurrentId:number,
    CurrentBillNo:string | undefined,
    CurrentTime:string | undefined,
    MaskInfo:string,
    EndLength:number,
    CreateTime:string | undefined,
    CreateBy:string | undefined,
    UpdateTime:string | undefined,
    UpdateBy:string | undefined
  }
