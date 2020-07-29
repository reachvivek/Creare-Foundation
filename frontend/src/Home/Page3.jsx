import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const Page3 = () => {
    const onFinish = values => {
      console.log(values);
    };

  return (
    <div className="home-page page3">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2><span>Contact Us</span></h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
          
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                    {
                    required: true,
                    },
                    ]}
                >
                <Input />
                </Form.Item>
                
                <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                {
                        type: 'email',
                         required: true,
                },
                ]}
                >
                 <Input />
                </Form.Item>
      
             <Form.Item name={['user', 'phone']} label="Phone">
                 <Input />
            </Form.Item>
        <Form.Item name={['user', 'message']} label="Message">
            <Input.TextArea />
        </Form.Item>
        <Form.Item id="submit-item" wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button id="submit-form" type="primary" htmlType="submit">
            Submit
        </Button>
      </Form.Item>
    </Form>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page3;
