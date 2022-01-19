import { SWRConfig } from "swr";
import "../styles/globals.css";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const json = await res.json();
    throw new Error(json.message);
  }

  return res.json();
};

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
