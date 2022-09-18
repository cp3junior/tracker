import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [isConnected, setISConnected] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("userconnected");

    if (!!token) {
      setISConnected(true);
    }
  }, []);

  const connect = () => {
    window.localStorage.setItem("userconnected", "connected");
    setISConnected(true);
  };

  const disconnect = () => {
    window.localStorage.setItem("userconnected", "");
    setISConnected(false);
  };

  const checkPasscode = (passcode) => {
    if (passcode === process.env.REACT_APP_PASSWORD) return true;
    return false;
  };

  return (
    <AuthContext.Provider
      value={{ isConnected, connect, disconnect, checkPasscode }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
