import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../Store/HookStore";
import { Input } from "antd";
import { IUserInfo } from "../../Type/Interface/Interface";
function Test(props: any) {
    const [info] = useState("Test");
    const store = useContext(MyContext).user_info;
    const [storeInfo, setStoreInfo] = useState(store.Data.GetInfo);
    useEffect(() => {
        const info1:string = JSON.stringify(storeInfo);
        window.localStorage.setItem('newuserInfo',info1);
        },[storeInfo]);
    const onTextChange= (e :any) => {
            const AccountName:string=e.target.value
            const temp:IUserInfo={...store.Data.GetInfo,AccountName} 
            store.Data.UpdateUserInfo(temp)
            setStoreInfo(store.Data.GetInfo)
    }
    return (<div>
        <div>{info}</div>
        <div>{store.Data.GetInfo.AccountName}</div>
        <Input placeholder="请随意输入！"  value={store.Data.GetInfo.AccountName} onChange={onTextChange} />  
        </div>
        )
}
export default React.memo(Test);