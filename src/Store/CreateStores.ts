import { USER_INFO } from "./ConstStores";
import { useLocalStore } from "mobx-react-lite";
import { BaseStore } from "./BaseStore";
import { initIUserInfo } from "../Type/Init/Init";
const userInfoData=  new BaseStore(initIUserInfo);
export function CreateStores() {
    return {
      [USER_INFO]: { 
      Data:userInfoData  
  }
     
    };
}
export function LocalStore() {
    const USER_INFO_Store= useLocalStore(() => ({
        Data:userInfoData
    }
    ))
    return {
        [USER_INFO]:  USER_INFO_Store
    };

}