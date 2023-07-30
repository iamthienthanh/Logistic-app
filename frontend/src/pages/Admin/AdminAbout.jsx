import { Button, Checkbox, Form, Input, Upload } from "antd";
import { MainContext } from "../../context/MainContext";
import { UploadOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { TOKEN } from "./adminToken";
import { useEffect } from "react";
import { useRef } from "react";
export default function AdminAbout() {
  const {accessToken} = useContext(MainContext);

  const [aboutState, setAboutState] = useState({
    description: "string",
    vision: "string",
    values: "string",
    logo: "https://cdn.tgdd.vn/Files/2020/12/11/1312984/huong-dan-tra-cuu-van-don-j-t-express-nhanh-nhat-c-4-652x367.jpg",
    banners: [
      "https://icdn.dantri.com.vn/thumb_w/640/2020/05/08/j-chuandocx-1588932311071.jpeg",
      "https://cdn.tgdd.vn/Files/2020/12/11/1312984/huong-dan-tra-cuu-van-don-j-t-express-nhanh-nhat-c-4-652x367.jpg",
    ],
  });
  const callAboutData = async () => {
    try {
      const result = await axios({
        url: "https://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=460863ced2e6b5f80cdca7445aec9faf&units=metric",
        method: "get",
        headers: { authorization: `Bearer ${accessToken}` },
      });
      console.log(result);
      if (result.status === 200) {
        setAboutState(result.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    // console.log("Upload event:", e?.fileList);

    return e?.fileList;
  };

  useEffect(() => {
    callAboutData();
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
    alert("Thông tin được update");

    setAboutState(() => {
      let tempLogo;
      let tempBanner;
      if (values.logo) {
        aboutState.logo = values.logo;
      }
      if (values.banners) {
        aboutState.banners = values.banners;
      }
      return { ...aboutState, description: values.description, vision: values.vision, values: values.values };
    });
    console.log(aboutState);
  };
  const createFileList = (key, datavalue) => {
    let fileList = [];
    if (key === "logo") {
      fileList.push({
        uid: "logo",
        name: "logo.png",
        status: "done",
        url: datavalue,
        thumbUrl: datavalue,
      });
    } else {
      datavalue?.map((dataURL, index) => {
        return fileList.push({
          uid: `banner${index}`,
          name: `banner${index}`,
          status: "done",
          url: dataURL,
          thumbUrl: dataURL,
        });
      });
    }
    return fileList;
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
    alert("vui lòng kiểm tra lại thông tin ");
  };

  const renderInput = () => {
    let inputArray = [];
    for (let [key, datavalue] of Object.entries(aboutState)) {
      if (key === "banners" || key === "logo") {
        let fileList = createFileList(key, datavalue);
        inputArray.push(
          <Form.Item name={key} label={key} valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload
              key={key}
              name={key}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              maxCount={key === "logo" ? 1 : ""}
              listType="picture"
              defaultFileList={[...fileList]}
            >
              <Button icon={<UploadOutlined />}>Click to Upload {key}</Button>
            </Upload>
          </Form.Item>
        );
      } else {
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
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
        );
      }
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
        span: 20,
      }}
      // initialValues={{
      //   remember: true,
      // }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {renderInput()}

      <Form.Item
        wrapperCol={{
          offset: 10,
          // span: 20,
        }}
      >
        <Button
          type="primary"
          style={{
            color: "",
          }}
          htmlType="submit"
        >
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
}
