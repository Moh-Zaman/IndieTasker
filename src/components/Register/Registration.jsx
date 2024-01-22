import "./Registration.css";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";

function Registration() {
    function authReg() {
        console.log("Worked");
    }

    return (
        <div>
            <Form
                name="normal_register"
                className="registration-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={authReg}>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your desired username.",
                        },
                    ]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
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
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please entere your desired password.",
                        },
                    ]}>
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item
                    name="confirm_password"
                    rules={[
                        {
                            required: true,
                            message: "Please repeat your password!",
                        },
                    ]}>
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Confirm Password" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
                    </Button>
                    <br />
                    Already registered? <a href="/login">login here!</a>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Registration;
