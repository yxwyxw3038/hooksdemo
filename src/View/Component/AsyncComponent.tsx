import React from "react";

import '../../App.css';
import '../../Css/Bill.css';
export default function asyncComponent( importComponent :any)  {
  const AnotherComponent=  React.lazy(importComponent)
  function AsyncComponent (props: any) {
    return (  <React.Suspense fallback={'loading'}> 
        <AnotherComponent {...props} />
        </React.Suspense>
    )
  }
  return AsyncComponent
}
