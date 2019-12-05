import React, { useState, useContext, useEffect } from "react";
import '../../App.css';
import '../../Css/Home.css';
import { MyContext } from "../../Store/HookStore";
import {Badge,Button,Dropdown,Icon,Menu,message, Modal}from 'antd';
import * as PS from 'pubsub-js'
function HomeHeader(props: any) {
    const [noticeCount,setNoticeCount]=useState(0)
    // const [beginCount]=useState(0)
    // const [changeId,setChangeId]=useState()
    // const [pubSubnfo]=useState(new BaseStore({}))
    const {user_info} = useContext(MyContext)
    useEffect(() => {
        const changeIdtemp = PS.subscribe('HomeNoticeBadgeCount',(name:any, allValues:any)=>
        {
            if ( allValues.noticeCount!==null&&allValues.noticeCount!==undefined) {
                
                setNoticeCount(allValues.noticeCount as number);
            }
           
        } );  
    
        return ()=> {  
            PS.unsubscribe(changeIdtemp); 
        }
        },[]);
    const handleMenuClick=(e: any) => {
      
        switch(e.key)
        {
         case 'logout':
         logOut();
         break;
         case 'userinfo':
         props.eventUserInfoCallback();
         break;
         default:
         message.info('!!!!!!');
         break;
        }
    
    }
    const logOut=()=>{
        Modal.confirm({
            title: '警告！',
            // tslint:disable-next-line:object-literal-sort-keys
            content: '是否退出系统？',
            okText: '是',
            okType: 'danger',
            cancelText: '否',
            onOk() {
                props.history.push('Login');
            }
        });
    
    }
    const handleIconClick = (e:any) => { 
        PubSub.publish('HomeNoticeDrawerOpen',null);
        setNoticeCount(0);
    }
    const menu = (
        // tslint:disable-next-line:jsx-no-bind
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="userinfo"><Icon type="user" /><span className="spanFont">个人信息</span></Menu.Item>
          <Menu.Item key="logout"><Icon type="user" /><span className="spanFont">退出系统</span></Menu.Item>
        </Menu>
      );
      return ( <div className="headerDiv">
      <ul className="header-operations">
          <li>
              <Badge count={noticeCount}>
              <Icon type="bell" onClick={handleIconClick}/>
              </Badge>
              <span className="spanFont">欢迎您：</span>
            
              <Dropdown overlay={menu}>
              <Button style={{ marginLeft: 8 }}>
              <span className="spanFont">{user_info.Data.GetInfo.RealName}</span> <Icon type="down" />
              </Button>
              </Dropdown>
          </li>
      </ul>
  </div>)
}
export default React.memo(HomeHeader);