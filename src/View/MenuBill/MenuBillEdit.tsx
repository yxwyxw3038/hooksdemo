import React, { useState, useContext } from "react";
import api from '../../Api/myaxios';
import '../../App.css';
import '../../Css/Bill.css';
import  * as uuid from 'uuid'
import { Form, message, Row, Col, Input, Cascader, InputNumber, Modal, Button } from "antd";
import { IMenuBillEditProps } from "../../Type/Interface/InterfaceProps";
import { MyContext } from "../../Store/HookStore";
const FormItem = Form.Item;
function MenuBillEdit (props: any) {
    const {user_info} = useContext(MyContext);
    const [menuCascader]=useState(props.menuCascader)
    const [dialogEditOrNew]=useState(props.dialogEditOrNew)
    const [dialogEditTitle]=useState(props.dialogEditTitle)
    const [EditForm]=useState(props.editForm)
    const [dialogEditVisible]=useState(props.dialogEditVisible)
    const renderNewOrEdit=(IsDisabled:boolean)=> {
      
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              // tslint:disable-next-line:object-literal-sort-keys
              sm: { span: 4 },
            },
            wrapperCol: {
              xs: { span: 24 },
              // tslint:disable-next-line:object-literal-sort-keys
              sm: { span: 20 },
            },}
       

        const { getFieldDecorator } = props.form;
        return(
 
            <Form>
            <Row>
                <Col span={24}>
            <FormItem {...formItemLayout} label="菜单名称">
            {getFieldDecorator('Name', {
                rules: [{ required: true, message: '请输入菜单名称!' }],
            })(
                <Input  placeholder="菜单名称" disabled={IsDisabled} />
            )}
            </FormItem>
            </Col>
            </Row>
            <Row>
                <Col span={24}>
            <FormItem {...formItemLayout} label="父节点">
            {getFieldDecorator('ParentId', {
            rules: [{ type: 'array', required: true, message: '请选择父节点!' }],
            })(
                <Cascader options={ menuCascader} changeOnSelect ={true} disabled={IsDisabled}/>
            )}
            </FormItem>
            </Col>
            </Row>
            <Row>
                <Col span={24}>
            <FormItem {...formItemLayout} label="标识码">
            {getFieldDecorator('Code', {
                rules: [{ required: true, message: '请输入标识码!' }],
            })(
                <Input  placeholder="标识码" disabled={IsDisabled}/>
            )}
            </FormItem>
            </Col>
            </Row>
            <Row>
            <Col span={24}>
            <FormItem {...formItemLayout} label="链接地址">
            {getFieldDecorator('LinkAddress', {
                rules: [{ required: true, message: '请输入链接地址!' }],
            })(
                <Input  placeholder="链接地址" disabled={IsDisabled} />
            )}
            </FormItem>
            </Col>
            </Row>
            <Row>
            <Col span={24}>
            <FormItem {...formItemLayout} label="图标">
            {getFieldDecorator('Icon', {
                rules: [{ required: true, message: '请输入图标!' }],
            })(
                <Input  placeholder="图标" disabled={IsDisabled} />
            )}
            </FormItem>
            </Col>
            </Row>
            <Row>
            <Col span={24}>
            <FormItem {...formItemLayout} label="排序">
            {getFieldDecorator('Sort', {
                rules: [{ required: true, message: '请选择排序!' }],
            })(
                <InputNumber min={1} max={100}  disabled={IsDisabled}/>
            )}
            </FormItem>
            </Col>
            </Row>
        </Form>

            )
    }
  
    const handleOk = (e:any) => {
        e.preventDefault();
        props.form.validateFields((err : any, values: any ) => {
          if (!err) {
            // tslint:disable-next-line:no-console
            if(values)
            {


               submitInfo(values);

               
            }
            else{
              message.error('提交异常！');
            }
    
          }
        });
      }
    
      const handleCancel = (e:any) => {
        e.preventDefault();
        props.eventCallback(false);
      }
      const  submitInfo=(values: any )=> {

      if(dialogEditOrNew===1||dialogEditOrNew===2) {
        const  editForm={...EditForm, ...values,ParentId:values.ParentId[values.ParentId.length-1]}
        let optUrl="Menu/AddMenu";
        if(dialogEditOrNew===1){
            editForm.ID=uuid.v4()
            editForm.CreateBy=user_info.Data.GetInfo.AccountName;
            editForm.UpdateBy=user_info.Data.GetInfo.AccountName;
         
        }
        else{
            optUrl="Menu/UpdateMenu";
            editForm.UpdateBy=user_info.Data.GetInfo.AccountName;
        }
        const Jsonstr= JSON.stringify(editForm);
        const myapi =  new api();
        myapi.post(optUrl+"?Token="+user_info.Data.GetInfo.Token,{
         str:Jsonstr
         }, (response: any) => {
       
                if (response.status >= 200 && response.status < 300) {
                        if (response.data) {       
                            // tslint:disable-next-line:no-eval
                            const jsonData = response.data ;
                            if (jsonData.Code === '1') {
                                message.info("保存成功！");
                                props.eventCallback(true);
                            } else {
                            message.error(jsonData.Message);
                            return;
                            }
                        }
                } else {
                    message.error(response.message);
                    return;
                }
            
            });
      }
      else
      {
        message.info("非新增修改操作禁止保存！");
        return;
      }

      }
   
   
  

   
    return ( <Modal
        title={dialogEditTitle}
        visible={dialogEditVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={
            [
            <Button key="back" onClick={handleCancel}>关闭</Button>,
            (dialogEditOrNew===1||dialogEditOrNew===2)?<Button key="submit" type="primary"  onClick={handleOk}>确定 </Button>:null,
          ]}

    >
     {(dialogEditOrNew===1||dialogEditOrNew===2)? renderNewOrEdit(false):renderNewOrEdit(true)}
    </Modal>)
}
const GetSelectParentId=(list:any,ParentId:string):string=>{

    // tslint:disable-next-line:prefer-for-of
    for(let i=0;i<list.length;i++) {
        if(list[i].value===ParentId) {
            return list[i].value;
        }
        if(list[i].children) {
        if(list[i].children.length>0) {
            const returnStr=GetSelectParentId(list[i].children,ParentId);
            if( returnStr==="-1") {
            // tslint:disable-next-line:no-empty

            }
            else {
            return  list[i].value+','+returnStr;
            }
        }
        }
    }
    return "-1";
}
const mapPropsToFields = (props:any) => {

  
    const {editForm,menuCascader} =props;
    const returnObj={...editForm};
    // tslint:disable-next-line:no-console
    const ParentId=GetSelectParentId(menuCascader,editForm.ParentId);
    for(const x in  editForm)
    {
        if(x==="ParentId")
        {
            returnObj[x]=Form.createFormField({value:ParentId.split(',')});
        }
        else{
        returnObj[x]=Form.createFormField({value:editForm[x]});
        }
    }
    return returnObj;
  
}  
export default Form.create<IMenuBillEditProps>({mapPropsToFields})(MenuBillEdit);