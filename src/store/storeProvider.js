import React, { createContext, useContext, useState } from 'react';

const SiteDataContext = createContext();

export function useSiteDataContext() {
  return useContext(SiteDataContext);
}

export function SiteDataProvider({ children }) {

    const [hompageProducts, setHomePageProducts] = useState(null)
    const [splashScreen, setSplashScreen] = useState(false)
    return (<SiteDataContext.Provider value={{hompageProducts, setHomePageProducts,
      splashScreen, setSplashScreen}}>
        {children}
    </SiteDataContext.Provider>)
}