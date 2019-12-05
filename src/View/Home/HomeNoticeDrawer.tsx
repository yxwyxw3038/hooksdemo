import {  Drawer, List, Tag}from 'antd';
import  * as PubSub from 'pubsub-js';  
import React, { useState,  useEffect } from "react";
import '../../App.css';
import '../../Css/Home.css';
import { initNoticeBillList } from '../../Type/Init/InitNoticeBill';
import { BaseStore } from '../../Store/BaseStore';
import * as PS from 'pubsub-js'
function HomeNoticeDrawer (props: any) {
    const [visible,setVisible]=useState(false)
    const [pubSubInfo]=useState(new BaseStore({}))
    const [pubSubInfo1]=useState(new BaseStore({}))
    const [beginCount]=useState(0)
    const [noticeList,setNoticeList]=useState([...initNoticeBillList])
    const [newMsgCount,setNewMsgCount]=useState(0)

    useEffect(() => {
        const changeIdtemp = PS.subscribe('HomeNoticeDrawerChange',(name:any, allValues:any)=>{
            if ( allValues.info!==null&&allValues.info!==undefined) {
                //useEffect 处理静态值写法
                setNoticeList(n=>( [...n,allValues.info]))
                setNewMsgCount(n=>{ 
                    PS.publish('HomeNoticeBadgeCount',{noticeCount:n+1})
                    return         n+1})
          }
        } );  
        const changeIdtemp1 = PS.subscribe('HomeNoticeDrawerOpen',(name:any, allValues:any)=>{
            setNewMsgCount(0)
            setVisible(true)
        });
        pubSubInfo.Update({id:changeIdtemp})
        pubSubInfo1.Update({id:changeIdtemp1})
        return ()=> {  
            PubSub.unsubscribe(pubSubInfo.GetInfo.id);
            PubSub.unsubscribe(pubSubInfo1.GetInfo.id); 
        }
        },[beginCount,pubSubInfo,pubSubInfo1]);
    console.log(newMsgCount)
    return (
        <Drawer
        placement="right"
        closable={false}
        onClose={ ()=>{  setVisible(false)}}
        visible={visible}
        width={300}
        >
       <List
        size="large"
        itemLayout="horizontal"
        bordered={true}
       
        dataSource={noticeList.reverse()}
        // tslint:disable-next-line:jsx-no-lambda
        renderItem={(item:any) => (
            <List.Item>
              <List.Item.Meta
            
                title={<span>单号：<Tag>{item.No}</Tag></span>}
                description={<div><p><span>主题：{item.Title}</span></p>
                   <p>时间：{item.MsgTime}</p>
                   <p>内容：{item.Content}</p>
                   </div>}
              />
            
            </List.Item>
          )}
        />
        </Drawer>
    )
}
export default React.memo(HomeNoticeDrawer);