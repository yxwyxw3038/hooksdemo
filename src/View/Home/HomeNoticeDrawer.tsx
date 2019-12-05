import {  Drawer, List, Tag}from 'antd';
import  * as PubSub from 'pubsub-js';  
import React, { useState,  useEffect } from "react";
import '../../App.css';
import '../../Css/Home.css';
import { initNoticeBillList } from '../../Type/Init/InitNoticeBill';
function HomeNoticeDrawer (props: any) {
    const [visible,setVisible]=useState(false)
    const [changeId,setChangeId]=useState()
    const [changeId1,setChangeId1]=useState()
    const [beginCount,setBeginCount]=useState(0)
    const [noticeList,setNoticeList]=useState([...initNoticeBillList])
    const [newMsgCount,setNewMsgCount]=useState(0)
    useEffect(() => {
        const changeIdtemp = PubSub.subscribe('HomeNoticeBadgeCount',(name:any, allValues:any)=>{
            if ( allValues.info!==null&&allValues.info!==undefined) {
                
                const allValues0 ={noticeCount:newMsgCount+1}
                PubSub.publish('HomeNoticeBadgeCount',allValues0)
                setNoticeList([...noticeList,allValues.info])
                setNewMsgCount(newMsgCount+1)
          }
        } );  
        const changeIdtemp1 = PubSub.subscribe('HomeNoticeDrawerOpen',(name:any, allValues:any)=>{
            setNewMsgCount(0)
            setVisible(true)
        });
        // const onclose (a:any,b:any) => {
        //     setVisible(false)
        //   }
        setChangeId(changeIdtemp);
        setChangeId1(changeIdtemp1);
        return ()=> {  
            PubSub.unsubscribe(changeId);
            PubSub.unsubscribe(changeId1); 
        }
        },[beginCount]);
    if (beginCount==0){ setBeginCount(1)}
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