import { useEffect, useState } from "react";
import { storeToken, removeToken, retrieveToken } from "../utility/tokenStore";

export default function useToken() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = retrieveToken();
    setAccessToken(token);

  }, []);

  const setToken = (token) => {
    if (token) {
      storeToken(token);
      setAccessToken(token);
    }
  };

  const hasToken = () => {
    if (retrieveToken()) {
      return true;
    }
    return false;
  };

  const clearToken = () => {
    removeToken();
    setAccessToken(null);
  };

  return {
    setToken,
    hasToken,
    clearToken,
    accessToken,
    isLoggedIn: accessToken ? true : false,
  };
}
