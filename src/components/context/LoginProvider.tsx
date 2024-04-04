import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import UserLogin from "../user/dto/UserLogin";
import LoginContextType from "../user/models/LoginContextType";


type LoginContextProps = {
  children?: React.ReactNode;
};

export const LoginContext = React.createContext<LoginContextType | null>(null);

const LoginProvider: React.FC<LoginContextProps> = ({ children }) => {
  const [user, setUser] = useState<UserLogin>({
    id: 0,
    email: "NOEMAIL",
    token: "NOTOKEN",
    firstName: "NOFIRSTNAME",
    lastName: "NOLASTNAME",
    userRole: "NOUSERROLE",
  });

  useEffect(() => {
    const authedUser = Cookies.get("authedUser");
    if (authedUser) {
      setUser(JSON.parse(authedUser) as UserLogin);
    }
  }, []);

  function setUserCookie(user: UserLogin) {
    Cookies.set("authedUser", JSON.stringify(user), { expires: 1 });
    setUser(user);
  }

  function logOut(){
    Cookies.remove("authedUser");
    setUserCookie({
      id: 0,
      email: "NOEMAIL",
      token: "NOTOKEN",
      firstName: "NOFIRSTNAME",
      lastName: "NOLASTNAME",
      userRole: "NOUSERROLE",
    });

  
  }

  return (
    <LoginContext.Provider value={{ user, setUserCookie,logOut }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
