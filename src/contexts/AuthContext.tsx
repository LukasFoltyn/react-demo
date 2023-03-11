import React, { useContext } from "react";

export type AuthContextType = {
  name: string;
};

const AuthContext = React.createContext<AuthContextType>({ name: "" });

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {




  
  const [name, setName] = React.useState("HAHAHA");

  return (
    <AuthContext.Provider value={{ name }}>{children}</AuthContext.Provider>
  );
};


export default useAuth;
