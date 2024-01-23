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
        confirm: "",
        email: "",
        accType: "",
    });

    // Function to handle registration authentication
    function regAuth() {
        if (userInfo.accType === "") {
            alert("Please tell us what you are!");
            return;
        }
        // Checking if passwords match and making a registration request
        if (userInfo.password === userInfo.confirm) {
            axios.post("http://localhost:3001/register", { username: userInfo.username, password: userInfo.password, email: userInfo.email, accType: userInfo.accType }).then(() => {
                alert("Registered!");
            });
        } else {
            alert("Passwords don't match!");
            return;
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
                    onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
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
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
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
                    onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
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
                    onChange={(e) => setUserInfo({ ...userInfo, confirm: e.target.value })}
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
                    <Radio value="client" onChange={(e) => setUserInfo({ ...userInfo, accType: e.target.value })}>
                        Client
                    </Radio>
                    <Radio value="freelancer" onChange={(e) => setUserInfo({ ...userInfo, accType: e.target.value })}>
                        Freelancer
                    </Radio>
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
