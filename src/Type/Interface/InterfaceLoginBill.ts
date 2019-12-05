import {IBtn,IPaginationInfo} from '../Interface/Interface'
export interface ILoginBillInfo {
 
    openNum:number,
    collapseActiveKey:string[]|undefined,
    searchToken:string | undefined,
    searchLoginOutTime:string[],
    searchCreateTime:string[],
    searchUpdateTime:string[];
    searchAccountName:string | undefined,
    searchRealName:string | undefined,
    searchIsLoginOut:string | undefined,
    loading:boolean,
    paginationInfo:IPaginationInfo,
    btnList:IBtn[],
    data:any,
    selectedRowKeys:string[],
    selectedRows:any,
    parameterStr:string | undefined
  }
