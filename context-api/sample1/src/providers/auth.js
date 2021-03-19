import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Vinicius Feitosa da Silva",
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);