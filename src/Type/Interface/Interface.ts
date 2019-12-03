export interface IBase {
 
}
export interface IBaseClass {
    // (initBase: IBase):void;
    Update(initBase:IBase):void;
    GetInfo():IBase;
    Clear():void;

}
export interface IUserInfo extends IBase {
    ID: string | undefined;
    AccountName: string | undefined;
    RealName: string | undefined;
    CreateTime: string | undefined;
    Token: string | undefined;
  }
  
export interface IJsonDataInfo {
    Code: string | undefined;
    Message?: string | undefined;
    Data?: string | undefined;
    DataCount?: number | undefined;
  }
  export type QXCallback = (isQx: boolean, msg: string,userInfo:IUserInfo) => void;

export interface IMenuInfo {
   Id:string | undefined;
   Icon:string | undefined;
   Url:string | undefined;
   ParentId:string | undefined;
   MenuName:string | undefined;
   Node: [] ;
}
export interface ITextInfo {
  inputtext:string | undefined;
}
export interface IPaginationInfo{
  currentPage:number;
  currentpagesize:number;
  totalCount:number;
}
export interface IBtn{
  title:string | undefined;
  key:string | undefined;
  icon:string | undefined;
  disabled?:boolean;
}
export interface IParameter
{
  action:string;
  column:string;
  logic:string;
  value:string;
  dataType:string;
}
export interface IOptions
{
  value:string | undefined;
  label:string | undefined;
}
export interface ITreeData
{
  id:string;
  label:string | undefined;
  RealName?:string | undefined;
  children?:ITreeData[];
}
export interface ITreeNode
{
 
  title:string ;
  value:string ;
  key:string;
  label?:string | undefined;
  RealName?:string | undefined;
  children?:ITreeNode[];
}
export interface IUserTreeSelect{

  AccountName:string | undefined,
  RealName:string | undefined,
  UserId:string
 
}

export interface IWsInfo
{
  Type:string;
  Data:string| undefined;
  ID:string;
}
export type SelectCallback = (isOk: boolean, msg: string,data:IOptions[]) => void;

// export interface IColumns
// {
//   title:string;
//   dataIndex:string;
//   key:string,
//   width: number | undefined,
//   render: any,
// }

export enum WsMseType {
  Register = "Register",
  Msg="Msg"
}