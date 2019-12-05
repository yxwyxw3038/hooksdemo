import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../Store/HookStore";
import {  message } from "antd";
import { IUserInfo } from "../../Type/Interface/Interface";
import { SetLocalStorageUserInfo, ClearLocalStorageUserInfo } from "../../Func/PublicStore";
import { initDemoName } from "../../Type/Init/Init";
import CryptoJS from "crypto-js";
import api from '../../Api/myaxios';
import LoginFrom from "./LoginFrom";
import '../../App.css';
import '../../Css/Login.css';
function Login(props: any) {
    const [loading,setLoading] = useState(false);
    const {user_info} = useContext(MyContext);
    const [beginCount]=useState(0)
    useEffect(() => {
    const aa:string="测试!"
    return () =>{
        console.log(aa)
    }},[])
    useEffect(() => {
            document.title= initDemoName+"登录页";
            user_info.Data.Clear()
            ClearLocalStorageUserInfo()        
        return () =>{
         console.log("HI！")
        }
        },[beginCount, user_info.Data]);

    const  handleSubmit = (values: any): void => {
        login(values.username,values.password);
    }
    const login = (username: string,password: string): void => {
            username=username.trim();
            password=password.trim();
            if(!username)
            {
             message.warning("用户名不能为空！");
             return;
            }
            if(!password)
            {
             message.warning("密码不能为空！");
             return;
            }
           
   
            const myhistory=props.history;
            setLoading(true)
            const password1 = CryptoJS.enc.Utf8.parse(password);
            const passwords = CryptoJS.enc.Base64.stringify(password1);
   
            const myapi =  new api();
            myapi.post('Login', {
                accountName: username,
                passWord: passwords,
              }, (response: any ) => {
                  if (response.status >= 200 && response.status < 300) {
                       if (response.data) {
                            const jsonData: any = response.data;
                            if (jsonData.Code === '1') {
                                if (jsonData.Data) {
                                const info: IUserInfo =JSON.parse(jsonData.Data)
                                if (info) {
                                    user_info.Data.Update(info)
                                    // setStoreInfo(info)
                                    SetLocalStorageUserInfo(info)
                                    myhistory.push('Home');
                                    
                                } else {
                                        setLoading(false);
                                        message.error('验证异常!');
                                }
                                } else {
                                
                                    setLoading(false);
                                        message.error(jsonData.Message);
        
                                }
        
                            } else {
                                user_info.Data.Clear()
                                // setStoreInfo({})
                                setLoading(false);
                                message.error(jsonData.Message);
                            }
                        }
                  } else {
                    setLoading(false);
                        message.error(response.message);
                  }
              });
     
       }
    return ( <div className="login-wrap"><LoginFrom loading={loading} onHandleSubmit={handleSubmit} /> </div> 
        )
}

export default React.memo(Login);