import React,{useCallback, useState } from 'react';
import './App.css';
import {  Input} from 'antd'
import ChildButton from './ChildButton';
const MainButton: React.FC = () => {
  const [info, setInfo] = useState("");

  const onTextChange= (e :any) => {
    const textinfo:string=e.target.value
    setInfo(textinfo);
   }
   const infoCallback = useCallback(() => {
    console.log(info)
    return info;
    }, [info]);

  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="请随意输入！"  value={info} onChange={onTextChange} />  
        <ChildButton callback={infoCallback}></ChildButton>
      </header>
     
    </div>
  );
  
}

export default MainButton;
