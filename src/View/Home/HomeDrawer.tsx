import {Col, Drawer, List, Radio, Steps}from 'antd';
import  * as PubSub from 'pubsub-js';  
import React, { useState, useContext, useEffect } from "react";
import '../../App.css';
import '../../Css/Home.css';
function HomeDrawer (props: any) {
    const [visible,setVisible]=useState(false)
    const [AllValues,setAllValues]=useState({ type: 'none'})
    const [data]=useState([
        '一',
        '二',
        '三',
        '四'
       ])
    const [changeId,setChangeId]=useState()
    useEffect(() => {
        const changeIdtemp = PubSub.subscribe('HomeNoticeBadgeCount',(name:any, allValues:any)=>
        {
            setVisible(true)
            setAllValues({...AllValues, ...allValues})
           
           
        } );  
        setChangeId(changeIdtemp);
        return ()=> {  
            PubSub.unsubscribe(changeId); 
        }
        });
    const renderStart=() => {
        return (
            <Drawer
            placement="top"
            closable={false}
            onClose={onClose}
            visible={visible}
            height={400}
            >
           <List
            size="large"
          
            bordered={true}
            pagination={{
                pageSize: 3,
              }}
            dataSource={data}
            // tslint:disable-next-line:jsx-no-lambda
            renderItem={(item:any) =>
                 (<List.Item><Col span={4} >
                  <Radio>
                  <span> {item}</span>
                 </Radio></Col>
                 <Col span={20} >
                
                 <Steps size="small" progressDot={true} current={3}>
                    <Steps.Step title="第一步" />
                    <Steps.Step title="第二步" />
                    <Steps.Step title="第三步" />
                 </Steps>
                 
                 </Col>
                 </List.Item>)
                }
            />
            </Drawer>
                      
        )
    }
    const renderLook=()=> {
        return (
            <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
            height={400}
            >
           <List
            size="large"
          
            bordered={true}
            pagination={{
                pageSize: 3,
              }}
            dataSource={data}
            // tslint:disable-next-line:jsx-no-lambda
            renderItem={(item:any) =>
                 (<List.Item><Col span={4} ><span> {item}</span></Col>
                 <Col span={20} >
                 <Steps size="small" progressDot={true} current={3}>
                    <Steps.Step title="第一步" />
                    <Steps.Step title="第二步" />
                    <Steps.Step title="第三步" />
                 </Steps>
                 </Col>
                 </List.Item>)
                }
            />
            </Drawer>
                      
        )
    }
    const onClose = () => {
        setVisible(false)
      };
    const renderBegin=() => {
        
        switch(AllValues.type)
        {
          case "start":
          return renderStart();
 
          case "look":
          return renderLook();
          default:
          return (<div><span>{AllValues.type}</span></div>);
 
        }
     }
    return (renderBegin())
}
export default React.memo(HomeDrawer);