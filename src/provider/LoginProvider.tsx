import { createContext, useContext, useEffect, useState } from "react";
import { Profile } from "../screens/Login/components/LoginInput";
import { retrieveData } from "../utils/storage";

type Props = {
  isAuthenticated: boolean;
  user: Profile | undefined;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginContext = createContext<Props>({} as Props);

export function useLoginContext() {
  return useContext(LoginContext);
}

export function LoginProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, updateUser] = useState<Profile>();

  useEffect(() => {
    retrieveData<Profile>("profile").then((res) => {
      updateUser(res!);
    });
  }, [isAuthenticated]);

  return (
    <LoginContext.Provider
      value={{ isAuthenticated, user, setIsAuthenticated }}
    >
      {children}
    </LoginContext.Provider>
  );
}
