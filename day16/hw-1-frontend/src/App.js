import { Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
 const columns = [
   {
     title: 'Name',
     dataIndex: 'first_name',
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
      const data = await axios.get('http://localhost:3000/users')
      console.log('1',data);
      const json = await data.users;
      console.log('data',json);
      setData(json);
   }
   fetchData();
   console.log('fetch data',fetchData());



 }, []);
 return <Table dataSource={data} columns={columns} pagination={false} />;
}

