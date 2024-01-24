import { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Importing the CSS file for styling

// Defining the Authentication component
function Auth() {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    });


    const onFinish = () => {

        // Sending a request to validate the password
        axios.post("http://localhost:3001/validatePassword", { username: userInfo.username, password: userInfo.password }).then((res) => {
            if (res.data.validation) {
                // Set cookie to username
                document.cookie = `user_key=${userInfo.username}`;
                navigate("/profile");
            } else {
                alert("Wrong username or password!");
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
                    onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}

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
                    onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}

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
                    <p className="spacing">
                        Don't have a login? <a href="/register">Register here!</a> {/* Change link to use "navigate" */}
                    </p>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Auth;

