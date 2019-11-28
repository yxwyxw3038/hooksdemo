import React from 'react';
import './App.css';
import {   BrowserRouter} from 'react-router-dom';
import BasicRoute from './View/BasicRoute';
import { renderRoutes } from 'react-router-config';
import { HookSStore } from './Store/HookStore';
const App: React.FC = () => {
  
  return (
     <HookSStore>
      <BrowserRouter>
        {renderRoutes(BasicRoute)}
      </BrowserRouter>
      </HookSStore>
    
  );
}

export default App;
