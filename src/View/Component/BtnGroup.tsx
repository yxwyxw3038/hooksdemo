import { Button, message}from 'antd';
import React, { useState, useEffect, useCallback } from "react";
import api from '../../Api/myaxios';
import { IBtnProps } from '../../Type/Interface/InterfaceProps';
import { initBtnList } from '../../Type/Init/Init';
import { IBtn } from '../../Type/Interface/Interface';
import '../../App.css';
const ButtonGroup = Button.Group;
function BtnGroup (props: any) {
    const [BtnList,setBtnList]=useState(props.btnList)
    const [loading,setLoading]=useState(props.loading)
    const [Token]=useState(props.token)
    const [UserId]=useState(props.userId)
    const [MenuId]=useState(props.menuId)
    const [eventListCallback]=useState(props.eventListCallback)
    const isComp=BtnList.length>1?true:BtnList[0].key==="0000"?false:true;
    useCallback(()=>{
        console.log("eventListCallback")
       if (isComp){  eventListCallback(BtnList)}
    },[BtnList,eventListCallback,isComp])
    const onClick= (e :any) => {
        const btnKey= e.target.getAttribute("data-key")
        props.eventCallback(btnKey);
      
      }
      const GetData= (token:string, userId:string,menuId:string) => {
        setLoading(true)
        const myapi =  new api();
        myapi.post('Button/GetButtonByMenuIdAndUserId?Token='+token, {
            menuId,
            userId
        }, (response: any) => {
        setLoading(false)
         if (response.status >= 200 && response.status < 300) {
         if (response.data) {
            const jsonData: any = response.data;
            if (jsonData.Code === '1') {
                if (jsonData.Data) {
                    const info=JSON.parse(jsonData.Data);
                    if(info&&info.length>0)
                    {
                       const btnList:IBtn[]=[];
                       for(let i=0;i<info.length;i++)
                       {
                        const item:IBtn={
                            title: info[i].Name, key: info[i].Code,icon:info[i].Icon
                          }
                        btnList.push(item);
                        setBtnList([...btnList])
                        // props.eventListCallback(btnList);
                        // eventListCallback([...btnList])
                       }
                    }
                    else{
                        setBtnList([...initBtnList])
                        // props.eventListCallback([...initBtnList]);
                        // eventListCallback([...initBtnList])
                    }
                 

                }
                else
                {
                    message.error("加载按钮权限异常！");
                    return;
                }
             } else {
             message.error(jsonData.Message);
             return;
             }
         }
         } else {
             message.error(response.message);
             return;
         }

     });
    }
    useEffect(() => {
        GetData(Token,UserId,MenuId)
    },[Token,UserId,MenuId])
    // const isComp=BtnList.length>1?true:BtnList[0].key==="0000"?false:true;
    return (   isComp?  <ButtonGroup>
        {
          BtnList.map((item:any, i:any)=> (
            <Button key={item.key}  loading={loading} data-key={item.key} icon={item.icon} onClick={onClick}>{item.title}</Button>
        )
        )
        }
        
       </ButtonGroup>:<div/>)
}
export default React.memo<IBtnProps>(BtnGroup);