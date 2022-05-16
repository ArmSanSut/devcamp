import 'antd/dist/antd.css';
import React from 'react';
import employeeData from './EmployeeData';
import { Table} from 'antd';
import { Button} from 'antd';
import { useNavigate, useLocation, useParams } from "react-router-dom";


function Employee () {
    let navigate = useNavigate();
    let param = useParams();

    let result = [];
    if (param.department) {
      result = employeeData.filter((x) => x.department === param.department);
    } else {
      result = employeeData;
    }
    console.log('result',result);
    
    const columns = [

        {
            title: 'Firstname',
            key: 'firstname',
            dataIndex: 'firstname',      
        },
            
        {
            title: 'Lastname',
            dataIndex: 'lastname',
            key: 'lastname',
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
          title: 'Employee Details',
          dataIndex: 'details',
          key: 'details',
          render: (t,r) => (
            <Button type="primary" onClick={(e)=>onClickFunc(e,employeeData.indexOf(r))}>
                Employee Details
            </Button>
          ) 
        }];

    
    console.log('employee data',employeeData);

    const onClickFunc = (e,i)=> {
        e.preventDefault();
        console.log('employee data',employeeData[i]);
        navigate("/employee/detail", {
          replace: true,
          state : employeeData[i],
        });
        
    }
      
    return (
        <>
            <h1>Employee List</h1>
            <Table columns={columns} dataSource={result} pagination={false} />
        </>
    );
}

function EmployeeDetail () {
    const display = useLocation();
    console.log('display',display);
    return (
    <div style={{textAlign:'center'}}>
        <h2>Employee Details</h2>
        <div>
            {/* <h3>Emloyee</h3> */}
            <p>Employee ID : {display.state.id}</p>
            <p>Firstname : {display.state.firstname}</p>
            <p>Lastname : {display.state.lastname}</p>
            <p>Age : {display.state.age}</p>
            <p>Position : {display.state.position}</p>
            <p>Department: {display.state.department}</p>
            <p>Salary : {display.state.salary}</p>
        </div>
        
    </div>
    );
}
export {Employee, EmployeeDetail};