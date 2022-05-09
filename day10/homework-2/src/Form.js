import React, { useState } from 'react';
import 'antd/dist/antd.css';
import moment from 'moment';
import './index.css';
import { Form, Input, Button, Checkbox, InputNumber, Select, DatePicker, Radio, Modal } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select; //Province
const { RangePicker } = DatePicker; //DatePicker

function disablePastDate(current){    //Date
  return current && current < moment().subtract(1,'day');
}

const FormComp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    console.log(`${values.date[0]._d} to ${values.date[1]._d}`);
    Modal.info ({
      content: (
        <pre>
          Firtsname: {values.fname} <br/>
          Lastname: {values.lname} <br/>
          Age: {values.age} <br/>
          Gender: {values.gender} <br/>
          Province: {values.province} <br/>
          Member Period: {values.date.map(x => <li><p>{x.toString()}</p></li>)} <br/>
          E-mail: {values.username} <br/>
          Password: {values.password} <br/>
          Personal Skills: {values.skill.map(y => <p>{y}</p>)} <br/>
          Accept: {values.remember.toString()} <br/>
        </pre>
      )
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const ageValidate = (rule,value) => {
    if(value < 18) {
      return Promise.reject(new Error("Under 18 years old"));
    } else if (value >= 60) {
      return Promise.reject(new Error("Over 60 years old"));
    } else {
      return Promise.resolve();
    }
  }

  // Button Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  
  return (
    <Form
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 12,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed} 
      autoComplete="off"
      size='middle'
    >
      {/* Name */}
      <Form.Item
        label="Firtsname"
        name="fname"
        rules={[
          {
             required: true,
             message: 'Please input your firstname!',
            
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* Lastname */}
      <Form.Item
        label="Lastname"
        name="lname"
        rules={[
          {
             required: true,
             message: 'Please input your lastname!',
            
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* Age */}
      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            validator: ageValidate
          }
        ]}
      >
        <InputNumber min={1} max={99} />
      </Form.Item>

      {/* Gender */}
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group >
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </Radio.Group>
      </Form.Item>

      {/* Province */}
      <Form.Item 
        label="Province"
        name= 'province'
        initialValue='Bangkok'
        rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
                style={{ width: 200 }}
                
        >
            <Option value="Bangkok">Bangkok</Option>
            <Option value="Nonthaburi">Nonthaburi</Option>
            <Option value="Pathumthani">Pathumthani</Option>
            <Option value="Khonkean">Khonkean</Option>
            <Option value="Krabi">Krabi</Option>
            <Option value="Chonburi">Chonburi</Option>
            <Option value="Abroad">Abroad</Option>
          </Select>
        </Form.Item>

        {/* Abroad condition */}
        <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.province !== currentValues.province}
      >
        {({ getFieldValue }) =>
          getFieldValue('province') === 'Abroad' ? (
            <Form.Item
              name="other"
              label="Other"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>

      {/* DatePicker */}
      <Form.Item
        label="Member Period"
        name= 'date'
        rules={[
            {
              required: true,
            },
          ]}
      >
        
          <RangePicker 
            
            disabledDate = {disablePastDate} 
          />
        
      </Form.Item>

      {/* Username */}
      <Form.Item
        label="E-mail"
        name="username"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* Password */}
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

    {/* Skills */}
    <Form.Item
      label = 'Personal Skills'
      wrapperCol={{
        offset: 0,
        span: 24,
      }}
    >
      <Form.List
        name="skill"
        rules={[
          {
            validator: async (_, skill) => {
              if (!skill || skill.length < 2) {
                return Promise.reject(new Error('At least 2 skills'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input personal skills or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input style={{ width: '60%' }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
                Add Your Personal Skills Here
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form.Item>

      {/* Remember  */}
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Accept All Terms and Conditions</Checkbox>
      </Form.Item>


      {/* Button Modal */}
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={showModal}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};



export default FormComp;