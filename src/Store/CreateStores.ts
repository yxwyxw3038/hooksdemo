import { USER_INFO } from "./ConstStores";
import { useLocalStore } from "mobx-react-lite";
import { UserInfoStore } from "./UserInfoStore";
const userInfoData=  new UserInfoStore();
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