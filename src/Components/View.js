import React, { Component } from 'react'
import { Button, Icon, Table, Modal } from 'antd'
import Viewemployee from './Viewemployee';


function info() {
    Modal.info({
      title: 'Employee Details',
      content: (
       <div>
           <Viewemployee/>
       </div>
      ),
      onOk() {},
    });
  }

export default class View extends Component {


    render() {
        const columns = [
            {
                title: 'Employee ID',
                dataIndex: 'id',
                key: 'id',

            },
            {
                title: 'Employee Name',
                dataIndex: 'name',
                key: 'name',

            },
            {
                title: 'Email Address',
                dataIndex: 'email',
                key: 'email',

            },
            {
                title: 'Role',
                dataIndex: 'role',
                filters: [
                    {
                        text: 'Developer',
                        value: 'Developer',
                    },
                    {
                        text: 'QA',
                        value: 'QA',
                    },
                ],
                filterMultiple: false,
                onFilter: (value, record) => record.role.indexOf(value) === 0,

            },
            {
                title: 'Details',
                dataIndex: 'view',
                key: 'view',
                render: () => (
                    <Button onClick={info}> <Icon type="fullscreen" style={{ color: "green", alignContent: "center" }} /></Button>
                )
            },

        ];

        const data = [
            {
                key: '1',
                id: 'Emp001',
                name: 'Ram',
                email: 'ram@gmail.com',
                role: 'Developer'
            },
            {
                key: '2',
                id: 'Emp002',
                name: 'Raj',
                email: 'raj@gmail.com',
                role: 'QA'
            },
            {
                key: '3',
                id: 'Emp003',
                name: 'Janu',
                email: 'janu@gmail.com',
                role: 'Developer'
            },
        ];

        return (
            <div style={{ width: 800, padding: 24, background: '#fff', minHeight: 300 }}>
                <Table columns={columns} dataSource={data} />

            </div>
        )
    }
}
