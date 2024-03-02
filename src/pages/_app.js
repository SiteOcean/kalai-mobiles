import { SiteDataProvider } from "@/store/storeProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <SiteDataProvider><Component {...pageProps} /></SiteDataProvider>;
}
