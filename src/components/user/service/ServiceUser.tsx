import React from "react";
import ApiServer from "../../utils/ApiServer";
import LoginRequest from "../dto/LoginRequest";
import UserLogin from "../dto/UserLogin";
import RegisterRequest from "../dto/RegisterRequest";


class ServiceUser extends ApiServer {
  login = async (user: LoginRequest): Promise<UserLogin> => {
    const data = await this.api<LoginRequest, UserLogin>(
      `/login`,
      "POST",
      user,
      ""
    );
    if (data.status === 200) {
      const user = await data.json();
      return user;
    } else {
      return Promise.reject([]);
    }
  };

  register = async (user: RegisterRequest): Promise<UserLogin> => {
    const data = await this.api<RegisterRequest, UserLogin>(
      `/register`,
      "POST",
      user,
      ""
    );
    if (data.status === 200) {
      const user = await data.json();
      return user;
    } else {
      return Promise.reject([]);
    }
  };
}

export default ServiceUser;
