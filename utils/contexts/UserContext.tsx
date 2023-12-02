"use client";
import { createContext, useContext } from "react";
import { ContextProvider } from "@/utils/contextProvider";
import { User } from "@supabase/supabase-js";

type UserContext = User;

const UserContext = createContext<UserContext | undefined>(undefined);

export const UserContextProvider: ContextProvider<UserContext> = ({
  children,
  context,
}) => {
  return (
    <UserContext.Provider value={{ ...context }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
