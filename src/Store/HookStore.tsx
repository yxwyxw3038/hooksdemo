import React, {createContext} from 'react';
import { observer} from 'mobx-react-lite';
import {  CreateStores, LocalStore } from './CreateStores';
export const MyContext = createContext(CreateStores());
export const HookSStore = observer((props) => {
   
  return (
    <MyContext.Provider value={LocalStore()}>
      {props.children}
    </MyContext.Provider>
  );
});