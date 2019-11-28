import { IUserInfo } from "../Type/Interface/Interface";
import { initIUserInfo } from "../Type/Init/Init";
export class UserInfoStore {
    private Info: IUserInfo;
    constructor() {
        this.Info = {...initIUserInfo};
    }
    get GetInfo() {
        return {...this.Info};
    }
    public UpdateUserInfo = (item: IUserInfo): void => {      
        this.Info ={...item}
    };
    public ClearUserInfo = (): void => {      
        this.Info ={...initIUserInfo}
      };
}
