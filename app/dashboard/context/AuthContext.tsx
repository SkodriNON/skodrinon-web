"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type AuthContextType = {
  authenticated: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext =
  createContext<
    AuthContextType
  >({
    authenticated: false,
    login: () => {},
    logout: () => {},
  });

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [
    authenticated,
    setAuthenticated,
  ] = useState(false);

  function login() {
    setAuthenticated(true);
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(
    AuthContext
  );
}