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
    public Update = (item: IUserInfo): void => {      
        this.Info ={...item}
    };
    public Clear = (): void => {      
        this.Info ={...initIUserInfo}
      };
}
