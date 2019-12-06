import { Button}from 'antd';
import React, { useState } from "react";
import { IBtnProps } from '../../Type/Interface/InterfaceProps';
import '../../App.css';

const ButtonGroup = Button.Group;
function BtnGroupEdit (props: any) {
    const [BtnList]=useState(props.btnList)
    const [loading]=useState(props.loading)
    const onClick= (e :any) => {
        const btnKey= e.target.getAttribute("data-key")
        props.eventCallback(btnKey);
      
      }
   
    return ( 
        <ButtonGroup>
        {
        BtnList.map((item:any, i:any)=> (
            <Button size="small" key={item.key}  loading={loading} disabled={item.disabled} data-key={item.key} icon={item.icon} onClick={onClick}>{item.title}</Button>
        ))
        }
        
    </ButtonGroup>
    )
}
export default React.memo<IBtnProps>(BtnGroupEdit);