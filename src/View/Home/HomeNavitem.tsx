import {Menu}from 'antd';
import React, { useState, useContext, useEffect } from "react";
import '../../App.css';
import '../../Css/Home.css';
function HomeNavitem (props: any) {
    const [navitem]=useState(props.Navitem); 
    return (<Menu.Item className="submenuDiv" key={navitem.Id}><span>{navitem.MenuName}</span></Menu.Item>)
}
export default React.memo(HomeNavitem);