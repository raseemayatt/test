import React from "react";
import { Modal, Button, Form, Input } from "antd";

const EditWebsite = (props) => {

    const formFields = [
        { name: "website", placeHolder: "Website Name" },
       
        
      ];

      const onFinish = (values) => {
         
          props.setSuccess(values.website)
      }
    return (
      
          <Modal
            
            visible={props.visible}
            onOk={() =>  props.setCancel(false)}
            onCancel={() => {
                props.setCancel(false)
            }}
            width={500}
            footer={null}
          >
              
             <div className="contact-modal-form">
        
        <Form
          name="normal_login"
          style={{marginTop:"30px"}}
          initialValues={{
            website: props.website,
          }}
          onFinish={onFinish}
        >
          {formFields.map((data) => {
            return (
              <Form.Item
                hasFeedback
                name={data.name}
                rules={[
                  {
                    type: data.ruleType ? data.ruleType : null,
                    message: data.message ? data.message : null,
                  },
                  {
                    required: data.referalId ? false : true,
                    message: "Ths field is required !",
                  },
                  {
                    validator: data.validator ? data.validator : "",
                  },
                ]}
              >
                
                  <Input
                    ref={data.ref ? data.ref : null}
                    type={data.type ? data.type : null}
                    placeholder={data.placeHolder}
                  />
                
              </Form.Item>
            );
          })}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              
            >
              Update Website
            </Button>
            <br />
            
          </Form.Item>
        </Form>
        
       
      </div>
          </Modal>
        
      );
}
export default EditWebsite;