import {Button,message,Modal, Transfer}from 'antd';
import React, { useState, useContext } from "react";
import api from '../../Api/myaxios';
import '../../App.css';
import { MyContext } from '../../Store/HookStore';
function SetMenuButton (props: any) {
    const {user_info} = useContext(MyContext);
    const [menuId]=useState(props.menuId)
    const [dialogEditTitle]=useState(props.dialogEditTitle)
    const [dialogEditVisible]=useState(props.dialogEditVisible)
    const [dataSource,setDataSource]=useState([])
    const [targetKeys,setTargetKeys]=useState([])
    const [loading,setLoading]=useState(false)
    const [beginCount,setBeginCount]=useState(0)
    const handleChange = (nextTargetKeys:any, direction:any, moveKeys:any) => {
        setTargetKeys( nextTargetKeys );
    
    }
    const handleOk = (e:any) => {
        e.preventDefault();
        submitsetMenuButton();
        
      }
    
    const handleCancel = (e:any) => {
        props.eventCallback();
      }
    const submitsetMenuButton=()=>{
        
         let buttonStr='';
         if(targetKeys.length>0)
         {
           for(let i=0;i<targetKeys.length;i++)
           {
             if(i===targetKeys.length-1)
             {
                  buttonStr=buttonStr+(targetKeys[i]+'');
             }
             else{
                   buttonStr=buttonStr+(targetKeys[i]+',');
             }
           }
         }
         const myapi =  new api();
         setLoading(true);
         myapi.post("Menu/SetMenuButton?Token="+user_info.Data.GetInfo.Token,{
            menuId: menuId,
            // tslint:disable-next-line:object-literal-sort-keys
            buttonStr
         }, (response: any) => {
            setLoading(false);
         if (response.status >= 200 && response.status < 300) {
         if (response.data) {       
             // tslint:disable-next-line:no-eval
             const jsonData = response.data;
             if (jsonData.Code === '1') {
                message.success("保存成功！");
                props.eventCallback();
                 
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
    const GetButtonByMenuIdnForTransfer=()=>{
            const myapi =  new api();
            setLoading(true);
            myapi.post("Button/GetButtonByMenuIdnForTransfer?Token="+user_info.Data.GetInfo.Token,{
                menuId: menuId
            }, (response: any) => {
                setLoading(false);
            if (response.status >= 200 && response.status < 300) {
            if (response.data) {       
                // tslint:disable-next-line:no-eval
                const jsonData = response.data;
                if (jsonData.Code === '1') {
                    if (jsonData.Data) {
                        // tslint:disable-next-line:no-eval
                        const tempdata= jsonData.Data.split(',');
                     
                        setTargetKeys( tempdata );
                    }
                    else {
                        setTargetKeys( [] );
                    }
                    
                } else {
                  if(jsonData.Message!=="无按钮权限")
                  {   
                    message.error(jsonData.Message);
                  }
                return;
                }
            }
            } else {
                message.error(response.message);
                return;
            }
        
        });

    }
    const GetAllButtonForTransfer=()=>{
            const myapi =  new api();
            setLoading(true);
            setTargetKeys( [] );
            setDataSource( [] );
            myapi.post("Button/GetAllButtonForTransfer?Token="+user_info.Data.GetInfo.Token,{
            
            }, (response: any) => {
                setLoading(false);
            if (response.status >= 200 && response.status < 300) {
            if (response.data) {       
                // tslint:disable-next-line:no-eval
                const jsonData = response.data ;
                if (jsonData.Code === '1') {
                    if (jsonData.Data) {
                        // tslint:disable-next-line:no-eval
                        const tempdata=JSON.parse(jsonData.Data);
                        setTargetKeys( tempdata );
                        GetButtonByMenuIdnForTransfer();
                    }
                    else
                    {   
                        message.error("加载异常！");
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
    if(beginCount===0) {
        if( menuId!=="-1")
        {
            GetAllButtonForTransfer()
        }
    }
    setBeginCount( n=> n+1)
    return ( <Modal
        title={dialogEditTitle}
        visible={dialogEditVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
            [
            <Button  key="back" onClick={handleCancel}  loading={loading}>关闭</Button>,
            <Button key="submit" type="primary"  onClick={handleOk}  loading={loading}>确定 </Button>,
          ]}

    >
    <Transfer
      dataSource={dataSource}
      titles={['未赋权', '已赋权']}
      targetKeys={targetKeys}
     
      onChange={handleChange}
   
      // tslint:disable-next-line:jsx-no-lambda
      render={item => item.title}
    
    />
    </Modal>
    )

}

export default React.memo(SetMenuButton)