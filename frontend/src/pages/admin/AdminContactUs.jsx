import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { TOKEN } from "./adminToken";
import { useEffect } from "react";
export default function AdminContactUs() {
  const [contactState, setContactState] = useState({
    address: "string",
    phone: "phone",
    email: "email@gmail.com",
    facebook: "url",
    instagram: "url",
    tiktok: "url",
    youtube: "url",
  });
  const callContactData = async () => {
    try {
      const result = await axios({
        url: "",
        method: "get",
        headers: "Bears" + TOKEN,
      });
      console.log(result);
      if (result.status === 200) {
        setContactState(result.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    callContactData();
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
    alert("Thông tin được update");
    setContactState(values);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
    alert("vui lòng kiểm tra lại thông tin ");
  };
  const renderInput = () => {
    let inputArray = [];
    for (let [key, datavalue] of Object.entries(contactState)) {
      inputArray.push(
        <Form.Item
          key={key}
          label={key}
          name={key}
          initialValue={datavalue}
          rules={[
            {
              required: false,
              message: `mời nhập ${key}`,
              type: key === "email" ? key : "string",
            },
          ]}
        >
          <Input />
        </Form.Item>
      );
    }
    return inputArray;
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 2,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {renderInput()}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          style={{
            color: "",
          }}
          htmlType="submit"
        >
          Update
        </Button>
      </Form.Item>
    </Form>
  );
}
