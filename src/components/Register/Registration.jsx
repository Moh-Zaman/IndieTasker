import "./Registration.css";

import { Form, Input, Button, Radio } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";

function Registration() {
    function regAuth(value) {
        const { username, password, confirm, email } = value;

        if (password === confirm) {
            axios.post("http://localhost:3001/register", { username, password, email }).then(() => {
                alert("Registered!");
            });
        } else {
            alert("Passwords don't match!");
        }
    }

    return (
        <div className="registration-form">
            <Form
                name="normal_register"
                className="registration-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={regAuth}>
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
                    name="confirm"
                    rules={[
                        {
                            required: true,
                            message: "Please repeat your password!",
                        },
                    ]}>
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Confirm Password" />
                </Form.Item>

                <p>I am a:</p>
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
