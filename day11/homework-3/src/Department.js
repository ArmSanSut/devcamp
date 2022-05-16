import 'antd/dist/antd.css';
import React from 'react';
import { Table} from 'antd';
import { Button} from 'antd';
import { useNavigate, useLocation } from "react-router-dom";
import employeeData from './EmployeeData';

function Department () {
    let navigate = useNavigate();

    const key = "department" ;
    const departmentList = [...new Map(employeeData.map((item) => [item[key], item])).values(),];

    let departmentData = [];
        employeeData.map((x) => {
            !departmentData.find((y) => y === x.department) && departmentData.push(x.department);
    });

    const columns = [
        {
            title: 'Department List',
            key: 'department',
            dataIndex: 'department',      
        },
        {
            title: 'Department Details',
            dataIndex: 'details',
            key: 'details',
            render: (t,r) => (
              <Button type="primary" onClick={(e) => onClickFunc(e,r)}>
                  Department Details
              </Button>
            ) 
          }
    ]
    const onClickFunc = (e,departmentList)=> {
        e.preventDefault();
        console.log('You click');
        navigate(`/employee/${departmentList.department}`);
        console.log(employeeData()[2]);
        
        
    }
    return (
        <>
            <h1>Department List</h1>
            <Table columns={columns} dataSource={departmentList} pagination={false}/>
        </>
    );
}

function DepartmentDetail () {
    const display = useLocation();

    return (
        <>
            <h1>Employee Lists</h1>
            {/* <p>Employee ID : {display.state.id}</p>
            <p>Firstname : {display.state.firstname}</p> */}

        </>
    );
}

export { Department, DepartmentDetail };