import { Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
 const columns = [
   {
     title: 'Name',
     dataIndex: 'firstname',
     key: 'first_name',
   },
   {
     title: 'Email',
     dataIndex: 'email',
     key: 'email',
   },
   {
     title: 'IMG',
     dataIndex: 'avatar',
    //  key: 'avatar',
     render: (t,x) => <img src={x.avatar} />
   },
 ];
 const [data, setData] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
      const data = await axios.get('/api/users/all')
      console.log(data);
      const json =  data.data.users; //เข้าถึงข้อมูลที่เป็น array
      console.log('data',json);
      setData(json);
   }
   fetchData();
   console.log('fetch data',fetchData());



 }, []);
 return <Table dataSource={data} columns={columns} pagination={false} />;
}

