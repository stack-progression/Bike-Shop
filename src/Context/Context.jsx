import React from 'react'
import { ShopContext } from './ShopContext';

const Context = ({children}) => {







    
    const AppValue = {data: "salut"};

  return (
    <ShopContext.Provider value={AppValue}>
      {children}
    </ShopContext.Provider>
  )
}

export default Context
