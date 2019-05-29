import React, { Component } from 'react'
import { Row, Col } from 'antd';
export default class Viewemployee extends Component {


    render() {
        return (
            <div>
           <Row>
               <Col span={11}><b>Employee ID</b></Col>
               <Col span={2}>:</Col>
               <Col span={11}>Emp001</Col>
           </Row>
           <Row>
               <Col span={11}><b>Employee Name</b></Col>
               <Col span={2}>:</Col>
               <Col span={11}>Ram</Col>
           </Row>
           <Row>
               <Col span={11}><b>Email</b></Col>
               <Col span={2}>:</Col>
               <Col span={11}>ram@gmail.com</Col>
           </Row>
           <Row>
               <Col span={11}><b>Role</b></Col>
               <Col span={2}>:</Col>
               <Col span={11}>Developer</Col>
           </Row>
           <Row>
               <Col span={11}><b>Username</b></Col>
               <Col span={2}>:</Col>
               <Col span={11}>ram</Col>
           </Row>
           <Row>
               <Col span={11}><b>Password</b></Col>
               <Col span={2}>:</Col>
               <Col span={11}>ram@123</Col>
           </Row>
           <Row>
               <Col span={11}><b>Profile Pic</b></Col>
               <Col span={2}>:</Col>
               <Col span={14}></Col>
           </Row>
           <Row>
               <Col span={11}><b>Description</b></Col>
               <Col span={2}>:</Col>
               <Col span={11}>Description</Col>
           </Row>
            </div>
        )
    }
}


