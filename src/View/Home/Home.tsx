import {Icon, Layout,message, notification, Tabs}from 'antd';
import React, { useState, useContext, useEffect } from "react";
import api from '../../Api/myaxios';
import ws from '../../Api/myWs';
import '../../App.css';
import '../../Css/Home.css'
import { MyContext } from '../../Store/HookStore';
import { GetLocalStorageUserInfo, PageQx } from '../../Func/PublicStore';
import { initTabs, initDemoName } from '../../Type/Init/Init';
import { IUserInfo, WsMseType, IWsInfo } from '../../Type/Interface/Interface';
import asyncComponent from '../Component/AsyncComponent';
import HomeHeader from './HomeHeader';
import HomeNav from './HomeNav';
import * as PS from 'pubsub-js'
const TabPane = Tabs.TabPane;
function Home (props: any) {
    const {user_info} = useContext(MyContext);
    const [ActiveKey,setActiveKey]=useState("0")
    const [beginCount]=useState(0)
    // const [myWs]=useState({Data:new ws().NewWs()})
    const [tabList,setTabList]=useState([...initTabs])
    const myhistory=props.history;
    if(user_info.Data.GetInfo.Token===""){
        user_info.Data.Update(GetLocalStorageUserInfo());
    }
    useEffect(() => {
        PageQx( (isQx: boolean, msg: string,userInfo:IUserInfo) => {
            if (!isQx) {
              message.error(msg);
              myhistory.push('Login');
            }
          }
          );
          document.title=initDemoName+"主页";
          // console.log(myWs)
          const myws= new ws().NewWs()
          myws.onopen = (evt:any) => {  
            // tslint:disable-next-line:no-console
            console.log("构建WS链接:" + evt.data);  
            const newWsInfoData:IWsInfo={
              Data:"",
              ID:user_info.Data.GetInfo.ID,
              Type:WsMseType.Register,
            }
            const Jsonstr= JSON.stringify(newWsInfoData);
            myws.send(Jsonstr);  
          };  
          myws.onmessage =  (evt:any) => {  
              // tslint:disable-next-line:no-console
              console.log("Received Message: " + evt.data);  
              const info=JSON.parse(evt.data);
              if (info.Type==="Msg"&&info.Data!==null&&info.Data!==undefined) {
              const data=JSON.parse(info.Data);
              const allValues ={info:data}
              notification.info({
              
                description:data.Title,
                key:data.ID,
                message: data.No,
                placement: 'bottomRight',
                
               
                
              });
              PS.publish('HomeNoticeDrawerChange',allValues);
              }
          };  
          myws.onclose =  (evt:any) => {  
              // tslint:disable-next-line:no-console
              console.log("Connection closed.");  
          };  
          // setMyWs(myws)
         
     return () =>{ }

    },[beginCount,myhistory,user_info])
    const UserInfoCallback=():any =>{
        let tabListTemp= [...tabList];
        tabListTemp= tabListTemp.map((item:any)=>({...item,IsNew:false} ) );
        let findbj=-1;
        for (let i = 0; i < tabListTemp.length; i++) {
            if(tabListTemp[i].key==="99999")
            {
              findbj=i;
              break;
            }
        }
        if(findbj===-1)
        {
        const addtab={title: "个人信息维护", content:"UserInfoBill", key: "99999", closable: true,icon:"user",IsNewOpen:true}
        tabListTemp.push(addtab);
        setActiveKey("99999")
        setTabList(tabListTemp)
        
        }
        else{
            setActiveKey("99999")
        }
    }
    const MyComp=(compName:string ,compId:string,isNewOpen:boolean):any =>{
      //  compName="Test"
       const TheMyComp=asyncComponent(() => import('../../View/'+compName+'/'+compName));
       return <TheMyComp menuId={compId} isNewOpen={isNewOpen}/>
     }
    const onChange = (activeKey:any) => {
       
        let panes = tabList;
        panes= panes.map((item:any)=>({...item,IsNewOpen:false} ) );
        setTabList(panes)
        setActiveKey(activeKey)
      }
    const onEdit = (targetKey :any, action:any) => {
        tabList[action](targetKey);
      }
    // const add = () => {
    //     const activeKey:string= "0";
    //     let panes = tabList.filter((pane:any) => pane.key === "0");
    //     panes= panes.map((item:any)=>({...item,IsNewOpen:false} ) );
    //     setTabList(panes)
    //     setActiveKey(activeKey)

    //   }
    
    // const remove = (targetKey:any) => {
    //     // tslint:disable-next-line:radix
    //     let activeKey:any = ActiveKey;
    //     let lastIndex:any;
    //     tabList.forEach((pane:any, i:any) => {
    //       if (pane.key === targetKey) {
    //         lastIndex = i - 1;
    //       }
    //     });
    //     let panes = tabList.filter((pane:any) => pane.key !== targetKey);
    //     panes= panes.map((item:any)=>({...item,IsNewOpen:false} ) );
    //     if (lastIndex >= 0 && activeKey === targetKey) {
    //     activeKey = panes[lastIndex].key;
    //     }
    //     setTabList(panes)
    //     setActiveKey(activeKey)
    // }
    const MenuCallback=(Id:string )=>
    {
      
        let tabListTemp= tabList;
        tabListTemp= tabListTemp.map((item:any)=>({...item,IsNewOpen:false} ) );
        const myapi =  new api();
        myapi.post('Menu/GetMenuByID?Token='+user_info.Data.GetInfo.Token, {
            ID:Id}, (response: any) => {
         if (response.status >= 200 && response.status < 300) {
         if (response.data) {
            const jsonData: any = response.data;
             if (jsonData.Code === '1') {
                if (jsonData.Data) {
                    const info=JSON.parse(jsonData.Data);
                    
                    let findbj=-1;
                    // tslint:disable-next-line:no-var-keyword
                    for (var i = 0; i < tabListTemp.length; i++) {
                    if(tabListTemp[i].key===info.ID.toString())
                    {
                      findbj=i;
                      break;
                    }

                  }
                  if(findbj===-1)
                  {
                      const addtab={title: info.Name, content: info.LinkAddress, key: info.ID.toString(), closable: true,icon:info.Icon,IsNewOpen:true}
                      tabListTemp.push(addtab);
                      setTabList(tabListTemp)
                      setActiveKey(info.ID.toString())
                  }
                  else{
                      setActiveKey(info.ID.toString())
                  }

                }
                else
                {
                    message.error("打开菜单异常！");
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
    return (<div>
        <Layout>
             <Layout.Header className="layoutHeader"><HomeHeader userInfo={user_info.Data.GetInfo} history={myhistory} eventUserInfoCallback={UserInfoCallback}/></Layout.Header>
             <Layout className="layoutMiddle">
                 <Layout.Sider><HomeNav userInfo={user_info.Data.GetInfo} menuCallback={MenuCallback}/></Layout.Sider>
                 <Layout.Content>
                 <Tabs activeKey={ActiveKey} type="editable-card"   onChange={onChange}  onEdit={onEdit} >
                     {tabList.map((pane :any) => <TabPane tab={<span><Icon type={pane.icon} />{pane.title}</span>} key={pane.key} closable={pane.closable}>
                     {/* <LoadableOtherComponent CompName={pane.content}/> */}
                     {/* { asyncComponent(() => import('../View/'+pane.content))} */}
                     {MyComp(pane.content,pane.key,pane.IsNewOpen)}
                     </TabPane>)}
                 </Tabs>
                 </Layout.Content>
             </Layout>
            
         </Layout>
         {/* <HomeDrawer/> */}
         {/* <HomeNoticeDrawer/> */}
     </div>)
}
export default React.memo(Home);