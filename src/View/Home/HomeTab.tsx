import {Icon,Tabs}from 'antd';
import React, { useState } from "react";
import '../../App.css';
import '../../Css/Home.css';
import {initTabs} from '../../Type/Init/Init'
import asyncComponent from '../Component/AsyncComponent';
const TabPane = Tabs.TabPane;
function HomeTab (props: any) {
    const [ActiveKey,setActiveKey]=useState("0")
    const [tabList]=useState([...initTabs])
    const onChange = (activeKey:any) => {
         setActiveKey(activeKey)
      }
      const onEdit = (targetKey :any, action:any) => {
         tabList[action](targetKey);
      }
  //     const add = () => {
  //       const activeKey:string= "0";
  //       const panes = tabList.filter((pane:any) => pane.key !== "0");
  //       setTabList(panes)
  //       setActiveKey(activeKey)
  //     }
    
  //     const remove = (targetKey:any) => {
  //       let activeKey:string = ActiveKey;
  //       let lastIndex:any;
  //       tabList.forEach((pane:any, i:any) => {
  //         if (pane.key === targetKey) {
  //           lastIndex = i - 1;
  //         }
  //       });
  //       const panes = tabList.filter((pane:any) => pane.key !== targetKey);
  //       if (lastIndex >= 0 && activeKey === targetKey) {
  //       activeKey = panes[lastIndex].key;
  //       }
  //       setTabList(panes)
  //       setActiveKey(activeKey)
  // }
  return (
           
              
    <Tabs activeKey={ActiveKey} type="editable-card"   onChange={onChange}  onEdit={onEdit} >
        {tabList.map((pane :any) => <TabPane  tab={<span><Icon type={pane.icon} />{pane.title}</span>}  key={pane.key} closable={pane.closable}>
        { asyncComponent(() => import('../'+ pane.content))}
        </TabPane>)}
    </Tabs>
  
)

}
export default React.memo(HomeTab);