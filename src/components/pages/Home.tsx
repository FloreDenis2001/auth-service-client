import React, { useContext } from "react";
import { LoginContext } from "../context/LoginProvider";
import LoginContextType from "../user/models/LoginContextType";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let { user, logOut } = useContext(LoginContext) as LoginContextType;
  let nav = useNavigate();
  function loginHandler(): void {
    nav("/login");
  }

  return (
    <div>
      <p>
        Te-ai logat {user.firstName} , email : {user.email}
      </p>

      {user.userRole!='NOUSERROLE' ? (
        <button className="button__second" onClick={logOut}>
          Log out
        </button>
      ) : (
        <button className="button__second" onClick={() => loginHandler()}>
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
