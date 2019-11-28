import React,{ useState,useEffect } from 'react';
import './App.css';
import { Button,Input} from 'antd'
import { IProps } from './IPropsList';

const  ChildButton: React.FC<IProps> = ({callback}) => {
  const [info,setInfo] =  useState(() => callback());
  const [infoChild,setInfoChild] =  useState("呵呵");
  const onTextChange= (e :any) => {
    const textinfo:string=e.target.value
    setInfoChild(textinfo);
   }
   useEffect(() => {
    setInfo(callback());
    }, [callback]);

  return (
    <div>
      <Button >{info}</Button>
      <Input placeholder=""  value={infoChild} onChange={onTextChange} />  
    </div>
  );
  
}
export default ChildButton;
