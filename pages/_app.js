import CustomSWRConfig from "../providers/SWRConfig";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CustomSWRConfig>
      <Component {...pageProps} />
    </CustomSWRConfig>
  );
}

export default MyApp;
