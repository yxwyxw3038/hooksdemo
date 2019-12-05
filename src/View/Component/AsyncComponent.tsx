import React, { useState,  useEffect } from "react";

import '../../App.css';
import '../../Css/Bill.css';
export default function asyncComponent( importComponent :any)  {


function AsyncComponent (props: any) {
    const [AnotherComponent,setAnotherComponent]=useState(); 
    const lodingComp=  async () =>{
        const { default: component } = await importComponent();
        setAnotherComponent(component)
    }
    useEffect(() => {
        lodingComp() 
    })
   
   
    return (  AnotherComponent ? <AnotherComponent {...props} /> : null)
}
return React.memo(AsyncComponent);
}
