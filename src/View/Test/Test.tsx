import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../Store/HookStore";
import { Input } from "antd";
import { IUserInfo } from "../../Type/Interface/Interface";
function Test(props: any) {
    const [info] = useState("Test");
    const {user_info} = useContext(MyContext);
    const [storeInfo, setStoreInfo] = useState(user_info.Data.GetInfo);
    useEffect(() => {
        const info1:string = JSON.stringify(storeInfo);
        window.localStorage.setItem('Test',info1);
        },[storeInfo]);
    const onTextChange= (e :any) => {
            const AccountName:string=e.target.value
            const temp:IUserInfo={...user_info.Data.GetInfo,AccountName} 
            user_info.Data.Update(temp)
            setStoreInfo(user_info.Data.GetInfo)
    }
    return (<div>
        <div>{info}</div>
        <div>{user_info.Data.GetInfo.AccountName}</div>
        <Input placeholder="请随意输入！"  value={user_info.Data.GetInfo.AccountName} onChange={onTextChange} />  
        </div>
        )
}
export default React.memo(Test);