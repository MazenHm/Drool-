import React from "react";
import Headers from "./Headers";
import { Form, Input, notification } from "antd";
import AllFooter from "./AllFooter";
import "../styles/signIn.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/authContext";
import {
  authenticate,
  getConnectedUser,
  storeToken,
} from "../services/UserService";
const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const onFinish = async (values) => {
    let user = {
      email: values.email,
      password: values.password,
    };
    const res = await authenticate(user);
    let path = location.state?.redirect || "/";
    if (res.data) {
      console.log(res.data);
      let response = await getConnectedUser(res.data.token);
      if (response.data) {
        console.log(response.data);
        auth.setUser(response.data);
      }
      storeToken(res.data.token);
      navigate(path);
    } else if (res.err) {
      console.log(res.err);
      notification.error({
        title: "Create User",
        message: res.err.response.data.message,
      });
    }

    console.log(res);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Headers />
      <div className="signup-container">
        <h1>Login</h1>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="inputs-groupe">
            <div className="form-inputs">
              <label className="form-label" for="form3Example1cg">
                EMAIL *
              </label>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your EMAIL!",
                  },
                  {
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please input your EMAIL!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-inputs">
              <label className="form-label" for="form3Example1cg">
                PASSWORD *
              </label>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                  {
                    min: 8,
                    message: "Minimum 8 Characters!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </div>
          </div>
          <button type="submit" class="bt-primary ">
            <span class="btn__text">Sign In</span>
          </button>
        </Form>
        <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
          <a href="/sign-up">
            <i className="fa fa-user-plus px-2"></i>
            <span>Create Account</span>
          </a>
          <a href="/">
            <i className="fa fa-shopping-cart px-2"></i>
            <span>Return To Store</span>
          </a>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default SignIn;
