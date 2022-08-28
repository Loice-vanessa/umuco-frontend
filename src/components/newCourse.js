import React, { useState } from "react";
import "antd/dist/antd.css";
import courcesService from "../services/coursesServices"
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Switch,
  Upload,
} from "antd";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const subjects = [
  { topic: "let's speak kinyarwanda", levels: ["Begginer", "intermadiate", "advanced"] },
  { topic: "Eastern", levels: ["Begginer", "intermadiate", "advanced"] },
  {
    topic: "let's write kinyarwanda",
    levels: ["Begginer", "intermadiate", "advanced"],
  },
  { topic: "let's read kinyarwanda", levels: ["Begginer", "intermadiate", "advanced"] },
  {
    topic: "let's dance kinyarwanda",
    levels: ["Begginer", "intermadiate", "advanced"],
  },
];
const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const NewCourses = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onFinish = async(values) => {
    const courseObj = {
      ...values,
      pictures: [values.picture],
      subjects: [subjects[values.topic].topic, values.levels],
    };
    console.log("Received values of form: ", values);

    console.log("course: ", courseObj);

    const res =  await courcesService.createCourse(courseObj);

    console.group("<<<<<<<<:",res)
  };

  return (
    <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: true,
            message: "Please input your course Title",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input />
      </Form.Item>

      <Form.Item name="seats" label="Seats">
        <Input />
      </Form.Item>

      <Form.Item name="price" label="Price">
        <Input />
      </Form.Item>

      <Form.Item
        name="topic"
        label="subjects: topic"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select your country!",
          },
        ]}
      >
        <Select
          placeholder="Please select a topic"
          onChange={(e) => {
            setSelectedIndex(e);
          }}
        >
          {subjects.map((pro, index) => (
            <Option value={index}>{pro.topic}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="levels"
        label="subjects: levels"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select your levels",
          },
        ]}
      >
        <Select placeholder="Please select a topic">
          {subjects[selectedIndex].levels.map((pro) => (
            <Option value={pro}>{pro}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="picture" label="Picture">
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewCourses;