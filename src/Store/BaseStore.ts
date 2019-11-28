import { IBase } from "../Type/Interface/Interface";
import { initIUserInfo } from "../Type/Init/Init";
export class BaseStore {
    private Info: IBase;
    constructor(initBase :IBase) {
        this.Info = {...initBase};
    }
    get GetInfo() {
        return {...this.Info};
    }
    public Update = (item: IBase): void => {      
        this.Info ={...item}
    };
    public Clear = (): void => {      
        this.Info ={...initIUserInfo}
      };
}
