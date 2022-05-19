import { Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
 const columns = [
  //  {
  //    title: 'Course_ID',
  //    dataIndex: 'course_name',
  //    key: 'courses.id',
  //  },
   {
     title: 'Course_Name',
     dataIndex: 'course_name',
     key: 'courses.name',
   },
   {
     title: 'Instructor_name',
     dataIndex: 'instructor',
     key: 'instructor',
   },
 ];
 const [data, setData] = useState([]);
 useEffect(() => {
   axios.get('http://localhost:3000/users').then((result) => {
     setData(result.data);
   });
 }, []);
 return <Table dataSource={data} columns={columns} pagination={false} />;
}

