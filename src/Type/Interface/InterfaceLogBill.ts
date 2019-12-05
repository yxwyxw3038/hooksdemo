import {IBtn,IOptions, IPaginationInfo} from '../Interface/Interface'
export interface ILogBillInfo {
 
    openNum:number,
    collapseActiveKey:string[]|undefined,
    loading:boolean,
    paginationInfo:IPaginationInfo,
    btnList:IBtn[],
    data:any,
    currentData:any,
    selectedRowKeys:string[],
    selectedRows:any,
    parameterStr:string | undefined,
    logOpt:IOptions[],
    searchLogTextName:string | undefined,
  }

