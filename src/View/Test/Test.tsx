import React, { useState, useEffect } from "react";
import { Input } from "antd";
function Test(props: any) {
    const [info,Setinfo] = useState("Test");
    useEffect(() => {
        window.localStorage.setItem('Test',info);
        },[info]);
    const onTextChange= (e :any) => {
            const myinfo:string=e.target.value
            Setinfo(myinfo)
    }
    return (<div>
        <div>{info}</div>
        <Input placeholder="请随意输入！"  value={info} onChange={onTextChange} />  
        </div>
        )
}
export default React.memo(Test);