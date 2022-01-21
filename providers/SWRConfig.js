import { SWRConfig } from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const json = await res.json();
    throw new Error(json.message);
  }

  return res.json();
};

const CustomSWRConfig = ({ children }) => {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
};

export default CustomSWRConfig;
