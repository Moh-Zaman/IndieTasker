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


