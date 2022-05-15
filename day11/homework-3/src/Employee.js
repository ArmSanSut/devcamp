import 'antd/dist/antd.css';
import React from 'react';
import { Table} from 'antd';
import { Button} from 'antd';
import { useNavigate, useLocation } from "react-router-dom";


function Employee () {
    let navigate = useNavigate();
    const employeeData = [
        {
            id: 1,
            firstname: 'Kippar',
            lastname: 'Dickon',
            age: 44,
            gender: 'Male',
            phone: '+420 483 252 7396',
            email: 'kdickon0@unicef.org',
            position: 'Research Associate',
            department: 'Research and Development',
            salary: '315916'
          }, 
          {
            id: 2,
            firstname: "Kerrin",
            lastname: "Fretson",
            age: 40,
            gender: "Female",
            phone: "+62 908 182 1171",
            email: "kfretson1@smh.com.au",
            position: "Librarian",
            department: "Accounting",
            salary: 121306
          }, 
          {
            id: 3,
            firstname: "Jaime",
            lastname: "Gerrels",
            age: 31,
            gender: "Female",
            phone: "+46 889 317 5263",
            email: "jgerrels2@census.gov",
            position: "Systems Administrator I",
            department: "Services",
            salary: 146452
          }, 
          {
            id: 4,
            firstname: "Tani",
            lastname: "Elloit",
            age: 34,
            gender: "Female",
            phone: "+351 593 653 4465",
            email: "telloit3@addtoany.com",
            position: "Analog Circuit Design manager",
            department: "Business Development",
            salary: 207491
          }, 
          {
            id: 5,
            firstname: "Gwenneth",
            lastname: "Molineux",
            age: 41,
            gender: "Female",
            phone: "+972 686 705 9215",
            email: "gmolineux4@meetup.com",
            position: "Programmer IV",
            department: "Marketing",
            salary: 373147
          }, 
          {
            id: 6,
            firstname: "Hartley",
            lastname: "Hadny",
            age: 53,
            gender: "Male",
            phone: "+27 846 916 4036",
            email: "hhadny5@smugmug.com",
            position: "Account Coordinator",
            department: "Support",
            salary: 124859
          }, 
          {
            id: 7,
            firstname: "Read",
            lastname: "Massy",
            age: 24,
            gender: "Male",
            phone: "+420 239 443 8472",
            email: "rmassy6@tmall.com",
            position: "Graphic Designer",
            department: "Product Management",
            salary: 228402
          }, 
          {
            id: 8,
            firstname: "Melvyn",
            lastname: "Merlin",
            age: 47,
            gender: "Male",
            phone: "+229 361 505 6986",
            email: "mmerlin7@tripadvisor.com",
            position: "Nuclear Power Engineer",
            department: "Marketing",
            salary: 162896
          }, 
          {
            id: 9,
            firstname: "Hedda",
            lastname: "Pettecrew",
            age: 46,
            gender: "Female",
            phone: "+62 500 549 0614",
            email: "hpettecrew8@craigslist.org",
            position: "Research Assistant I",
            department: "Training",
            salary: 311436
          }, 
          {
            id: 10,
            firstname: "Katie",
            lastname: "Dolden",
            age: 40,
            gender: "Female",
            phone: "+57 671 166 9496",
            email: "kdolden9@altervista.org",
            position: "General Manager",
            department: "Services",
            salary: 212594
          },
          {
            id: 11,
            firstname: "Godfrey",
            lastname: "Toffts",
            age: 42,
            gender: "Male",
            phone: "+63 485 727 8108",
            email: "gtofftsa@opensource.org",
            position: "Project Manager",
            department: "Accounting",
            salary: 186928
          }, 
          {
            id: 12,
            firstname: "Adlai",
            lastname: "Sedgmond",
            age: 26,
            gender: "Male",
            phone: "+998 220 621 1335",
            email: "asedgmondb@facebook.com",
            position: "Director of Sales",
            department: "Accounting",
            salary: 139052
          }, 
          {
            id: 13,
            firstname: "Linda",
            lastname: "Stickells",
            age: 50,
            gender: "Female",
            phone: "+234 328 307 8594",
            email: "lstickellsc@homestead.com",
            position: "Senior Editor",
            department: "Research and Development",
            salary: 144770
          }, 
          {
            id: 14,
            firstname: "Kessia",
            lastname: "Leschelle",
            age: 38,
            gender: "Female",
            phone: "+420 362 199 3156",
            email: "kleschelled@constantcontact.com",
            position: "Payment Adjustment Coordinator",
            department: "Research and Development",
            salary: 143468
          }, 
          {
            id: 15,
            firstname: "Noland",
            lastname: "Ducker",
            age: 48,
            gender: "Male",
            phone: "+62 316 172 5208",
            email: "nduckere@discuz.net",
            position: "Account Executive",
            department: "Marketing",
            salary: 328220
          }
        ]

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
          render: () => (
            <Button type="primary" onClick={onClickFunc}>
                Employee Details
            </Button>
          ) 
        }];

    
    console.log('employee data',employeeData);

    const onClickFunc = (e,i)=> {
        
        console.log('employee data',employeeData);
        employeeData.map((x) => {
            navigate('/employee/detail', {state: x});
            console.log('x is',x);

        })
        
    }
      
    return (
        <>
            <h1>Employee List</h1>
            <Table columns={columns} dataSource={employeeData} />
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