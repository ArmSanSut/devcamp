import { Table, Button } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';

function HomePage() {
  const navigate = useNavigate();

  const ToDetail = (record)=> {
    console.log('click');
    console.log('record', record);
    navigate(`${record.country}`,{state : record});

  }
  const columns = [
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Today cases',
      dataIndex: 'todayCases',
      key: 'todayCases',
    },
    {
      title: 'Today deaths',
      dataIndex: 'todayDeaths',
      key: 'todayDeaths',
    },
    {
      title: 'Today recovered',
      dataIndex: 'todayRecovered',
      key: 'todayRecovered',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>                
                <Button type="primary" onClick={() => ToDetail(record)}>
                    MORE
                </Button>
        </>

    )
    },
  ];

  const [data, setData] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
      const data = await axios.get('https://corona.lmao.ninja/v2/countries')
      console.log('data',data.data);
      const json =  data.data; //เข้าถึงข้อมูลที่เป็น array
      //console.log('data',json);
      setData(json);
   }
   fetchData();
   console.log('fetch data',fetchData());



 }, []);
  return (
   <>
    <Table dataSource={data} columns={columns} pagination={false} />
   </> 
  )
}

export default HomePage;
