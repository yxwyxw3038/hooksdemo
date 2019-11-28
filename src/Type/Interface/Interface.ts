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