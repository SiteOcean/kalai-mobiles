import React, { createContext, useContext, useState } from 'react';

const SiteDataContext = createContext();

export function useSiteDataContext() {
  return useContext(SiteDataContext);
}

export function SiteDataProvider({ children }) {

    const [hompageProducts, setHomePageProducts] = useState(null)
    const [splashScreen, setSplashScreen] = useState(false)

    const [offerItems, setOfferItems] = useState(null)

    return (<SiteDataContext.Provider value={{hompageProducts, setHomePageProducts,
      splashScreen, setSplashScreen, offerItems, setOfferItems}}>
        {children}
    </SiteDataContext.Provider>)
}