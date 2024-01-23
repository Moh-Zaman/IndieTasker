import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";  // Importing the CSS file for styling

// Defining the Authentication component
export default function Auth() {
    let loginSuccessful;

    const navigate = useNavigate();

    const onFinish = (value) => {
        const { username, password } = value;

        // Sending a request to validate the password
        axios.post("http://localhost:3001/validatePassword", { username, password }).then((res) => {
            if (res.data.validation) {
                navigate("/profile");
            } else {
                alert("Password bad!");
            }
        });
    };

    return (
        <div className="login-form">
            {/* Title for the Login form */}
            <h2 className="login-title">Login</h2>

            {/* Form component */}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}>
                {/* Form input for username */}
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
                        },
                    ]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>

                {/* Form input for password */}
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}>
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>

                {/* Remember me, checkbox and Forgot password link */}
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                {/* Form submission button and Register link */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <p className="spacing">Don't have a login? <a href="/register">Register here!</a></p>
                </Form.Item>
            </Form>
        </div>
    );
}
