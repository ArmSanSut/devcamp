import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import moment from 'moment';
import { UploadOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  Space,
  InputNumber,
  Switch,
  Checkbox,
  Upload, 
  message,
  Rate, 
} from 'antd';

// function onChange(value) {
//     console.log('age is: ', value);
//   }

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

function RadioChange () {
    const [value, setValue] = React.useState(1);
  
    const RadioOnChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  
    return (
      <Radio.Group onChange={RadioOnChange} value={value}>
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
      </Radio.Group>
    );
  };

function disablePastDate(current){
    return current && current < moment().endOf('day');
}

function CheckonChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

const { Option } = Select;
const { RangePicker } = DatePicker;
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const key = 'updatable';
const SubmitButton = () => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: 'Your Form has been Submitted!', key, duration: 2 });
  }, 500);
};

const FormFunc = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const customValidate = (rule,value) => { 
    console.log(value)
    if(value < 18) {
      return Promise.reject(new Error("You are under 18"));
    } else if (value >= 60) {
      return Promise.reject(new Error("You are over 60"));
    } else {
      return Promise.resolve();
    }
  }

  // const formItemLayoutWithOutLabel = {
  //   wrapperCol: {
  //     xs: { span: 24, offset: 0 },
  //     sm: { span: 20, offset: 4 },
  //   },
  // };
  
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
      // username: "Insert your name"
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed} 
    autoComplete="off"
    size='middle'
    >
      
      <Form.Item 
        label="Name-Surname"
        name='name'
        rules={[
            {
              required: true,
            },
            {
              max:50
            }
          ]}
        >
        <Input />
      </Form.Item>
           
      <Form.Item 
        name="age"
        label="Age"
        rules={[
          {
            type: "number",
            min: 0,
            max: 99,
            validator: customValidate,
          }
        ]}
      >
        <InputNumber/>;
      </Form.Item>
      <Form.Item 
        label="Gender"
        name = 'gender'
        rules={[
            {
              required: true,
            },
          ]}
        >
        <RadioChange />
      </Form.Item>
      <Form.Item 
        label="Province"
        name= 'province'
        rules={[
            {
              required: true,
            },
          ]}
        >
            <Select
                showSearch
                style={{ width: 200 }}
                defaultValue='Bangkok'
        >
            <Option value="1">Bangkok</Option>
            <Option value="2">Nonthaburi</Option>
            <Option value="3">Pathumthani</Option>
            <Option value="4">Khonkean</Option>
            <Option value="5">Krabi</Option>
            <Option value="6">Chonburi</Option>
            <Option value="7">Abroad</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.province !== currentValues.province}
      >
        {({ getFieldValue }) =>
          getFieldValue('province') === '7' ? (
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

      <Form.Item>
        <Form.List
        name="skills"
        rules={[
          {
            validator: async (_, skills) => {
              if (!skills || skills.length < 2) {
                return Promise.reject(new Error('At least 2 Skills'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Skills' : ''}
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
                      message: "Please add your personal skills.",
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
            <Form.Item
              label = 'Personal Skills'
              rules={[
                {
                  required: true,
                }
              ]}
            >
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '80%' }}
                icon={<PlusOutlined />}
              >
                Add Skills
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
        </Form.List>
      </Form.Item>

      <Form.Item 
        label="Member Period"
        name= 'date'
        rules={[
            {
              required: true,
            },
          ]}
        >
        <Space direction="vertical" size={12}>
            <RangePicker 
                format= 'MMM Do YY'
                disabledDate = {disablePastDate}  
            />
        </Space>
      </Form.Item>
      <Form.Item 
        label="Accept Term"
        name= 'accept'
        rules={[
            {
              required: true,
            },
          ]}
        >
        <Checkbox 
            onChange={CheckonChange}
            checked = "true"
        >
            Accept All Terms and Conditions
        </Checkbox>
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item 
        label ='Rate Satisfaction'
        name= 'rate'
      >
        <Rate 
          defaultValue = '3'
        />
      </Form.Item>
      <Form.Item
        label='Upload File Here'
        name='upload'
        rules= {[
          {required: true}
        ]}
      >
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>
            Click Here to Upload File
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item htmlType="submit">
        <Button 
          type="primary"
          onClick={SubmitButton}
        >
          Submit Form
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormFunc;