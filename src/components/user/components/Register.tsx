import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../models/LoginContextType";
import RegisterRequest from "../dto/RegisterRequest";
import ServiceUser from "../service/ServiceUser";

const Register = () => {
  const { user, setUserCookie } = useContext(LoginContext) as LoginContextType;
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");

  let userService = new ServiceUser();

  let navigate = useNavigate();

  let sing = async () => {
    let data = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      active,
    } as RegisterRequest;
    let rez = await userService.register(data);
    setUserCookie(rez);
    navigate("/");
  };

  let goLogin = (): void => {
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__container__form">
          <div className="register__container__form__box">
            <label htmlFor="chk" aria-hidden="true">
              First Name
            </label>
            <input
              type="text"
              name="txt"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>

          <div className="register__container__form__box">
            <label htmlFor="chk" aria-hidden="true">
              Last Name
            </label>

            <input
              type="text"
              name="txt"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <div className="register__container__form__box">
            <label htmlFor="chk" aria-hidden="true">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="register__container__form__box">
            <label htmlFor="chk" aria-hidden="true">
              Password
            </label>
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="register__container__form__box">
            <label htmlFor="chk" aria-hidden="true">
              Phone Number
            </label>

            <input
              type="text"
              name="txt"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>

          <div className="register__container__form__boxButton">
            <button className="button__first" onClick={()=>sing()}>Sign up</button>
            <button className="button__second" onClick={()=>goLogin()}>Login</button>
          </div>
          <div/>
        </div>
      </div>
    </div>
  );
};

export default Register;
