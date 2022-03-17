import React from "react";
import { Row, Col, Form, Button, Input, Typography, Select } from "antd";
import axios from "axios";

const { Item } = Form;
const { Title } = Typography;
const { Option } = Select;

const sizeComp = [
  "Less 10",
  "10-20",
  "25-99",
  "100-499",
  "500-499",
  "1000-4999",
];

const cityList = [
  "Ha Noi",
  "Da Nang",
  "Ho Chi Minh",
  "Phan Thiet",
  "Ba Ria - Vung Tau",
];

const layout = {
  layout: "horizontal",
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
  size: "large",
};

const initialData = {
  email: "",
  password: "",
  cf_password: "",
  company_name: "",
  size: "Less 10",
  city: "Da Nang",
  address: "",
  summary: "",
};

function RegisterForm(props) {
  const register = (values) => {
    axios
      .post("http://localhost:5000/api/company-register", { ...values })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Row>
      <Col span={24}>
        <Title style={{ textAlign: "center" }} level={2}>
          EMPLOYER REGISTRATION
        </Title>
        <Form
          initialValues={initialData}
          onFinish={(values) => register(values)}
          {...layout}
        >
          <Item
            label="Email"
            name={"email"}
            rules={[{ required: true }, { type: "email" }]}
            hasFeedback
          >
            <Input />
          </Item>
          <Item
            label="Password"
            name={"password"}
            rules={[{ required: true }, { min: 6 }]}
            hasFeedback
          >
            <Input type={"password"} />
          </Item>
          <Item
            label="Confirm password"
            name={"cf_password"}
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input />
          </Item>
          <Item
            label="Company name"
            name={"company_name"}
            rules={[{ required: true }]}
            hasFeedback
          >
            <Input />
          </Item>
          <Item label="Size" name={"size"}>
            <Select>
              {sizeComp.map((element, index) => (
                <Option value={element} key={index}>
                  {element}
                </Option>
              ))}
            </Select>
          </Item>
          <Item label="City" name={"city"}>
            <Select>
              {cityList.map((element, index) => (
                <Option value={element} key={index}>
                  {element}
                </Option>
              ))}
            </Select>
          </Item>
          <Item
            label="Company address"
            hasFeedback
            name={"address"}
            rules={[{ required: true }]}
          >
            <Input />
          </Item>
          <Item
            label="Company summary"
            hasFeedback
            name={"summary"}
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Item>
          <Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 },
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>
      </Col>
    </Row>
  );
}

export default RegisterForm;
