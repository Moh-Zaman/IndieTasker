import "./Registration.css";

import { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";

// Registration component definition
function Registration() {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        email: "",
        accType: "",
    });

    // Function to handle registration authentication
    function regAuth(value) {
        const { username, password, confirm, email, accType } = value;

        // Checking if passwords match and making a registration request
        if (password === confirm) {
            axios.post("http://localhost:3001/register", { username, password, email, accType }).then(() => {
                alert("Registered!");
            });
        } else {
            alert("Passwords don't match!");
        }
    }

    return (
        <div className="registration-form">
            {/* Title for the registration form */}
            <h2 className="registration-title">Register</h2>

            {/* Form component */}
            <Form
                name="normal_register"
                className="registration-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={regAuth}>
                {/* Form input for username */}
                <Form.Item
                    name={userInfo.username}
                    rules={[
                        {
                            required: true,
                            message: "Please enter your desired username.",
                        },
                    ]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>

                {/* Form input for email */}
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your email address.",
                        },
                    ]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} type="email" placeholder="Email Address" />
                </Form.Item>

                {/* Form input for password */}
                <Form.Item
                    name={userInfo.password}
                    rules={[
                        {
                            required: true,
                            message: "Please enter your desired password.",
                        },
                    ]}>
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>

                {/* Form input for confirming password */}
                <Form.Item
                    name="confirm"
                    rules={[
                        {
                            required: true,
                            message: "Please repeat your password!",
                        },
                    ]}>
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Confirm Password" />
                </Form.Item>

                {/* Section indicating user type */}
                <div className="login-redirect">I am a:</div>

                {/* Radio buttons for selecting user type */}
                <Radio.Group
                    rules={[
                        {
                            required: true,
                            message: "Please tell us what you are!",
                        },
                    ]}>
                    <Radio value="client">Client</Radio>
                    <Radio value="freelancer">Freelancer</Radio>
                </Radio.Group>

                {/* Form submission button */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
                    </Button>

                    {/* Link to login page */}
                    <p className="spacing">
                        Already registered? <a href="/login">Login here!</a>
                    </p>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Registration;
