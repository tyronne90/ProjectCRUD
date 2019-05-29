import React, { Component } from 'react'
import{Button,Modal,Col,Form,Input,Row, Select} from 'antd'
import View from './View'

export default class Companyadmin extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <br></br>
                <h1>COMPANY ADMINISTRATION</h1>
                <br></br>
                <Button type="primary" onClick={this.showModal}>
                    Add Employee
                </Button>

                 <View/>
                <Modal
                    title="Add Employee Info"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                     <Form>
                    <Row>
                        <Col span={11}>
                            <Form.Item label="Employee ID :">
                                <Input
                                    type="text"
                                    placeholder="Employee ID"
                                    name="employee_id"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={2} />
                        <Col span={11}>
                            <Form.Item label="Employee Name :">
                                <Input
                                    type="text"
                                    placeholder="Employee Name"
                                    name="employee_name"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={11}>
                            <Form.Item label="Email Address :">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={2} />
                        <Col span={11}>
                            <Form.Item label="Role :">
                            <Select labelInValue defaultValue={{ key: "Select a Role" }}>
                                        <option value="">Developer</option>
                                        <option value="">QA</option> 
                                    </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                </Modal>
            </div>
        )
    }
}
