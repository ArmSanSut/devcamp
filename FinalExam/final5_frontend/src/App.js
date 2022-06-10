import { Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';

function App() {
  const columns = [
    {
      title: 'Employee ID',
      dataIndex: 'Employee_ID',
      key: 'Employee_ID',
    },
    {
      title: 'Firstname',
      dataIndex: 'fisrtname',
      key: 'fisrtname',
    },
    {
      title: 'Lastname',
      dataIndex: 'lastname',
    },
    {
      title: 'Job Name',
      dataIndex: 'JOBNAME',
      key: 'JOBNAME',
    },
    {
      title: 'PHOTO',
      key: 'action',
      render: (x) => <img src={("./images/" + x.JOBNAME + '.jpg')} />
    },
  ];

  const [data, setData] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
      const data = await axios.get('http://localhost:3000/api/users/all')
      console.log(data);
      const json =  data.data.users; //เข้าถึงข้อมูลที่เป็น array
      console.log('data',json);
      setData(json);
   }
   fetchData();
   console.log('fetch data',fetchData());



 }, []);
  return (
    <Table dataSource={data} columns={columns} pagination={false} />
  );
}

export default App;
