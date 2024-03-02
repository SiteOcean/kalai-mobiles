import React, { createContext, useContext, useState } from 'react';

const SiteDataContext = createContext();

export function useSiteDataContext() {
  return useContext(SiteDataContext);
}

export function SiteDataProvider({ children }) {

    const [hompageProducts, setHomePageProducts] = useState(null)

    return (<SiteDataContext.Provider value={{hompageProducts, setHomePageProducts}}>
        {children}
    </SiteDataContext.Provider>)
}