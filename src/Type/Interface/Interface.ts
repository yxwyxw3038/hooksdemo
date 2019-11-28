export interface IBase {
 
}
export interface IUserInfo extends IBase {
    ID: string | undefined;
    AccountName: string | undefined;
    RealName: string | undefined;
    CreateTime: string | undefined;
    Token: string | undefined;
  }