import React from "react";
import "./signup.css";
import { Form, Input, notification } from "antd";

import Headers from "./Headers";
import AllFooter from "./AllFooter";
import { createUser } from "../services/UserService";
import BreadCrumbs from "../components/BreadCrumbs";
const SignUp = () => {
  const onFinish = async (values) => {
    let user = {
      fullname: values.FULLNAME,
      email: values.EMAIL,
      password: values.password,
      phone: values.PHONENUMBER,
    };
    console.log(user);
    const res = await createUser(user);
    if (res.data) {
      notification.success({
        title: "Create User",
        message: "User Added Succesully",
      });
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
      <BreadCrumbs />

      <div className="signup-container">
        <h1>Create Account</h1>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="inputs-groupe">
            <div className="form-inputs">
              <label className="form-label" for="form3Example1cg">
                FULL NAME
              </label>
              <Form.Item
                name="FULLNAME"
                rules={[
                  {
                    required: true,
                    message: "Please input your FULL NAME!",
                  },
                  {
                    pattern: /^[a-zA-Z]+ [a-zA-Z]+$/,
                    message: "Please input your FULL NAME!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-inputs">
              <label className="form-label" for="form3Example1cg">
                PHONE NUMBER
              </label>
              <Form.Item
                name="PHONENUMBER"
                rules={[
                  {
                    required: true,
                    message: "Please input your PHONE NUMBER!",
                  },
                  {
                    pattern: /^[-\s\.]?[0-9]{8}$/,

                    message: "Invalid Phone Number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="form-inputs">
              <label className="form-label" for="form3Example1cg">
                EMAIL *
              </label>
              <Form.Item
                name="EMAIL"
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
            <span class="btn__text">Create</span>
          </button>
        </Form>
        <div className="d-flex flex-column mt-4">
          <div className="d-flex gap-2">
            <a href="/sign-in">
            <i className="fa fa-sign-in px-2"></i>
              Log In
            </a>
          </div>
          <div className="d-flex gap-2">
            <a href="/">
              <i className="fa fa-shopping-cart px-2"></i>
              Return to Store
            </a>
          </div>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default SignUp;
