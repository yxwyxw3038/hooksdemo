import React, { useState } from "react";
import { Form, message, Card, Input, Button, Icon } from "antd";
import '../../App.css';
import '../../Css/Login.css';
import { ILoginFromProps } from "../../Type/Interface/InterfaceProps";
const FormItem = Form.Item;

  
function LoginFrom(props: ILoginFromProps) {
  
    const { getFieldDecorator } = props.form;
    const [loading] =  useState(props.loading)
    const handleSubmit = (e: any): void => {
            e.preventDefault();
            props.form.validateFields((err : any, values: any ) => {
              if (!err) {
                if(values)
                {
                    props.onHandleSubmit(values)
                }
                else{
                  message.error('登录异常！');
                }
        
               
              }
            });
          }

    return ( <div>
                <Card id="loginCard">
                <Form onSubmit={handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                    <Input  className="logininput" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                    })(
                    <Input className="logininput" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                <Button type="primary" htmlType="submit" className="login_button" loading={loading}>
                    登  录
                </Button>
                </FormItem>
                </Form>
                </Card>
            </div>
        )
}
export default  Form.create<ILoginFromProps>()(LoginFrom); 