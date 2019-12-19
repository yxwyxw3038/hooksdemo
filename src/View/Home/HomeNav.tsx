import {Menu, message, Icon}from 'antd';
import React, { useState, useContext, useEffect } from "react";
import '../../App.css';
import '../../Css/Home.css';
import { MyContext } from '../../Store/HookStore';
import { initMenu } from '../../Type/Init/Init';
import api from '../../Api/myaxios';
function HomeNav (props: any) {
    const {user_info} = useContext(MyContext)
    const[menu,setMenu]= useState(initMenu)
    const [beginCount]=useState(0)
    const GetMenu=(tempToken:string ,tempuserID:string)=>{
        new api().post0('User/GetUserMenu?Token='+tempToken, {
                userID:tempuserID,
        }).then((jsonData:any)=>{
              if (jsonData.Code === '1') {

                        if (jsonData.Data) {
                            const info: any = JSON.parse(jsonData.Data)
                            if(info){
                        
                                setMenu(info);
                            }
                            else{
                              
                                setMenu({...initMenu})
                            }
                        }
                    }
                    else{
                        setMenu({...initMenu})
                        message.error(jsonData.Message);

                    }
                      
                  
        }).catch((err:any)=>{
            setMenu({...initMenu})
            message.error(err.message)
            return;
       })
        // const myapi =  new api();
        // myapi.post('User/GetUserMenu?Token='+tempToken, {
        //     userID:tempuserID,
        //   }, (response: any ) => {
        //       if (response.status >= 200 && response.status < 300) {
        //            if (response.data) {
        //             const jsonData: any = response.data;
        //             if (jsonData.Code === '1') {

        //                 if (jsonData.Data) {
        //                     const info: any = JSON.parse(jsonData.Data)
        //                     if(info){
                        
        //                         setMenu(info);
        //                     }
        //                     else{
                              
        //                         setMenu({...initMenu})
        //                     }
        //                 }
        //             }
        //             else{
        //                 setMenu({...initMenu})
        //                 message.error(jsonData.Message);

        //             }
                      
        //           }
        //       } else {
        //             setMenu({...initMenu})
        //             message.error(response.message);
        //       }
        //   });
    }
    const handleClick= (e:any):void => {
       props.menuCallback(e.key);
    }
    useEffect(() => {
        GetMenu(user_info.Data.GetInfo.Token,user_info.Data.GetInfo.ID)
    },[beginCount,user_info])
    return (
    <Menu  className="menuDiv" mode="inline"  onClick={handleClick}>
    {
        menu.map((item:any, i:any)=> (
            item.Node!=null &&item.Node.length>0 ?
            <Menu.SubMenu  key={item.ID} title={<span><Icon type={item.Icon} /><span className="spanFont">{item.MenuName}</span></span>} >
                {item.Node.map(
                    (items:any)=> (
                        items.Node !=null &&items.Node.length>0 ?
                        <Menu.SubMenu  key={items.ID} title={<span><Icon type={items.Icon} /><span className="spanFont">{items.MenuName}</span></span>} >
                        {item.Node.map(
                        (itemss:any)=> (
                            <Menu.Item className="submenuDiv" key={itemss.ID}><span> <Icon type={itemss.Icon} /><span className="spanFont">{itemss.MenuName}</span></span></Menu.Item>
                        ))
                        }
                        </Menu.SubMenu>
                        :<Menu.Item className="submenuDiv" key={items.ID}><span><Icon type={items.Icon} /><span className="spanFont">{items.MenuName}</span></span></Menu.Item>
                    )

                )}
    
            </Menu.SubMenu>
            :  <Menu.Item className="submenuDiv" key={item.ID}><span><Icon type={item.Icon} /><span className="spanFont">{item.MenuName}</span></span></Menu.Item>
        )
        )
    }
    </Menu>
)
}
export default React.memo(HomeNav);