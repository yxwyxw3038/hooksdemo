import { USER_INFO, MENU_BILL_INFO, USER_BILL_INFO, ROLE_BILL_INFO, DEPT_BILL_INFO, BUTTON_BILL_INFO, PARAMETER_BILL_INFO, BILL_NO_BILL_INFO, NOTICE_BILL_INFO, LOGIN_BILL_INFO, LOG_BILL_INFO, BLACK_LIST_BILL_INFO, USER_INFO_BILL_INFO, FLOW_BILL_INFO } from "./ConstStores";
import { useLocalStore } from "mobx-react-lite";
import { BaseStore } from "./BaseStore";
import { initIUserInfo } from "../Type/Init/Init";
import { initMenuBillInfo } from "../Type/Init/InitMenuBill";
import { initUserBillInfo } from "../Type/Init/InitUserBill";
import { initRoleBillInfo } from "../Type/Init/InitRoleBill";
import { initDeptBillInfo } from "../Type/Init/InitDeptBill";
import { initButtonBillInfo } from "../Type/Init/InitButtonBill";
import { initParameterBillInfo } from "../Type/Init/InitParameterBill";
import { initBillNoBillInfo } from "../Type/Init/InitBillNoBill";
import { initNoticeBillInfo } from "../Type/Init/InitNoticeBill";
import { initLoginBillInfo } from "../Type/Init/InitLoginBill";
import { initLogBillInfo } from "../Type/Init/InitLogBill";
import { initBlackListBillInfo } from "../Type/Init/InitBlackListBill";
import { initUserInfoBill } from "../Type/Init/InitUserInfoBill";
import { initFlowBillInfo } from "../Type/Init/InitFlowBill";
const USER_INFO_Data=  new BaseStore({...initIUserInfo});
const MENU_BILL_INFO_Data=  new BaseStore({...initMenuBillInfo});
const USER_BILL_INFO_Data=  new BaseStore({...initUserBillInfo});
const ROLE_BILL_INFO_Data=  new BaseStore({...initRoleBillInfo});
const DEPT_BILL_INFO_Data=  new BaseStore({...initDeptBillInfo});
const BUTTON_BILL_INFO_Data=  new BaseStore({...initButtonBillInfo});
const PARAMETER_BILL_INFO_Data=  new BaseStore({...initParameterBillInfo});
const BILL_NO_BILL_INFO_Data=  new BaseStore({...initBillNoBillInfo});
const NOTICE_BILL_INFO_Data=  new BaseStore({...initNoticeBillInfo});
const LOGIN_BILL_INFO_Data=  new BaseStore({...initLoginBillInfo});
const LOG_BILL_INFO_Data=  new BaseStore({...initLogBillInfo});
const BLACK_LIST_BILL_INFO_Data=  new BaseStore({...initBlackListBillInfo});
const USER_INFO_BILL_Data=  new BaseStore({...initUserInfoBill});
const FLOW_BILL_INFO_Data=  new BaseStore({...initFlowBillInfo});
export function CreateStores() {
    return {
      [USER_INFO]: { Data:USER_INFO_Data },
      [MENU_BILL_INFO]: { Data:MENU_BILL_INFO_Data },
      [USER_BILL_INFO]: { Data:USER_BILL_INFO_Data },
      [ROLE_BILL_INFO]: { Data:ROLE_BILL_INFO_Data },
      [DEPT_BILL_INFO]: { Data:DEPT_BILL_INFO_Data },
      [BUTTON_BILL_INFO]: { Data:BUTTON_BILL_INFO_Data },
      [PARAMETER_BILL_INFO]: { Data:PARAMETER_BILL_INFO_Data },
      [BILL_NO_BILL_INFO]: { Data:BILL_NO_BILL_INFO_Data },
      [NOTICE_BILL_INFO]: { Data:NOTICE_BILL_INFO_Data },
      [LOGIN_BILL_INFO]: { Data:LOGIN_BILL_INFO_Data },
      [LOG_BILL_INFO]: { Data:LOG_BILL_INFO_Data },
      [BLACK_LIST_BILL_INFO]: { Data:BLACK_LIST_BILL_INFO_Data },
      [USER_INFO_BILL_INFO]: { Data:USER_INFO_BILL_Data },
      [FLOW_BILL_INFO]: { Data:FLOW_BILL_INFO_Data },
     
     
    };
}
export function LocalStore() {
    const USER_INFO_Store= useLocalStore(() => ({ Data:USER_INFO_Data}))
    const MENU_BILL_INFO_Store= useLocalStore(() => ({ Data:MENU_BILL_INFO_Data}))
    const USER_BILL_INFO_Store= useLocalStore(() => ({ Data:USER_BILL_INFO_Data}))
    const ROLE_BILL_Store= useLocalStore(() => ({ Data:ROLE_BILL_INFO_Data}))
    const DEPT_BILL_INFO_Store= useLocalStore(() => ({ Data:DEPT_BILL_INFO_Data}))
    const BUTTON_BILL_INFO_Store= useLocalStore(() => ({ Data:BUTTON_BILL_INFO_Data}))
    const PARAMETER_BILL_INFO_Store= useLocalStore(() => ({ Data:PARAMETER_BILL_INFO_Data}))
    const BILL_NO_BILL_INFO_Store= useLocalStore(() => ({ Data:BILL_NO_BILL_INFO_Data}))
    const NOTICE_BILL_INFO_Store= useLocalStore(() => ({ Data:NOTICE_BILL_INFO_Data}))
    const LOGIN_BILL_INFO_Store= useLocalStore(() => ({ Data:LOGIN_BILL_INFO_Data}))
    const LOG_BILL_INFO_Store= useLocalStore(() => ({ Data:LOG_BILL_INFO_Data}))
    const BLACK_LIST_BILL_INFO_Store= useLocalStore(() => ({ Data:BLACK_LIST_BILL_INFO_Data}))
    const USER_INFO_BILL_INFO_Store= useLocalStore(() => ({ Data:USER_INFO_BILL_Data}))
    const FLOW_BILL_INFO_Store= useLocalStore(() => ({ Data:FLOW_BILL_INFO_Data}))
    return {
        [USER_INFO]:  USER_INFO_Store,
        [MENU_BILL_INFO]:MENU_BILL_INFO_Store,
        [USER_BILL_INFO]: USER_BILL_INFO_Store,
        [ROLE_BILL_INFO]: ROLE_BILL_Store,
        [DEPT_BILL_INFO]: DEPT_BILL_INFO_Store,
        [BUTTON_BILL_INFO]: BUTTON_BILL_INFO_Store,
        [PARAMETER_BILL_INFO]: PARAMETER_BILL_INFO_Store,
        [BILL_NO_BILL_INFO]:BILL_NO_BILL_INFO_Store,
        [NOTICE_BILL_INFO]:NOTICE_BILL_INFO_Store,
        [LOGIN_BILL_INFO]: LOGIN_BILL_INFO_Store,
        [LOG_BILL_INFO]:LOG_BILL_INFO_Store ,
        [BLACK_LIST_BILL_INFO]: BLACK_LIST_BILL_INFO_Store,
        [USER_INFO_BILL_INFO]: USER_INFO_BILL_INFO_Store,
        [FLOW_BILL_INFO]: FLOW_BILL_INFO_Store,
    };

}