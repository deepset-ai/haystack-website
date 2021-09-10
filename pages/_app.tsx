import "../styles/global.css";
import "../styles/prism-theme.css";
import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />;
}
export default MyApp;