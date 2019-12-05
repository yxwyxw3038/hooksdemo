import {IBtn,IPaginationInfo} from '../Interface/Interface'
export interface INoticeBillInfo {
 
    openNum:number,
    collapseActiveKey:string[]|undefined;
    searchNo:string | undefined;
    searchStatus:string | undefined;
    searchTypeId:string | undefined;
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
    dialogCode:string | undefined;
  }
  export interface INoticeBillForm {
    ID:string | undefined,
    No:string | undefined,
    TypeId:number,
    Title:string | undefined,
    Content:string | undefined,
    Notes:string | undefined,
    Status:number,
    NoticeTime:string | undefined,
    SendBeginTime:string | undefined,
    SendEndTime:string | undefined,
    CreateTime:string | undefined,
    CreateBy:string | undefined,
    UpdateTime:string | undefined,
    UpdateBy:string | undefined
  }
  export interface IMsgInfo {
    ID:string | undefined,
    No:string | undefined,
    TypeId:number,
    Title:string | undefined,
    Content:string | undefined,
    MsgType:string | undefined,
    OpenFlag:number,
    BillTime:string | undefined,
    MsgTime:string | undefined,
 
  }
  export interface INoticeBillFormShowItem{
    ID:string | undefined,
    NoticeId:string | undefined,
    AccountName:string | undefined,
    RealName:string | undefined,
    UserId:string | undefined,
    CreateTime:string | undefined,
    CreateBy:string | undefined,
    UpdateTime:string | undefined,
    UpdateBy:string | undefined,
    SendFlag:number,
    SendTime:string | undefined,
  }
export interface INoticeBillFormItem{
  ID:string | undefined,
  NoticeId:string | undefined,
  UserId:string | undefined,
  CreateTime:string | undefined,
  CreateBy:string | undefined,
  UpdateTime:string | undefined,
  UpdateBy:string | undefined,
  SendFlag:number,
  SendTime:string | undefined,
}
export interface INoticeBillEditInfo
{
  disabled:boolean,
  modify:boolean,
  loading:boolean,
  btnList:IBtn[],
  form:INoticeBillForm,
  formShowItem:INoticeBillFormShowItem[],
  formItem:INoticeBillFormItem[]
}
export interface ISaveInfo
{
  Main:INoticeBillForm,
  Item:INoticeBillFormItem[]
}