import React from "react";
import RegisterForm from "./components/RegisterForm";
import { Col, Row } from "antd";

function Register(props) {
  return (
    <>
      <Row style={{ marginTop: "50px" }}>
        <Col span={20} style={{ margin: "auto" }}>
          <Row>
            <Col span={10} style={{ textAlign: "center" }}>
              <img
                style={{ width: "500px" }}
                src="https://images.careerbuilder.vn/content/images/Banner/image.png"
                alt="img"
              />
            </Col>
            <Col span={14}>
              <RegisterForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Register;
